/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

import { ITriangle } from './ITriangle';
import { TriangleContains } from './TriangleContains';
import { Vec2 } from '../../math/vec2/Vec2';

/**
 * Tests if a triangle contains a point.
 */
export function TriangleContainsPoint (triangle: ITriangle, point: Vec2): boolean
{
    return TriangleContains(triangle, point.x, point.y);
}
