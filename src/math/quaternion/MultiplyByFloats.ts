import { IQuaternionLike } from './IQuaternionLike';
import { Quaternion } from './Quaternion';

export function MultiplyByFloats (a: IQuaternionLike, x: number, y: number, z: number, w: number, out: Quaternion = new Quaternion()): Quaternion
{
    return out.set(
        a.x * x,
        a.y * y,
        a.z * z,
        a.w * w
    );
}
