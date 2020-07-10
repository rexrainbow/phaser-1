/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

import { ILine } from './ILine';

/**
 * Translate a line by the given amount.
 */
export function TranslateLine (line: ILine, x: number, y: number): ILine
{
    line.x1 += x;
    line.y1 += y;

    line.x2 += x;
    line.y2 += y;

    return line;
}
