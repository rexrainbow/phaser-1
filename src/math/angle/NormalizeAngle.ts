/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

import { MATH_CONST } from '../const';

/**
 * Normalize an angle to the [0, 2pi] range.
 *
 * @function Phaser.Math.Angle.Normalize
 * @since 3.0.0
 *
 * @param {number} angle - The angle to normalize, in radians.
 *
 * @return {number} The normalized angle, in radians.
 */
export function NormalizeAngle (angle: number): number
{
    angle = angle % MATH_CONST.PI2;

    if (angle >= 0)
    {
        return angle;
    }
    else
    {
        return angle + MATH_CONST.PI2;
    }
}
