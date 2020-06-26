import { Matrix4 } from './Matrix4';

export function Identity (matrix: Matrix4 = new Matrix4()): Matrix4
{
    return matrix.set(
        1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, 1, 0,
        0, 0, 0, 1
    );
}
