import { Matrix4 } from './Matrix4';

export function Zero (matrix: Matrix4): Matrix4
{
    return matrix.set(
        0, 0, 0, 0,
        0, 0, 0, 0,
        0, 0, 0, 0,
        0, 0, 0, 0
    );
}
