/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

import { GetLineAngle } from './GetLineAngle';
import { GetLineNormalAngle } from './GetLineNormalAngle';
import { ILine } from './ILine';

/**
 * Calculate the reflected angle between two lines.
 *
 * This is the outgoing angle based on the angle of Line 1 and the normalAngle of Line 2.
 */
export function GetLineReflectAngle (lineA: ILine, lineB: ILine): number
{
    return (2 * GetLineNormalAngle(lineB) - Math.PI - GetLineAngle(lineA));
}
