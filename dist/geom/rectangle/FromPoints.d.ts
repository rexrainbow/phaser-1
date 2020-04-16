/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
import Rectangle from './Rectangle';
import IVec2 from '../../math/vec2/IVec2';
/**
 * Constructs new Rectangle or repositions and resizes an existing Rectangle so that all of the given points are on or within its bounds.
 *
 * @function Phaser.Geom.Rectangle.FromPoints
 * @since 3.0.0
 *
 * @generic {Phaser.Geom.Rectangle} O - [out,$return]
 *
 * @param {array} points - An array of points (either arrays with two elements corresponding to the X and Y coordinate or an object with public `x` and `y` properties) which should be surrounded by the Rectangle.
 * @param {Phaser.Geom.Rectangle} [out] - Optional Rectangle to adjust.
 *
 * @return {Phaser.Geom.Rectangle} The adjusted `out` Rectangle, or a new Rectangle if none was provided.
 */
export default function FromPoints(points: IVec2[], out?: Rectangle): Rectangle;
//# sourceMappingURL=FromPoints.d.ts.map