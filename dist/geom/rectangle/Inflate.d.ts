/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
import IRectangle from './IRectangle';
/**
 * Increases the size of a Rectangle by a specified amount.
 *
 * The center of the Rectangle stays the same. The amounts are added to each side, so the actual increase in width or height is two times bigger than the respective argument.
 *
 * @function Phaser.Geom.Rectangle.Inflate
 * @since 3.0.0
 *
 * @generic {Phaser.Geom.Rectangle} O - [rect,$return]
 *
 * @param {Phaser.Geom.Rectangle} rect - The Rectangle to inflate.
 * @param {number} x - How many pixels the left and the right side should be moved by horizontally.
 * @param {number} y - How many pixels the top and the bottom side should be moved by vertically.
 *
 * @return {Phaser.Geom.Rectangle} The inflated Rectangle.
 */
export default function Inflate(rect: IRectangle, x: number, y: number): IRectangle;
//# sourceMappingURL=Inflate.d.ts.map