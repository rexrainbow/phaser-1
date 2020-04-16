/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
import IRectangle from './IRectangle';
import Vec2 from '../../math/vec2/Vec2';
/**
 * Returns a Point from the perimeter of a Rectangle based on the given angle.
 *
 * @function Phaser.Geom.Rectangle.PerimeterPoint
 * @since 3.0.0
 *
 * @generic {Phaser.Geom.Point} O - [out,$return]
 *
 * @param {Phaser.Geom.Rectangle} rectangle - The Rectangle to get the perimeter point from.
 * @param {number} angle - The angle of the point, in degrees.
 * @param {Phaser.Geom.Point} [out] - The Point object to store the position in. If not given, a new Point instance is created.
 *
 * @return {Phaser.Geom.Point} A Point object holding the coordinates of the Rectangle perimeter.
 */
export default function PerimeterPoint(rectangle: IRectangle, angle: number, out?: Vec2): Vec2;
//# sourceMappingURL=PerimeterPoint.d.ts.map