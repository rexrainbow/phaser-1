/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

import { CircleContains } from './CircleContains';
import { ICircle } from './ICircle';
import { Vec2 } from '../../math/vec2/Vec2';

/**
 * Check to see if the Circle contains the given Point object.
 */
export function CircleContainsPoint (circle: ICircle, point: Vec2): boolean
{
    return CircleContains(circle, point.x, point.y);
}
