/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

import { GetVec2Distance } from '../../math/vec2/GetVec2Distance';
import { ICircle } from '../circle/ICircle';

/**
 * Checks if two Circles intersect.
 */
export function CircleToCircle (circleA: ICircle, circleB: ICircle): boolean
{
    return (GetVec2Distance(circleA, circleB) <= (circleA.radius + circleB.radius));
}
