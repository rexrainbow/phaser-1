/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

import { ILine } from './ILine';

/**
 * Calculate the angle of the line in radians.
 */
export function GetLineAngle (line: ILine): number
{
    return Math.atan2(line.y2 - line.y1, line.x2 - line.x1);
}
