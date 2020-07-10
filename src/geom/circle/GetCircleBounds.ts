/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

import { ICircle } from './ICircle';
import { Rectangle } from '../rectangle/Rectangle';

/**
 * Returns the bounds of the Circle object.
 */
export function GetCircleBounds (circle: ICircle, out: Rectangle = new Rectangle()): Rectangle
{
    return out.set(
        circle.left,
        circle.top,
        circle.diameter,
        circle.diameter
    );
}
