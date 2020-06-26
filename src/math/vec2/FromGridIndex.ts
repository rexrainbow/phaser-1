import { Vec2 } from './Vec2';

/**
 * Returns a Vector2 containing the x and y position of the given index in a `width` x `height` sized grid.
 *
 * For example, in a 6 x 4 grid, index 16 would equal x: 4 y: 2.
 *
 * If the given index is out of range an empty Vector2 is returned.
 */
export function FromGridIndex (index: number, width: number, height: number, out: Vec2 = new Vec2()): Vec2
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
