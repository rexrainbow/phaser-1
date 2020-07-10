/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

import { GetLineAngle } from './GetLineAngle';
import { ILine } from './ILine';
import { MATH_CONST } from '../../math/const';
import { Wrap } from '../../math/Wrap';

/**
 * Get the angle of the normal of the given line in radians.
 */
export function GetLineNormalAngle (line: ILine): number
{
    const angle = GetLineAngle(line) - MATH_CONST.HALF_PI;

    return Wrap(angle, -Math.PI, Math.PI);
}
