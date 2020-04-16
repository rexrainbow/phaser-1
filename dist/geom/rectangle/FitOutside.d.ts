/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
import IRectangle from './IRectangle';
/**
 * Adjusts the target rectangle, changing its width, height and position,
 * so that it fully covers the area of the source rectangle, while maintaining its original
 * aspect ratio.
 *
 * Unlike the `FitInside` function, the target rectangle may extend further out than the source.
 *
 * @function Phaser.Geom.Rectangle.FitOutside
 * @since 3.0.0
 *
 * @generic {Phaser.Geom.Rectangle} O - [target,$return]
 *
 * @param {Phaser.Geom.Rectangle} target - The target rectangle to adjust.
 * @param {Phaser.Geom.Rectangle} source - The source rectangle to envelope the target in.
 *
 * @return {Phaser.Geom.Rectangle} The modified target rectangle instance.
 */
export default function FitOutside(target: IRectangle, source: IRectangle): IRectangle;
//# sourceMappingURL=FitOutside.d.ts.map