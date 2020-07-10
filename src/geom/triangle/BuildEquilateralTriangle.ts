/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

import { Triangle } from './Triangle';

/**
 * Builds an equilateral triangle. In the equilateral triangle, all the sides are the same length (congruent) and all the angles are the same size (congruent).
 * The x/y specifies the top-middle of the triangle (x1/y1) and length is the length of each side.
 */
export function BuildEquilateralTriangle (x: number, y: number, length: number): Triangle
{
    const height = length * (Math.sqrt(3) / 2);

    const x1 = x;
    const y1 = y;

    const x2 = x + (length / 2);
    const y2 = y + height;

    const x3 = x - (length / 2);
    const y3 = y + height;

    return new Triangle(x1, y1, x2, y2, x3, y3);
}
