/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

import { IRectangle } from './IRectangle';

/**
 * Scales the width and height of this Rectangle by the given amounts.
 */
export function ScaleRectangle (rect: IRectangle, x: number, y: number = x): IRectangle
{
    rect.width *= x;
    rect.height *= y;

    return rect;
}
