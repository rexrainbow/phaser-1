import { IMatrix2D } from './IMatrix2D';

//  Copy the values from the src Matrix to the target Matrix and return the target Matrix.

export function Copy (src: IMatrix2D, target: IMatrix2D): IMatrix2D
{
    return target.set(src.a, src.b, src.c, src.d, src.tx, src.ty);
}
