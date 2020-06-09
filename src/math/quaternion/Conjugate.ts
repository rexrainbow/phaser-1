import { IQuaternion } from './IQuaternion';
import { Quaternion } from './Quaternion';

export function Conjugate (a: IQuaternion, out: IQuaternion = new Quaternion()): IQuaternion
{
    const { x, y, z, w } = a;

    return out.set(
        x * -1,
        y * -1,
        z * -1,
        w
    );
}
