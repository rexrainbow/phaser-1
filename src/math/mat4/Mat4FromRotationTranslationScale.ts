import { IQuaternionLike } from '../quaternion/IQuaternionLike';
import { IVec3Like } from '../vec3/IVec3Like';
import { Matrix4 } from './Matrix4';

// Creates a matrix from a quaternion rotation, vector translation and vector scale

export function Mat4FromRotationTranslationScale (q: IQuaternionLike, v: IVec3Like, s: IVec3Like, out: Matrix4 = new Matrix4()): Matrix4
{
    // Quaternion math
    const { x, y, z, w } = q;

    const x2 = x + x;
    const y2 = y + y;
    const z2 = z + z;

    const xx = x * x2;
    const xy = x * y2;
    const xz = x * z2;
    const yy = y * y2;
    const yz = y * z2;
    const zz = z * z2;
    const wx = w * x2;
    const wy = w * y2;
    const wz = w * z2;

    const { x: sx, y: sy, z: sz } = s;
    const { x: vx, y: vy, z: vz } = v;

    return out.set(
        (1 - (yy + zz)) * sx,
        (xy + wz) * sx,
        (xz - wy) * sx,
        0,
        (xy - wz) * sy,
        (1 - (xx + zz)) * sy,
        (yz + wx) * sy,
        0,
        (xz + wy) * sz,
        (yz - wx) * sz,
        (1 - (xx + yy)) * sz,
        0,
        vx,
        vy,
        vz,
        1
    );
}
