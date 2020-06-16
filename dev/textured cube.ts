// import * as GLMatrix from 'gl-matrix';

import * as GL_CONST from '../src/renderer/webgl1/GL_CONST';

import { AddChild, AddChildren } from '../src/display';
import { BackgroundColor, Parent, Scenes, SetWebGL, Size } from '../src/config';
import { BindTexture, Flush, PopFramebuffer, PopShader, PopVertexBuffer, SetFramebuffer, SetShader, SetTexture, SetVertexBuffer, UnbindTexture } from '../src/renderer/webgl1/renderpass';
import { DownKey, LeftKey, RightKey, UpKey } from '../src/input/keyboard/keys';
import { EffectLayer, Layer, RenderLayer, Sprite } from '../src/gameobjects';
import { Invert, Matrix4, Transpose } from '../src/math/mat4';

import { DrawTexturedQuad } from '../src/renderer/webgl1/draw/DrawTexturedQuad';
import { FXShader } from '../src/renderer/webgl1/shaders/FXShader';
import { Face } from './Face2';
import { Game } from '../src/Game';
import { IRenderPass } from '../src/renderer/webgl1/renderpass/IRenderPass';
import { IShader } from '../src/renderer/webgl1/shaders/IShader';
import { ImageFile } from '../src/loader/files/ImageFile';
import { Keyboard } from '../src/input/keyboard';
import { LIGHTS2_TEXTURE_FRAG } from './LIGHTS2_TEXTURE_FRAG';
import { LIGHTS2_TEXTURE_VERT } from './LIGHTS2_TEXTURE_VERT';
import { Loader } from '../src/loader/Loader';
import { On } from '../src/events';
import { OrbitCamera } from './OrbitCamera';
import { RenderLayer3D } from '../src/gameobjects3d/renderlayer3d/RenderLayer3D';
import { Scene } from '../src/scenes/Scene';
import { Shader } from '../src/renderer/webgl1/shaders/Shader';
import { StaticWorld } from '../src/world/StaticWorld';
import { Texture } from '../src/textures';
import { TextureManagerInstance } from '../src/textures/TextureManagerInstance';
import { Vec3 } from '../src/math/vec3';
import { Vec4 } from '../src/math/vec4';
import { VertexBuffer } from '../src/renderer/webgl1/buffers/VertexBuffer';

// import * as mat4 from 'gl-matrix/mat4';
// import * as quat from 'gl-matrix/quat';
// import * as vec3 from 'gl-matrix/vec3';
// import * as vec4 from 'gl-matrix/vec4';

function buildPlane (vertices, normals, uvs, indices, numberOfVertices, u, v, w, udir, vdir, width, height, depth, gridX, gridY): number
{
    const segmentWidth = width / gridX;
    const segmentHeight = height / gridY;

    const widthHalf = width / 2;
    const heightHalf = height / 2;
    const depthHalf = depth / 2;

    const gridX1 = gridX + 1;
    const gridY1 = gridY + 1;

    let vertexCounter = 0;

    // const vector = new Vec3();

    // generate vertices, normals and uvs

    for (let iy = 0; iy < gridY1; iy++)
    {
        const y = iy * segmentHeight - heightHalf;

        for (let ix = 0; ix < gridX1; ix++)
        {
            const x = ix * segmentWidth - widthHalf;

            // set values to correct vector component

            // vector.set(
            //     x * udir,
            //     y * vdir,
            //     depthHalf
            // );

            // now apply vector to vertex buffer
            vertices.push(x * udir, y * vdir, depthHalf);

            // set values to correct vector component

            // now apply vector to normal buffer
            normals.push(0, 0, depth > 0 ? 1 : - 1);

            // uvs

            uvs.push(ix / gridX);
            uvs.push(1 - ( iy / gridY ));

            // counters

            vertexCounter += 1;
        }
    }

    // indices

    // 1. you need three indices to draw a single face
    // 2. a single segment consists of two faces
    // 3. so we need to generate six (2*3) indices per segment

    for (let iy = 0; iy < gridY; iy++)
    {
        for (let ix = 0; ix < gridX; ix++)
        {
            const a = numberOfVertices + ix + gridX1 * iy;
            const b = numberOfVertices + ix + gridX1 * ( iy + 1 );
            const c = numberOfVertices + ( ix + 1 ) + gridX1 * ( iy + 1 );
            const d = numberOfVertices + ( ix + 1 ) + gridX1 * iy;

            // faces

            indices.push(a, b, d);
            indices.push(b, c, d);
        }
    }

    // update total number of vertices

    numberOfVertices += vertexCounter;

    return numberOfVertices;
}

class Cube extends RenderLayer3D
{
    shader: IShader;
    faces: Face[] = [];
    buffer: VertexBuffer;
    cubeTexture: Texture;

    constructor (shader: IShader)
    {
        super();

        this.cubeTexture = TextureManagerInstance.get().get('f');

        this.buffer = new VertexBuffer({ batchSize: 512, vertexElementSize: 9, elementsPerEntry: 3 });

        this.shader = shader;

        const verts = [];
		const normals = [];
        const uvs = [];
        const indices = [];

        const width = 2;
        const height = 2;
        const depth = 2;

        const widthSegments = 1;
        const heightSegments = 1;
        const depthSegments = 1;

        let numberOfVertices = 0;

		numberOfVertices = buildPlane(verts, normals, uvs, indices, numberOfVertices, 2, 1, 0, -1, -1, depth, height, width, depthSegments, heightSegments); // px
		numberOfVertices = buildPlane(verts, normals, uvs, indices, numberOfVertices, 2, 1, 0, 1, -1, depth, height, - width, depthSegments, heightSegments); // nx
		numberOfVertices = buildPlane(verts, normals, uvs, indices, numberOfVertices, 0, 2, 1, 1, 1, width, depth, height, widthSegments, depthSegments); // py
		numberOfVertices = buildPlane(verts, normals, uvs, indices, numberOfVertices, 0, 2, 1, 1, -1, width, depth, - height, widthSegments, depthSegments); // ny
		numberOfVertices = buildPlane(verts, normals, uvs, indices, numberOfVertices, 0, 1, 2, 1, -1, width, height, depth, widthSegments, heightSegments); // pz
        numberOfVertices = buildPlane(verts, normals, uvs, indices, numberOfVertices, 0, 1, 2, -1, -1, width, height, - depth, widthSegments, heightSegments); // nz

        function getVert (verts, index): number[]
        {
            const x = verts[ (index * 3) + 0 ];
            const y = verts[ (index * 3) + 1 ];
            const z = verts[ (index * 3) + 2 ];

            return [ x, y, z ];
        }

        function getNormal (normals, index): number[]
        {
            const x = normals[ (index * 3) + 0 ];
            const y = normals[ (index * 3) + 1 ];
            const z = normals[ (index * 3) + 2 ];

            return [ x, y, z ];
        }

        function getUV (uvs, index): number[]
        {
            const x = uvs[ (index * 2) + 0 ];
            const y = uvs[ (index * 2) + 1 ];

            return [ x, y ];
        }

        console.log(verts);
        // console.log(normals);
        console.log(uvs);
        console.log(indices);

        // let b = 0;

        for (let i = 0; i < indices.length; i += 3)
        {
            const i1 = indices[i + 0];
            const i2 = indices[i + 1];
            const i3 = indices[i + 2];

            const v1 = getVert(verts, i1);
            const v2 = getVert(verts, i2);
            const v3 = getVert(verts, i3);

            const n1 = getNormal(normals, i1);
            const n2 = getNormal(normals, i2);
            const n3 = getNormal(normals, i3);

            const uv1 = getUV(uvs, i1);
            const uv2 = getUV(uvs, i2);
            const uv3 = getUV(uvs, i3);

            // 0.0,  0.0,
            // 1.0,  0.0,
            // 1.0,  1.0,
            // 0.0,  1.0,

            // let uv1 = [ 1, 1 ];
            // let uv2 = [ 0, 0 ];
            // let uv3 = [ 0, 1 ];

            // if (b === 1)
            // {
            //     uv1 = [ 1, 1 ];
            //     uv2 = [ 1, 0 ];
            //     uv3 = [ 0, 0 ];
            // }

            // b++;

            const f = new Face(
                { x: v1[0], y: v1[1], z: v1[2] },
                { x: v2[0], y: v2[1], z: v2[2] },
                { x: v3[0], y: v3[1], z: v3[2] },
                { x: n1[0], y: n1[1], z: n1[2] },
                { x: n2[0], y: n2[1], z: n2[2] },
                { x: n3[0], y: n3[1], z: n3[2] },
                { x: uv1[0], y: uv1[1] },
                { x: uv2[0], y: uv2[1] },
                { x: uv3[0], y: uv3[1] },
                1
            );

            this.faces.push(f);

            // if (b === 2)
            // {
            //     b = 0;
            // }
        }

        console.log(this.faces);
    }

    renderGL <T extends IRenderPass> (renderPass: T): void
    {
        const shader = this.shader;
        const gl = renderPass.renderer.gl;

        Flush(renderPass);


        // console.log(textureIndex);

        SetFramebuffer(renderPass, this.framebuffer, true);
        SetVertexBuffer(renderPass, this.buffer);
        SetShader(renderPass, shader, 0);

        BindTexture(this.cubeTexture);

        // const textureIndex = SetTexture(renderPass, this.cubeTexture);

        // let offset = shader.count * buffer.entryElementSize;
        let offset = 0;

        const F32 = this.buffer.vertexViewF32;
        const U32 = this.buffer.vertexViewU32;

        this.faces.forEach(face =>
        {
            // offset = face.addToBuffer(F32, U32, 0, offset);
            offset = face.addToBuffer(F32, U32, 1, offset);

            renderPass.count += 3;
        });

        gl.enable(gl.DEPTH_TEST);
        // gl.enable(gl.CULL_FACE);

        Flush(renderPass);

        gl.disable(gl.DEPTH_TEST);
        // gl.disable(gl.CULL_FACE);

        UnbindTexture(renderPass);

        PopFramebuffer(renderPass);
        PopVertexBuffer(renderPass);
        PopShader(renderPass);

        DrawTexturedQuad(renderPass, this.texture);
    }
}

class TestShader extends Shader
{
    // camera: Camera3D;
    camera: OrbitCamera;
    normalMatrix: Matrix4;

    constructor ()
    {
        super({
            fragmentShader: LIGHTS2_TEXTURE_FRAG,
            vertexShader: LIGHTS2_TEXTURE_VERT,
            attributes: {
                aVertexPosition: { size: 3, type: GL_CONST.FLOAT, normalized: false, offset: 0 },
                aVertexNormal: { size: 3, type: GL_CONST.FLOAT, normalized: false, offset: 12 },
                aTextureCoord: { size: 2, type: GL_CONST.FLOAT, normalized: false, offset: 24 },
                aTextureId: { size: 1, type: GL_CONST.FLOAT, normalized: false, offset: 32 }
            },
            uniforms: {
                uProjectionMatrix: new Float32Array(),
                uCameraMatrix: new Float32Array(),
                uNormalMatrix: new Float32Array(),

                uTexture: 0,
                uShininess: 10.10,
                uLightDirection: new Vec3(0, -1, 1),

                uLightAmbient: new Vec4(0.75, 0.75, 0.75, 1),
                uLightDiffuse: new Vec4(0.5, 0.5, 0.5, 1),
                uLightSpecular: new Vec4(0.4, 0.4, 0.4, 1),

                uMaterialAmbient: new Vec4(0.2, 0.2, 0.2, 1),
                uMaterialDiffuse: new Vec4(0.2, 0.2, 0.2, 1),
                uMaterialSpecular: new Vec4(0.91, 0.91, 0.91, 1)
            }
        });

        // this.camera = new Camera3D();
        this.camera = new OrbitCamera();

        this.camera.setFarthestDistance(100);
        this.camera.setClosestDistance(1);
        this.camera.setOrbitPoint(0, -1, 0);
        this.camera.setDistance(5);

        this.normalMatrix = new Matrix4();
    }

    updateUniforms ()
    {
        this.camera.refresh();

        const uniforms = this.uniforms;

        uniforms.set('uProjectionMatrix', this.camera.projectionMatrix);
        uniforms.set('uCameraMatrix', this.camera.viewMatrix);

        const normalMatrix = this.normalMatrix;

        Invert(this.camera.viewMatrix, normalMatrix);
        Transpose(normalMatrix, normalMatrix);

        // mat4.invert(normalMatrix, this.camera.viewMatrix);
        // mat4.transpose(normalMatrix, normalMatrix);

        uniforms.set('uNormalMatrix', normalMatrix);
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

        if (window.location.href.includes('192.168.0.100/phaser-genesis/'))
        {
            loader.setPath('/phaser4-examples/public/assets/');
        }
        else
        {
            loader.setPath('/examples/public/assets/');
        }

        loader.add(ImageFile('bg', 'checker.png'));
        loader.add(ImageFile('logo', 'logo.png'));
        loader.add(ImageFile('f', 'f-texture.png'));

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

            AddChildren(world, bg, cube, logo);

            // camera.setPosition()

            On(this, 'update', (delta, time) => {

                if (this.leftKey.isDown)
                {
                    // camera.yaw(0.05);
                    camera.pitch(0.05);
                    // camera.roll(0.05);
                }
                else if (this.rightKey.isDown)
                {
                    // camera.yaw(-0.05);
                    camera.pitch(-0.05);
                    // camera.roll(-0.05);
                }

                if (this.upKey.isDown)
                {
                    camera.yaw(-0.05);
                    // camera.moveForward(0.05);
                    // camera.moveIn(0.05);
                }
                else if (this.downKey.isDown)
                {
                    camera.yaw(0.05);
                    // camera.moveForward(-0.05);
                    // camera.moveOut(0.05);
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
