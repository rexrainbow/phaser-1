import { IVec3Like } from './IVec3Like';

export function ManhattanLength (a: IVec3Like): number
{
    return Math.abs(a.x) + Math.abs(a.y) + Math.abs(a.z);
}
