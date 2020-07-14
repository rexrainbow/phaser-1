import { IQuaternionLike } from '../quaternion/IQuaternionLike';
import { IVec3Like } from '../vec3/IVec3Like';
import { Matrix4 } from './Matrix4';

export function Mat4FromRotationTranslation (q: IQuaternionLike, v: IVec3Like, out: Matrix4 = new Matrix4()): Matrix4
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

    const { x: vx, y: vy, z: vz } = v;

    return out.set(
        1 - (yy + zz),
        xy + wz,
        xz - wy,
        0,
        xy - wz,
        1 - (xx + zz),
        yz + wx,
        0,
        xz + wy,
        yz - wx,
        1 - (xx + yy),
        0,
        vx,
        vy,
        vz,
        1
    );
}
