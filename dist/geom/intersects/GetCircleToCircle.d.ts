/**
 * @author       Florian Vazelle
 * @author       Geoffrey Glaive
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
import ICircle from '../circle/ICircle';
import Vec2 from '../../math/vec2/Vec2';
/**
 * Checks if two Circles intersect and returns the intersection points as a Point object array.
 *
 * @function Phaser.Geom.Intersects.GetCircleToCircle
 * @since 3.0.0
 *
 * @param {Phaser.Geom.Circle} circleA - The first Circle to check for intersection.
 * @param {Phaser.Geom.Circle} circleB - The second Circle to check for intersection.
 * @param {array} [out] - An optional array in which to store the points of intersection.
 *
 * @return {array} An array with the points of intersection if objects intersect, otherwise an empty array.
 */
export default function GetCircleToCircle(circleA: ICircle, circleB: ICircle, out?: Vec2[]): Vec2[];
//# sourceMappingURL=GetCircleToCircle.d.ts.map