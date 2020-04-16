/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
import ITriangle from '../triangle/ITriangle';
import ICircle from '../circle/ICircle';
/**
 * Checks if a Triangle and a Circle intersect.
 *
 * A Circle intersects a Triangle if its center is located within it or if any of the Triangle's sides intersect the Circle. As such, the Triangle and the Circle are considered "solid" for the intersection.
 *
 * @function Phaser.Geom.Intersects.TriangleToCircle
 * @since 3.0.0
 *
 * @param {Phaser.Geom.Triangle} triangle - The Triangle to check for intersection.
 * @param {Phaser.Geom.Circle} circle - The Circle to check for intersection.
 *
 * @return {boolean} `true` if the Triangle and the `Circle` intersect, otherwise `false`.
 */
export default function TriangleToCircle(triangle: ITriangle, circle: ICircle): boolean;
//# sourceMappingURL=TriangleToCircle.d.ts.map