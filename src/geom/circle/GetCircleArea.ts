/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

import { ICircle } from './ICircle';

/**
 * Calculates the area of the circle.
 */
export function GetCircleArea (circle: ICircle): number
{
    return (circle.radius > 0) ? Math.PI * circle.radius * circle.radius : 0;
}
