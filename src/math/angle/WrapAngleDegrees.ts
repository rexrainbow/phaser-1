/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

import { Wrap } from '../Wrap';

/**
 * Wrap an angle in degrees.
 *
 * Wraps the angle to a value in the range of -180 to 180.
 *
 * @function Phaser.Math.Angle.WrapDegrees
 * @since 3.0.0
 *
 * @param {number} angle - The angle to wrap, in degrees.
 *
 * @return {number} The wrapped angle, in degrees.
 */
export function WrapAngleDegrees (angle: number): number
{
    return Wrap(angle, -180, 180);
}
