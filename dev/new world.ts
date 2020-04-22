import { BackgroundColor, Parent, Scenes, Size } from '../src/config';

import { Game } from '../src/Game';
import { On } from '../src/events';
import { Scene } from '../src/scenes/Scene';
import { World } from '../src/world/World';

class Demo extends Scene
{
    world: World;

    constructor ()
    {
        super();

        this.world = new World(this);

        On(this, 'update', () => this.update());
    }

    update (): void
    {

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
