/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @author       Florian Mertens
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
import IVec2 from '../../math/vec2/IVec2';
import ILine from '../line/ILine';
/**
 * Checks if the a Point falls between the two end-points of a Line, based on the given line thickness.
 *
 * Assumes that the line end points are circular, not square.
 *
 * @function Phaser.Geom.Intersects.PointToLine
 * @since 3.0.0
 *
 * @param {(Phaser.Geom.Point|any)} point - The point, or point-like object to check.
 * @param {Phaser.Geom.Line} line - The line segment to test for intersection on.
 * @param {number} [lineThickness=1] - The line thickness. Assumes that the line end points are circular.
 *
 * @return {boolean} `true` if the Point falls on the Line, otherwise `false`.
 */
export default function PointToLine(point: IVec2, line: ILine, lineThickness?: number): boolean;
//# sourceMappingURL=PointToLine.d.ts.map