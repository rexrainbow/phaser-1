import { AddChild, AddChildren, Sprite } from '../src/gameobjects/';
import { BackgroundColor, CanvasRenderer, Parent, Scenes, Size, WebGLRenderer } from '../src/config';

import { Game } from '../src/Game';
import { ImageFile } from '../src/loader/files/ImageFile';
import { Loader } from '../src/loader/Loader';
import { On } from '../src/events';
import { Scene } from '../src/scenes/Scene';
import { StaticWorld } from '../src/world/StaticWorld';

class Demo extends Scene
{
    world: StaticWorld;

    constructor ()
    {
        super();

        this.world = new StaticWorld(this);

        const loader = new Loader();

        loader.add(ImageFile('256', '/examples/public/assets/f-texture.png'));
        loader.add(ImageFile('64', '/examples/public/assets/box-item-boxed.png'));
        loader.add(ImageFile('32', '/examples/public/assets/shinyball.png'));
        loader.add(ImageFile('16', '/examples/public/assets/skull.png'));

        loader.start(() => this.create());
    }

    create ()
    {
        const parent = new Sprite(400, 300, '256');

        const child1 = new Sprite(-128, -128, '64');
        const child2 = new Sprite(128, -128, '64');
        const child3 = new Sprite(-128, 128, '64');
        const child4 = new Sprite(128, 128, '64');

        const child5 = new Sprite(0, -32, '32');
        const child6 = new Sprite(0, 32, '32');
        const child7 = new Sprite(-32, 0, '32');
        const child8 = new Sprite(32, 0, '32');

        const child9 = new Sprite(0, -16, '16');
        const child10 = new Sprite(0, 16, '16');
        const child11 = new Sprite(-16, 0, '16');
        const child12 = new Sprite(16, 0, '16');

        AddChildren(parent, child1, child2, child3, child4);
        AddChildren(child1, child5, child6, child7, child8);
        AddChildren(child5, child9, child10, child11, child12);

        AddChild(this.world, parent);

        let i = 0;

        On(this, 'update', (delta, time) =>
        {
            parent.rotation += 0.005;

            child1.rotation += 0.01;
            child5.rotation -= 0.03;

            parent.scaleX = Math.cos(i);
            parent.scaleY = Math.cos(i);

            i += 0.01;
        });
    }
}

export default function (): void
{
    new Game(
        // CanvasRenderer(),
        WebGLRenderer(),
        Size(800, 600),
        Parent('gameParent'),
        BackgroundColor(0x2d2d2d),
        Scenes(Demo)
    );
}
