import { Game } from '../src/Game';
import { StaticScene } from '../src/scenes/StaticScene';
import { Rectangle, MarchingAnts } from '../src/geom/rectangle';
import { Parent, Scenes, BackgroundColor } from '../src/config';
import { SolidColorTexture } from '../src/textures/types/SolidColorTexture';
import { Sprite } from '../src/gameobjects/sprite/Sprite';
import { AddChild } from '../src/gameobjects/container/AddChild';

class Demo extends StaticScene
{
    constructor ()
    {
        super();

        const block = SolidColorTexture('#ff0000', 8, 8);

        const rect = new Rectangle(100, 100, 300, 200);

        const points = MarchingAnts(rect, 32);

        points.forEach(point => {

            AddChild(this.world, new Sprite(point.x, point.y, block));

        });
    }
}

export default function ()
{
    new Game(
        Parent('gameParent'),
        BackgroundColor(0x2d2d2d),
        Scenes(Demo)
    );
}
