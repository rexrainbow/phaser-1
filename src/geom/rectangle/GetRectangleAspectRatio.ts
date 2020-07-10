/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

import { IRectangle } from './IRectangle';

/**
 * Calculates the width/height ratio of a rectangle.
 */
export function GetRectangleAspectRatio (rect: IRectangle): number
{
    return (rect.height === 0) ? NaN : rect.width / rect.height;
}
