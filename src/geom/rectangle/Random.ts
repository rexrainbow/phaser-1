/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

import IRectangle from './IRectangle';
import Vec2 from '../../math/vec2/Vec2';

/**
 * Returns a random point within a Rectangle.
 *
 * @function Phaser.Geom.Rectangle.Random
 * @since 3.0.0
 *
 * @generic {Phaser.Geom.Point} O - [out,$return]
 *
 * @param {Phaser.Geom.Rectangle} rect - The Rectangle to return a point from.
 * @param {Phaser.Geom.Point} out - The object to update with the point's coordinates.
 *
 * @return {Phaser.Geom.Point} The modified `out` object, or a new Point if none was provided.
 */
export default function Random (rect: IRectangle, out: Vec2 = new Vec2()): Vec2
{
    return out.set(
        rect.x + (Math.random() * rect.width),
        rect.y + (Math.random() * rect.height)
    );
}
