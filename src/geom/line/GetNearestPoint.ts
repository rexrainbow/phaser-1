/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @author       Florian Mertens
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

import { ILine } from './ILine';
import { Vec2 } from '../../math/vec2/Vec2';

/**
 * Get the nearest point on a line perpendicular to the given point.
 *
 * @function Phaser.Geom.Line.GetNearestPoint
 * @since 3.16.0
 *
 * @generic {Phaser.Geom.Point} O - [out,$return]
 *
 * @param {Phaser.Geom.Line} line - The line to get the nearest point on.
 * @param {(Phaser.Geom.Point|object)} point - The point to get the nearest point to.
 * @param {(Phaser.Geom.Point|object)} [out] - An optional point, or point-like object, to store the coordinates of the nearest point on the line.
 *
 * @return {(Phaser.Geom.Point|object)} The nearest point on the line.
 */
export function GetNearestPoint (line: ILine, point: Vec2, out: Vec2 = new Vec2()): Vec2
{
    const { x1, y1, x2, y2 } = line;

    const L2 = (((x2 - x1) * (x2 - x1)) + ((y2 - y1) * (y2 - y1)));

    if (L2 === 0)
    {
        return out;
    }

    const r = (((point.x - x1) * (x2 - x1)) + ((point.y - y1) * (y2 - y1))) / L2;

    out.x = x1 + (r * (x2 - x1));
    out.y = y1 + (r * (y2 - y1));

    return out;
}
