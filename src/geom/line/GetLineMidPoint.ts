/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

import { ILine } from './ILine';
import { Vec2 } from '../../math/vec2/Vec2';

/**
 * Get the midpoint of the given line.
 */
export function GetLineMidPoint (line: ILine, out: Vec2 = new Vec2()): Vec2
{
    out.x = (line.x1 + line.x2) / 2;
    out.y = (line.y1 + line.y2) / 2;

    return out;
}
