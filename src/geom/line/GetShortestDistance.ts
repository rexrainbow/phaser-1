/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @author       Florian Mertens
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

import { ILine } from './ILine';
import { IVec2 } from '../../math/vec2/IVec2';

/**
 * Get the shortest distance from a Line to the given Point.
 *
 * @function Phaser.Geom.Line.GetShortestDistance
 * @since 3.16.0
 *
 * @generic {Phaser.Geom.Point} O - [out,$return]
 *
 * @param {Phaser.Geom.Line} line - The line to get the distance from.
 * @param {(Phaser.Geom.Point|object)} point - The point to get the shortest distance to.
 *
 * @return {number} The shortest distance from the line to the point.
 */
export function GetShortestDistance (line: ILine, point: IVec2): number
{
    const { x1, y1, x2, y2 } = line;

    const L2 = (((x2 - x1) * (x2 - x1)) + ((y2 - y1) * (y2 - y1)));

    if (L2 === 0)
    {
        return 0;
    }

    const s = (((y1 - point.y) * (x2 - x1)) - ((x1 - point.x) * (y2 - y1))) / L2;

    return Math.abs(s) * Math.sqrt(L2);
}
