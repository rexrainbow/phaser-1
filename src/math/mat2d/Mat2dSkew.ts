import { Matrix2D } from './Matrix2D';

//  Skews the target Matrix by the given angles (in radians), then returns the target Matrix

export function Mat2dSkew (target: Matrix2D, angleX: number, angleY: number, out: Matrix2D = new Matrix2D()): Matrix2D
{
    const { a, b, c, d, tx, ty } = target;

    return out.set(
        a,
        b + Math.tan(angleX),
        c + Math.tan(angleY),
        d,
        tx,
        ty
    );
}
