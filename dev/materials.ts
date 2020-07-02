import { BackgroundColor, Parent, Scenes, SetWebGL, Size } from '../src/config';
import { Brass, Bronze, Chrome, Emerald, Jade, Obsidian, Ruby } from '../src/materials3d';

import { AddChildren3D } from '../src/display3d/AddChildren3D';
import { Box } from '../src/gameobjects3d/box/Box';
import { Cone } from '../src/gameobjects3d/cone/Cone';
import { Game } from '../src/Game';
import { Mouse } from '../src/input/mouse/Mouse';
import { On } from '../src/events';
import { Scene } from '../src/scenes/Scene';
import { Sphere } from '../src/gameobjects3d/sphere/Sphere';
import { World3D } from '../src/world3d/World3D';

class Demo extends Scene
{
    constructor ()
    {
        super();

        const world = new World3D(this, 0, 0, 8, { x: 0.5, y: 3, z: 4 });

        const ball = new Sphere(-2.5, 0, 0, 1, 24, 24);
        const box = new Box(0, 0, 0, 1.5, 1.5, 1.5);
        const cone = new Cone(2.5, 0, 0, 0.8, 1.8, 24, 6);

        ball.setMaterial(Bronze);
        box.setMaterial(Chrome);
        cone.setMaterial(Ruby);

        // console.log(ball.material);
        // console.log(box.material);
        // console.log(cone.material);
        console.log(world);

        AddChildren3D(world, ball, box, cone);

        window['ball'] = ball;
        window['box'] = box;
        window['cone'] = cone;

        const camera = world.camera;

        camera.isOrbit = true;

        const mouse = new Mouse();

        let tracking = false;

        On(mouse, 'pointerdown', (x: number, y: number, button: number) => {

            if (button === 1)
            {
                camera.isOrbit = !camera.isOrbit;
            }
            else
            {
                camera.begin(x, y);
                tracking = true;
            }

        });

        On(mouse, 'pointermove', (x: number, y: number) => {

            if (!tracking)
            {
                return;
            }

            if (mouse.primaryDown)
            {
                camera.rotate(x, y);
            }
            else if (mouse.secondaryDown)
            {
                camera.pan(x, y);
            }

        });

        On(mouse, 'wheel', (deltaX: number, deltaY: number) => {

            camera.zoom(deltaY);

        });

        On(mouse, 'pointerup', () => {

            tracking = false;

        });

        const light = world.light;

        On(this, 'update', (delta, time) => {

            time /= 1000;

            light.position.x = Math.sin(time * 2);
            light.position.y = Math.sin(time * 0.7);
            light.position.z = Math.sin(time * 1.3);

        });
    }
}

export default function (): void
{
    new Game(
        SetWebGL(),
        Size(800, 600),
        Parent('gameParent'),
        BackgroundColor(0x1d1d1d),
        Scenes(Demo)
    );
}
