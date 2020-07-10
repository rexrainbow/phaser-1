/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

import { GetLineLength } from './GetLineLength';
import { ILine } from './ILine';

/**
 * Extends the start and end points of a Line by the given amounts.
 *
 * The amounts can be positive or negative. Positive points will increase the length of the line,
 * while negative ones will decrease it.
 *
 * If no `right` value is provided it will extend the length of the line equally in both directions.
 *
 * Pass a value of zero to leave the start or end point unchanged.
 */
export function ExtendLine (line: ILine, left: number, right: number = left): ILine
{
    const length = GetLineLength(line);

    const slopX = line.x2 - line.x1;
    const slopY = line.y2 - line.y1;

    if (left)
    {
        line.x1 = line.x1 - slopX / length * left;
        line.y1 = line.y1 - slopY / length * left;
    }

    if (right)
    {
        line.x2 = line.x2 + slopX / length * right;
        line.y2 = line.y2 + slopY / length * right;
    }

    return line;
}
