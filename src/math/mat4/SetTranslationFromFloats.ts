import { IMatrix4 } from './IMatrix4';

export function SetTranslationFromFloats (m: IMatrix4, x: number, y: number, z: number): IMatrix4
{
    const data = m.data;

    data[12] = x;
    data[13] = y;
    data[14] = z;

    return m;
}
