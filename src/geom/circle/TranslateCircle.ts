/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

import { ICircle } from './ICircle';

/**
 * Translates the Circle by the values given.
 */
export function TranslateCircle (circle: ICircle, x: number, y: number): ICircle
{
    circle.x += x;
    circle.y += y;

    return circle;
}
