/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

import { CenterX } from './CenterX';
import { CenterY } from './CenterY';
import { IRectangle } from './IRectangle';
import { Vec2 } from '../../math/vec2/Vec2';

/**
 * Returns the center of a Rectangle as a Point.
 *
 * @function Phaser.Geom.Rectangle.GetCenter
 * @since 3.0.0
 *
 * @generic {Phaser.Geom.Point} O - [out,$return]
 *
 * @param {Phaser.Geom.Rectangle} rect - The Rectangle to get the center of.
 * @param {(Phaser.Geom.Point|object)} [out] - Optional point-like object to update with the center coordinates.
 *
 * @return {(Phaser.Geom.Point|object)} The modified `out` object, or a new Point if none was provided.
 */
export function GetCenter (rect: IRectangle, out: Vec2 = new Vec2()): Vec2
{
    return out.set(CenterX(rect), CenterY(rect));
}
