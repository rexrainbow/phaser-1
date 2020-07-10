/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

import { IRectangle } from './IRectangle';

/**
 * Copy the values of one Rectangle to a destination Rectangle.
 */
export function CopyRectangleFrom (source: IRectangle, dest: IRectangle): IRectangle
{
    return dest.set(source.x, source.y, source.width, source.height);
}
