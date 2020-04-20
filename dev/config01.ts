import { Game } from '../src/Game';
import { StaticScene } from '../src/scenes/StaticScene';
import { Parent, Size, Scenes, BackgroundColor } from '../src/config';

class Demo extends StaticScene
{
    constructor ()
    {
        super();

        console.log('Settings');
    }
}

export default function ()
{
    new Game(
        Size(800, 600),
        Parent('gameParent'),
        BackgroundColor(0x3d783d),
        Scenes(Demo)
    );
}
