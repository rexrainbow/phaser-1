/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Calculate a per-ms speed from a distance and time (given in seconds).
 *
 * @function Phaser.Math.GetSpeed
 * @since 3.0.0
 *
 * @param {number} distance - The distance.
 * @param {number} time - The time, in seconds.
 *
 * @return {number} The speed, in distance per ms.
 */
export default function GetSpeed (distance: number, time: number): number
{
    return (distance / time) / 1000;
}
