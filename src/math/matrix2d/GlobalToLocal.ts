import { IMatrix2D } from './IMatrix2D';
import { Vec2 } from '../vec2/Vec2';

export function GlobalToLocal (mat: IMatrix2D, x: number, y: number, outPoint: Vec2 = new Vec2()): Vec2
{
    const { a, b, c, d, tx, ty } = mat;

    const id: number = 1 / ((a * d) + (c * -b));

    outPoint.x = (d * id * x) + (-c * id * y) + (((ty * c) - (tx * d)) * id);
    outPoint.y = (a * id * y) + (-b * id * x) + (((-ty * a) + (tx * b)) * id);

    return outPoint;
}
