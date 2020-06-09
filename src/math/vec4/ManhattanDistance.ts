import { IVec4 } from './IVec4';

export function ManhattanDistance (a: IVec4, b: IVec4): number
{
    return Math.abs(a.x - b.x) + Math.abs(a.y - b.y) + Math.abs(a.z - b.z) + Math.abs(a.w - b.w);
}
