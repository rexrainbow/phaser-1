/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

import { MATH_CONST } from './const';

/**
 * Convert the given angle in radians, to the equivalent angle in degrees.
 *
 * @function Phaser.Math.RadToDeg
 * @since 3.0.0
 *
 * @param {number} radians - The angle in radians to convert ot degrees.
 *
 * @return {number} The given angle converted to degrees.
 */
export function RadToDeg (radians: number): number
{
    return radians * MATH_CONST.RAD_TO_DEG;
}
