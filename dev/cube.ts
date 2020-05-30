import * as GLMatrix from 'gl-matrix';
import * as GL_CONST from '../src/renderer/webgl1/GL_CONST';
import * as mat4 from 'gl-matrix/mat4';
import * as quat from 'gl-matrix/quat';
import * as vec3 from 'gl-matrix/vec3';

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
import { On } from '../src/events';
import { Scene } from '../src/scenes/Scene';
import { Shader } from '../src/renderer/webgl1/shaders/Shader';
import { StaticWorld } from '../src/world/StaticWorld';
import { Vertex } from '../src/gameobjects/components';

export const vertexShader =
`#define SHADER_NAME vert

precision highp float;

attribute vec3 aVertexPosition;
// attribute vec4 aTintColor;

uniform mat4 uProjectionMatrix;
uniform mat4 uCameraMatrix;

varying vec4 vTintColor;

void main (void)
{
    // vTintColor = aTintColor;

    gl_Position = uProjectionMatrix * uCameraMatrix * vec4(aVertexPosition, 1.0);
}`;

export const fragmentShader =
`#define SHADER_NAME frag

precision highp float;

// varying vec4 vTintColor;

void main (void)
{
    // gl_FragColor = vec4(vTintColor.bgr * vTintColor.a, vTintColor.a);
    gl_FragColor = vec4(0.0, 1.0, 0.0, 0.5);
}`;

const spikeVerts = [
    [ -1.000000, -1.000000, 1.000000 ],
    [ -1.000000, 1.000000, 1.000000 ],
    [ -1.000000, -1.000000, -1.000000 ],
    [ -1.000000, 1.000000, -1.000000 ],
    [ 1.000000, -1.000000, 1.000000 ],
    [ 1.000000, 1.000000, 1.000000 ],
    [ 1.000000, -1.000000, -1.000000 ],
    [ 1.000000, 1.000000, -1.000000 ],
    [ -3.780856, 0.000000, 0.000000 ],
    [ 0.000000, 0.000000, -3.780856 ],
    [ 3.780856, 0.000000, 0.000000 ],
    [ 0.000000, 0.000000, 3.780856 ],
    [ 0.000000, -3.780856, 0.000000 ],
    [ 0.000000, 3.780856, 0.000000 ]
];

const spikeFaces = [
    [ 4, 8, 10 ],
    [ 8, 6, 11 ],
    [ 6, 2, 12 ],
    [ 1, 3, 13 ],
    [ 6, 8, 14 ],
    [ 2, 4, 9 ],
    [ 4, 3, 9 ],
    [ 3, 1, 9 ],
    [ 1, 2, 9 ],
    [ 8, 7, 10 ],
    [ 7, 3, 10 ],
    [ 3, 4, 10 ],
    [ 6, 5, 11 ],
    [ 5, 7, 11 ],
    [ 7, 8, 11 ],
    [ 2, 1, 12 ],
    [ 1, 5, 12 ],
    [ 5, 6, 12 ],
    [ 3, 7, 13 ],
    [ 7, 5, 13 ],
    [ 5, 1, 13 ],
    [ 8, 4, 14 ],
    [ 4, 2, 14 ],
    [ 2, 6, 14 ]
];

class Cube extends RenderLayer
{
    shader: IShader;
    vertices: Vertex[];

    constructor (shader: IShader)
    {
        super();

        this.shader = shader;

        this.vertices = [];

        const s = 1;
        const offx = 0;
        const offy = 0;
        const offz = 0;

        for (let i = 0; i < spikeFaces.length; i++)
        {
            const face = spikeFaces[i];

            const v1 = spikeVerts[face[0] - 1];
            const v2 = spikeVerts[face[1] - 1];
            const v3 = spikeVerts[face[2] - 1];

            this.vertices.push(new Vertex(offx + (v1[0] * s), offy + (v1[1] * s), offz + (v1[2] * s)));
            this.vertices.push(new Vertex(offx + (v2[0] * s), offy + (v2[1] * s), offz + (v2[2] * s)));
            this.vertices.push(new Vertex(offx + (v3[0] * s), offy + (v3[1] * s), offz + (v3[2] * s)));
        }
    }

    renderGL <T extends IWebGLRenderer> (renderer: T): void
    {
        renderer.flush();

        renderer.fbo.add(this.framebuffer, true);

        const shader = this.shader;
        const gl = renderer.gl;

        gl.enable(gl.DEPTH_TEST);
        // gl.enable(gl.CULL_FACE);

        renderer.shaders.set(shader, 0);

        shader.renderToFBO = false;

        const buffer = shader.buffer;

        const F32 = buffer.vertexViewF32;
        const U32 = buffer.vertexViewU32;

        let offset = shader.count * buffer.entryElementSize;

        this.vertices.forEach(vertex =>
        {
            F32[offset + 0] = vertex.x;
            F32[offset + 1] = vertex.y;
            F32[offset + 2] = vertex.z;
            // U32[offset + 3] = vertex.color;

            // offset += 4;
            offset += 3;

            shader.count++;
        });

        renderer.shaders.pop();

        const texture = this.texture;

        // renderer.flush();

        renderer.fbo.pop();

        const { u0, v0, u1, v1 } = texture.firstFrame;

        renderer.textures.bind(texture);

        DrawTexturedQuad(renderer, 0, 0, texture.width, texture.height, u0, v0, u1, v1);

        renderer.textures.unbind();

        // this.postRenderGL(renderer);

        gl.disable(gl.DEPTH_TEST);
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

        this.setPosition([ 0, 0, -3 ]);

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
         * color (uint)
         */
        // const vertexElementSize = 4;
        const vertexElementSize = 3;

        // const indexLayout = [ 0, 1, 2, 3 ];
        const indexLayout = [ 0, 1, 2 ];

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
            entryIndexSize,
            indexLayout,
            quantity,
            vertexElementSize,
            renderToFBO: true,
            attributes: {
                aVertexPosition: { size: 3 }
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
            // logo.alpha = 0.5;

            // AddChildren(world, bg, cube);
            AddChildren(world, bg, cube, logo);

            On(this, 'update', (delta, time) => {

                if (this.leftKey.isDown)
                {
                    camera.roll(0.1);
                }
                else if (this.rightKey.isDown)
                {
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
        BackgroundColor(0xffffff),
        Scenes(Demo)
    );
}

//  Parses out tris and quads from the obj file

/*
function parseObj (text: string)
{
    const verts = [];
    const faces = [];

    // split the text into lines
    const lines = text.replace('\r', '').split('\n');
    const count = lines.length;

    for (let i = 0; i < count; i++)
    {
        const line = lines[i];

        if (line[0] === 'v')
        {
            // lines that start with 'v' are vertices
            const tokens = line.split(' ');

            // var pos = new BABYLON.Vector3(parseFloat(tokens[1]), parseFloat(tokens[2]), parseFloat(tokens[3]));
            // var normal = new BABYLON.Vector3();

            if (tokens.length > 3)
            {
                normal.x = parseFloat(tokens[4]);
                normal.y = parseFloat(tokens[5]);
                normal.z = parseFloat(tokens[6]);
            }

            verts.push({
                pos,
                normal
            });
        }
        else if (line[0] === 'f')
        {
            // lines that start with 'f' are faces
            var tokens = line.split(' ');

            var face = {
                A: parseInt(tokens[1], 10),
                B: parseInt(tokens[2], 10),
                C: parseInt(tokens[3], 10),
                D: parseInt(tokens[4], 10)
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
            }
            else
            {
                face.D--;
            }

            faces.push(face);
        }
    }

    //  Compute normals
    for (let i = 0; i < faces.length; i++)
    {
        const face = faces[i];

        const vertA = verts[face.A];
        const vertB = verts[face.B];
        const vertC = verts[face.C];

        face.normal = (vertA.normal.add(vertB.normal.add(vertC.normal))).scale(1 / 3);
        face.normal.normalize();
    }

    this.modelData[ key ] = {
        verts: verts,
        faces: faces
    };

    return this.modelData[ key ];
}
*/
