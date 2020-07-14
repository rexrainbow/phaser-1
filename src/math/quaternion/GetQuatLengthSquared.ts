import { IQuaternionLike } from './IQuaternionLike';

export function GetQuatLengthSquared (a: IQuaternionLike): number
{
    const { x, y, z, w } = a;

    return x * x + y * y + z * z + w * w;
}
