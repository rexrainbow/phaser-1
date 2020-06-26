import { IVec3Like } from './IVec3Like';

export function LengthSquared (a: IVec3Like): number
{
    const { x, y, z } = a;

    return x * x + y * y + z * z;
}
