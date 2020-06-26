import { IMatrix2D } from './IMatrix2D';
import { Matrix2D } from './Matrix2D';

//  Multiplies the target Matrix by the src Matrix and returns the target.

export function Multiply (target: IMatrix2D, src: IMatrix2D, out: Matrix2D = new Matrix2D()): Matrix2D
{
    const { a: a0, b: b0, c: c0, d: d0, tx: tx0, ty: ty0 } = target;
    const { a: a1, b: b1, c: c1, d: d1, tx: tx1, ty: ty1 } = src;

    return out.set(
        a0 * a1 + c0 * b1,
        b0 * a1 + d0 * b1,
        a0 * c1 + c0 * d1,
        b0 * c1 + d0 * d1,
        a0 * tx1 + c0 * ty1 + tx0,
        b0 * tx1 + d0 * ty1 + ty0
    );
}
