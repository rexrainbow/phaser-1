/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

import { IRectangle } from './IRectangle';

/**
 * Calculates the perimeter of a Rectangle.
 *
 * @function Phaser.Geom.Rectangle.Perimeter
 * @since 3.0.0
 *
 * @param {Phaser.Geom.Rectangle} rect - The Rectangle to use.
 *
 * @return {number} The perimeter of the Rectangle, equal to `(width * 2) + (height * 2)`.
 */
export function Perimeter (rect: IRectangle): number
{
    return 2 * (rect.width + rect.height);
}
