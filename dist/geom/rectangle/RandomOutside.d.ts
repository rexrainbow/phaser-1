/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
import IRectangle from './IRectangle';
import Vec2 from '../../math/vec2/Vec2';
/**
 * Calculates a random point that lies within the `outer` Rectangle, but outside of the `inner` Rectangle.
 * The inner Rectangle must be fully contained within the outer rectangle.
 *
 * @function Phaser.Geom.Rectangle.RandomOutside
 * @since 3.10.0
 *
 * @generic {Phaser.Geom.Point} O - [out,$return]
 *
 * @param {Phaser.Geom.Rectangle} outer - The outer Rectangle to get the random point within.
 * @param {Phaser.Geom.Rectangle} inner - The inner Rectangle to exclude from the returned point.
 * @param {Phaser.Geom.Point} [out] - A Point, or Point-like object to store the result in. If not specified, a new Point will be created.
 *
 * @return {Phaser.Geom.Point} A Point object containing the random values in its `x` and `y` properties.
 */
export default function RandomOutside(outer: IRectangle, inner: IRectangle, out?: Vec2): Vec2;
//# sourceMappingURL=RandomOutside.d.ts.map