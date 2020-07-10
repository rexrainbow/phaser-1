/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

import { FromPercent } from '../../math/FromPercent';
import { GetEllipseCircumference } from './GetEllipseCircumference';
import { GetEllipseCircumferencePoint } from './GetEllipseCircumferencePoint';
import { IEllipse } from './IEllipse';
import { MATH_CONST } from '../../math/const';
import { Vec2 } from '../../math/vec2/Vec2';

/**
 * Returns an array of Point objects containing the coordinates of the points around the circumference of the Ellipse,
 * based on the given quantity or stepRate values.
 */
export function GetEllipsePoints (ellipse: IEllipse, step: number, quantity: number = 0,  out: Vec2[] = []): Vec2[]
{
    //  If quantity is a falsey value (false, null, 0, undefined, etc) then we calculate it based on the stepRate instead.
    if (!quantity)
    {
        quantity = GetEllipseCircumference(ellipse) / step;
    }

    for (let i = 0; i < quantity; i++)
    {
        const angle = FromPercent(i / quantity, 0, MATH_CONST.PI2);

        out.push(GetEllipseCircumferencePoint(ellipse, angle));
    }

    return out;
}
