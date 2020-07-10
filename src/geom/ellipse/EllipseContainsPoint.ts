/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

import { EllipseContains } from './EllipseContains';
import { IEllipse } from './IEllipse';
import { Vec2 } from '../../math/vec2/Vec2';

/**
 * Check to see if the Ellipse contains the given Point object.

 */
export function EllipseContainsPoint (ellipse: IEllipse, point: Vec2): boolean
{
    return EllipseContains(ellipse, point.x, point.y);
}
