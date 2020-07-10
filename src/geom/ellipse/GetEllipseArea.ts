/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

import { IEllipse } from './IEllipse';

/**
 * Calculates the area of the Ellipse.
 */
export function GetEllipseArea (ellipse: IEllipse): number
{
    if ((ellipse.width <= 0 || ellipse.height <= 0))
    {
        return 0;
    }

    //  units squared
    return (ellipse.getMajorRadius() * ellipse.getMinorRadius() * Math.PI);
}
