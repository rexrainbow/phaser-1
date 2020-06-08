import * as Easing from '../src/math/easing';

import { AddChild, AddChildren } from '../src/display/';
import { BackgroundColor, BatchSize, Parent, Scenes, SetWebGL, Size } from '../src/config';

import { AddTween } from '../src/motion/tween/nano/AddTween';
import { Game } from '../src/Game';
import { ImageFile } from '../src/loader/files/ImageFile';
import { Loader } from '../src/loader/Loader';
import { Scene } from '../src/scenes/Scene';
import { Sprite } from '../src/gameobjects/';
import { StaticWorld } from '../src/world/StaticWorld';

class Demo extends Scene
{
    constructor ()
    {
        super();

        const world = new StaticWorld(this);

        const loader = new Loader();

        loader.setPath('/phaser4-examples/public/assets/');
        // loader.setPath('/examples/public/assets/');

        loader.add(ImageFile('logo', 'logo.png'));

        loader.start().then(() => {

            const logo = new Sprite(400, 100, 'logo').setRotation(0.3);

            AddTween(logo).to(3000, { y: 500, rotation: 0 }).easing(Easing.Bounce.Out);

            AddChildren(world, logo);

        });
    }
}

export default function (): void
{
    new Game(
        SetWebGL(),
        BatchSize(128),
        Size(800, 600),
        Parent('gameParent'),
        BackgroundColor(0x2d2d2d),
        Scenes(Demo)
    );
}
