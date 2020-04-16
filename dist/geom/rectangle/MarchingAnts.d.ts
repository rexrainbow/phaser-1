/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
import IRectangle from './IRectangle';
import Vec2 from '../../math/vec2/Vec2';
/**
 * Returns an array of points from the perimeter of the Rectangle, where each point is spaced out based
 * on either the `step` value, or the `quantity`.
 *
 * @function Phaser.Geom.Rectangle.MarchingAnts
 * @since 3.0.0
 *
 * @generic {Phaser.Geom.Point[]} O - [out,$return]
 *
 * @param {Phaser.Geom.Rectangle} rect - The Rectangle to get the perimeter points from.
 * @param {number} [step] - The distance between each point of the perimeter. Set to `null` if you wish to use the `quantity` parameter instead.
 * @param {integer} [quantity] - The total number of points to return. The step is then calculated based on the length of the Rectangle, divided by this value.
 * @param {(array|Phaser.Geom.Point[])} [out] - An array in which the perimeter points will be stored. If not given, a new array instance is created.
 *
 * @return {(array|Phaser.Geom.Point[])} An array containing the perimeter points from the Rectangle.
 */
export default function MarchingAnts(rect: IRectangle, step?: number, quantity?: number, out?: Vec2[]): Vec2[];
//# sourceMappingURL=MarchingAnts.d.ts.map