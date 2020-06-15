import { IMatrix4 } from './IMatrix4';
import { IQuaternion } from '../quaternion/IQuaternion';
import { Matrix4 } from './Matrix4';

// Calculates a 4x4 matrix from the given quaternion

export function FromQuat (q: IQuaternion, out: IMatrix4 = new Matrix4()): IMatrix4
{
    const { x, y, z, w } = q;

    const x2 = x + x;
    const y2 = y + y;
    const z2 = z + z;

    const xx = x * x2;
    const yx = y * x2;
    const yy = y * y2;
    const zx = z * x2;
    const zy = z * y2;
    const zz = z * z2;
    const wx = w * x2;
    const wy = w * y2;
    const wz = w * z2;

    return out.set(
        1 - yy - zz,
        yx + wz,
        zx - wy,
        0,
        yx - wz,
        1 - xx - zz,
        zy + wx,
        0,
        zx + wy,
        zy - wx,
        1 - xx - yy,
        0,
        0,
        0,
        0,
        1
    );
}
