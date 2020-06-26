import { IQuaternionLike } from './IQuaternionLike';
import { Quaternion } from './Quaternion';

export function Subtract (a: IQuaternionLike, b: IQuaternionLike, out: Quaternion = new Quaternion()): Quaternion
{
    return out.set(
        a.x - b.x,
        a.y - b.y,
        a.z - b.z,
        a.w - b.w
    );
}
