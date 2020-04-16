/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
import ITriangle from '../triangle/ITriangle';
/**
 * Checks if two Triangles intersect.
 *
 * A Triangle intersects another Triangle if any pair of their lines intersects or if any point of one Triangle is within the other Triangle. Thus, the Triangles are considered "solid".
 *
 * @function Phaser.Geom.Intersects.TriangleToTriangle
 * @since 3.0.0
 *
 * @param {Phaser.Geom.Triangle} triangleA - The first Triangle to check for intersection.
 * @param {Phaser.Geom.Triangle} triangleB - The second Triangle to check for intersection.
 *
 * @return {boolean} `true` if the Triangles intersect, otherwise `false`.
 */
export default function TriangleToTriangle(triangleA: ITriangle, triangleB: ITriangle): boolean;
//# sourceMappingURL=TriangleToTriangle.d.ts.map