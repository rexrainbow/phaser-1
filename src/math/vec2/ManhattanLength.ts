import { IVec2 } from './IVec2';

export function ManhattanLength (a: IVec2): number
{
    return Math.abs(a.x) + Math.abs(a.y);
}
