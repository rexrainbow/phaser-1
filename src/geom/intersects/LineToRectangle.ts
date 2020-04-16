/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

import ILine from '../line/ILine';
import IRectangle from '../rectangle/IRectangle';

/**
 * Checks for intersection between the Line and a Rectangle shape, or a rectangle-like
 * object, with public `x`, `y`, `right` and `bottom` properties, such as a Sprite or Body.
 *
 * An intersection is considered valid if:
 *
 * The line starts within, or ends within, the Rectangle.
 * The line segment intersects one of the 4 rectangle edges.
 *
 * The for the purposes of this function rectangles are considered 'solid'.
 *
 * @function Phaser.Geom.Intersects.LineToRectangle
 * @since 3.0.0
 *
 * @param {Phaser.Geom.Line} line - The Line to check for intersection.
 * @param {(Phaser.Geom.Rectangle|object)} rect - The Rectangle to check for intersection.
 *
 * @return {boolean} `true` if the Line and the Rectangle intersect, `false` otherwise.
 */
export default function LineToRectangle (line: ILine, rect: IRectangle): boolean
{
    const { x1, y1, x2, y2 } = line;
    const { x, y, right, bottom } = rect;

    let t = 0;

    //  If the start or end of the line is inside the rect then we assume
    //  collision, as rects are solid for our use-case.

    if ((x1 >= x && x1 <= right && y1 >= y && y1 <= bottom) ||
        (x2 >= x && x2 <= right && y2 >= y && y2 <= bottom))
    {
        return true;
    }

    if (x1 < x && x2 >= x)
    {
        //  Left edge
        t = y1 + (y2 - y1) * (x - x1) / (x2 - x1);

        if (t > y && t <= bottom)
        {
            return true;
        }
    }
    else if (x1 > right && x2 <= right)
    {
        //  Right edge
        t = y1 + (y2 - y1) * (right - x1) / (x2 - x1);

        if (t >= y && t <= bottom)
        {
            return true;
        }
    }

    if (y1 < y && y2 >= y)
    {
        //  Top edge
        t = x1 + (x2 - x1) * (y - y1) / (y2 - y1);

        if (t >= x && t <= right)
        {
            return true;
        }
    }
    else if (y1 > bottom && y2 <= bottom)
    {
        //  Bottom edge
        t = x1 + (x2 - x1) * (bottom - y1) / (y2 - y1);

        if (t >= x && t <= right)
        {
            return true;
        }
    }

    return false;
}
