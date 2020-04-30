import { AddChild, AddChildren, Sprite } from '../src/gameobjects/';
import { BackgroundColor, CanvasRenderer, Parent, Scenes, Size, WebGLRenderer } from '../src/config';

import { Game } from '../src/Game';
import { ImageFile } from '../src/loader/files/ImageFile';
import { Loader } from '../src/loader/Loader';
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

        loader.add(ImageFile('512', '/phaser4-examples/public/assets/512x512.png'));
        loader.add(ImageFile('64', '/phaser4-examples/public/assets/box-item-boxed.png'));

        loader.start(() => this.create());
    }

    create ()
    {
        const parent = new Sprite(400, 300, '512');

        const child1 = new Sprite(-256, -256, '64');
        const child2 = new Sprite(256, -256, '64');
        const child3 = new Sprite(-256, 256, '64');
        const child4 = new Sprite(256, 256, '64');

        // parent.rotation += 0.2;

        AddChildren(parent, child1, child2, child3, child4);

        AddChild(this.world, parent);
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
