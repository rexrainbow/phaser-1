import * as GL_CONST from '../src/renderer/webgl1/GL_CONST';

import { AKey, DownKey, LeftKey, RightKey, UpKey } from '../src/input/keyboard/keys';
import { AddChild, AddChildren } from '../src/display';
import { BackgroundColor, Parent, Scenes, SetWebGL, Size } from '../src/config';
import { BindTexture, Flush, PopFramebuffer, PopShader, PopVertexBuffer, SetFramebuffer, SetShader, SetTexture, SetVertexBuffer, UnbindTexture } from '../src/renderer/webgl1/renderpass';
import { EffectLayer, Layer, RenderLayer, Sprite } from '../src/gameobjects';
import { Invert, Matrix4, Perspective, Transpose } from '../src/math/mat4';

import { Box } from '../src/primitives/Box';
import { Camera3D } from '../src/camera3d/Camera3D';
import { DrawTexturedQuad } from '../src/renderer/webgl1/draw/DrawTexturedQuad';
import { Game } from '../src/Game';
import { GetFacesFromVertexSet } from '../src/primitives/faces/GetFacesFromVertexSet';
import { IFace } from '../src/primitives/faces/IFace';
import { IRenderPass } from '../src/renderer/webgl1/renderpass/IRenderPass';
import { IShader } from '../src/renderer/webgl1/shaders/IShader';
import { ImageFile } from '../src/loader/files/ImageFile';
import { Keyboard } from '../src/input/keyboard';
import { LIGHTS2_TEXTURE_FRAG } from './LIGHTS2_TEXTURE_FRAG';
import { LIGHTS2_TEXTURE_VERT } from './LIGHTS2_TEXTURE_VERT';
import { Loader } from '../src/loader/Loader';
import { On } from '../src/events';
import { RenderLayer3D } from '../src/gameobjects3d/renderlayer3d/RenderLayer3D';
import { Scene } from '../src/scenes/Scene';
import { Shader } from '../src/renderer/webgl1/shaders/Shader';
import { Sphere } from '../src/primitives/Sphere';
import { StaticWorld } from '../src/world/StaticWorld';
import { Texture } from '../src/textures';
import { TextureManagerInstance } from '../src/textures/TextureManagerInstance';
import { Vec3 } from '../src/math/vec3';
import { VertexBuffer } from '../src/renderer/webgl1/buffers/VertexBuffer';

class Cube extends RenderLayer3D
{
    shader: IShader;
    faces: IFace[] = [];
    buffer: VertexBuffer;
    cubeTexture: Texture;

    constructor (shader: IShader)
    {
        super();

        this.cubeTexture = TextureManagerInstance.get().get('f');

        this.buffer = new VertexBuffer({ batchSize: 512, vertexElementSize: 9, elementsPerEntry: 3 });

        this.shader = shader;

        // const data = Box(2, 2, 2);
        const data = Sphere(2, 8, 8);

        this.faces = GetFacesFromVertexSet(data);

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
        gl.enable(gl.CULL_FACE);

        Flush(renderPass);

        gl.disable(gl.DEPTH_TEST);
        gl.disable(gl.CULL_FACE);

        UnbindTexture(renderPass);

        PopFramebuffer(renderPass);
        PopVertexBuffer(renderPass);
        PopShader(renderPass);

        DrawTexturedQuad(renderPass, this.texture);
    }
}

class TestShader extends Shader
{
    camera: Camera3D;
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
                uLightDirection: [ 0, -1, 1 ],

                uLightAmbient: [ 0.75, 0.75, 0.75, 1 ],
                uLightDiffuse: [ 0.5, 0.5, 0.5, 1 ],
                uLightSpecular: [ 0.4, 0.4, 0.4, 1 ],

                uMaterialAmbient: [ 0.2, 0.2, 0.2, 1 ],
                uMaterialDiffuse: [ 0.2, 0.2, 0.2, 1 ],
                uMaterialSpecular: [ 0.91, 0.91, 0.91, 1 ]
            }
        });

        this.camera = new Camera3D(0, 0, 4);

        // this.camera.lookAt(new Vec3(0, 1, 0));

        this.uniforms.set('uProjectionMatrix', this.camera.projectionMatrix.data);

        this.normalMatrix = new Matrix4();
    }

    updateUniforms ()
    {
        const uniforms = this.uniforms;

        uniforms.set('uCameraMatrix', this.camera.viewMatrix.data);

        const normalMatrix = this.normalMatrix;

        Invert(this.camera.viewMatrix, normalMatrix);
        Transpose(normalMatrix, normalMatrix);

        uniforms.set('uNormalMatrix', normalMatrix.data);
    }
}

class Demo extends Scene
{
    leftKey: LeftKey;
    rightKey: RightKey;
    upKey: UpKey;
    downKey: DownKey;
    aKey: AKey;

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
            this.aKey = new AKey();

            keyboard.addKeys(this.leftKey, this.rightKey, this.upKey, this.downKey, this.aKey);

            let camMode = 0;

            On(this.aKey, 'keydown', () => {

                camMode++;

                if (camMode === 3)
                {
                    camMode = 0;
                }

                console.log('cam mode: ' + camMode);

            });

            const shader = new TestShader();
            const camera = shader.camera;

            const bg = new Sprite(400, 300, 'bg');
            const cube = new Cube(shader);
            const logo = new Sprite(400, 300, 'logo');

            logo.alpha = 0.3;

            AddChildren(world, bg, cube, logo);

            On(this, 'update', (delta, time) => {

                if (this.leftKey.isDown)
                {
                    if (camMode === 0)
                    {
                        camera.position.x += 0.05;
                    }
                    else if (camMode === 1)
                    {
                        camera.direction.x += 0.05;
                    }
                    else
                    {
                        camera.pitch(0.05);
                    }
                }
                else if (this.rightKey.isDown)
                {
                    if (camMode === 0)
                    {
                        camera.position.x -= 0.05;
                    }
                    else if (camMode === 1)
                    {
                        camera.direction.x -= 0.05;
                    }
                    else
                    {
                        camera.pitch(-0.05);
                    }
                }

                if (this.upKey.isDown)
                {
                    if (camMode === 0)
                    {
                        camera.position.z -= 0.05;
                    }
                    else if (camMode === 1)
                    {
                        camera.direction.z -= 0.05;
                    }
                    else
                    {
                        camera.forward(0.05);
                    }
                }
                else if (this.downKey.isDown)
                {
                    if (camMode === 0)
                    {
                        camera.position.z += 0.05;
                    }
                    else if (camMode === 1)
                    {
                        camera.direction.z += 0.05;
                    }
                    else
                    {
                        camera.forward(-0.05);
                    }
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
