import { IMatrix2D } from './IMatrix2D';
import { Matrix2D } from './Matrix2D';

//  Copy the values from the src Matrix to the target Matrix and return the target Matrix.

export function CopyFrom (src: IMatrix2D, target: Matrix2D): Matrix2D
{
    const { a, b, c, d, tx, ty } = src;

    return target.set(a, b, c, d, tx, ty);
}
