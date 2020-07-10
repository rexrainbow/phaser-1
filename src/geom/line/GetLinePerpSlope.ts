/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

import { ILine } from './ILine';

/**
 * Calculate the perpendicular slope of the given line.
 */
export function GetLinePerpSlope (line: ILine): number
{
    const { x1, y1, x2, y2 } = line;

    return -((x2 - x1) / (y2 - y1));
}
