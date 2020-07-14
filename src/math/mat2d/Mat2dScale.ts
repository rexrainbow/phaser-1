import { Matrix2D } from './Matrix2D';

//  Scales the target Matrix by the given amounts, then returns the target Matrix.

export function Mat2dScale (target: Matrix2D, scaleX: number, scaleY: number, out: Matrix2D = new Matrix2D()): Matrix2D
{
    const { a, b, c, d, tx, ty } = target;

    return out.set(
        a * scaleX,
        b * scaleX,
        c * scaleY,
        d * scaleY,
        tx,
        ty
    );
}
