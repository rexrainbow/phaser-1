import { DistanceSquared } from './DistanceSquared';
import { IVec2Like } from './IVec2Like';

export function Distance (a: IVec2Like, b: IVec2Like): number
{
    return Math.sqrt(DistanceSquared(a, b));
}
