/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
import ITriangle from './ITriangle';
import Vec2 from '../../math/vec2/Vec2';
/**
 * Computes the circumcentre of a triangle. The circumcentre is the centre of
 * the circumcircle, the smallest circle which encloses the triangle. It is also
 * the common intersection point of the perpendicular bisectors of the sides of
 * the triangle, and is the only point which has equal distance to all three
 * vertices of the triangle.
 *
 * @function Phaser.Geom.Triangle.CircumCenter
 * @since 3.0.0
 *
 * @generic {Phaser.Math.Vector2} O - [out,$return]
 *
 * @param {Phaser.Geom.Triangle} triangle - The Triangle to get the circumcenter of.
 * @param {Phaser.Math.Vector2} [out] - The Vector2 object to store the position in. If not given, a new Vector2 instance is created.
 *
 * @return {Phaser.Math.Vector2} A Vector2 object holding the coordinates of the circumcenter of the Triangle.
 */
export default function CircumCenter(triangle: ITriangle, out?: Vec2): Vec2;
//# sourceMappingURL=CircumCenter.d.ts.map