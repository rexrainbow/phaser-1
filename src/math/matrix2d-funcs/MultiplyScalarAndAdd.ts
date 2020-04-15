import IMatrix2D from '../matrix2d/IMatrix2D';
import Matrix2D from '../matrix2d/Matrix2D';

export default function MultiplyScalarAndAdd (a: IMatrix2D, b: IMatrix2D, scale: number): Matrix2D
{
    return new Matrix2D(
        a.a + (b.a * scale),
        a.b + (b.b * scale),
        a.c + (b.c * scale),
        a.d + (b.d * scale),
        a.tx + (b.tx * scale),
        a.ty + (b.ty * scale),
    );
}
