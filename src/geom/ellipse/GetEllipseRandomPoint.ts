/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

import { IEllipse } from './IEllipse';
import { Vec2 } from '../../math/vec2/Vec2';

/**
 * Returns a uniformly distributed random point from anywhere within the given Ellipse.
 */
export function GetEllipseRandomPoint (ellipse: IEllipse, out: Vec2 = new Vec2()): Vec2
{
    const p = Math.random() * Math.PI * 2;
    const s = Math.sqrt(Math.random());

    out.x = ellipse.x + ((s * Math.cos(p)) * ellipse.width / 2);
    out.y = ellipse.y + ((s * Math.sin(p)) * ellipse.height / 2);

    return out;
}
