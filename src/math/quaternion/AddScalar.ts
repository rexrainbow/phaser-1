import { IQuaternion } from './IQuaternion';
import { Quaternion } from './Quaternion';

export function AddScalar (a: IQuaternion, scalar: number, out: Quaternion = new Quaternion()): IQuaternion
{
    return out.set(
        a.x + scalar,
        a.y + scalar,
        a.z + scalar,
        a.w + scalar
    );
}
