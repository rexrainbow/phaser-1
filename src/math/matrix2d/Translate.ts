import IMatrix2D from './IMatrix2D';

//  Translates the target Matrix and returns the target

export default function Translate (target: IMatrix2D, x: number, y: number): IMatrix2D
{
    const { a, b, c, d, tx, ty } = target;

    target.tx = (a * x) + (c * y) + tx;
    target.ty = (b * x) + (d * y) + ty;

    return target;
}
