/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

import { EllipseContains } from './EllipseContains';
import { IEllipse } from './IEllipse';
import { IRectangle } from '../rectangle/IRectangle';

/**
 * Check to see if the Ellipse contains all four points of the given Rectangle object.

 */
export function EllipseContainsRect (ellipse: IEllipse, rect: IRectangle): boolean
{
    return (
        EllipseContains(ellipse, rect.x, rect.y) &&
        EllipseContains(ellipse, rect.right, rect.y) &&
        EllipseContains(ellipse, rect.x, rect.bottom) &&
        EllipseContains(ellipse, rect.right, rect.bottom)
    );
}
