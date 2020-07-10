import { IVec3Like } from './IVec3Like';

export function GetVec3ManhattanDistance (a: IVec3Like, b: IVec3Like): number
{
    return Math.abs(a.x - b.x) + Math.abs(a.y - b.y) + Math.abs(a.z - b.z);
}
