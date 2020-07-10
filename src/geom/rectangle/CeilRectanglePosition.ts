/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

import { IRectangle } from './IRectangle';

/**
 * Rounds a Rectangle's position up to the smallest integer greater than or equal to each current coordinate.
 */
export function CeilRectanglePosition (rect: IRectangle): IRectangle
{
    rect.x = Math.ceil(rect.x);
    rect.y = Math.ceil(rect.y);

    return rect;
}
