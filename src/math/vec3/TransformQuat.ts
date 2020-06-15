import { IQuaternion } from '../quaternion/IQuaternion';
import { IVec3 } from './IVec3';
import { Vec3 } from './Vec3';

export function TransformQuat (a: IVec3, q: IQuaternion, out: Vec3 = new Vec3()): IVec3
{
    const { x: qx, y: qy, z: qz, w: qw } = q;
    const { x, y, z } = a;

    let uvx = qy * z - qz * y;
    let uvy = qz * x - qx * z;
    let uvz = qx * y - qy * x;

    let uuvx = qy * uvz - qz * uvy;
    let uuvy = qz * uvx - qx * uvz;
    let uuvz = qx * uvy - qy * uvx;

    const w2 = qw * 2;

    uvx *= w2;
    uvy *= w2;
    uvz *= w2;

    uuvx *= 2;
    uuvy *= 2;
    uuvz *= 2;

    return out.set(
        x + uvx + uuvx,
        y + uvy + uuvy,
        z + uvz + uuvz
    );
}
