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
import { Flush, PopFramebuffer, PopShader, PopVertexBuffer, SetFramebuffer, SetShader, SetVertexBuffer } from '../src/renderer/webgl1/renderpass';
import { GL, PackColor } from '../src/renderer/webgl1';

import { Camera3D } from './Camera3D';
import { DrawTexturedQuad } from '../src/renderer/webgl1/draw/DrawTexturedQuad';
import { FXShader } from '../src/renderer/webgl1/shaders/FXShader';
import { Face } from './Face';
import { FloatBetween } from '../src/math';
import { Game } from '../src/Game';
import { IRenderPass } from '../src/renderer/webgl1/renderpass/IRenderPass';
import { IShader } from '../src/renderer/webgl1/shaders/IShader';
import { ImageFile } from '../src/loader/files/ImageFile';
import { IndexedVertexBuffer } from '../src/renderer/webgl1/buffers/IndexedVertexBuffer';
import { Keyboard } from '../src/input/keyboard';
import { LIGHTS_FRAG } from './LIGHTS_FRAG';
import { Loader } from '../src/loader/Loader';
import { On } from '../src/events';
import { OrbitCamera } from './OrbitCamera';
import { RenderLayer3D } from '../src/gameobjects3d/renderlayer3d/RenderLayer3D';
import { SIMPLE_LIGHTS_VERT } from './SIMPLE_LIGHTS_VERT';
import { Scene } from '../src/scenes/Scene';
import { Shader } from '../src/renderer/webgl1/shaders/Shader';
import { StaticWorld } from '../src/world/StaticWorld';
import { VertexBuffer } from '../src/renderer/webgl1/buffers/VertexBuffer';

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

    const vector = vec3.create();

    // generate vertices, normals and uvs

    for (let iy = 0; iy < gridY1; iy++)
    {
        const y = iy * segmentHeight - heightHalf;

        for (let ix = 0; ix < gridX1; ix++)
        {
            const x = ix * segmentWidth - widthHalf;

            // set values to correct vector component

            vector[ u ] = x * udir;
            vector[ v ] = y * vdir;
            vector[ w ] = depthHalf;

            // now apply vector to vertex buffer

            vertices.push(vector[0], vector[1], vector[2]);
            // vertices.push(vec3.clone(vector));

            // set values to correct vector component

            vector[ u ] = 0;
            vector[ v ] = 0;
            vector[ w ] = depth > 0 ? 1 : - 1;

            // now apply vector to normal buffer

            normals.push(vector[0], vector[1], vector[2]);
            // normals.push(vec3.clone(vector));

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

function getCube (layer: Cube, x: number = 0, y: number = 0, z: number = 0, width: number = 1, height: number = 1, depth: number = 1, color?: number): boolean
{
    const colors = [
        0xff0000, 0xff0000,
        0xffff00, 0xffff00,
        0xff00ff, 0xff00ff,
        0x00ff00, 0x00ff00,
        0x00ffff, 0x00ffff,
        0x0000ff, 0x0000ff
    ];

    const verts = [];
    const normals = [];
    const uvs = [];
    const indices = [];

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

    const F32 = layer.buffer.vertexViewF32;
    const U32 = layer.buffer.vertexViewU32;

    let offset = layer.buffer.offset;

    if (layer.buffer.canContain(indices.length))
    {
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

            let vcolor;

            if (!color)
            {
                vcolor = PackColor(colors[i / 3], 1);
            }
            else
            {
                vcolor = PackColor(color, 1);
            }

            F32[offset + 0] = v1[0] + x;
            F32[offset + 1] = v1[1] + y;
            F32[offset + 2] = v1[2] + z;
            F32[offset + 3] = n1[0];
            F32[offset + 4] = n1[1];
            F32[offset + 5] = n1[2];
            U32[offset + 6] = vcolor;

            F32[offset + 7] = v2[0] + x;
            F32[offset + 8] = v2[1] + y;
            F32[offset + 9] = v2[2] + z;
            F32[offset + 10] = n2[0];
            F32[offset + 11] = n2[1];
            F32[offset + 12] = n2[2];
            U32[offset + 13] = vcolor;

            F32[offset + 14] = v3[0] + x;
            F32[offset + 15] = v3[1] + y;
            F32[offset + 16] = v3[2] + z;
            F32[offset + 17] = n3[0];
            F32[offset + 18] = n3[1];
            F32[offset + 19] = n3[2];
            U32[offset + 20] = vcolor;

            offset += 21;
        }

        layer.buffer.add(indices.length);

        return true;
    }

    return false;
}

class Cube extends RenderLayer3D
{
    shader: IShader;
    buffer: VertexBuffer;

    constructor (shader: IShader)
    {
        super();

        this.buffer = new VertexBuffer({ batchSize: 4096, vertexElementSize: 7, elementsPerEntry: 3, isDynamic: false });

        this.shader = shader;

        //  floor
        getCube(this, 0, -4, 0, 50, 0.1, 50, 0x770000);

        for (let i = 0; i < 52 * 2; i++)
        {
            const x = FloatBetween(-25, 25);
            const z = FloatBetween(-25, 25);

            const w = 0.1 + FloatBetween(0.1, 4);
            const h = 0.1 + FloatBetween(0.1, 8);
            const d = 0.1 + FloatBetween(0.1, 4);

            const y = -4 + (h / 2);

            const success = getCube(this, x, y, z, w, h, d);

            console.log('cube', i, success, this.buffer.free() + '%');
        }
    }

    renderGL <T extends IRenderPass> (renderPass: T): void
    {
        const shader = this.shader;
        const gl = renderPass.renderer.gl;

        Flush(renderPass);

        SetFramebuffer(renderPass, this.framebuffer, true);
        SetVertexBuffer(renderPass, this.buffer);
        SetShader(renderPass, shader, 0);

        gl.enable(gl.DEPTH_TEST);
        gl.enable(gl.CULL_FACE);

        Flush(renderPass, this.buffer.count);

        gl.disable(gl.DEPTH_TEST);
        gl.disable(gl.CULL_FACE);

        PopFramebuffer(renderPass);
        PopVertexBuffer(renderPass);
        PopShader(renderPass);

        DrawTexturedQuad(renderPass, this.texture);
    }
}

class TestShader extends Shader
{
    camera: Camera3D;
    // camera: OrbitCamera;
    normalMatrix: mat4;

    constructor ()
    {
        super({
            fragmentShader: LIGHTS_FRAG,
            vertexShader: SIMPLE_LIGHTS_VERT,
            attributes: {
                aVertexPosition: { size: 3, type: GL_CONST.FLOAT, normalized: false, offset: 0 },
                aVertexNormal: { size: 3, type: GL_CONST.FLOAT, normalized: false, offset: 12 },
                aVertexColor: { size: 4, type: GL_CONST.UNSIGNED_BYTE, normalized: true, offset: 24 }
            },
            uniforms: {
                uProjectionMatrix: new Float32Array(),
                uCameraMatrix: new Float32Array(),
                uNormalMatrix: new Float32Array(),
                uLightDirection: vec3.fromValues(-10, 30, 50),
                uLightColor: vec3.fromValues(1, 1, 1, 1)
            }
        });

        this.camera = new Camera3D();

        // this.camera = new OrbitCamera();
        // this.camera.setFarthestDistance(100);
        // this.camera.setClosestDistance(1);
        // this.camera.setOrbitPoint(0, -1, 0);
        // this.camera.setDistance(5);

        this.normalMatrix = mat4.create();
    }

    updateUniforms ()
    {
        this.camera.refresh();

        const uniforms = this.uniforms;

        uniforms.set('uProjectionMatrix', this.camera.projectionMatrix);
        uniforms.set('uCameraMatrix', this.camera.viewMatrix);

        const normalMatrix = this.normalMatrix;

        mat4.invert(normalMatrix, this.camera.viewMatrix);
        mat4.transpose(normalMatrix, normalMatrix);

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

        loader.add(ImageFile('bg', 'farm-background.png'));
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
            const logo = new Sprite(400, 100, 'logo').setScale(0.5);

            AddChildren(world, bg, cube, logo);

            // camera.setLookAtPoint([ 0, 0, 0 ]);
            camera.setPosition([ 0, -1, -5 ]);
            camera.setNearClippingPlane(0.001);

            On(this, 'update', (delta, time) => {

                if (this.leftKey.isDown)
                {
                    if (this.leftKey.shiftKey)
                    {
                        camera.pitch(0.025);
                    }
                    else
                    {
                        camera.yaw(0.025);
                    }
                }
                else if (this.rightKey.isDown)
                {
                    if (this.rightKey.shiftKey)
                    {
                        camera.pitch(-0.025);
                    }
                    else
                    {
                        camera.yaw(-0.025);
                    }
                }

                if (this.upKey.isDown)
                {
                    // camera.yaw(-0.05);
                    camera.moveForward(-0.05);
                    // camera.moveIn(0.05);
                }
                else if (this.downKey.isDown)
                {
                    // camera.yaw(0.05);
                    camera.moveForward(0.05);
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
