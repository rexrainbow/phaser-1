import { IVec2Like } from './IVec2Like';

export function ManhattanDistance (a: IVec2Like, b: IVec2Like): number
{
    return Math.abs(a.x - b.x) + Math.abs(a.y - b.y);
}
