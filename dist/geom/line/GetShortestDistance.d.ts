/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @author       Florian Mertens
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
import ILine from './ILine';
import IVec2 from '../../math/vec2/IVec2';
/**
 * Get the shortest distance from a Line to the given Point.
 *
 * @function Phaser.Geom.Line.GetShortestDistance
 * @since 3.16.0
 *
 * @generic {Phaser.Geom.Point} O - [out,$return]
 *
 * @param {Phaser.Geom.Line} line - The line to get the distance from.
 * @param {(Phaser.Geom.Point|object)} point - The point to get the shortest distance to.
 *
 * @return {number} The shortest distance from the line to the point.
 */
export default function GetShortestDistance(line: ILine, point: IVec2): number;
//# sourceMappingURL=GetShortestDistance.d.ts.map