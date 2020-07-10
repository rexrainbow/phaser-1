/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

import { ICircle } from '../circle/ICircle';
import { Vec2Distance } from '../../math/vec2/Vec2Distance';

/**
 * Checks if two Circles intersect.
 */
export function CircleToCircle (circleA: ICircle, circleB: ICircle): boolean
{
    return (Vec2Distance(circleA, circleB) <= (circleA.radius + circleB.radius));
}
