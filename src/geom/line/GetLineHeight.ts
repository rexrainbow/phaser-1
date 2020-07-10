/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

import { ILine } from './ILine';

/**
 * Calculate the height of the given line.
 */
export function GetLineHeight (line: ILine): number
{
    return Math.abs(line.y1 - line.y2);
}
