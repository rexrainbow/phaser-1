import IMatrix2D from '../matrix2d/IMatrix2D';
import Matrix2D from '../matrix2d/Matrix2D';

export default function MultiplyScalar (src: IMatrix2D, scale: number): Matrix2D
{
    return new Matrix2D(
        src.a * scale,
        src.b * scale,
        src.c * scale,
        src.d * scale,
        src.tx * scale,
        src.ty * scale
    );
}
