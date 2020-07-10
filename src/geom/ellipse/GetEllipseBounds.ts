/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

import { IEllipse } from './IEllipse';
import { Rectangle } from '../rectangle/Rectangle';

/**
 * Returns the bounds of the Ellipse object.
 */
export function GetEllipseBounds (ellipse: IEllipse, out: Rectangle = new Rectangle()): Rectangle
{
    return out.set(
        ellipse.left,
        ellipse.top,
        ellipse.width,
        ellipse.height
    );
}
