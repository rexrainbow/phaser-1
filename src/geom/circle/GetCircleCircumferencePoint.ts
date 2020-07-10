/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

import { ICircle } from './ICircle';
import { Vec2 } from '../../math/vec2/Vec2';

export function GetCircleCircumferencePoint (circle: ICircle, angle: number, out: Vec2 = new Vec2()): Vec2
{
    return out.set(
        circle.x + (circle.radius * Math.cos(angle)),
        circle.y + (circle.radius * Math.sin(angle))
    );
}
