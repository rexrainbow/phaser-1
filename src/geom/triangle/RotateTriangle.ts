/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

import { GetTriangleInCenter } from './GetTriangleInCenter';
import { ITriangle } from './ITriangle';
import { RotateTriangleAround } from './RotateTriangleAround';

/**
 * Rotates a Triangle about its incenter, which is the point at which its three angle bisectors meet.
 */
export function RotateTriangle (triangle: ITriangle, angle: number): ITriangle
{
    const point = GetTriangleInCenter(triangle);

    return RotateTriangleAround(triangle, point.x, point.y, angle);
}
