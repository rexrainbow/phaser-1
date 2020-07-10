/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

import { IRectangle } from './IRectangle';
import { Vec2 } from '../../math/vec2/Vec2';

/**
 * Returns a random point within a Rectangle.
 */
export function GetRectangleRandomPoint (rect: IRectangle, out: Vec2 = new Vec2()): Vec2
{
    return out.set(
        rect.x + (Math.random() * rect.width),
        rect.y + (Math.random() * rect.height)
    );
}
