import Game from '../src/Game';
import StaticScene from '../src/scenes/StaticScene';
import Sprite from '../src/gameobjects/sprite/Sprite';
import ImageFile from '../src/loader/files/ImageFile';
import AddChild from '../src/gameobjects/container/AddChild';

class Demo extends StaticScene
{
    constructor ()
    {
        super();

        console.log('Hello World!');
    }
}

export default function ()
{
    new Game({
        width: 800,
        height: 600,
        backgroundColor: 0x330033,
        parent: 'gameParent',
        scene: Demo
    });
}
