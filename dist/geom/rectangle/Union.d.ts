/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
import Rectangle from './Rectangle';
import IRectangle from './IRectangle';
/**
 * Creates a new Rectangle or repositions and/or resizes an existing Rectangle so that it encompasses the two given Rectangles, i.e. calculates their union.
 *
 * @function Phaser.Geom.Rectangle.Union
 * @since 3.0.0
 *
 * @generic {Phaser.Geom.Rectangle} O - [out,$return]
 *
 * @param {Phaser.Geom.Rectangle} rectA - The first Rectangle to use.
 * @param {Phaser.Geom.Rectangle} rectB - The second Rectangle to use.
 * @param {Phaser.Geom.Rectangle} [out] - The Rectangle to store the union in.
 *
 * @return {Phaser.Geom.Rectangle} The modified `out` Rectangle, or a new Rectangle if none was provided.
 */
export default function Union(rectA: IRectangle, rectB: IRectangle, out?: Rectangle): Rectangle;
//# sourceMappingURL=Union.d.ts.map