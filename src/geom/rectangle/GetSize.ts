/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

import IRectangle from './IRectangle';
import Vec2 from '../../math/vec2/Vec2';

/**
 * Returns the size of the Rectangle, expressed as a Point object.
 * With the value of the `width` as the `x` property and the `height` as the `y` property.
 *
 * @function Phaser.Geom.Rectangle.GetSize
 * @since 3.0.0
 *
 * @generic {Phaser.Geom.Point} O - [out,$return]
 *
 * @param {Phaser.Geom.Rectangle} rect - The Rectangle to get the size from.
 * @param {(Phaser.Geom.Point|object)} [out] - The Point object to store the size in. If not given, a new Point instance is created.
 *
 * @return {(Phaser.Geom.Point|object)} A Point object where `x` holds the width and `y` holds the height of the Rectangle.
 */
export default function GetSize (rect: IRectangle, out: Vec2 = new Vec2()): Vec2
{
    return out.set(rect.width, rect.height);
}
