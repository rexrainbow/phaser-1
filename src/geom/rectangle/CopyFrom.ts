/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

import { IRectangle } from './IRectangle';

/**
 * Copy the values of one Rectangle to a destination Rectangle.
 *
 * @function Phaser.Geom.Rectangle.CopyFrom
 * @since 3.0.0
 *
 * @generic {Phaser.Geom.Rectangle} O - [dest,$return]
 *
 * @param {Phaser.Geom.Rectangle} source - The source Rectangle to copy the values from.
 * @param {Phaser.Geom.Rectangle} dest - The destination Rectangle to copy the values to.
 *
 * @return {Phaser.Geom.Rectangle} The destination Rectangle.
 */
export function CopyFrom (source: IRectangle, dest: IRectangle): IRectangle
{
    return dest.set(source.x, source.y, source.width, source.height);
}
