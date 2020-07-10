/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

import { ILine } from './ILine';

/**
 * Copy the values of one line to a destination line.
 */
export function CopyLineFrom (source: ILine, dest: ILine): ILine
{
    return dest.set(source.x1, source.y1, source.x2, source.y2);
}
