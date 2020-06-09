import { IQuaternion } from './IQuaternion';
import { Quaternion } from './Quaternion';

export function MultiplyByFloats (a: IQuaternion, x: number, y: number, z: number, w: number, out: Quaternion = new Quaternion()): IQuaternion
{
    return out.set(
        a.x * x,
        a.y * y,
        a.z * z,
        a.w * w
    );
}
