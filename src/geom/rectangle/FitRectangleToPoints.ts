/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

import { IRectangle } from './IRectangle';
import { Vec2 } from '../../math/vec2/Vec2';

/**
 * Merges a Rectangle with a list of points by repositioning and/or resizing it such that all points are located on or within its bounds.
 */
export function FitRectangleToPoints (target: IRectangle, points: Vec2[]): IRectangle
{
    let minX = target.x;
    let maxX = target.right;
    let minY = target.y;
    let maxY = target.bottom;

    for (let i = 0; i < points.length; i++)
    {
        minX = Math.min(minX, points[i].x);
        maxX = Math.max(maxX, points[i].x);
        minY = Math.min(minY, points[i].y);
        maxY = Math.max(maxY, points[i].y);
    }

    return target.set(
        minX,
        minY,
        maxX - minX,
        maxY - minY
    );
}
