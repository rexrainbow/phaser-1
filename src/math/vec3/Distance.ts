import { DistanceSquared } from './DistanceSquared';
import { IVec3Like } from './IVec3Like';

export function Distance (a: IVec3Like, b: IVec3Like): number
{
    return Math.sqrt(DistanceSquared(a, b));
}
