/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

import { Ellipse } from './Ellipse';
import { IEllipse } from './IEllipse';

/**
 * Creates a new Ellipse instance based on the values contained in the given source.
 */
export function CloneEllipse (source: IEllipse): Ellipse
{
    return new Ellipse(source.x, source.y, source.width, source.height);
}
