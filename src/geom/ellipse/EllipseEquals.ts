/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

import { IEllipse } from './IEllipse';

/**
 * Compares the `x`, `y`, `width` and `height` properties of the two given Ellipses.
 * Returns `true` if they all match, otherwise returns `false`.

 */
export function EllipseEquals (ellipse: IEllipse, toCompare: IEllipse): boolean
{
    return (
        ellipse.x === toCompare.x &&
        ellipse.y === toCompare.y &&
        ellipse.width === toCompare.width &&
        ellipse.height === toCompare.height
    );
}
