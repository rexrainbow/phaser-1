import { Matrix4 } from './Matrix4';

//  Generates a perspective projection matrix with the given bounds.
//  Passing null/undefined/no value for far will generate infinite projection matrix.

export function Mat4Perspective (fovY: number, aspect: number, near: number, far: number, out: Matrix4 = new Matrix4()): Matrix4
{
    const f = 1 / Math.tan(fovY / 2);

    let m22 = -1;
    let m32 = -2 * near;

    if (far !== null && far !== Infinity)
    {
        const nf = 1 / (near - far);
        m22 = (far + near) * nf;
        m32 = 2 * far * near * nf;
    }

    return out.set(
        f / aspect,
        0,
        0,
        0,
        0,
        f,
        0,
        0,
        0,
        0,
        m22,
        -1,
        0,
        0,
        m32,
        0
    );
}
