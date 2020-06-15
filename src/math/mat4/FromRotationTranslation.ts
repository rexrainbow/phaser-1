import { IMatrix4 } from './IMatrix4';
import { IQuaternion } from '../quaternion/IQuaternion';
import { IVec3 } from '../vec3/IVec3';
import { Matrix4 } from './Matrix4';

export function FromRotationTranslation (q: IQuaternion, v: IVec3, out: IMatrix4 = new Matrix4()): IMatrix4
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
