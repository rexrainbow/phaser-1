import { IVec4 } from './IVec4';

export function Length (a: IVec4): number
{
    const { x, y, z, w } = a;

    return Math.sqrt(x * x + y * y + z * z + w * w);
}
