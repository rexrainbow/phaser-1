/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

import { IRectangle } from './IRectangle';
import { Rectangle } from './Rectangle';

/**
 * Creates a new Rectangle which is identical to the given one.
 */
export function CloneRectangle (source: IRectangle): Rectangle
{
    return new Rectangle(source.x, source.y, source.width, source.height);
}
