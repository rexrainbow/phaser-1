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

import { Camera3D } from './Camera3D';
import { Cube as CubeOBJ } from './3d/cube';
import { DrawTexturedQuad } from '../src/renderer/webgl1/draw/DrawTexturedQuad';
import { ExpandVertexData } from './ExpandVertexData';
import { Face } from './Face';
import { GL } from '../src/renderer/webgl1';
import { Game } from '../src/Game';
import { IShader } from '../src/renderer/webgl1/shaders/IShader';
import { IWebGLRenderer } from '../src/renderer/webgl1/IWebGLRenderer';
import { ImageFile } from '../src/loader/files/ImageFile';
import { Keyboard } from '../src/input/keyboard';
import { LIGHTS_FRAG } from './LIGHTS_FRAG';
import { Loader } from '../src/loader/Loader';
import OBJFile from './OBJFile';
import { On } from '../src/events';
import { OrbitCamera } from './OrbitCamera';
import { ParseObj } from './ParseObj';
import { SIMPLE_LIGHTS_VERT } from './SIMPLE_LIGHTS_VERT';
import { Scene } from '../src/scenes/Scene';
import { Shader } from '../src/renderer/webgl1/shaders/Shader';
import { StaticWorld } from '../src/world/StaticWorld';
import { Vertex } from '../src/gameobjects/components';

const obj = new OBJFile(CubeOBJ);
const data = obj.parse();

console.log('OBJFile');
console.log(data.models[0]);

// console.log('ParseObj');
// const data2 = ParseObj(CubeOBJ);
// console.log(data2);
// const expanded = ExpandVertexData(data2, { facesToTriangles: true });
// console.log('Expanded');
// console.log(expanded);

class Cube extends RenderLayer
{
    shader: IShader;
    faces: Face[] = [];

    constructor (shader: IShader)
    {
        super();

        this.shader = shader;

        const model = data.models[0];
        const verts = model.vertices;
        const normals = model.vertexNormals;

        for (let i = 0; i < model.faces.length; i++)
        {
            const face = model.faces[i];

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

        gl.enable(gl.DEPTH_TEST);
        gl.depthFunc(gl.LEQUAL);
        gl.clear(gl.DEPTH_BUFFER_BIT);
        // gl.enable(gl.CULL_FACE);

        renderer.shaders.set(shader, 0);

        shader.renderToFBO = false;

        const buffer = shader.buffer;

        const F32 = buffer.vertexViewF32;
        const U32 = buffer.vertexViewU32;

        // let offset = shader.count * buffer.entryElementSize;
        let offset = 0;

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

        gl.disable(gl.DEPTH_TEST);
        // gl.disable(gl.CULL_FACE);
    }
}

class TestShader extends Shader
{
    // camera: Camera3D;
    camera: OrbitCamera;

    constructor ()
    {
        super({
            batchSize: 4096,
            fragmentShader: LIGHTS_FRAG,
            vertexShader: SIMPLE_LIGHTS_VERT,
            quantity: 3,
            vertexElementSize: 6,
            attributes: {
                aVertexPosition: { size: 3 },
                aVertexNormal: { size: 3 }
            },
            uniforms: {
                uProjectionMatrix: new Float32Array(),
                uCameraMatrix: new Float32Array(),
                uLightDirection: vec3.fromValues(0.5, 3.0, 4.0),
                uLightColor: vec3.fromValues(1, 1, 1, 1)
            }
        });

        // this.camera = new Camera3D();
        this.camera = new OrbitCamera();

        this.camera.setFarthestDistance(100);
        this.camera.setClosestDistance(1);
        this.camera.setOrbitPoint(0, 1, 0);
        this.camera.setDistance(5);
    }

    updateUniforms ()
    {
        this.camera.refresh();

        const uniforms = this.uniforms;

        uniforms.set('uProjectionMatrix', this.camera.projectionMatrix);
        uniforms.set('uCameraMatrix', this.camera.viewMatrix);
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

        loader.setPath('/phaser4-examples/public/assets/');
        // loader.setPath('/examples/public/assets/');

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

            AddChildren(world, bg, cube);
            // AddChildren(world, bg, cube, logo);

            // camera.setPosition()

            On(this, 'update', (delta, time) => {

                if (this.leftKey.isDown)
                {
                    camera.yaw(0.1);
                    // camera.pitch(0.1);
                    // camera.roll(0.1);
                }
                else if (this.rightKey.isDown)
                {
                    camera.yaw(-0.1);
                    // camera.pitch(-0.1);
                    // camera.roll(-0.1);
                }

                if (this.upKey.isDown)
                {
                    // camera.moveForward(0.1);
                    camera.moveIn(0.1);
                }
                else if (this.downKey.isDown)
                {
                    // camera.moveForward(-0.1);
                    camera.moveOut(0.1);
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
