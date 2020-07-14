import { IVec4Like } from './IVec4Like';

export function GetVec4Length (a: IVec4Like): number
{
    const { x, y, z, w } = a;

    return Math.sqrt(x * x + y * y + z * z + w * w);
}
