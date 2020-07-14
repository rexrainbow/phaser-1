import { IVec4Like } from './IVec4Like';

export function GetVec4ManhattanDistance (a: IVec4Like, b: IVec4Like): number
{
    return Math.abs(a.x - b.x) + Math.abs(a.y - b.y) + Math.abs(a.z - b.z) + Math.abs(a.w - b.w);
}
