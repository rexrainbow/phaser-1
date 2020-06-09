import { DistanceSquared } from './DistanceSquared';
import { IVec3 } from './IVec3';

export function Distance (a: IVec3, b: IVec3): number
{
    return Math.sqrt(DistanceSquared(a, b));
}
