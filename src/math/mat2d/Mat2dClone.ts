import { IMatrix2D } from './IMatrix2D';
import { Matrix2D } from './Matrix2D';

//  Clones the src matrix to a new Matrix2D.

export function Mat2dClone (src: IMatrix2D): Matrix2D
{
    return new Matrix2D(src.a, src.b, src.c, src.d, src.tx, src.ty);
}
