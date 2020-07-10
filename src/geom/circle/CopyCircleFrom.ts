/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

import { ICircle } from './ICircle';

/**
 * Copies the `x`, `y` and `radius` properties from the `source` Circle
 * into the given `dest` Circle, then returns the `dest` Circle.
 */
export function CopyCircleFrom (source: ICircle, dest: ICircle): ICircle
{
    return dest.set(source.x, source.y, source.radius);
}
