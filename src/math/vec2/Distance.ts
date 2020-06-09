import { DistanceSquared } from './DistanceSquared';
import { IVec2 } from './IVec2';

export function Distance (a: IVec2, b: IVec2): number
{
    return Math.sqrt(DistanceSquared(a, b));
}
