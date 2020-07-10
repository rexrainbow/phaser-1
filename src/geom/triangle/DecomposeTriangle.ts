/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

import { ITriangle } from './ITriangle';
import { Vec2 } from '../../math/vec2/Vec2';

/**
 * Decomposes a Triangle into an array of its points.
 */
export function DecomposeTriangle (triangle: ITriangle, out: Vec2[] = []): Vec2[]
{
    const { x1, y1, x2, y2, x3, y3 } = triangle;

    out.push(
        new Vec2(x1, y1),
        new Vec2(x2, y2),
        new Vec2(x3, y3)
    );

    return out;
}
