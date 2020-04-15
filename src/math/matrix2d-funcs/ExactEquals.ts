import IMatrix2D from '../matrix2d/IMatrix2D';

//  Compares the a and b matrix and returns if they are equal.

export default function ExactEquals (a: IMatrix2D, b: IMatrix2D): boolean
{
    return (
        a.a === b.a &&
        a.b === b.b &&
        a.c === b.c &&
        a.d === b.d &&
        a.tx === b.tx &&
        a.ty === b.ty
    );
}
