import { GetVec2DistanceSquared } from './GetVec2DistanceSquared';
import { IVec2Like } from './IVec2Like';

export function GetVec2Distance (a: IVec2Like, b: IVec2Like): number
{
    return Math.sqrt(GetVec2DistanceSquared(a, b));
}
