/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

import { GetLineAngle } from './GetLineAngle';
import { ILine } from './ILine';
import { MATH_CONST } from '../../math/const';

/**
 * Returns the x component of the normal vector of the given line.
 */
export function GetLineNormalX (line: ILine): number
{
    return Math.cos(GetLineAngle(line) - MATH_CONST.HALF_PI);
}
