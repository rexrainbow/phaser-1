import { IMatrix4 } from './IMatrix4';
import { Matrix4 } from './Matrix4';

// Multiply each element of the matrix by a scalar.

export function MultiplyScalar (matrix: IMatrix4, scale: number, out: Matrix4 = new Matrix4()): Matrix4
{
    const [ a00, a01, a02, a03, a10, a11, a12, a13, a20, a21, a22, a23, a30, a31, a32, a33 ] = matrix.data;

    return out.set(
        a00 * scale,
        a01 * scale,
        a02 * scale,
        a03 * scale,
        a10 * scale,
        a11 * scale,
        a12 * scale,
        a13 * scale,
        a20 * scale,
        a21 * scale,
        a22 * scale,
        a23 * scale,
        a30 * scale,
        a31 * scale,
        a32 * scale,
        a33 * scale
    );
}
