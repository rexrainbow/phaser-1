import { IQuaternionLike } from './IQuaternionLike';
import { Quaternion } from './Quaternion';

export function SubtractScalar (a: IQuaternionLike, scalar: number, out: Quaternion = new Quaternion()): Quaternion
{
    const { x, y, z, w } = a;

    return out.set(
        x - scalar,
        y - scalar,
        z - scalar,
        w - scalar
    );
}
