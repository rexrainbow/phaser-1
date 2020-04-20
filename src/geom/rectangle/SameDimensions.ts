/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

import { IRectangle } from './IRectangle';

/**
 * Determines if the two objects (either Rectangles or Rectangle-like) have the same width and height values under strict equality.
 *
 * @function Phaser.Geom.Rectangle.SameDimensions
 * @since 3.15.0
 *
 * @param {Phaser.Geom.Rectangle} rect - The first Rectangle object.
 * @param {Phaser.Geom.Rectangle} toCompare - The second Rectangle object.
 *
 * @return {boolean} `true` if the objects have equivalent values for the `width` and `height` properties, otherwise `false`.
 */
export function SameDimensions (rect: IRectangle, toCompare: IRectangle): boolean
{
    return (rect.width === toCompare.width && rect.height === toCompare.height);
}
