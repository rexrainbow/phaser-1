/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

import { ILine } from './ILine';

/**
 * Calculate the width of the given line.
 */
export function GetLineWidth (line: ILine): number
{
    return Math.abs(line.x1 - line.x2);
}
