/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

import { NormalizeAngle } from './NormalizeAngle';

/**
 * Reverse the given angle.
 *
 * @function Phaser.Math.Angle.Reverse
 * @since 3.0.0
 *
 * @param {number} angle - The angle to reverse, in radians.
 *
 * @return {number} The reversed angle, in radians.
 */
export function ReverseAngle (angle: number): number
{
    return NormalizeAngle(angle + Math.PI);
}
