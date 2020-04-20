/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

import { MATH_CONST as CONST } from '../const';

/**
 * Takes an angle in Phasers default clockwise format and converts it so that
 * 0 is North, 90 is West, 180 is South and 270 is East,
 * therefore running counter-clockwise instead of clockwise.
 * 
 * You can pass in the angle from a Game Object using:
 * 
 * ```javascript
 * var converted = CounterClockwise(gameobject.rotation);
 * ```
 * 
 * All values for this function are in radians.
 *
 * @function Phaser.Math.Angle.CounterClockwise
 * @since 3.16.0
 *
 * @param {number} angle - The angle to convert, in radians.
 *
 * @return {number} The converted angle, in radians.
 */
export function CounterClockwise (angle: number): number
{
    if (angle > Math.PI)
    {
        angle -= CONST.PI2;
    }

    return Math.abs((((angle + CONST.HALF_PI) % CONST.PI2) - CONST.PI2) % CONST.PI2);
}
