/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

import { IEllipse } from './IEllipse';
import { Vec2 } from '../../math/vec2/Vec2';

/**
 * Translates the Ellipse by the values given in the `x` and `y` properties of the Point object.
 */
export function TranslateEllipsePoint (ellipse: IEllipse, point: Vec2): IEllipse
{
    ellipse.x += point.x;
    ellipse.y += point.y;

    return ellipse;
}
