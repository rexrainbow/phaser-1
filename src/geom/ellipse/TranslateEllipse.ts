/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

import { IEllipse } from './IEllipse';

/**
 * Translates the Ellipse by the values given.

 */
export function TranslateEllipse (ellipse: IEllipse, x: number, y: number): IEllipse
{
    ellipse.x += x;
    ellipse.y += y;

    return ellipse;
}
