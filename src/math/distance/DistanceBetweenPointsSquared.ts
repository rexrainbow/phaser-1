/**
 * @author       samme
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

import IVec2 from '../vec2/IVec2';

/**
 * Calculate the squared distance between two points.
 *
 * @function Phaser.Math.Distance.BetweenPointsSquared
 * @since 3.22.0
 *
 * @param {IVec2} a - The first point.
 * @param {IVec2} b - The second point.
 *
 * @return {number} The squared distance between the points.
 */
export default function DistanceBetweenPointsSquared (a: IVec2, b: IVec2): number
{
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return dx * dx + dy * dy;
}
