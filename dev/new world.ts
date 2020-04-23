import { BackgroundColor, Parent, Scenes, Size } from '../src/config';

import { AddChild } from '../src/gameobjects/container';
import { Game } from '../src/Game';
import { Scene } from '../src/scenes/Scene';
import { SolidColorTexture } from '../src/textures/types';
import { Sprite } from '../src/gameobjects/sprite';
import { World } from '../src/world/World';

// import { On } from '../src/events';



class Demo extends Scene
{
    constructor ()
    {
        super();

        console.log('Demo Scene created');

        const world = new World(this);

        const red = SolidColorTexture('#ff0000', 128, 128);

        const block = new Sprite(100, 100, red);

        AddChild(world, block);



        // On(this, 'update', () => this.update());
    }

    // update (): void
    // {

    // }
}

export default function (): void
{
    new Game(
        Size(800, 600),
        Parent('gameParent'),
        BackgroundColor(0x2d2d2d),
        Scenes(Demo)
    );
}
