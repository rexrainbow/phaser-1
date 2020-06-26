import { IMatrix2D } from './IMatrix2D';
import { Matrix2D } from './Matrix2D';

export function Add (a: IMatrix2D, b: IMatrix2D, out: Matrix2D = new Matrix2D()): Matrix2D
{
    return out.set(
        a.a + b.a,
        a.b + b.b,
        a.c + b.c,
        a.d + b.d,
        a.tx + b.tx,
        a.ty + b.ty
    );
}
