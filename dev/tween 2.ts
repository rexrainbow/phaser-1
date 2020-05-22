import * as Easing from '../src/math/easing';

import { AddChild, AddChildren } from '../src/display';
import { BackgroundColor, Parent, Scenes, Size, WebGLRenderer } from '../src/config';

import { Game } from '../src/Game';
import { ImageFile } from '../src/loader/files/ImageFile';
import { Loader } from '../src/loader/Loader';
import { NanoTween } from '../src/motion/tween/nano/NanoTween';
import { Scene } from '../src/scenes/Scene';
import { Sprite } from '../src/gameobjects';
import { StaticWorld } from '../src/world/StaticWorld';

// import { ITweenPlugin } from '../src/motion/tween/ITweenPlugin';





// import { TweenPlugin } from '../src/motion/tween/TweenPlugin';


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
        loader.add(ImageFile('rocket', 'rocket.png'));
        loader.add(ImageFile('star', 'star.png'));
        loader.add(ImageFile('bubble', 'bubble256.png'));

        loader.start().then(() => {

            const logo = new Sprite(400, 100, 'logo').setRotation(0.5);
            const rocket = new Sprite(-200, 300, 'rocket');

            NanoTween(logo).to(3, { y: 500, rotation: 0 }).easing(Easing.Bounce.Out);
            NanoTween(rocket).delay(2).to(1.5, { x: 800 }).easing(Easing.Quadratic.In);

            AddChildren(world, logo, rocket);

        });
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
