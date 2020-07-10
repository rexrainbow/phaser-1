/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

import { ITriangle } from './ITriangle';
import { RotateTriangleAround } from './RotateTriangleAround';
import { Vec2 } from '../../math/vec2/Vec2';

/**
 * Rotates a Triangle at a certain angle about a given Point or object with public `x` and `y` properties.
 */
export function RotateTriangleAroundPoint (triangle: ITriangle, point: Vec2, angle: number): ITriangle
{
    return RotateTriangleAround(triangle, point.x, point.y, angle);
}
