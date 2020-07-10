/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

import { ITriangle } from './ITriangle';

/**
 * Moves each point (vertex) of a Triangle by a given offset, thus moving the entire Triangle by that offset.
 */
export function TranslateTriangle (triangle: ITriangle, x: number, y: number): ITriangle
{
    triangle.x1 += x;
    triangle.y1 += y;

    triangle.x2 += x;
    triangle.y2 += y;

    triangle.x3 += x;
    triangle.y3 += y;

    return triangle;
}
