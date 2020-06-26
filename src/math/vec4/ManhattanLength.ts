import { IVec4Like } from './IVec4Like';

export function ManhattanLength (a: IVec4Like): number
{
    const { x, y, z, w } = a;

    return Math.abs(x) + Math.abs(y) + Math.abs(z) + Math.abs(w);
}
