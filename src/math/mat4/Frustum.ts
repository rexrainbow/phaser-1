import { Matrix4 } from './Matrix4';

// Generates a frustum matrix with the given bounds

export function Frustum (left: number, right: number, bottom: number, top: number, near: number, far: number, out: Matrix4 = new Matrix4()): Matrix4
{
    const rl = 1 / (right - left);
    const tb = 1 / (top - bottom);
    const nf = 1 / (near - far);

    return out.set(
        near * 2 * rl,
        0,
        0,
        0,
        0,
        near * 2 * tb,
        0,
        0,
        (right + left) * rl,
        (top + bottom) * tb,
        (far + near) * nf,
        -1,
        0,
        0,
        far * near * 2 * nf,
        0
    );
}
