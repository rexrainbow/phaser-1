/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

import { ITriangle } from './ITriangle';

/**
 * Returns true if two triangles have the same coordinates.
 */
export function TriangleEquals (src: ITriangle, dest: ITriangle): boolean
{
    return (
        src.x1 === dest.x1 &&
        src.y1 === dest.y1 &&
        src.x2 === dest.x2 &&
        src.y2 === dest.y2 &&
        src.x3 === dest.x3 &&
        src.y3 === dest.y3
    );
}
