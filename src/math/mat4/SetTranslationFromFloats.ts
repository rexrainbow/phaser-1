import { Matrix4 } from './Matrix4';

export function SetTranslationFromFloats (matrix: Matrix4, x: number, y: number, z: number): Matrix4
{
    const data = matrix.data;

    data[12] = x;
    data[13] = y;
    data[14] = z;

    matrix.onChange(matrix);

    return matrix;
}
