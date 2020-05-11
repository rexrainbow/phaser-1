import { AddChild, AddChildren } from '../src/display/';
import { BackgroundColor, CanvasRenderer, Parent, Scenes, Size, WebGLRenderer } from '../src/config';
import { EffectLayer, Sprite } from '../src/gameobjects/';

import { Game } from '../src/Game';
import { ImageFile } from '../src/loader/files/ImageFile';
import { Loader } from '../src/loader/Loader';
import { Scene } from '../src/scenes/Scene';
import { Shader } from '../src/renderer/webgl1/shaders/Shader';
import { StaticWorld } from '../src/world/StaticWorld';

const fragmentShader = `
precision highp float;

varying vec2 vTextureCoord;
varying float vTextureId;
varying vec4 vTintColor;

uniform sampler2D uTexture;

void main (void)
{
    vec4 color = texture2D(uTexture, vTextureCoord);

    // gl_FragColor = color * vec4(vTintColor.bgr * vTintColor.a, vTintColor.a);
    gl_FragColor = color * vec4(1.0, 0.0, 0.0, 1.0);
}`;

class Demo extends Scene
{
    constructor ()
    {
        super();

        const loader = new Loader();

        loader.setPath('/phaser4-examples/public/assets/');
        // loader.setPath('/examples/public/assets/');

        loader.add(ImageFile('ayu', 'ayu.png'));
        loader.add(ImageFile('logo', 'logo.png'));
        loader.add(ImageFile('bubble', 'bubble256.png'));

        loader.start(() => this.create());
    }

    create ()
    {
        // const shader = new Shader({ fragmentShader });
        // const shader = new Shader();

        const world = new StaticWorld(this);

        const layer = new EffectLayer();

        // layer.shader = shader;

        const ayu1 = new Sprite(400, 100, 'ayu');
        const ayu2 = new Sprite(480, 500, 'ayu');

        const bubble = new Sprite(400, 300, 'bubble');
        const logo = new Sprite(400, 300, 'logo');

        AddChildren(layer, logo);

        // AddChildren(layer, logo, bubble);
        // AddChildren(world, ayu1, ayu2, logo, bubble);

        AddChild(world, ayu1);
        AddChild(world, layer);
        AddChild(world, ayu2);
    }
}

export default function (): void
{
    new Game(
        WebGLRenderer(),
        Size(800, 600),
        Parent('gameParent'),
        BackgroundColor(0x2d2d2d),
        Scenes(Demo)
    );
}
