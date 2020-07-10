/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

import { IEllipse } from './IEllipse';

/**
 * Check to see if the Ellipse contains the given x / y coordinates.

 */
export function EllipseContains (ellipse: IEllipse, x: number, y: number): boolean
{
    if (ellipse.width <= 0 || ellipse.height <= 0)
    {
        return false;
    }

    //  Normalize the coords to an ellipse with center 0,0 and a radius of 0.5
    let normx = ((x - ellipse.x) / ellipse.width);
    let normy = ((y - ellipse.y) / ellipse.height);

    normx *= normx;
    normy *= normy;

    return (normx + normy < 0.25);
}
