import { DistanceSquared } from './DistanceSquared';
import { IVec4 } from './IVec4';

export function Distance (a: IVec4, b: IVec4): number
{
    return Math.sqrt(DistanceSquared(a, b));
}
