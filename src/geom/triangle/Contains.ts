/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

import { ITriangle } from './ITriangle';

/**
 * Checks if a point (as a pair of coordinates) is inside a Triangle's bounds.
 * 
 * http://www.blackpawn.com/texts/pointinpoly/
 *
 * @function Phaser.Geom.Triangle.Contains
 * @since 3.0.0
 *
 * @param {Phaser.Geom.Triangle} triangle - The Triangle to check.
 * @param {number} x - The X coordinate of the point to check.
 * @param {number} y - The Y coordinate of the point to check.
 *
 * @return {boolean} `true` if the point is inside the Triangle, otherwise `false`.
 */
export function Contains (triangle: ITriangle, x: number, y: number): boolean
{
    const { x1, y1, x2, y2, x3, y3 } = triangle;

    const v0x = x3 - x1;
    const v0y = y3 - y1;

    const v1x = x2 - x1;
    const v1y = y2 - y1;

    const v2x = x - x1;
    const v2y = y - y1;

    const dot00 = (v0x * v0x) + (v0y * v0y);
    const dot01 = (v0x * v1x) + (v0y * v1y);
    const dot02 = (v0x * v2x) + (v0y * v2y);
    const dot11 = (v1x * v1x) + (v1y * v1y);
    const dot12 = (v1x * v2x) + (v1y * v2y);

    // Compute barycentric coordinates
    const b = ((dot00 * dot11) - (dot01 * dot01));
    const inv = (b === 0) ? 0 : (1 / b);
    const u = ((dot11 * dot02) - (dot01 * dot12)) * inv;
    const v = ((dot00 * dot12) - (dot01 * dot02)) * inv;

    return (u >= 0 && v >= 0 && (u + v < 1));
}
