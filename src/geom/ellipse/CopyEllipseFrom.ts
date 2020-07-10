/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

import { IEllipse } from './IEllipse';

/**
 * Copies the `x`, `y`, `width` and `height` properties from the `source` Ellipse
 * into the given `dest` Ellipse, then returns the `dest` Ellipse.
 */
export function CopyEllipseFrom (source: IEllipse, dest: IEllipse): IEllipse
{
    return dest.set(source.x, source.y, source.width, source.height);
}
