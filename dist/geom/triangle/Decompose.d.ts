/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
import ITriangle from './ITriangle';
import Vec2 from '../../math/vec2/Vec2';
/**
 * Decomposes a Triangle into an array of its points.
 *
 * @function Phaser.Geom.Triangle.Decompose
 * @since 3.0.0
 *
 * @param {Phaser.Geom.Triangle} triangle - The Triangle to decompose.
 * @param {array} [out] - An array to store the points into.
 *
 * @return {array} The provided `out` array, or a new array if none was provided, with three objects with `x` and `y` properties representing each point of the Triangle appended to it.
 */
export default function Decompose(triangle: ITriangle, out?: Vec2[]): Vec2[];
//# sourceMappingURL=Decompose.d.ts.map