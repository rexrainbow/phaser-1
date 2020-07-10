/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

import { IRectangle } from './IRectangle';

/**
 * Moves the top-left corner of a Rectangle so that its center is at the given coordinates.
 */
export function CenterRectangleOn (rect: IRectangle, x: number, y: number): IRectangle
{
    rect.x = x - (rect.width / 2);
    rect.y = y - (rect.height / 2);

    return rect;
}
