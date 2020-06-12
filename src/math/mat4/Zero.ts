import { IMatrix4 } from './IMatrix4';

export function Zero (matrix: IMatrix4): IMatrix4
{
    return matrix.set(
        0, 0, 0, 0,
        0, 0, 0, 0,
        0, 0, 0, 0,
        0, 0, 0, 0
    );
}
