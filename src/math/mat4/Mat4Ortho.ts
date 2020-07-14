import { Matrix4 } from './Matrix4';

// Generates a orthogonal projection matrix with the given bounds

export function Mat4Ortho (left: number, right: number, bottom: number, top: number, near: number, far: number, out: Matrix4 = new Matrix4()): Matrix4
{
    const lr = 1 / (left - right);
    const bt = 1 / (bottom - top);
    const nf = 1 / (near - far);

    return out.set(
        -2 * lr,
        0,
        0,
        0,
        0,
        -2 * bt,
        0,
        0,
        0,
        0,
        2 * nf,
        0,
        (left + right) * lr,
        (top + bottom) * bt,
        (far + near) * nf,
        1
    );
}
