import { IMatrix2D } from './IMatrix2D';
import { Vec2 } from '../vec2/Vec2';

export function Mat2dGlobalToLocal (mat: IMatrix2D, x: number, y: number, out: Vec2 = new Vec2()): Vec2
{
    const { a, b, c, d, tx, ty } = mat;

    const id: number = 1 / ((a * d) + (c * -b));

    return out.set(
        (d * id * x) + (-c * id * y) + (((ty * c) - (tx * d)) * id),
        (a * id * y) + (-b * id * x) + (((-ty * a) + (tx * b)) * id)
    );
}
