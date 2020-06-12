import { IMatrix4 } from './IMatrix4';

export function Identity (mat: IMatrix4): IMatrix4
{
    return mat.set(
        1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, 1, 0,
        0, 0, 0, 1
    );
}
