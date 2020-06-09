import { IQuaternion } from './IQuaternion';
import { Quaternion } from './Quaternion';

export function Scale (a: IQuaternion, scalar: number, out: Quaternion = new Quaternion()): IQuaternion
{
    const { x, y, z, w } = a;

    return out.set(
        x * scalar,
        y * scalar,
        z * scalar,
        w * scalar
    );
}
