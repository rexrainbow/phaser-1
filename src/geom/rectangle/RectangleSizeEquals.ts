/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

import { IRectangle } from './IRectangle';

/**
 * Determines if the two objects (either Rectangles or Rectangle-like) have the same width and height values under strict equality.
 */
export function RectangleSizeEquals (rect: IRectangle, toCompare: IRectangle): boolean
{
    return (rect.width === toCompare.width && rect.height === toCompare.height);
}
