/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
import ILine from '../line/ILine';
import IVec2 from '../../math/vec2/IVec2';
/**
 * Checks if two Lines intersect.
 * If the Lines are identical, they will be treated as parallel and thus non-intersecting.
 *
 * This is based off an explanation and expanded math presented by Paul Bourke:
 * See http://local.wasp.uwa.edu.au/~pbourke/geometry/lineline2d/
 *
 * @function Phaser.Geom.Intersects.LineToLine
 * @since 3.0.0
 *
 * @param {Phaser.Geom.Line} line1 - The first Line to check.
 * @param {Phaser.Geom.Line} line2 - The second Line to check.
 * @param {Phaser.Geom.Point} [out] - A Point in which to optionally store the point of intersection.
 *
 * @return {boolean} `true` if the two Lines intersect, and the `out` object will be populated, if given. Otherwise, `false`.
 */
export default function LineToLine(line1: ILine, line2: ILine, out?: IVec2): boolean;
//# sourceMappingURL=LineToLine.d.ts.map