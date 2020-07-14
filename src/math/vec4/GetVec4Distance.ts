import { GetVec4DistanceSquared } from './GetVec4DistanceSquared';
import { IVec4Like } from './IVec4Like';

export function GetVec4Distance (a: IVec4Like, b: IVec4Like): number
{
    return Math.sqrt(GetVec4DistanceSquared(a, b));
}
