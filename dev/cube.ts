import * as GLMatrix from 'gl-matrix';
import * as GL_CONST from '../src/renderer/webgl1/GL_CONST';
import * as mat4 from 'gl-matrix/mat4';
import * as quat from 'gl-matrix/quat';
import * as vec3 from 'gl-matrix/vec3';
import * as vec4 from 'gl-matrix/vec4';

import { AddChild, AddChildren } from '../src/display';
import { BackgroundColor, Parent, Scenes, SetWebGL, Size } from '../src/config';
import { DownKey, LeftKey, RightKey, UpKey } from '../src/input/keyboard/keys';
import { EffectLayer, Layer, RenderLayer, Sprite } from '../src/gameobjects';

import { DrawTexturedQuad } from '../src/renderer/webgl1/draw/DrawTexturedQuad';
import { Game } from '../src/Game';
import { IShader } from '../src/renderer/webgl1/shaders/IShader';
import { IWebGLRenderer } from '../src/renderer/webgl1/IWebGLRenderer';
import { ImageFile } from '../src/loader/files/ImageFile';
import { Keyboard } from '../src/input/keyboard';
import { Loader } from '../src/loader/Loader';
import OBJFile from './OBJFile';
import { On } from '../src/events';
import { Scene } from '../src/scenes/Scene';
import { Shader } from '../src/renderer/webgl1/shaders/Shader';
import { StaticWorld } from '../src/world/StaticWorld';
import { Vertex } from '../src/gameobjects/components';

// import expandVertexData from 'expand-vertex-data';


export const vertexShader =
`#define SHADER_NAME vert

precision highp float;

attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;

uniform mat4 uProjectionMatrix;
uniform mat4 uCameraMatrix;
// uniform mat4 uNormalMatrix;

uniform float uShine;
uniform vec3 uLightDirection;

uniform vec4 uLightAmbient;
uniform vec4 uLightDiffuse;
uniform vec4 uLightSpecular;

uniform vec4 uMaterialAmbient;
uniform vec4 uMaterialDiffuse;
uniform vec4 uMaterialSpecular;

varying vec4 vColor;

void main (void)
{
    vec4 vertex = uCameraMatrix * vec4(aVertexPosition, 1.0);

    // vec3 N = normalize(vec3(uNormalMatrix * vec4(aVertexNormal, 1.0)));
    // vec3 N = normalize(aVertexNormal);

    vec3 L = normalize(uLightDirection);

    float lambert = clamp(dot(aVertexNormal, -L), 0.0, 1.0);

    vec4 ambientTerm = uLightAmbient * uMaterialAmbient;
    vec4 diffuseTerm = vec4(0.0, 0.0, 0.0, 1.0);
    vec4 specularTerm = vec4(0.0, 0.0, 0.0, 1.0);

    diffuseTerm = uLightDiffuse * uMaterialDiffuse * lambert;

    vec3 eye = -vec3(vertex.xyz);
    vec3 E = normalize(eye);
    vec3 R = reflect(L, aVertexNormal);

    float specular = pow(max(dot(R, E), 0.0), uShine);

    specularTerm = uLightSpecular * uMaterialSpecular * specular;

    vColor = ambientTerm + diffuseTerm + specularTerm;
    vColor.a = 1.0;
    gl_Position = uProjectionMatrix * vertex;

    // vColor = vec4(0.0, 1.0, 0.0, 1.0);
    // gl_Position = uProjectionMatrix * uCameraMatrix * vec4(aVertexPosition, 1.0);
}`;

export const fragmentShader =
`#define SHADER_NAME frag

precision highp float;

varying vec4 vColor;

void main (void)
{
    gl_FragColor = vColor;
    // gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
}`;

// Map .obj vertex info line names to our returned property names
const vertexInfoNameMap = {v: 'vertexPositions', vt: 'vertexUVs', vn: 'vertexNormals'}

// @author https://www.npmjs.com/package/wavefront-obj-parser

function ParseWavefrontObj (wavefrontString) {

  var parsedJSON = {vertexNormals: [], vertexUVs: [], vertexPositions: [], vertexNormalIndices: [], vertexUVIndices: [], vertexPositionIndices: []}

  var linesInWavefrontObj = wavefrontString.split('\n')

  var currentLine, currentLineTokens, vertexInfoType, i, k

  // Loop through and parse every line in our .obj file
  for (i = 0; i < linesInWavefrontObj.length; i++) {
    currentLine = linesInWavefrontObj[i]
    // Tokenize our current line
    currentLineTokens = currentLine.trim().split(/\s+/)
    // vertex position, vertex texture, or vertex normal
    vertexInfoType = vertexInfoNameMap[currentLineTokens[0]]

    if (vertexInfoType) {
      for (k = 1; k < currentLineTokens.length; k++) {
        parsedJSON[vertexInfoType].push(parseFloat(currentLineTokens[k]))
      }
      continue
    }

    if (currentLineTokens[0] === 'f') {
      // Get our 4 sets of vertex, uv, and normal indices for this face
      for (k = 1; k < 5; k++) {
        // If there is no fourth face entry then this is specifying a triangle
        // in this case we push `-1`
        // Consumers of this module should check for `-1` before expanding face data
        if (k === 4 && !currentLineTokens[4]) {
          parsedJSON.vertexPositionIndices.push(-1)
          parsedJSON.vertexUVIndices.push(-1)
          parsedJSON.vertexNormalIndices.push(-1)
        } else {
          var indices = currentLineTokens[k].split('/')
          parsedJSON.vertexPositionIndices.push(parseInt(indices[0], 10) - 1) // We zero index
          parsedJSON.vertexUVIndices.push(parseInt(indices[1], 10) - 1) // our face indices
          parsedJSON.vertexNormalIndices.push(parseInt(indices[2], 10) - 1) // by subtracting 1
        }
      }
    }
  }

  return parsedJSON
}

/**
 * Decompress a set of position, normal and uv indices and their
 * accompanying data.
 * This solves for situations when you are re-using the same
 * vertex positions but with a different normal or uv index.
 * You can't have multiple indices (ELEMENT_ARRAY_BUFFER) in
 * WebGL, so this module the data expands your data so that it
 * can use one ELEMENT_ARRAY_BUFFER for your vertex position indices
 *
 * TODO: Look into whether or not it's worth checking when deduping indices
 * whether or not all of the other indices would have been the same.
 * Seems like the potential savings would be negligible if any.. but look into it
 * Yeah.... a triangle saved is a triangle earned...
 */
function expandVertexData (compressedVertexData, opts: any = {}) {
    // Handles wavefront .obj files that can have lines with
    // 3 vertices (triangle) or 4 (face).
    // Specifically designed to work with the JSON that `wavefront-obj-parser` provides.
    // If we find a `-1` as the fourth number it means was a triangle line.
    // Otherwise it is a face line that we'll expand into two triangles
    // `1 2 3 -1` would be a set of triangle indices
    // `1 2 3 4` would be a face that we'd expand into `1 2 3 1 3 4`
    if (opts.facesToTriangles) {
      var decodedVertexPositionIndices = []
      var decodedVertexUVIndices = []
      var decodedVertexNormalIndices = []

      for (var i = 0; i < compressedVertexData.vertexPositionIndices.length / 4; i++) {
        decodedVertexPositionIndices.push(compressedVertexData.vertexPositionIndices[i * 4])
        decodedVertexPositionIndices.push(compressedVertexData.vertexPositionIndices[i * 4 + 1])
        decodedVertexPositionIndices.push(compressedVertexData.vertexPositionIndices[i * 4 + 2])
        decodedVertexUVIndices.push(compressedVertexData.vertexUVIndices[i * 4])
        decodedVertexUVIndices.push(compressedVertexData.vertexUVIndices[i * 4 + 1])
        decodedVertexUVIndices.push(compressedVertexData.vertexUVIndices[i * 4 + 2])
        decodedVertexNormalIndices.push(compressedVertexData.vertexNormalIndices[i * 4])
        decodedVertexNormalIndices.push(compressedVertexData.vertexNormalIndices[i * 4 + 1])
        decodedVertexNormalIndices.push(compressedVertexData.vertexNormalIndices[i * 4 + 2])
        // If this is a face with 4 vertices we push a second triangle
        if (compressedVertexData.vertexPositionIndices[i * 4 + 3] !== -1) {
          decodedVertexPositionIndices.push(compressedVertexData.vertexPositionIndices[i * 4])
          decodedVertexPositionIndices.push(compressedVertexData.vertexPositionIndices[i * 4 + 2])
          decodedVertexPositionIndices.push(compressedVertexData.vertexPositionIndices[i * 4 + 3])
          decodedVertexUVIndices.push(compressedVertexData.vertexUVIndices[i * 4])
          decodedVertexUVIndices.push(compressedVertexData.vertexUVIndices[i * 4 + 2])
          decodedVertexUVIndices.push(compressedVertexData.vertexUVIndices[i * 4 + 3])
          decodedVertexNormalIndices.push(compressedVertexData.vertexNormalIndices[i * 4])
          decodedVertexNormalIndices.push(compressedVertexData.vertexNormalIndices[i * 4 + 2])
          decodedVertexNormalIndices.push(compressedVertexData.vertexNormalIndices[i * 4 + 3])
        }
      }

      compressedVertexData.vertexPositionIndices = decodedVertexPositionIndices
      compressedVertexData.vertexNormalIndices = decodedVertexNormalIndices
      compressedVertexData.vertexUVIndices = decodedVertexUVIndices
    }

    // Create the arrays that will hold our expanded vertex data
    var expandedPositionIndices = []
    var expandedPositions = []
    var expandedNormals = []
    var expandedUVs = []
    var expandedJointInfluences = []
    var expandedJointWeights = []

    // Track indices that we've already encountered so that we don't use them twice
    var encounteredPositionIndices = {}
    // Track the largest vertex position index that we encounter. When expanding
    // the data we will increment all vertex position indices that were used
    // more than once.
    // We will insert the proper data into the corresponding array indices
    // for our normal and uv arrays
    var largestPositionIndex = 0
    // Track which counters we've already encountered so that we can loop through them later
    var unprocessedVertexNums = {}

    compressedVertexData.vertexPositionIndices.forEach(function (positionIndex, vertexNum) {
      // Keep track of the largest vertex index that we encounter
      largestPositionIndex = Math.max(largestPositionIndex, positionIndex)
      // If this is our first time seeing this index we build all of our
      // data arrays as usual.
      if (!encounteredPositionIndices[positionIndex]) {
        // Mark this vertex index as encountered. We'll deal with encountered indices later
        encounteredPositionIndices[positionIndex] = true
        setVertexData(positionIndex, vertexNum)
      } else {
        unprocessedVertexNums[vertexNum] = true
      }
    })

    // Go over all duplicate vertex indices and change them to a new index number.
    // Then duplicate their relevant data to that same index number
    Object.keys(unprocessedVertexNums).forEach(function (vertexNum) {
      var positionIndex = ++largestPositionIndex

      setVertexData(positionIndex, vertexNum)
    })

    /**
     * Helper function to set the vertex data at a specified index.
     * This is what builds the arrays that we return to the module user for consumption
     */
    function setVertexData (positionIndex, vertexNum) {
      // The position index before we incremented it to dedupe it
      var originalPositionIndex = compressedVertexData.vertexPositionIndices[vertexNum]

      expandedPositionIndices[vertexNum] = positionIndex
      var jointsAndWeights
      if (compressedVertexData.vertexJointWeights) {
        jointsAndWeights = compressedVertexData.vertexJointWeights[originalPositionIndex]
      }

      for (var i = 0; i < 4; i++) {
        if (jointsAndWeights) {
          // 4 bone (joint) influences and weights per vertex
          var jointIndex = Object.keys(jointsAndWeights)[i]
          // TODO: Should zero be -1? It will have a zero weight regardless, but that lets us distinguish between empty bone slots and zero index bone slots
          // TODO: If there are more than 4 bones take the four that have the strongest weight
          expandedJointInfluences[positionIndex * 4 + i] = Number(jointIndex) || 0
          expandedJointWeights[positionIndex * 4 + i] = jointsAndWeights[jointIndex] || 0
        }

        // 3 normals and position coordinates per vertex
        if (i < 3) {
          expandedPositions[positionIndex * 3 + i] = compressedVertexData.vertexPositions[originalPositionIndex * 3 + i]
          if (compressedVertexData.vertexNormals) {
            expandedNormals[positionIndex * 3 + i] = compressedVertexData.vertexNormals[compressedVertexData.vertexNormalIndices[vertexNum] * 3 + i]
          }
        }
        // 2 UV coordinates per vertex
        if (i < 2) {
          if (compressedVertexData.vertexUVs) {
            expandedUVs[positionIndex * 2 + i] = compressedVertexData.vertexUVs[compressedVertexData.vertexUVIndices[vertexNum] * 2 + i]
          }
        }
      }
    }

    return {
      jointInfluences: expandedJointInfluences,
      jointWeights: expandedJointWeights,
      normals: expandedNormals,
      positionIndices: expandedPositionIndices,
      positions: expandedPositions,
      uvs: expandedUVs
    }
  }


//  Parses out tris and quads from the obj file

/*
function parseObj (text: string)
{
    const verts = [];
    const faces = [];
    const normals = [];

    // split the text into lines
    const lines = text.replace('\r', '').split('\n');
    const count = lines.length;

    for (let i = 0; i < count; i++)
    {
        const line = lines[i];

        if (line.startsWith('v '))
        {
            // lines that start with 'v' are vertices
            const tokens = line.split(' ');

            const pos = vec3.fromValues(parseFloat(tokens[1]), parseFloat(tokens[2]), parseFloat(tokens[3]));
            let normal = null;

            if (tokens.length > 4)
            {
                normal = vec3.fromValues(parseFloat(tokens[4]), parseFloat(tokens[5]), parseFloat(tokens[6]));
            }

            verts.push({
                pos,
                normal
            });
        }
        else if (line.startsWith('f '))
        {
            // lines that start with 'f' are faces
            const tokens = line.split(' ');

            const face = {
                A: parseInt(tokens[1], 10),
                B: parseInt(tokens[2], 10),
                C: parseInt(tokens[3], 10),
                D: parseInt(tokens[4], 10),
                normal:
                isQuad: false
            };

            if (face.A < 0)
            {
                face.A = verts.length + face.A;
            }
            else
            {
                face.A--;
            }

            if (face.B < 0)
            {
                face.B = verts.length + face.B;
            }
            else
            {
                face.B--;
            }

            if (face.C < 0)
            {
                face.C = verts.length + face.C;
            }
            else
            {
                face.C--;
            }

            if (!face.D)
            {
                face.D = face.C;
            }
            else if (face.D < 0)
            {
                face.D = verts.length + face.D;
                face.isQuad = true;
            }
            else
            {
                face.D--;
                face.isQuad = true;
            }

            faces.push(face);
        }
        else if (line.startsWith('vn'))
        {
            // lines that start with 'vn' are normals
            const tokens = line.split(' ');

            const normal = vec3.fromValues(parseFloat(tokens[1]), parseFloat(tokens[2]), parseFloat(tokens[3]));

            normals.push(normal);
        }
    }

    //  Compute normals
    for (let i = 0; i < faces.length; i++)
    {
        const face = faces[i];

        const vertA = verts[face.A];
        const vertB = verts[face.B];
        const vertC = verts[face.C];

        const tempA = vec3.add(vec3.create(), vertB.normal, vertC.normal);
        const tempB = vec3.add(vec3.create(), vertA.normal, tempA);

        face.normal = vec3.scale(vec3.create(), tempB, 1 / 3);
        vec3.normalize(face.normal, face.normal);
    }

    return { verts, faces, normals };
}
*/

const cube2 = `
# Blender v2.80 (sub 75) OBJ File: ''
# www.blender.org
mtllib cube.mtl
o Cube
v 1.000000 1.000000 -1.000000
v 1.000000 -1.000000 -1.000000
v 1.000000 1.000000 1.000000
v 1.000000 -1.000000 1.000000
v -1.000000 1.000000 -1.000000
v -1.000000 -1.000000 -1.000000
v -1.000000 1.000000 1.000000
v -1.000000 -1.000000 1.000000
vt 0.375000 0.000000
vt 0.625000 0.000000
vt 0.625000 0.250000
vt 0.375000 0.250000
vt 0.375000 0.250000
vt 0.625000 0.250000
vt 0.625000 0.500000
vt 0.375000 0.500000
vt 0.625000 0.750000
vt 0.375000 0.750000
vt 0.625000 0.750000
vt 0.625000 1.000000
vt 0.375000 1.000000
vt 0.125000 0.500000
vt 0.375000 0.500000
vt 0.375000 0.750000
vt 0.125000 0.750000
vt 0.625000 0.500000
vt 0.875000 0.500000
vt 0.875000 0.750000
vn 0.0000 1.0000 0.0000
vn 0.0000 0.0000 1.0000
vn -1.0000 0.0000 0.0000
vn 0.0000 -1.0000 0.0000
vn 1.0000 0.0000 0.0000
vn 0.0000 0.0000 -1.0000
usemtl Material
s off
f 1/1/1 5/2/1 7/3/1 3/4/1
f 4/5/2 3/6/2 7/7/2 8/8/2
f 8/8/3 7/7/3 5/9/3 6/10/3
f 6/10/4 2/11/4 4/12/4 8/13/4
f 2/14/5 1/15/5 3/16/5 4/17/5
f 6/18/6 5/19/6 1/20/6 2/11/6
`;

const cube = `
o my_cube.obj
v 1 1 1
v -1 1 1
v -1 -1 1
v 1 -1 1
v 1 1 -1
v -1 1 -1
v -1 -1 -1
v 1 -1 -1
vn 0 0 1
vn 1 0 0
vn -1 0 0
vn 0 0 -1
vn 0 1 0
vn 0 -1 0
f 1//1 2//1 3//1
f 3//1 4//1 1//1
f 5//2 1//2 4//2
f 4//2 8//2 5//2
f 2//3 6//3 7//3
f 7//3 3//3 2//3
f 7//4 8//4 5//4
f 5//4 6//4 7//4
f 5//5 6//5 2//5
f 2//5 1//5 5//5
f 8//6 4//6 3//6
f 3//6 7//6 8//6
`;

const spike = `
# Blender v2.78 (sub 0) OBJ File: 'wireframes.blend'
# www.blender.org
v -1.000000 -1.000000 1.000000
v -1.000000 1.000000 1.000000
v -1.000000 -1.000000 -1.000000
v -1.000000 1.000000 -1.000000
v 1.000000 -1.000000 1.000000
v 1.000000 1.000000 1.000000
v 1.000000 -1.000000 -1.000000
v 1.000000 1.000000 -1.000000
v -3.780856 0.000000 0.000000
v 0.000000 0.000000 -3.780856
v 3.780856 0.000000 0.000000
v 0.000000 0.000000 3.780856
v 0.000000 -3.780856 0.000000
v 0.000000 3.780856 0.000000
s off
f 4 8 10
f 8 6 11
f 6 2 12
f 1 3 13
f 6 8 14
f 2 4 9
f 4 3 9
f 3 1 9
f 1 2 9
f 8 7 10
f 7 3 10
f 3 4 10
f 6 5 11
f 5 7 11
f 7 8 11
f 2 1 12
f 1 5 12
f 5 6 12
f 3 7 13
f 7 5 13
f 5 1 13
f 8 4 14
f 4 2 14
f 2 6 14
`;

type vec3Like = {
    x: number;
    y: number;
    z: number;
};

class Face
{
    vertex1: Vertex;
    vertex2: Vertex;
    vertex3: Vertex;

    normal1: vec3Like;
    normal2: vec3Like;
    normal3: vec3Like;

    constructor (v1: vec3Like, v2: vec3Like, v3: vec3Like, n1: vec3Like, n2: vec3Like, n3: vec3Like, scale: number = 1)
    {
        // this.vertex1 = new Vertex(v1[0] * scale, v1[1] * scale, v1[2] * scale);
        // this.vertex2 = new Vertex(v2[0] * scale, v2[1] * scale, v2[2] * scale);
        // this.vertex3 = new Vertex(v3[0] * scale, v3[1] * scale, v3[2] * scale);

        this.vertex1 = new Vertex(v1.x * scale, v1.y * scale, v1.z * scale);
        this.vertex2 = new Vertex(v2.x * scale, v2.y * scale, v2.z * scale);
        this.vertex3 = new Vertex(v3.x * scale, v3.y * scale, v3.z * scale);

        this.normal1 = n1;
        this.normal2 = n2;
        this.normal3 = n3;

        // console.log(v1, v2, v3, n1, n2, n3);
    }

    addToBuffer (F32: Float32Array, offset: number): number
    {
        const v1 = this.vertex1;
        const v2 = this.vertex2;
        const v3 = this.vertex3;
        const n1 = this.normal1;
        const n2 = this.normal2;
        const n3 = this.normal3;

        F32[offset + 0] = v1.x;
        F32[offset + 1] = v1.y;
        F32[offset + 2] = v1.z;
        F32[offset + 3] = n1.x;
        F32[offset + 4] = n1.y;
        F32[offset + 5] = n1.z;

        F32[offset + 6] = v2.x;
        F32[offset + 7] = v2.y;
        F32[offset + 8] = v2.z;
        F32[offset + 9] = n2.x;
        F32[offset + 10] = n2.y;
        F32[offset + 11] = n2.z;

        F32[offset + 12] = v3.x;
        F32[offset + 13] = v3.y;
        F32[offset + 14] = v3.z;
        F32[offset + 15] = n3.x;
        F32[offset + 16] = n3.y;
        F32[offset + 17] = n3.z;

        return offset + 18;
    }
}

const obj = new OBJFile(cube);
const data = obj.parse();

// const data = ParseWavefrontObj(cube);

console.log(data);

// const expanded = expandVertexData(data, { facesToTriangles: true });
// console.log(expanded);

class Cube extends RenderLayer
{
    shader: IShader;
    faces: Face[] = [];

    constructor (shader: IShader)
    {
        super();

        this.shader = shader;

        // const { verts, faces, normals } = parseObj(cube);
        // const { verts, faces, normals } = parseObj(spike);

        // console.log(verts);
        // console.log(faces);
        // console.log(normals);

        const model = data.models[0];
        const verts = model.vertices;
        const normals = model.vertexNormals;

        for (let i = 0; i < model.faces.length; i++)
        {
            const face = model.faces[i];

            // console.log(i, face);

            const v1 = face.vertices[0];
            const v2 = face.vertices[1];
            const v3 = face.vertices[2];

            this.faces.push(new Face(
                verts[v1.vertexIndex],
                verts[v2.vertexIndex],
                verts[v3.vertexIndex],
                normals[v1.vertexNormalIndex],
                normals[v2.vertexNormalIndex],
                normals[v3.vertexNormalIndex]
            ));
        }

        console.log(this.faces);
    }

    renderGL <T extends IWebGLRenderer> (renderer: T): void
    {
        renderer.flush();

        renderer.fbo.add(this.framebuffer, true);

        const shader = this.shader;
        const gl = renderer.gl;

        // gl.clearDepth(1000.0);

        // gl.enable(gl.DEPTH_TEST);
        // gl.depthFunc(gl.LEQUAL);
        // gl.clear(gl.DEPTH_BUFFER_BIT);
        // gl.enable(gl.CULL_FACE);

        renderer.shaders.set(shader, 0);

        shader.renderToFBO = false;

        const buffer = shader.buffer;

        const F32 = buffer.vertexViewF32;
        const U32 = buffer.vertexViewU32;

        let offset = shader.count * buffer.entryElementSize;

        this.faces.forEach(face =>
        {
            offset = face.addToBuffer(F32, offset);

            shader.count++;
        });

        renderer.shaders.pop();

        const texture = this.texture;

        renderer.fbo.pop();

        const { u0, v0, u1, v1 } = texture.firstFrame;

        renderer.textures.bind(texture);

        DrawTexturedQuad(renderer, 0, 0, texture.width, texture.height, u0, v0, u1, v1);

        renderer.textures.unbind();

        // gl.disable(gl.DEPTH_TEST);
        // gl.disable(gl.CULL_FACE);
    }
}

class Camera3D
{
    left: vec3;
    up: vec3;
    dir: vec3;
    pos: vec3;

    projectionTransform: mat4;
    projectionMatrix: mat4;
    viewMatrix: mat4;

    fov: number = 55;
    near: number = 0.1;
    far: number = 1000;

    aspectRatio: number = 800 / 600;

    constructor ()
    {
        this.left = vec3.fromValues(1, 0, 0);
        this.up = vec3.fromValues(0, 1, 0);
        this.dir = vec3.fromValues(0, 0, 1);
        this.pos = vec3.fromValues(0, 0, 0);

        this.setPosition([ 0, 2, -3 ]);
        this.setLookAtPoint([ 0, 0, 0 ]);

        this.refresh();
    }

    getLeft (): vec3
    {
        return vec3.clone(this.left);
    }

    getUp (): vec3
    {
        return vec3.clone(this.up);
    }

    getPosition (): vec3
    {
        return vec3.clone(this.pos);
    }

    getProjectionMatrix (): mat4
    {
        return mat4.clone(this.projectionMatrix);
    }

    getViewMatrix (): mat4
    {
        return mat4.clone(this.viewMatrix);
    }

    getNearClippingPlane (): number
    {
        return this.near;
    }

    getFarClippingPlane (): number
    {
        return this.far;
    }

    getFieldOfView (): number
    {
        return this.fov;
    }

    setFarClippingPlane (far: number)
    {
        if (far > 0)
        {
            this.far = far;
        }
    }

    setNearClippingPlane (near: number)
    {
        if (near > 0)
        {
            this.near = near;
        }
    }

    setFieldOfView (fov: number)
    {
        if (fov > 0 && fov < 180)
        {
            this.fov = fov;
        }
    }

    setZ (value: number)
    {
        this.pos[2] = value;
    }

    //  Hello?

    setPosition (newVec: vec3)
    {
        this.pos = vec3.fromValues(newVec[0], newVec[1], newVec[2]);
    }

    setLookAtPoint (newVec: vec3)
    {
        vec3.subtract(this.dir, newVec, this.pos);
        vec3.normalize(this.dir, this.dir);
        vec3.cross(this.left, vec3.fromValues(0, 1, 0), this.dir);
        vec3.normalize(this.left, this.left);
        vec3.cross(this.up, this.dir, this.left);
        vec3.normalize(this.up, this.up);
    }

    rotateOnAxis (axisVec: vec3, angle: number)
    {
        let q = quat.create();

        quat.setAxisAngle(q, axisVec, angle);

        vec3.transformQuat(this.dir, this.dir, q);
        vec3.transformQuat(this.left, this.left, q);
        vec3.transformQuat(this.up, this.up, q);

        vec3.normalize(this.up, this.up);
        vec3.normalize(this.left, this.left);
        vec3.normalize(this.dir, this.dir);
    }

    yaw (angle: number)
    {
        this.rotateOnAxis(this.up, angle);
    }

    pitch (angle: number)
    {
        this.rotateOnAxis(this.left, angle);
    }

    roll (angle: number)
    {
        this.rotateOnAxis(this.dir, angle);
    }

    moveForward (s: number)
    {
        let newPosition = [
            this.pos[0] - s * this.dir[0],
            this.pos[1] - s * this.dir[1],
            this.pos[2] - s * this.dir[2]
        ];

        this.setPosition(newPosition);
    }

    refresh ()
    {
        let matView = mat4.create();
        let lookAtPosition = vec3.create();

        vec3.add(lookAtPosition, this.pos, this.dir);

        mat4.lookAt(matView, this.pos, lookAtPosition, this.up);

        mat4.translate(matView, matView, vec3.fromValues(-this.pos[0], -this.pos[1], -this.pos[2]));

        this.viewMatrix = matView;

        this.projectionMatrix = mat4.create();

        mat4.perspective(this.projectionMatrix, GLMatrix.glMatrix.toRadian(this.fov), this.aspectRatio, this.near, this.far);
    }
}

class TestShader extends Shader
{
    camera: Camera3D;

    constructor ()
    {
        /**
         * The amount of elements / floats a single vertex consists of.
         *
         * position (x,y,z - 3 floats)
         * normal (x,y,z - 3 floats)
         */
        // const vertexElementSize = 4;
        const vertexElementSize = 6;

        // const indexLayout = expanded.positionIndices;
        const indexLayout = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17 ];

        /**
         * The total number of elements per entry in the index array.
         */
        //  This is just indexLayout.length:
        const entryIndexSize = indexLayout.length;

        //  Number of vertices per entry
        const quantity = 3;

        super({
            fragmentShader,
            vertexShader,
            quantity,
            vertexElementSize,
            indexLayout,
            entryIndexSize,
            attributes: {
                aVertexPosition: { size: 3 },
                aVertexNormal: { size: 3 }
            },
            uniforms: {
                uProjectionMatrix: new Float32Array(),
                uCameraMatrix: new Float32Array(),

                uLightDirection: vec3.fromValues(-0.25, -0.25, -0.25),
                uLightAmbient: vec4.fromValues(0.03, 0.03, 0.03, 1.0),
                uLightDiffuse: vec4.fromValues(1, 1, 1, 1),
                uLightSpecular: vec4.fromValues(1, 1, 1, 1),

                uMaterialAmbient: vec4.fromValues(1, 1, 1, 1),
                uMaterialDiffuse: vec4.fromValues(46 / 256, 99 / 256, 191 / 256, 1),
                uMaterialSpecular: vec4.fromValues(1, 1, 1, 1),
                uShine: 10
            }
        });

        this.camera = new Camera3D();
    }

    bind (): boolean
    {
        this.camera.refresh();

        const uniforms = this.uniforms;

        uniforms.set('uProjectionMatrix', this.camera.projectionMatrix);
        uniforms.set('uCameraMatrix', this.camera.viewMatrix);

        return this.updateUniforms();
    }
}

class Demo extends Scene
{
    leftKey: LeftKey;
    rightKey: RightKey;
    upKey: UpKey;
    downKey: DownKey;

    constructor ()
    {
        super();

        const world = new StaticWorld(this);

        const loader = new Loader();

        // loader.setPath('/phaser4-examples/public/assets/');
        loader.setPath('/examples/public/assets/');

        loader.add(ImageFile('bg', 'checker.png'));
        loader.add(ImageFile('logo', 'logo.png'));

        loader.start().then(() => {

            const keyboard = new Keyboard();

            this.leftKey = new LeftKey();
            this.rightKey = new RightKey();
            this.upKey = new UpKey();
            this.downKey = new DownKey();

            keyboard.addKeys(this.leftKey, this.rightKey, this.upKey, this.downKey);

            const shader = new TestShader();
            const camera = shader.camera;

            const bg = new Sprite(400, 300, 'bg');
            const cube = new Cube(shader);
            const logo = new Sprite(400, 300, 'logo');

            bg.alpha = 0.5;
            logo.alpha = 0.5;

            // AddChildren(world, bg, cube);
            AddChildren(world, bg, cube, logo);

            // camera.setPosition()

            On(this, 'update', (delta, time) => {

                if (this.leftKey.isDown)
                {
                    // camera.yaw(0.1);
                    // camera.pitch(0.1);
                    camera.roll(0.1);
                }
                else if (this.rightKey.isDown)
                {
                    // camera.yaw(-0.1);
                    // camera.pitch(-0.1);
                    camera.roll(-0.1);
                }

                if (this.upKey.isDown)
                {
                    camera.moveForward(0.1);
                }
                else if (this.downKey.isDown)
                {
                    camera.moveForward(-0.1);
                }

            });
        });
    }
}


export default function (): void
{
    new Game(
        SetWebGL(),
        Size(800, 600),
        Parent('gameParent'),
        BackgroundColor(0x2d2d2d),
        Scenes(Demo)
    );
}
