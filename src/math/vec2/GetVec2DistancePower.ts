import { IVec2Like } from './IVec2Like';

export function GetVec2DistancePower (a: IVec2Like, b: IVec2Like, pow: number = 2): number
{
    return Math.sqrt(Math.pow(b.x - a.x, pow) + Math.pow(b.y - a.y, pow));
}
