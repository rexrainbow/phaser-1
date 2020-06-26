import { IQuaternionLike } from './IQuaternionLike';
import { Quaternion } from './Quaternion';

export function Clone (source: IQuaternionLike): Quaternion
{
    const { x, y, z, w } = source;

    return new Quaternion(x, y, z, w);
}
