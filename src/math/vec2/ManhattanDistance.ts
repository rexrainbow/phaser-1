import { IVec2 } from './IVec2';

export function ManhattanDistance (a: IVec2, b: IVec2): number
{
    return Math.abs(a.x - b.x) + Math.abs(a.y - b.y);
}
