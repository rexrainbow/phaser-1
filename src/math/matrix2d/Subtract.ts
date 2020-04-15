import IMatrix2D from './IMatrix2D';

//  Subtracts the src Matrix from the target Matrix and returns the target.

export default function Subtract (target: IMatrix2D, src: IMatrix2D): IMatrix2D
{
    const { a, b, c, d, tx, ty } = src;

    target.a -= a;
    target.b -= b;
    target.c -= c;
    target.d -= d;
    target.tx -= tx;
    target.ty -= ty;

    return target;
}
