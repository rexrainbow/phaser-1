/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

import Vec2 from './vec2/Vec2';

/**
 * Returns a Vector2 containing the x and y position of the given index in a `width` x `height` sized grid.
 * 
 * For example, in a 6 x 4 grid, index 16 would equal x: 4 y: 2.
 * 
 * If the given index is out of range an empty Vector2 is returned.
 *
 * @function Phaser.Math.ToXY
 * @since 3.19.0
 *
 * @param {number} index - The position within the grid to get the x/y value for.
 * @param {number} width - The width of the grid.
 * @param {number} height - The height of the grid.
 * @param {Vec2} [out] - An optional Vector2 to store the result in. If not given, a new Vector2 instance will be created.
 *
 * @return {Vec2} A Vector2 where the x and y properties contain the given grid index.
 */
export default function ToXY (index: number, width: number, height: number, out: Vec2 = new Vec2()): Vec2
{
    let x = 0;
    let y = 0;
    const total = width * height;

    if (index > 0 && index <= total)
    {
        if (index > width - 1)
        {
            y = Math.floor(index / width);
            x = index - (y * width);
        }
        else
        {
            x = index;
        }

        out.set(x, y);
    }

    return out;
}
