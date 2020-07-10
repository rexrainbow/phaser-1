/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

import { IRectangle } from './IRectangle';
import { Vec2 } from '../../math/vec2/Vec2';

/**
 * Create an array of points for each corner of a Rectangle
 * If an array is specified, each point object will be added to the end of the array, otherwise a new array will be created.
 */
export function DecomposeRectangle (rect: IRectangle, out: Vec2[] = []): Vec2[]
{
    out.push(
        new Vec2(rect.x, rect.y),
        new Vec2(rect.right, rect.y),
        new Vec2(rect.right, rect.bottom),
        new Vec2(rect.x, rect.bottom)
    );

    return out;
}
