/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
import ILine from '../line/ILine';
import IVec2 from '../../math/vec2/IVec2';
import ICircle from '../circle/ICircle';
/**
 * Checks for intersection between the line segment and circle.
 *
 * Based on code by [Matt DesLauriers](https://github.com/mattdesl/line-circle-collision/blob/master/LICENSE.md).
 *
 * @function Phaser.Geom.Intersects.LineToCircle
 * @since 3.0.0
 *
 * @param {Phaser.Geom.Line} line - The line segment to check.
 * @param {Phaser.Geom.Circle} circle - The circle to check against the line.
 * @param {(Phaser.Geom.Point|any)} [nearest] - An optional Point-like object. If given the closest point on the Line where the circle intersects will be stored in this object.
 *
 * @return {boolean} `true` if the two objects intersect, otherwise `false`.
 */
export default function LineToCircle(line: ILine, circle: ICircle, nearest?: IVec2): boolean;
//# sourceMappingURL=LineToCircle.d.ts.map