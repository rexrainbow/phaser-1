/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

import { ILine } from './ILine';
import { IVec2Like } from '../../math/vec2/IVec2Like';
import { TranslateLine } from './TranslateLine';

/**
 * Translate a line by the given vector.
 */
export function TranslateLinePoint (line: ILine, v: IVec2Like): ILine
{
    return TranslateLine(line, v.x, v.y);
}
