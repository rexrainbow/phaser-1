import { IMatrix4 } from './IMatrix4';

export function SetTranslationFromFloats (matrix: IMatrix4, x: number, y: number, z: number): IMatrix4
{
    const data = matrix.data;

    data[12] = x;
    data[13] = y;
    data[14] = z;

    return matrix;
}
