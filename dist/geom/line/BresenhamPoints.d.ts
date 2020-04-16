/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
import ILine from './ILine';
import Vec2 from '../../math/vec2/Vec2';
/**
 * Using Bresenham's line algorithm this will return an array of all coordinates on this line.
 *
 * The `start` and `end` points are rounded before this runs as the algorithm works on integers.
 *
 * @function Phaser.Geom.Line.BresenhamPoints
 * @since 3.0.0
 *
 * @param {Phaser.Geom.Line} line - The line.
 * @param {integer} [stepRate=1] - The optional step rate for the points on the line.
 * @param {Phaser.Types.Math.Vector2Like[]} [results] - An optional array to push the resulting coordinates into.
 *
 * @return {Phaser.Types.Math.Vector2Like[]} The array of coordinates on the line.
 */
export default function BresenhamPoints(line: ILine, stepRate?: number, results?: Vec2[]): Vec2[];
//# sourceMappingURL=BresenhamPoints.d.ts.map