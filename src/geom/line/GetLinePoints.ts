/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

import { GetLineLength } from './GetLineLength';
import { ILine } from './ILine';
import { Vec2 } from '../../math/vec2/Vec2';

/**
 * Get a number of points along a line's length.
 *
 * Provide a `quantity` to get an exact number of points along the line.
 *
 * Provide a `stepRate` to ensure a specific distance between each point on the line. Set `quantity` to `0` when
 * providing a `stepRate`.
 */
export function GetLinePoints (line: ILine, quantity: number, stepRate: number = 0, out: Vec2[] = []): Vec2[]
{
    //  If quantity is a falsey value (false, null, 0, undefined, etc) then we calculate it based on the stepRate instead.
    if (!quantity)
    {
        quantity = GetLineLength(line) / stepRate;
    }

    const { x1, y1, x2, y2 } = line;

    for (let i = 0; i < quantity; i++)
    {
        const position = i / quantity;

        const x = x1 + (x2 - x1) * position;
        const y = y1 + (y2 - y1) * position;

        out.push(new Vec2(x, y));
    }

    return out;
}
