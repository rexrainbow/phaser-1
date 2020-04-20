/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

import { ITriangle } from './ITriangle';

/**
 * Rotates an entire Triangle at a given angle about a specific point.
 *
 * @function Phaser.Geom.Triangle.RotateAroundXY
 * @since 3.0.0
 *
 * @generic {Phaser.Geom.Triangle} O - [triangle,$return]
 *
 * @param {Phaser.Geom.Triangle} triangle - The Triangle to rotate.
 * @param {number} x - The X coordinate of the point to rotate the Triangle about.
 * @param {number} y - The Y coordinate of the point to rotate the Triangle about.
 * @param {number} angle - The angle by which to rotate the Triangle, in radians.
 *
 * @return {Phaser.Geom.Triangle} The rotated Triangle.
 */
export function RotateAroundXY (triangle: ITriangle, x: number, y: number, angle: number): ITriangle
{
    const { x1, y1, x2, y2, x3, y3 } = triangle;

    const c = Math.cos(angle);
    const s = Math.sin(angle);

    return triangle.set(
        (x1 - x) * c - (y1 - y) * s + x,
        (x1 - x) * s + (y1 - y) * c + y,
        (x2 - x) * c - (y2 - y) * s + x,
        (x2 - x) * s + (y2 - y) * c + y,
        (x3 - x) * c - (y3 - y) * s + x,
        (x3 - x) * s + (y3 - y) * c + y
    );
}
