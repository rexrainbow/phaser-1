import { Matrix2D } from './Matrix2D';

//  Multiplies the target Matrix by the given amount, then returns the target Matrix.

export function Mat2dMultiplyScalar (target: Matrix2D, scalar: number, out: Matrix2D = new Matrix2D()): Matrix2D
{
    const { a, b, c, d, tx, ty } = target;

    return out.set(
        a * scalar,
        b * scalar,
        c * scalar,
        d * scalar,
        tx * scalar,
        ty * scalar
    );
}
