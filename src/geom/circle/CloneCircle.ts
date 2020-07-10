/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

import { Circle } from './Circle';
import { ICircle } from './ICircle';

/**
 * Creates a new Circle instance based on the values contained in the given source.
 */
export function CloneCircle (source: ICircle): Circle
{
    return new Circle(source.x, source.y, source.radius);
}
