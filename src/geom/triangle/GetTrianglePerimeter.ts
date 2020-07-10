/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

import { GetLineLength } from '../line/GetLineLength';
import { GetTriangleEdges } from './GetTriangleEdges';
import { ITriangle } from './ITriangle';

/**
 * Gets the length of the perimeter of the given triangle.
 * Calculated by adding together the length of each of the three sides.
 */
export function GetTrianglePerimeter (triangle: ITriangle): number
{
    const [ line1, line2, line3 ] = GetTriangleEdges(triangle);

    return (GetLineLength(line1) + GetLineLength(line2) + GetLineLength(line3));
}
