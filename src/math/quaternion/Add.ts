import { IQuaternion } from './IQuaternion';
import { Quaternion } from './Quaternion';

export function Add (a: IQuaternion, b: IQuaternion, out: Quaternion = new Quaternion()): IQuaternion
{
    return out.set(
        a.x + b.x,
        a.y + b.y,
        a.z + b.z,
        a.w + b.w
    );
}
