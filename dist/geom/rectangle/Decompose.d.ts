/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
import IRectangle from './IRectangle';
import Vec2 from '../../math/vec2/Vec2';
/**
 * Create an array of points for each corner of a Rectangle
 * If an array is specified, each point object will be added to the end of the array, otherwise a new array will be created.
 *
 * @function Phaser.Geom.Rectangle.Decompose
 * @since 3.0.0
 *
 * @param {Phaser.Geom.Rectangle} rect - The Rectangle object to be decomposed.
 * @param {array} [out] - If provided, each point will be added to this array.
 *
 * @return {array} Will return the array you specified or a new array containing the points of the Rectangle.
 */
export default function Decompose(rect: IRectangle, out?: Vec2[]): Vec2[];
//# sourceMappingURL=Decompose.d.ts.map