/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

import { ICircle } from './ICircle';

/**
 * Compares the `x`, `y` and `radius` properties of the two given Circles.
 * Returns `true` if they all match, otherwise returns `false`.
 */
export function CircleEquals (circle: ICircle, toCompare: ICircle): boolean
{
    return (
        circle.x === toCompare.x &&
        circle.y === toCompare.y &&
        circle.radius === toCompare.radius
    );
}
