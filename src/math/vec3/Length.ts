import { IVec3 } from './IVec3';

export function Length (a: IVec3): number
{
    const { x, y, z } = a;

    return Math.sqrt(x * x + y * y + z * z);
}
