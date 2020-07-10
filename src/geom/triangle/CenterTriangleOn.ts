/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

import { GetTriangleCentroid } from './GetTriangleCentroid';
import { ITriangle } from './ITriangle';
import { TranslateTriangle } from './TranslateTriangle';
import { Vec2 } from '../../math/vec2/Vec2';

export type TriangleCenterFunction = (triangle: ITriangle) => Vec2;

/**
 * Positions the Triangle so that it is centered on the given coordinates.
 */
export function CenterTriangleOn (triangle: ITriangle, x: number, y: number, centerFunc: TriangleCenterFunction = GetTriangleCentroid): ITriangle
{
    //  Get the center of the triangle
    const center = centerFunc(triangle);

    //  Difference
    const diffX = x - center.x;
    const diffY = y - center.y;

    return TranslateTriangle(triangle, diffX, diffY);
}
