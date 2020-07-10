/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

import { ILine } from './ILine';
import { RotateLineAround } from './RotateLineAround';
import { Vec2 } from '../../math/vec2/Vec2';

/**
 * Rotate a line around a point by the given angle in radians.
 */
export function RotateLineAroundPoint (line: ILine, point: Vec2, angle: number): ILine
{
    return RotateLineAround(line, point.x, point.y, angle);
}
