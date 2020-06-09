import { IVec4 } from './IVec4';

export function LengthSquared (a: IVec4): number
{
    const { x, y, z, w } = a;

    return x * x + y * y + z * z + w * w;
}
