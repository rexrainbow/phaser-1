/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

import IRectangle from './IRectangle';

/**
 * Merges a Rectangle with a point by repositioning and/or resizing it so that the point is on or within its bounds.
 *
 * @function Phaser.Geom.Rectangle.MergeXY
 * @since 3.0.0
 *
 * @generic {Phaser.Geom.Rectangle} O - [target,$return]
 *
 * @param {Phaser.Geom.Rectangle} target - The Rectangle which should be merged and modified.
 * @param {number} x - The X coordinate of the point which should be merged.
 * @param {number} y - The Y coordinate of the point which should be merged.
 *
 * @return {Phaser.Geom.Rectangle} The modified `target` Rectangle.
 */
export default function MergeXY (target: IRectangle, x: number, y: number): IRectangle
{
    const minX = Math.min(target.x, x);
    const maxX = Math.max(target.right, x);
    const minY = Math.min(target.y, y);
    const maxY = Math.max(target.bottom, y);

    return target.set(
        minX,
        minY,
        maxX - minX,
        maxY - minY
    );
}
