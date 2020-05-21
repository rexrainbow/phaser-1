import * as Easing from '../src/math/easing';

import { AddChild, AddChildren } from '../src/display';
import { BackgroundColor, Parent, Scenes, Size, WebGLRenderer } from '../src/config';

import { Game } from '../src/Game';
import { GetWorldPlugin } from '../src/world';
import { ITweenPlugin } from '../src/motion/tween/ITweenPlugin';
import { ImageFile } from '../src/loader/files/ImageFile';
import { Loader } from '../src/loader/Loader';
import { Scene } from '../src/scenes/Scene';
import { Sprite } from '../src/gameobjects';
import { StaticWorld } from '../src/world/StaticWorld';
import { TweenPlugin } from '../src/motion/tween/TweenPlugin';

class Demo extends Scene
{
    constructor ()
    {
        super();

        const world = new StaticWorld(this, [ TweenPlugin ]);

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

            //  Get our TweenPlugin *instance* from the World, casting it to TweenPlugin so we get full code-insight.
            //  We mark the const as the interface, so only the important methods and properties are exposed.
            const tweens: ITweenPlugin = GetWorldPlugin(world, TweenPlugin) as TweenPlugin;

            tweens.add(logo).to(3, { y: 500, rotation: 0 }).easing(Easing.Bounce.Out).yoyo();

            tweens.add(rocket).delay(2).to(1.5, { x: 800 }).easing(Easing.Quadratic.In);

            // tweens.add([ logo, rocket ]).to(3, { y: 500, rotation: 0 }).easing(Easing.Bounce.Out);

            //  tweens.to({ targets: logo, duration: 3, y: 500, rotation: 0, ease: Bounce.Out });

            //  tweens.to(logo, { y: 500, rotation: 0, ease: Bounce.Out });

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
