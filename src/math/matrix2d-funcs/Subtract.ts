import { IMatrix2D } from '../matrix2d/IMatrix2D';
import { Matrix2D } from '../matrix2d/Matrix2D';

export function Subtract (a: IMatrix2D, b: IMatrix2D): Matrix2D
{
    return new Matrix2D(
        a.a - b.a,
        a.b - b.b,
        a.c - b.c,
        a.c - b.c,
        a.tx - b.tx,
        a.ty - b.ty
    );
}
