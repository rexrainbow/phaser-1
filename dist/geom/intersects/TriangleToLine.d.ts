/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
import ITriangle from '../triangle/ITriangle';
import ILine from '../line/ILine';
/**
 * Checks if a Triangle and a Line intersect.
 *
 * The Line intersects the Triangle if it starts inside of it, ends inside of it, or crosses any of the Triangle's sides. Thus, the Triangle is considered "solid".
 *
 * @function Phaser.Geom.Intersects.TriangleToLine
 * @since 3.0.0
 *
 * @param {Phaser.Geom.Triangle} triangle - The Triangle to check with.
 * @param {Phaser.Geom.Line} line - The Line to check with.
 *
 * @return {boolean} `true` if the Triangle and the Line intersect, otherwise `false`.
 */
export default function TriangleToLine(triangle: ITriangle, line: ILine): boolean;
//# sourceMappingURL=TriangleToLine.d.ts.map