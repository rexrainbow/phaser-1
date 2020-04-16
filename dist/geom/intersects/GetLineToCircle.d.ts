/**
 * @author       Florian Vazelle
 * @author       Geoffrey Glaive
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
import ILine from '../line/ILine';
import ICircle from '../circle/ICircle';
import Vec2 from '../../math/vec2/Vec2';
/**
 * Checks for intersection between the line segment and circle,
 * and returns the intersection points as a Point object array.
 *
 * @function Phaser.Geom.Intersects.GetLineToCircle
 * @since 3.0.0
 *
 * @param {Phaser.Geom.Line} line - The line segment to check.
 * @param {Phaser.Geom.Circle} circle - The circle to check against the line.
 * @param {array} [out] - An optional array in which to store the points of intersection.
 *
 * @return {array} An array with the points of intersection if objects intersect, otherwise an empty array.
 */
export default function GetLineToCircle(line: ILine, circle: ICircle, out?: Vec2[]): Vec2[];
//# sourceMappingURL=GetLineToCircle.d.ts.map