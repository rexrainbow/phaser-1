/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

import { GetLineAngle } from './GetLineAngle';
import { ILine } from './ILine';
import { MATH_CONST } from '../../math/const';

/**
 * The Y value of the normal of the given line.
 * The normal of a line is a vector that points perpendicular from it.
 */
export function GetLineNormalY (line: ILine): number
{
    return Math.sin(GetLineAngle(line) - MATH_CONST.HALF_PI);
}
