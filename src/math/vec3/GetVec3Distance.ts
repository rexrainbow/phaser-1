import { GetVec3DistanceSquared } from './GetVec3DistanceSquared';
import { IVec3Like } from './IVec3Like';

export function GetVec3Distance (a: IVec3Like, b: IVec3Like): number
{
    return Math.sqrt(GetVec3DistanceSquared(a, b));
}
