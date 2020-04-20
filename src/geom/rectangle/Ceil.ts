/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

import { IRectangle } from './IRectangle';

/**
 * Rounds a Rectangle's position up to the smallest integer greater than or equal to each current coordinate.
 *
 * @function Phaser.Geom.Rectangle.Ceil
 * @since 3.0.0
 *
 * @generic {Phaser.Geom.Rectangle} O - [rect,$return]
 *
 * @param {Phaser.Geom.Rectangle} rect - The Rectangle to adjust.
 *
 * @return {Phaser.Geom.Rectangle} The adjusted Rectangle.
 */
export function Ceil (rect: IRectangle): IRectangle
{
    rect.x = Math.ceil(rect.x);
    rect.y = Math.ceil(rect.y);

    return rect;
}
