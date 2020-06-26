import { IQuaternionLike } from './IQuaternionLike';

export function LengthSquared (a: IQuaternionLike): number
{
    const { x, y, z, w } = a;

    return x * x + y * y + z * z + w * w;
}
