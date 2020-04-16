/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
import IRectangle from './IRectangle';
import Vec2 from '../../math/vec2/Vec2';
/**
 * Merges a Rectangle with a list of points by repositioning and/or resizing it such that all points are located on or within its bounds.
 *
 * @function Phaser.Geom.Rectangle.MergePoints
 * @since 3.0.0
 *
 * @generic {Phaser.Geom.Rectangle} O - [target,$return]
 *
 * @param {Phaser.Geom.Rectangle} target - The Rectangle which should be merged.
 * @param {Phaser.Geom.Point[]} points - An array of Points (or any object with public `x` and `y` properties) which should be merged with the Rectangle.
 *
 * @return {Phaser.Geom.Rectangle} The modified Rectangle.
 */
export default function MergePoints(target: IRectangle, points: Vec2[]): IRectangle;
//# sourceMappingURL=MergePoints.d.ts.map