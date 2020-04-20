import { IMatrix2D } from './IMatrix2D';

//  Multiplies the target Matrix by the given amount, then returns the target Matrix.

export function MultiplyScalar (target: IMatrix2D, scale: number): IMatrix2D
{
    target.a *= scale;
    target.b *= scale;
    target.c *= scale;
    target.d *= scale;
    target.tx *= scale;
    target.ty *= scale;

    return target;
}
