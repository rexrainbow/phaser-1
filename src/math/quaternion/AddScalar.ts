import { IQuaternionLike } from './IQuaternionLike';
import { Quaternion } from './Quaternion';

export function AddScalar (a: IQuaternionLike, scalar: number, out: Quaternion = new Quaternion()): Quaternion
{
    return out.set(
        a.x + scalar,
        a.y + scalar,
        a.z + scalar,
        a.w + scalar
    );
}
