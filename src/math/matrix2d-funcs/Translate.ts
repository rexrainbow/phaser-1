import { IMatrix2D } from '../matrix2d/IMatrix2D';
import { Matrix2D } from '../matrix2d/Matrix2D';

export function Translate (src: IMatrix2D, x: number, y: number): Matrix2D
{
    const { a, b, c, d, tx, ty } = src;

    const dtx = a * x + c * y + tx;
    const dty = b * x + d * y + ty;

    return new Matrix2D(1, 0, 0, 1, dtx, dty);
}
