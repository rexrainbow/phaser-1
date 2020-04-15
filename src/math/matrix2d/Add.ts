import IMatrix2D from './IMatrix2D';

//  Adds the src Matrix to the target Matrix and returns the target.

export default function Add (target: IMatrix2D, src: IMatrix2D): IMatrix2D
{
    target.a += src.a;
    target.b += src.b;
    target.c += src.c;
    target.d += src.d;
    target.tx += src.tx;
    target.ty += src.ty;

    return target;
}
