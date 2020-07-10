/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

import { FromPercent } from '../../math/FromPercent';
import { GetEllipseCircumferencePoint } from './GetEllipseCircumferencePoint';
import { IEllipse } from './IEllipse';
import { MATH_CONST } from '../../math/const';
import { Vec2 } from '../../math/vec2/Vec2';

/**
 * Returns a Point object containing the coordinates of a point on the circumference of the Ellipse
 * based on the given angle normalized to the range 0 to 1. I.e. a value of 0.5 will give the point
 * at 180 degrees around the circle.
 */
export function GetEllipsePoint (ellipse: IEllipse, position: number, out: Vec2 = new Vec2()): Vec2
{
    const angle = FromPercent(position, 0, MATH_CONST.PI2);

    return GetEllipseCircumferencePoint(ellipse, angle, out);
}
