/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

import { IRectangle } from './IRectangle';

/**
 * Calculates the width/height ratio of a rectangle.
 *
 * @function Phaser.Geom.Rectangle.GetAspectRatio
 * @since 3.0.0
 *
 * @param {Phaser.Geom.Rectangle} rect - The rectangle.
 *
 * @return {number} The width/height ratio of the rectangle.
 */
export function GetAspectRatio (rect: IRectangle): number
{
    return (rect.height === 0) ? NaN : rect.width / rect.height;
}
