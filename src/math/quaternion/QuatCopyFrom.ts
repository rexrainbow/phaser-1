import { IQuaternionLike } from './IQuaternionLike';
import { Quaternion } from './Quaternion';

export function QuatCopyFrom (source: IQuaternionLike, dest: Quaternion): Quaternion
{
    const { x, y, z, w } = source;

    return dest.set(x, y, z, w);
}
