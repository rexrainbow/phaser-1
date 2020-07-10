/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

import { GetRectangleCenterX } from './GetRectangleCenterX';
import { GetRectangleCenterY } from './GetRectangleCenterY';
import { IRectangle } from './IRectangle';
import { Vec2 } from '../../math/vec2/Vec2';

/**
 * Returns the center of a Rectangle as a Point.
 */
export function GetRectangleCenter (rect: IRectangle, out: Vec2 = new Vec2()): Vec2
{
    return out.set(GetRectangleCenterX(rect), GetRectangleCenterY(rect));
}
