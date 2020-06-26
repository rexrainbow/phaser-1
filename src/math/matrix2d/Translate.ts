import { Matrix2D } from './Matrix2D';

//  Translates the target Matrix and returns the target

export function Translate (target: Matrix2D, x: number, y: number, out: Matrix2D = new Matrix2D()): Matrix2D
{
    const { a, b, c, d, tx, ty } = target;

    out.tx = (a * x) + (c * y) + tx;
    out.ty = (b * x) + (d * y) + ty;

    return out;
}
