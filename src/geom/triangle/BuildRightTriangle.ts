/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

import { Triangle } from './Triangle';

/**
 * Builds a right triangle, i.e. one which has a 90-degree angle and two acute angles.
 * The x/y is the coordinate of the 90 degree angle (and will map to x1/y1 in the resulting Triangle)
 * w/h can be positive or negative and represent the length of each side
 */
export function BuildRightTriangle (x: number, y: number, width: number, height: number = width): Triangle
{
    //  90 degree angle
    const x1 = x;
    const y1 = y;

    const x2 = x;
    const y2 = y - height;

    const x3 = x + width;
    const y3 = y;

    return new Triangle(x1, y1, x2, y2, x3, y3);
}
