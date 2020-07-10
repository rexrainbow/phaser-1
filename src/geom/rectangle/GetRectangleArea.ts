/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

import { IRectangle } from './IRectangle';

/**
 * Calculates the area of the given Rectangle object.
 */
export function GetRectangleArea (rect: IRectangle): number
{
    return rect.width * rect.height;
}
