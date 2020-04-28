import { BackgroundColor, CanvasRenderer, Parent, Scenes, Size, WebGLRenderer } from '../src/config';

import { AddChild } from '../src/gameobjects/container';
import { Game } from '../src/Game';
import { Scene } from '../src/scenes/Scene';
import { SolidColorTexture } from '../src/textures/types';
import { Sprite } from '../src/gameobjects/sprite';
import { StaticWorld } from '../src/world/StaticWorld';

class Demo extends Scene
{
    constructor ()
    {
        super();

        const world = new StaticWorld(this);

        const block = new Sprite(100, 100, SolidColorTexture('#ff0000', 128, 128));

        AddChild(world, block);
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
