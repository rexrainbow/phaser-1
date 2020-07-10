/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

import { ITriangle } from './ITriangle';
import { IVec2Like } from '../../math/vec2/IVec2Like';
import { TriangleContains } from './TriangleContains';
import { Vec2 } from '../../math/vec2/Vec2';

/**
 * Filters an array of point-like objects to only those contained within a triangle.
 * If `returnFirst` is true, will return an array containing only the first point in the provided array that is within the triangle (or an empty array if there are no such points).
 *
 * http://www.blackpawn.com/texts/pointinpoly/
 *
 * points is an array of Point-like objects with public x/y properties
 * returns an array containing all points that are within the triangle, or an empty array if none
 * if 'returnFirst' is true it will return after the first point within the triangle is found
 */
export function TriangleContainsPoints (triangle: ITriangle, points: IVec2Like[], returnFirst: boolean = false, out: Vec2[] = []): Vec2[]
{
    let skip = false;

    points.forEach(point =>
    {
        if (skip)
        {
            return;
        }

        const { x, y } = point;

        if (TriangleContains(triangle, x, y))
        {
            out.push(new Vec2(x, y));

            if (returnFirst)
            {
                skip = true;
            }
        }
    });

    return out;
}
