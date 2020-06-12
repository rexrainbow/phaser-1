import { IMatrix4 } from './IMatrix4';

export function AddTranslationFromFloats (mat: IMatrix4, x: number, y: number, z: number): IMatrix4
{
    const data = mat.data;

    data[12] += x;
    data[13] += y;
    data[14] += z;

    return mat;
}
