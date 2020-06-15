import { IMatrix4 } from './IMatrix4';
import { Matrix4 } from './Matrix4';

//  Generates a perspective projection matrix with the given bounds.
//  Passing null/undefined/no value for far will generate infinite projection matrix.

export function Perspective (fovY: number, aspect: number, near: number, far: number, out: IMatrix4 = new Matrix4()): IMatrix4
{
    const f = 1.0 / Math.tan(fovY / 2);

    let m22 = -1;
    let m32 = -2 * near;

    if (far != null && far !== Infinity)
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
