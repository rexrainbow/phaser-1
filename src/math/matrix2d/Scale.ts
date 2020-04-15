import IMatrix2D from './IMatrix2D';

//  Scales the target Matrix by the given amounts, then returns the target Matrix.

export default function Scale (target: IMatrix2D, scaleX: number, scaleY: number): IMatrix2D
{
    target.a *= scaleX;
    target.b *= scaleX;
    target.c *= scaleY;
    target.d *= scaleY;

    return target;
}
