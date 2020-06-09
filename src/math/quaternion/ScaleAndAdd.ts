import { IQuaternion } from './IQuaternion';
import { Quaternion } from './Quaternion';

export function ScaleAndAdd (a: IQuaternion, b: IQuaternion, scalar: number, out: Quaternion = new Quaternion()): IQuaternion
{
    return out.set(
        a.x + b.x * scalar,
        a.y + b.y * scalar,
        a.z + b.z * scalar,
        a.w + b.w * scalar
    );
}
