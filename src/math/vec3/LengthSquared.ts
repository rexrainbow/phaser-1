import { IVec3 } from './IVec3';

export function LengthSquared (a: IVec3): number
{
    const { x, y, z } = a;

    return x * x + y * y + z * z;
}
