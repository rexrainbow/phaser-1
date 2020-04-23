import { BackgroundColor, Parent, Scenes, Size } from '../src/config';

import { AddChild } from '../src/gameobjects/container';
import { Game } from '../src/Game';
import { On } from '../src/events';
import { Scene } from '../src/scenes/Scene';
import { SolidColorTexture } from '../src/textures/types';
import { Sprite } from '../src/gameobjects/sprite';
import { World } from '../src/world/World';

class Demo extends Scene
{
    constructor ()
    {
        super();

        const world = new World(this);

        const block = new Sprite(100, 100, SolidColorTexture('#ff0000', 128, 128));

        AddChild(world, block);

        On(this, 'update', () => {

            block.x += 1;

        });
    }
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
