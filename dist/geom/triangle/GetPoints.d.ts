/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
import ITriangle from './ITriangle';
import Vec2 from '../../math/vec2/Vec2';
/**
 * Returns an array of evenly spaced points on the perimeter of a Triangle.
 *
 * @function Phaser.Geom.Triangle.GetPoints
 * @since 3.0.0
 *
 * @generic {Phaser.Geom.Point} O - [out,$return]
 *
 * @param {Phaser.Geom.Triangle} triangle - The Triangle to get the points from.
 * @param {integer} quantity - The number of evenly spaced points to return. Set to 0 to return an arbitrary number of points based on the `stepRate`.
 * @param {number} stepRate - If `quantity` is 0, the distance between each returned point.
 * @param {(array|Phaser.Geom.Point[])} [out] - An array to which the points should be appended.
 *
 * @return {(array|Phaser.Geom.Point[])} The modified `out` array, or a new array if none was provided.
 */
export default function GetPoints(triangle: ITriangle, quantity: number, stepRate: number, out?: Vec2[]): Vec2[];
//# sourceMappingURL=GetPoints.d.ts.map