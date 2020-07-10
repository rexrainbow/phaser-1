/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

import { ICircle } from './ICircle';
import { Vec2 } from '../../math/vec2/Vec2';

/**
 * Offsets the Circle by the values given in the `x` and `y` properties of the Point object.
 */
export function TranslateCirclePoint (circle: ICircle, point: Vec2): ICircle
{
    circle.x += point.x;
    circle.y += point.y;

    return circle;
}
