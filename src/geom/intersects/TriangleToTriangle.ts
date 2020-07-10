/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

import { DecomposeTriangle } from '../triangle/DecomposeTriangle';
import { GetTriangleEdges } from '../triangle/GetTriangleEdges';
import { ITriangle } from '../triangle/ITriangle';
import { LineToLine } from './LineToLine';
import { TriangleContainsPoints } from '../triangle/TriangleContainsPoints';

/**
 * Checks if two Triangles intersect.
 *
 * A Triangle intersects another Triangle if any pair of their lines intersects or if any point of one Triangle is within the other Triangle. Thus, the Triangles are considered "solid".
 *
 * @function Phaser.Geom.Intersects.TriangleToTriangle
 * @since 3.0.0
 *
 * @param {Phaser.Geom.Triangle} triangleA - The first Triangle to check for intersection.
 * @param {Phaser.Geom.Triangle} triangleB - The second Triangle to check for intersection.
 *
 * @return {boolean} `true` if the Triangles intersect, otherwise `false`.
 */
export function TriangleToTriangle (triangleA: ITriangle, triangleB: ITriangle): boolean
{
    //  First the cheapest ones:
    if (
        triangleA.left > triangleB.right ||
        triangleA.right < triangleB.left ||
        triangleA.top > triangleB.bottom ||
        triangleA.bottom < triangleB.top)
    {
        return false;
    }

    const [ lineAA, lineAB, lineAC ] = GetTriangleEdges(triangleA);
    const [ lineBA, lineBB, lineBC ] = GetTriangleEdges(triangleB);

    //  Now check the lines against each line of TriangleB
    if (
        LineToLine(lineAA, lineBA) ||
        LineToLine(lineAA, lineBB) ||
        LineToLine(lineAA, lineBC) ||
        LineToLine(lineAB, lineBA) ||
        LineToLine(lineAB, lineBB) ||
        LineToLine(lineAB, lineBC) ||
        LineToLine(lineAC, lineBA) ||
        LineToLine(lineAC, lineBB) ||
        LineToLine(lineAC, lineBC)
    )
    {
        return true;
    }

    //  Nope, so check to see if any of the points of triangleA are within triangleB

    const withinA = TriangleContainsPoints(triangleB, DecomposeTriangle(triangleA), true);

    if (withinA.length > 0)
    {
        return true;
    }

    //  Finally check to see if any of the points of triangleB are within triangleA

    const withinB = TriangleContainsPoints(triangleA, DecomposeTriangle(triangleB), true);

    return (withinB.length > 0);
}
