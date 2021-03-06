/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

import { ITriangle } from './ITriangle';
import { Vec2 } from '../../math/vec2/Vec2';

function GetLength (x1: number, y1: number, x2: number, y2: number): number
{
    const x = x1 - x2;
    const y = y1 - y2;

    return Math.sqrt((x * x) + (y * y));
}

/**
 * Calculates the position of the incenter of a Triangle object.
 * This is the point where its three angle bisectors meet and it's also the center
 * of the incircle, which is the circle inscribed in the triangle.
 */
export function GetTriangleInCenter (triangle: ITriangle, out: Vec2 = new Vec2()): Vec2
{
    const { x1, y1, x2, y2, x3, y3 } = triangle;

    const d1 = GetLength(x3, y3, x2, y2);
    const d2 = GetLength(x1, y1, x3, y3);
    const d3 = GetLength(x2, y2, x1, y1);

    const p = d1 + d2 + d3;

    return out.set(
        (x1 * d1 + x2 * d2 + x3 * d3) / p,
        (y1 * d1 + y2 * d2 + y3 * d3) / p
    );
}
