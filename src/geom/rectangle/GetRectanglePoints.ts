/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

import { GetRectanglePerimeter } from './GetRectanglePerimeter';
import { GetRectanglePoint } from './GetRectanglePoint';
import { IRectangle } from './IRectangle';
import { Vec2 } from '../../math/vec2/Vec2';

/**
 * Return an array of points from the perimeter of the rectangle, each spaced out based on the quantity or step required.
 */
export function GetRectanglePoints (rectangle: IRectangle, step: number, quantity: number = 0, out: Vec2[] = []): Vec2[]
{
    //  If quantity is a falsey value (false, null, 0, undefined, etc) then we calculate it based on the stepRate instead.
    if (!quantity)
    {
        quantity = GetRectanglePerimeter(rectangle) / step;
    }

    for (let i = 0; i < quantity; i++)
    {
        out.push(GetRectanglePoint(rectangle, i / quantity));
    }

    return out;
}
