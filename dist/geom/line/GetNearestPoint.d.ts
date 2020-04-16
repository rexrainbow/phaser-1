/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @author       Florian Mertens
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
import ILine from './ILine';
import IVec2 from '../../math/vec2/IVec2';
import Vec2 from '../../math/vec2/Vec2';
/**
 * Get the nearest point on a line perpendicular to the given point.
 *
 * @function Phaser.Geom.Line.GetNearestPoint
 * @since 3.16.0
 *
 * @generic {Phaser.Geom.Point} O - [out,$return]
 *
 * @param {Phaser.Geom.Line} line - The line to get the nearest point on.
 * @param {(Phaser.Geom.Point|object)} point - The point to get the nearest point to.
 * @param {(Phaser.Geom.Point|object)} [out] - An optional point, or point-like object, to store the coordinates of the nearest point on the line.
 *
 * @return {(Phaser.Geom.Point|object)} The nearest point on the line.
 */
export default function GetNearestPoint(line: ILine, point: IVec2, out?: Vec2): Vec2;
//# sourceMappingURL=GetNearestPoint.d.ts.map