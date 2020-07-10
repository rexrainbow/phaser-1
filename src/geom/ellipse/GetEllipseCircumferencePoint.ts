/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

import { IEllipse } from './IEllipse';
import { Vec2 } from '../../math/vec2/Vec2';

/**
 * Returns a Point object containing the coordinates of a point on the circumference of the Ellipse based on the given angle.
 */
export function GetEllipseCircumferencePoint (ellipse: IEllipse, angle: number, out: Vec2 = new Vec2()): Vec2
{
    const halfWidth = ellipse.width / 2;
    const halfHeight = ellipse.height / 2;

    return out.set(
        ellipse.x + halfWidth * Math.cos(angle),
        ellipse.y + halfHeight * Math.sin(angle)
    );
}
