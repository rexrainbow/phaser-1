/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

import { CenterRectangleOn } from './CenterRectangleOn';
import { GetRectangleCenterX } from './GetRectangleCenterX';
import { GetRectangleCenterY } from './GetRectangleCenterY';
import { IRectangle } from './IRectangle';

/**
 * Increases the size of a Rectangle by a specified amount.
 *
 * The center of the Rectangle stays the same. The amounts are added to each side, so the actual increase in width or height is two times bigger than the respective argument.
 */
export function InflateRectangle (rect: IRectangle, x: number, y: number): IRectangle
{
    const cx = GetRectangleCenterX(rect);
    const cy = GetRectangleCenterY(rect);

    rect.width = rect.width + (x * 2);
    rect.height = rect.height + (y * 2);

    return CenterRectangleOn(rect, cx, cy);
}
