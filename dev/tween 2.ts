import * as Easing from '../src/math/easing';

import { AddChild, AddChildren } from '../src/display';
import { BackgroundColor, Parent, Scenes, Size, WebGLRenderer } from '../src/config';

import { AddTween } from '../src/motion/tween/nano/AddTween';
import { Game } from '../src/Game';
import { ImageFile } from '../src/loader/files/ImageFile';
import { Loader } from '../src/loader/Loader';
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

        // loader.setPath('/phaser4-examples/public/assets/');
        loader.setPath('/examples/public/assets/');

        loader.add(ImageFile('logo', 'logo.png'));
        loader.add(ImageFile('rocket', 'rocket.png'));
        loader.add(ImageFile('star', 'star.png'));
        loader.add(ImageFile('bubble', 'bubble256.png'));

        loader.start().then(() => {

            // const logo = new Sprite(400, 100, 'logo').setRotation(0.5);
            // const rocket = new Sprite(-200, 300, 'rocket');
            const bubble = new Sprite(400, 500, 'bubble').setScale(0.5);

            // AddTween(logo).to(3, { y: 500, rotation: 0 }).easing(Easing.Bounce.Out).repeat(1);
            // AddTween(rocket).delay(2).to(1.5, { x: 800 }).easing(Easing.Quadratic.In);

            AddTween(bubble).to(2000, { y: '-300' }).easing(Easing.Bounce.Out).repeat(2).yoyo();

            // AddTween(bubble).to(2, { y: 600 }).yoyo().easing(Easing.Bounce.Out).hold(2);

            // AddTween(bubble).from(2000, { y: '-600' }).yoyo().easing(Easing.Bounce.Out).repeat(2, 2000).hold(500).delay(1000);

            // AddTween(bubble).from(3, { y: 600 }).yoyo().easing(Easing.Bounce.Out);

            // AddTween(bubble).to(2, { x: 200 }).easing(Easing.Sine.InOut).repeat(3);

            // AddChildren(world, logo, rocket);

            AddChildren(world, bubble);

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
