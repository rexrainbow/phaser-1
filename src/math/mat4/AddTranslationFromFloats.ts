import { IMatrix4 } from './IMatrix4';

export function AddTranslationFromFloats (matrix: IMatrix4, x: number, y: number, z: number): IMatrix4
{
    const data = matrix.data;

    data[12] += x;
    data[13] += y;
    data[14] += z;

    matrix.onChange(matrix);

    return matrix;
}
