import { IQuaternionLike } from './IQuaternionLike';
import { Quaternion } from './Quaternion';

export function ScaleAndAdd (a: IQuaternionLike, b: IQuaternionLike, scalar: number, out: Quaternion = new Quaternion()): Quaternion
{
    return out.set(
        a.x + b.x * scalar,
        a.y + b.y * scalar,
        a.z + b.z * scalar,
        a.w + b.w * scalar
    );
}
