/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

import IRectangle from './IRectangle';
import Rectangle from './Rectangle';
import Intersects from '../intersects/RectangleToRectangle';

/**
 * Takes two Rectangles and first checks to see if they intersect.
 * If they intersect it will return the area of intersection in the `out` Rectangle.
 * If they do not intersect, the `out` Rectangle will have a width and height of zero.
 *
 * @function Phaser.Geom.Rectangle.Intersection
 * @since 3.11.0
 *
 * @generic {Phaser.Geom.Rectangle} O - [rect,$return]
 *
 * @param {Phaser.Geom.Rectangle} rectA - The first Rectangle to get the intersection from.
 * @param {Phaser.Geom.Rectangle} rectB - The second Rectangle to get the intersection from.
 * @param {Phaser.Geom.Rectangle} [out] - A Rectangle to store the intersection results in.
 *
 * @return {Phaser.Geom.Rectangle} The intersection result. If the width and height are zero, no intersection occurred.
 */
export default function Intersection (rectA: IRectangle, rectB: IRectangle, out: Rectangle = new Rectangle()): Rectangle
{
    if (Intersects(rectA, rectB))
    {
        out.set(
            Math.max(rectA.x, rectB.x),
            Math.max(rectA.y, rectB.y),
            Math.min(rectA.right, rectB.right) - out.x,
            Math.min(rectA.bottom, rectB.bottom) - out.y
        );
    }
    else
    {
        out.set();
    }

    return out;
}
