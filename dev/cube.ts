import * as GL_CONST from '../src/renderer/webgl1/GL_CONST';

import { AddChild, AddChildren } from '../src/display';
import { BackgroundColor, Parent, Scenes, SetWebGL, Size } from '../src/config';
import { EffectLayer, Layer, Sprite } from '../src/gameobjects';

import { Game } from '../src/Game';
import { IWebGLRenderer } from '../src/renderer/webgl1/IWebGLRenderer';
import { ImageFile } from '../src/loader/files/ImageFile';
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
attribute vec4 aTintColor;

uniform mat4 uProjectionMatrix;
uniform mat4 uCameraMatrix;

varying vec4 vTintColor;

void main (void)
{
    vTintColor = aTintColor;

    gl_Position = uProjectionMatrix * uCameraMatrix * vec4(aVertexPosition, 1.0);
}`;

export const fragmentShader =
`#define SHADER_NAME frag

precision highp float;

varying vec4 vTintColor;

void main (void)
{
    gl_FragColor = vec4(vTintColor.bgr * vTintColor.a, vTintColor.a);
}`;

class Cube extends Layer
{
    shader;
    vertices: Vertex[];

    constructor (shader)
    {
        super();

        this.willRender = true;

        this.shader = shader;

        this.vertices = [
            new Vertex(0, 0, 0).setColor(0xff0000),
            new Vertex(0, 300, 0).setColor(0xff0000),
            new Vertex(300, 300, 0).setColor(0xff0000)
        ];
    }

    renderGL <T extends IWebGLRenderer> (renderer: T): void
    {
        const shader = this.shader;

        renderer.shaders.set(shader);

        const buffer = shader.buffer;

        const F32 = buffer.vertexViewF32;
        const U32 = buffer.vertexViewU32;

        let offset = shader.count * buffer.entryElementSize;

        this.vertices.forEach(vertex =>
        {
            F32[offset + 0] = vertex.x;
            F32[offset + 1] = vertex.y;
            F32[offset + 2] = vertex.z;
            U32[offset + 3] = vertex.color;

            offset += 4;
        });

        shader.count++;

        renderer.shaders.popAndRebind();
    }
}

class Demo extends Scene
{
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

            /**
             * The amount of elements / floats a single vertex consists of.
             *
             * position (x,y,z - 3 floats)
             * color (uint)
             */
            const vertexElementSize = 4;

            /**
             * The total number of elements per entry in the index array.
             *
             * For a tri, the IBO contains 3 elements per entry:
             *
             * 0, 1, 2, 3
             */
            //  This is just indexLayout.length:
            const entryIndexSize = 4;

            const indexLayout = [ 0, 1, 2, 3 ];

            const quantity = 3;

            const coneShader = new Shader({
                fragmentShader,
                vertexShader,
                entryIndexSize,
                indexLayout,
                quantity,
                vertexElementSize,
                attributes: {
                    aVertexPosition: { size: 3 },
                    aTintColor: { size: 4, type: GL_CONST.UNSIGNED_BYTE, normalized: true, offset: 12 }
                }
            });

            const bg = new Sprite(400, 300, 'bg');
            const cube = new Cube(coneShader);
            const logo = new Sprite(400, 300, 'logo');

            // AddChildren(world, bg, cube);
            AddChildren(world, bg, cube, logo);

            On(this, 'update', (delta, time) => {
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
