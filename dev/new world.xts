import { AddChild, AddChildren } from '../src/gameobjects/container';
import { BackgroundColor, Parent, Scenes, Size } from '../src/config';

import { AddDelayedCall } from '../src/time/AddDelayedCall';
import { Game } from '../src/Game';
import { MoveToPosition } from '../src/gameobjects/transformgameobject/MoveToPosition';
import { Scene } from '../src/scenes/Scene';
import { SolidColorTexture } from '../src/textures/types';
import { Sprite } from '../src/gameobjects/sprite';
import { StaticWorld } from '../src/world/StaticWorld';
import { World } from '../src/world/World';

class Demo extends Scene
{
    constructor ()
    {
        super();

        // const world = new World(this);
        const world = new StaticWorld(this);

        const block1 = new Sprite(100, 100, SolidColorTexture('#ff0000', 64, 64));
        const block2 = new Sprite(700, 100, SolidColorTexture('#ff0000', 64, 64));
        const block3 = new Sprite(100, 500, SolidColorTexture('#ff0000', 64, 64));

        AddChildren(world, block1, block2, block3);

        // AddDelayedCall(world, 2000, () => { console.log('hello?'); });

        AddDelayedCall(world, 2000, () => MoveToPosition(500, 500, 5000, block1, block2, block3));

        // MoveToPosition(500, 500, 5000, block1, block2, block3);

        /*
        AddTimerEvent(world, {
            delay: 2000,
            duration: 2000,
            repeat: 2,
            onStart: () => {
                console.log('Timer start');
            },
            onRepeat: () => {
                console.log('Timer repeat');
            },
            onComplete: () => {
                console.log('Timer complete');
            }
        });
        */
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
