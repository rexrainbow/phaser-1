import { IVec4 } from './IVec4';

export function ManhattanLength (a: IVec4): number
{
    const { x, y, z, w } = a;

    return Math.abs(x) + Math.abs(y) + Math.abs(z) + Math.abs(w);
}
