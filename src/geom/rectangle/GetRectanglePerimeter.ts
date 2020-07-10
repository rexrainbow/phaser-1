/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

import { IRectangle } from './IRectangle';

/**
 * Calculates the perimeter of a Rectangle.
 */
export function GetRectanglePerimeter (rect: IRectangle): number
{
    return 2 * (rect.width + rect.height);
}
