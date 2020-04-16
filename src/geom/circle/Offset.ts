/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

import ICircle from './ICircle';

/**
 * Offsets the Circle by the values given.
 *
 * @function Phaser.Geom.Circle.Offset
 * @since 3.0.0
 *
 * @generic {Phaser.Geom.Circle} O - [circle,$return]
 *
 * @param {Phaser.Geom.Circle} circle - The Circle to be offset (translated.)
 * @param {number} x - The amount to horizontally offset the Circle by.
 * @param {number} y - The amount to vertically offset the Circle by.
 *
 * @return {Phaser.Geom.Circle} The Circle that was offset.
 */
export default function Offset (circle: ICircle, x: number, y: number): ICircle
{
    circle.x += x;
    circle.y += y;

    return circle;
}
