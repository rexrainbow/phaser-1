import { IVec3 } from './IVec3';

export function ManhattanLength (a: IVec3): number
{
    return Math.abs(a.x) + Math.abs(a.y) + Math.abs(a.z);
}
