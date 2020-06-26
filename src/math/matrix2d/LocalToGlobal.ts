import { IMatrix2D } from './IMatrix2D';
import { Vec2 } from '../vec2/Vec2';

export function LocalToGlobal (mat: IMatrix2D, x: number, y: number, out: Vec2 = new Vec2()): Vec2
{
    const { a, b, c, d, tx, ty } = mat;

    return out.set(
        (a * x) + (c * y) + tx,
        (b * x) + (d * y) + ty
    );
}
