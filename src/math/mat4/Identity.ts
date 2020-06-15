import { IMatrix4 } from './IMatrix4';
import { Matrix4 } from './Matrix4';

export function Identity (matrix: IMatrix4 = new Matrix4()): IMatrix4
{
    return matrix.set(
        1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, 1, 0,
        0, 0, 0, 1
    );
}
