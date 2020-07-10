/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

import { GetLineAngle } from './GetLineAngle';
import { ILine } from './ILine';
import { MATH_CONST } from '../../math/const';
import { Vec2 } from '../../math/vec2/Vec2';

/**
 * Calculate the normal of the given line.
 *
 * The normal of a line is a vector that points perpendicular from it.
 */
export function GetLineNormal (line: ILine, out: Vec2 = new Vec2()): Vec2
{
    const a = GetLineAngle(line) - MATH_CONST.HALF_PI;

    out.x = Math.cos(a);
    out.y = Math.sin(a);

    return out;
}
