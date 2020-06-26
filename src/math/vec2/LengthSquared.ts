import { IVec2Like } from './IVec2Like';

export function LengthSquared (a: IVec2Like): number
{
    return (a.x * a.x + a.y * a.y);
}
