import { Game } from '../src/Game';
import { StaticScene } from '../src/scenes/StaticScene';
import { AddChild } from '../src/gameobjects/container/AddChild';
import { AddChildren } from '../src/gameobjects/container/AddChildren';
import { PixelTexture } from '../src/textures/types/PixelTexture';
import { Sprite } from '../src/gameobjects/sprite/Sprite';
import { Parent, Size, Scenes, BackgroundColor } from '../src/config';

class Demo extends StaticScene
{
    constructor ()
    {
        super();

        const data = [
            '.......3.....',
            '......333....',
            '....5343335..',
            '...332333333.',
            '..33333333333',
            '..37773337773',
            '..38587778583',
            '..38588888583',
            '..37888888873',
            '...333333333.',
            '.F....5556...',
            '3E34.6757.6..',
            '.E.55.666.5..',
            '......777.5..',
            '.....6..7....',
            '.....7..7....'
        ];

        const dudeTexture = PixelTexture({ data, pixelWidth: 8, pixelHeight: 8 });

        const dude = new Sprite(400, 300, dudeTexture);
        const dude2 = new Sprite(500, 400, dudeTexture);

        AddChildren(this.world, dude, dude2);
    
        // const greet = new Text(100, 100, 'Hello World!!!');

        // AddChild(this.world, greet);
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
