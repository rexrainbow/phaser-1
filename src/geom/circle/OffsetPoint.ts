/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

import ICircle from './ICircle';
import IVec2 from '../../math/vec2/IVec2';

/**
 * Offsets the Circle by the values given in the `x` and `y` properties of the Point object.
 *
 * @function Phaser.Geom.Circle.OffsetVec2
 * @since 3.0.0
 *
 * @generic {Phaser.Geom.Circle} O - [circle,$return]
 *
 * @param {Phaser.Geom.Circle} circle - The Circle to be offset (translated.)
 * @param {(Phaser.Geom.Point|object)} point - The Point object containing the values to offset the Circle by.
 *
 * @return {Phaser.Geom.Circle} The Circle that was offset.
 */
export default function OffsetPoint (circle: ICircle, point: IVec2): ICircle
{
    circle.x += point.x;
    circle.y += point.y;

    return circle;
}
