/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

import { ICircle } from './ICircle';

/**
 * Check to see if the Circle contains the given x / y coordinates.

 */
export function CircleContains (circle: ICircle, x: number, y: number): boolean
{
    //  Check if x/y are within the bounds first
    if (circle.radius > 0 && x >= circle.left && x <= circle.right && y >= circle.top && y <= circle.bottom)
    {
        const dx = (circle.x - x) * (circle.x - x);
        const dy = (circle.y - y) * (circle.y - y);

        return (dx + dy) <= (circle.radius * circle.radius);
    }
    else
    {
        return false;
    }
}
