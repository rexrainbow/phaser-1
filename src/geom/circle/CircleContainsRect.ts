/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

import { CircleContains } from './CircleContains';
import { ICircle } from './ICircle';
import { IRectangle } from '../rectangle/IRectangle';

/**
 * Check to see if the Circle contains all four points of the given Rectangle object.
 */
export function CircleContainsRect (circle: ICircle, rect: IRectangle): boolean
{
    return (
        CircleContains(circle, rect.x, rect.y) &&
        CircleContains(circle, rect.right, rect.y) &&
        CircleContains(circle, rect.x, rect.bottom) &&
        CircleContains(circle, rect.right, rect.bottom)
    );
}
