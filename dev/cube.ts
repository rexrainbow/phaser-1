import * as GL_CONST from '../src/renderer/webgl1/GL_CONST';

import { AddChild, AddChildren } from '../src/display';
import { BackgroundColor, Parent, Scenes, SetWebGL, Size } from '../src/config';
import { EffectLayer, Layer, Sprite } from '../src/gameobjects';

import { Game } from '../src/Game';
import { IShader } from '../src/renderer/webgl1/shaders/IShader';
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
    gl_FragColor = vec4(0.0, 1.0, 0.0, 1.0);
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
]

const shipVerts = [
    [ -1.961901, -0.491214, 0.960000 ],
    [ -1.594960, 0.497596, 0.649128 ],
    [ -1.961901, -0.491214, -1.086735 ],
    [ -1.594960, 0.497596, -0.775863 ],
    [ 1.962349, -0.491214, 0.960000 ],
    [ 1.595409, 0.497596, 0.649128 ],
    [ 1.962349, -0.491214, -1.086735 ],
    [ 1.595409, 0.497596, -0.775863 ],
    [ -0.512424, 0.295207, -0.922810 ],
    [ -0.630348, -0.288825, -1.086735 ],
    [ 0.630797, -0.288825, -1.086735 ],
    [ 0.512872, 0.295207, -0.922810 ],
    [ -0.512424, 0.295207, -2.229589 ],
    [ -0.630348, -0.288825, -2.229589 ],
    [ 0.630797, -0.288825, -2.229589 ],
    [ 0.512872, 0.295207, -2.229589 ],
    [ -0.512424, 0.295207, -2.841997 ],
    [ -0.630348, -0.288825, -2.841997 ],
    [ 0.630797, -0.288825, -2.841997 ],
    [ 0.512872, 0.295207, -2.841997 ]
];

class Cube extends Layer
{
    shader: IShader;
    vertices: Vertex[];

    constructor (shader: IShader)
    {
        super();

        this.willRender = true;

        this.shader = shader;

        this.vertices = [];

        const s = 100;

        for (let i = 0; i < spikeFaces.length; i++)
        {
            const face = spikeFaces[i];

            const v1 = spikeVerts[face[0]];
            const v2 = spikeVerts[face[1]];
            const v3 = spikeVerts[face[2]];

            // this.vertices.push(new Vertex(100 + (v1 * s), 100 + (v2 * s), 100 + (v3 * s)).setColor(0xff0000));
        }

        console.log(this.vertices);

        // new Vertex(0, 0, 0).setColor(0xff0000),
        // new Vertex(0, 300, 0).setColor(0xff0000),
        // new Vertex(300, 300, 0).setColor(0xff0000)
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
            // U32[offset + 3] = vertex.color;

            // offset += 4;
            offset += 3;

            shader.count++;
        });

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

            // const coneShader = new Shader({
            //     fragmentShader,
            //     vertexShader,
            //     entryIndexSize,
            //     indexLayout,
            //     quantity,
            //     vertexElementSize,
            //     attributes: {
            //         aVertexPosition: { size: 3 },
            //         aTintColor: { size: 4, type: GL_CONST.UNSIGNED_BYTE, normalized: true, offset: 12 }
            //     }
            // });

            const coneShader = new Shader({
                fragmentShader,
                vertexShader,
                entryIndexSize,
                indexLayout,
                quantity,
                vertexElementSize,
                attributes: {
                    aVertexPosition: { size: 3 }
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
