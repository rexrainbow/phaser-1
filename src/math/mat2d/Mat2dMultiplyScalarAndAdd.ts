import { Matrix2D } from './Matrix2D';

//  Multiplies the target Matrix by the given amount, then returns the target Matrix.

export function Mat2dMultiplyScalarAndAdd (target: Matrix2D, src: Matrix2D, scalar: number, out: Matrix2D = new Matrix2D()): Matrix2D
{
    const { a, b, c, d, tx, ty } = src;
    const { a: ta, b: tb, c: tc, d: td, tx: ttx, ty: tty } = target;

    return out.set(
        ta + (a * scalar),
        tb + (b * scalar),
        tc + (c * scalar),
        td + (d * scalar),
        ttx + (tx * scalar),
        tty + (ty * scalar)
    );
}
