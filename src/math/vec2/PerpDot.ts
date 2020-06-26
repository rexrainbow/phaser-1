import { IVec2Like } from './IVec2Like';

export function PerpDot (a: IVec2Like, b: IVec2Like): number
{
    return (a.x * b.y) - (a.y * b.x);
}
