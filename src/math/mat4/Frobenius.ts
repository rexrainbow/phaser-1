import { IMatrix4 } from './IMatrix4';

export function Frobenius (matrix: IMatrix4): number
{
    const [ m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33 ] = matrix.data;

    return Math.hypot(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33);
}
