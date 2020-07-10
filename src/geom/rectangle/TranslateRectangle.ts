/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

import { IRectangle } from './IRectangle';

/**
 * Translates the position of a Rectangle by a given offset.
 */
export function TranslateRectangle (rect: IRectangle, x: number, y: number): IRectangle
{
    rect.x += x;
    rect.y += y;

    return rect;
}
