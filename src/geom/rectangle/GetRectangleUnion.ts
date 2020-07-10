/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

import { IRectangle } from './IRectangle';
import { Rectangle } from './Rectangle';

/**
 * Creates a new Rectangle or repositions and/or resizes an existing Rectangle so that it encompasses the two given Rectangles, i.e. calculates their union.
 */
export function GetRectangleUnion (rectA: IRectangle, rectB: IRectangle, out: Rectangle = new Rectangle()): Rectangle
{
    //  Cache vars so we can use one of the input rects as the output rect
    const x = Math.min(rectA.x, rectB.x);
    const y = Math.min(rectA.y, rectB.y);
    const w = Math.max(rectA.right, rectB.right) - x;
    const h = Math.max(rectA.bottom, rectB.bottom) - y;

    return out.set(x, y, w, h);
}
