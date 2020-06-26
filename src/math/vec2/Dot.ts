import { IVec2Like } from './IVec2Like';

export function Dot (a: IVec2Like, b: IVec2Like): number
{
    return a.x * b.x + a.y * b.y;
}
