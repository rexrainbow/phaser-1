import { IVec3Like } from './IVec3Like';

export function GetVec3Length (a: IVec3Like): number
{
    const { x, y, z } = a;

    return Math.sqrt(x * x + y * y + z * z);
}
