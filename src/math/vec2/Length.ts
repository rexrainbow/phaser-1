import { IVec2Like } from './IVec2Like';

export function Length (a: IVec2Like): number
{
    return Math.sqrt(a.x * a.x + a.y * a.y);
}
