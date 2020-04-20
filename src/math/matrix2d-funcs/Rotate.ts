import { IMatrix2D } from '../matrix2d/IMatrix2D';
import { Matrix2D } from '../matrix2d/Matrix2D';

export function Rotate (src: IMatrix2D, angle: number): Matrix2D
{
    const { a, b, c, d } = src;

    const sin = Math.sin(angle);
    const cos = Math.cos(angle);

    return new Matrix2D(
        a * cos + c * sin,
        b * cos + d * sin,
        a * -sin + c * cos,
        b * -sin + d * cos
    );
}
