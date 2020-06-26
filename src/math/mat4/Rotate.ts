import { IMatrix4 } from './IMatrix4';
import { IVec3Like } from '../vec3/IVec3Like';
import { Matrix4 } from './Matrix4';

export function Rotate (matrix: IMatrix4, angle: number, axis: IVec3Like, out: Matrix4 = new Matrix4()): Matrix4
{
    let { x, y, z } = axis;

    let len = Math.hypot(x, y, z);

    if (len < 0.00001)
    {
        return null;
    }

    len = 1 / len;

    x *= len;
    y *= len;
    z *= len;

    const s = Math.sin(angle);
    const c = Math.cos(angle);
    const t = 1 - c;

    const [ a00, a01, a02, a03, a10, a11, a12, a13, a20, a21, a22, a23, a30, a31, a32, a33 ] = matrix.data;

    // Construct the elements of the rotation matrix
    const b00 = x * x * t + c;
    const b01 = y * x * t + z * s;
    const b02 = z * x * t - y * s;
    const b10 = x * y * t - z * s;
    const b11 = y * y * t + c;
    const b12 = z * y * t + x * s;
    const b20 = x * z * t + y * s;
    const b21 = y * z * t - x * s;
    const b22 = z * z * t + c;

    // Perform rotation-specific matrix multiplication

    return out.set(
        a00 * b00 + a10 * b01 + a20 * b02,
        a01 * b00 + a11 * b01 + a21 * b02,
        a02 * b00 + a12 * b01 + a22 * b02,
        a03 * b00 + a13 * b01 + a23 * b02,
        a00 * b10 + a10 * b11 + a20 * b12,
        a01 * b10 + a11 * b11 + a21 * b12,
        a02 * b10 + a12 * b11 + a22 * b12,
        a03 * b10 + a13 * b11 + a23 * b12,
        a00 * b20 + a10 * b21 + a20 * b22,
        a01 * b20 + a11 * b21 + a21 * b22,
        a02 * b20 + a12 * b21 + a22 * b22,
        a03 * b20 + a13 * b21 + a23 * b22,
        a30,
        a31,
        a32,
        a33
    );
}
