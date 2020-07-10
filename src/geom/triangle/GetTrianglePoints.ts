/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

import { GetLineLength } from '../line/GetLineLength';
import { GetTriangleEdges } from './GetTriangleEdges';
import { ITriangle } from './ITriangle';
import { Vec2 } from '../../math/vec2/Vec2';

/**
 * Returns an array of evenly spaced points on the perimeter of a Triangle.
 */
export function GetTrianglePoints (triangle: ITriangle, quantity: number, stepRate: number, out: Vec2[] = []): Vec2[]
{
    const [ line1, line2, line3 ] = GetTriangleEdges(triangle);

    const length1 = GetLineLength(line1);
    const length2 = GetLineLength(line2);
    const length3 = GetLineLength(line3);

    const perimeter = length1 + length2 + length3;

    //  If quantity is a falsey value (false, null, 0, undefined, etc) then we calculate it based on the stepRate instead.
    if (!quantity)
    {
        quantity = perimeter / stepRate;
    }

    for (let i = 0; i < quantity; i++)
    {
        let p = perimeter * (i / quantity);
        let localPosition = 0;
        let point: Vec2;

        if (p < length1)
        {
            //  Line 1
            localPosition = p / length1;

            const { x1, y1, x2, y2 } = line1;

            point = new Vec2(
                x1 + (x2 - x1) * localPosition,
                y1 + (y2 - y1) * localPosition
            );
        }
        else if (p > length1 + length2)
        {
            //  Line 3
            p -= length1 + length2;
            localPosition = p / length3;

            const { x1, y1, x2, y2 } = line3;

            point = new Vec2(
                x1 + (x2 - x1) * localPosition,
                y1 + (y2 - y1) * localPosition
            );
        }
        else
        {
            //  Line 2
            p -= length1;
            localPosition = p / length2;

            const { x1, y1, x2, y2 } = line2;

            point = new Vec2(
                x1 + (x2 - x1) * localPosition,
                y1 + (y2 - y1) * localPosition
            );
        }

        out.push(point);
    }

    return out;
}
