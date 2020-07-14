import { IQuaternionLike } from './IQuaternionLike';

export function GetQuatLength (a: IQuaternionLike): number
{
    const { x, y, z, w } = a;

    return Math.sqrt(x * x + y * y + z * z + w * w);
}
