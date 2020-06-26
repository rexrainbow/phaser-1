import { DistanceSquared } from './DistanceSquared';
import { IVec4Like } from './IVec4Like';

export function Distance (a: IVec4Like, b: IVec4Like): number
{
    return Math.sqrt(DistanceSquared(a, b));
}
