/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

import { ILine } from './ILine';

/**
 * Calculate the slope of the given line.
 */
export function GetLineSlope (line: ILine): number
{
    const { x1, y1, x2, y2 } = line;

    return (y2 - y1) / (x2 - x1);
}
