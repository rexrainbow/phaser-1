/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

import { IRectangle } from './IRectangle';
import { RectangleContains } from './RectangleContains';
import { Vec2 } from '../../math/vec2/Vec2';

/**
 * Determines whether the specified point is contained within the rectangular region defined by this Rectangle object.
 */
export function RectangleContainsPoint (rect: IRectangle, point: Vec2): boolean
{
    return RectangleContains(rect, point.x, point.y);
}
