/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

import { IRectangle } from './IRectangle';

/**
 * Rounds down (floors) the top left X and Y coordinates of the given Rectangle to the largest integer less than or equal to them
 */
export function FloorRectanglePosition (rect: IRectangle): IRectangle
{
    rect.x = Math.floor(rect.x);
    rect.y = Math.floor(rect.y);

    return rect;
}
