/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

import { IRectangle } from './IRectangle';
import { Vec2 } from '../../math/vec2/Vec2';

/**
 * Translates the position of a Rectangle by the coordinates of a point (translation vector).
 */
export function TranslateRectanglePoint (rect: IRectangle, point: Vec2): IRectangle
{
    rect.x += point.x;
    rect.y += point.y;

    return rect;
}
