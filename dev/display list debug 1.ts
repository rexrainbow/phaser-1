import { AddChild, ConsoleTreeChildren, GetRandomChild } from '../src/display';
import { BackgroundColor, Parent, Scenes, Size, WebGLRenderer } from '../src/config';
import { Container, GameObject, RenderLayer, Sprite } from '../src/gameobjects/';

import { AddChildren } from '../src/display/AddChildren';
import { Game } from '../src/Game';
import { Scene } from '../src/scenes/Scene';
import { StaticWorld } from '../src/world/StaticWorld';

class Demo extends Scene
{
    constructor ()
    {
        super();

        const world = new StaticWorld(this);

        world.name = 'World';

        //  Create parents
        const parents = [];

        for (let i = 0; i < 3; i++)
        {
            const parent = new Container();

            parent.name = 'Parent ' + i.toString();

            AddChild(world, parent);

            parents.push(parent);
        }

        //  Create random children
        for (let i = 0; i < 12; i++)
        {
            const child = new GameObject();

            child.name = 'Child ' + i.toString();

            const randomParent = GetRandomChild(world);

            console.log(child.name, 'added to', randomParent.name);

            AddChild(randomParent, child);
        }

        ConsoleTreeChildren(world);
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
