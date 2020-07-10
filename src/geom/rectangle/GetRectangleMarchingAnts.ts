/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

import { GetRectanglePerimeter } from './GetRectanglePerimeter';
import { IRectangle } from './IRectangle';
import { Vec2 } from '../../math/vec2/Vec2';

/**
 * Returns an array of points from the perimeter of the Rectangle, where each point is spaced out based
 * on either the `step` value, or the `quantity`.
 */
export function GetRectangleMarchingAnts (rect: IRectangle, step?: number, quantity?: number, out: Vec2[] = []): Vec2[]
{
    if (!step && !quantity)
    {
        //  Bail out
        return out;
    }

    //  If step is a falsey value (false, null, 0, undefined, etc) then we calculate
    //  it based on the quantity instead, otherwise we always use the step value
    if (!step)
    {
        step = GetRectanglePerimeter(rect) / quantity;
    }
    else
    {
        quantity = Math.round(GetRectanglePerimeter(rect) / step);
    }

    let x = rect.x;
    let y = rect.y;
    let face = 0;

    //  Loop across each face of the rectangle

    for (let i = 0; i < quantity; i++)
    {
        out.push(new Vec2(x, y));

        switch (face)
        {
            //  Top face
            case 0:
                x += step;

                if (x >= rect.right)
                {
                    face = 1;
                    y += (x - rect.right);
                    x = rect.right;
                }
                break;

            //  Right face
            case 1:
                y += step;

                if (y >= rect.bottom)
                {
                    face = 2;
                    x -= (y - rect.bottom);
                    y = rect.bottom;
                }
                break;

            //  Bottom face
            case 2:
                x -= step;

                if (x <= rect.x)
                {
                    face = 3;
                    y -= (rect.x - x);
                    x = rect.x;
                }
                break;

            //  Left face
            case 3:
                y -= step;

                if (y <= rect.y)
                {
                    face = 0;
                    y = rect.y;
                }
                break;
        }
    }

    return out;
}
