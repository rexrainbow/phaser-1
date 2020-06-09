import { IVec3 } from './IVec3';

export function ManhattanDistance (a: IVec3, b: IVec3): number
{
    return Math.abs(a.x - b.x) + Math.abs(a.y - b.y) + Math.abs(a.z - b.z);
}
