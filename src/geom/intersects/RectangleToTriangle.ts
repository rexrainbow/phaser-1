/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

import { DecomposeRectangle } from '../rectangle/DecomposeRectangle';
import { GetRectangleEdges } from '../rectangle/GetRectangleEdges';
import { GetTriangleEdges } from '../triangle/GetTriangleEdges';
import { IRectangle } from '../rectangle/IRectangle';
import { ITriangle } from '../triangle/ITriangle';
import { LineToLine } from './LineToLine';
import { RectangleContains } from '../rectangle/RectangleContains';
import { TriangleContainsPoints } from '../triangle/TriangleContainsPoints';

/**
 * Checks for intersection between Rectangle shape and Triangle shape.
 *
 * @function Phaser.Geom.Intersects.RectangleToTriangle
 * @since 3.0.0
 *
 * @param {Phaser.Geom.Rectangle} rect - Rectangle object to test.
 * @param {Phaser.Geom.Triangle} triangle - Triangle object to test.
 *
 * @return {boolean} A value of `true` if objects intersect; otherwise `false`.
 */
export function RectangleToTriangle (rect: IRectangle, triangle: ITriangle): boolean
{
    //  First the cheapest ones:

    if (
        triangle.left > rect.right ||
        triangle.right < rect.x ||
        triangle.top > rect.bottom ||
        triangle.bottom < rect.y)
    {
        return false;
    }

    const [ triA, triB, triC ] = GetTriangleEdges(triangle);

    //  Are any of the triangle points within the rectangle?

    if (RectangleContains(rect, triA.x1, triA.y1) || RectangleContains(rect, triA.x2, triA.y2))
    {
        return true;
    }

    if (RectangleContains(rect, triB.x1, triB.y1) || RectangleContains(rect, triB.x2, triB.y2))
    {
        return true;
    }

    if (RectangleContains(rect, triC.x1, triC.y1) || RectangleContains(rect, triC.x2, triC.y2))
    {
        return true;
    }

    //  Cheap tests over, now to see if any of the lines intersect ...

    const [ rectA, rectB, rectC, rectD ] = GetRectangleEdges(rect);

    if (LineToLine(triA, rectA) || LineToLine(triA, rectB) || LineToLine(triA, rectC) || LineToLine(triA, rectD))
    {
        return true;
    }

    if (LineToLine(triB, rectA) || LineToLine(triB, rectB) || LineToLine(triB, rectC) || LineToLine(triB, rectD))
    {
        return true;
    }

    if (LineToLine(triC, rectA) || LineToLine(triC, rectB) || LineToLine(triC, rectC) || LineToLine(triC, rectD))
    {
        return true;
    }

    //  None of the lines intersect, so are any rectangle points within the triangle?

    const within = TriangleContainsPoints(triangle, DecomposeRectangle(rect), true);

    return (within.length > 0);
}
