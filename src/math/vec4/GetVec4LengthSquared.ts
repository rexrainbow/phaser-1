import { IVec4Like } from './IVec4Like';

export function GetVec4LengthSquared (a: IVec4Like): number
{
    const { x, y, z, w } = a;

    return x * x + y * y + z * z + w * w;
}
