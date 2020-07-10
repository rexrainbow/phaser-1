/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

import { ICircle } from './ICircle';
import { Vec2 } from '../../math/vec2/Vec2';

/**
 * Returns a uniformly distributed random point from anywhere within the given Circle.
 */
export function GetCircleRandomPoint (circle: ICircle, out: Vec2 = new Vec2()): Vec2
{
    const t = 2 * Math.PI * Math.random();
    const u = Math.random() + Math.random();
    const r = (u > 1) ? 2 - u : u;
    const x = r * Math.cos(t);
    const y = r * Math.sin(t);

    return out.set(
        circle.x + (x * circle.radius),
        circle.y + (y * circle.radius)
    );
}
