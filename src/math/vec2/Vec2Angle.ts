import { IVec2Like } from './IVec2Like';

export function Vec2Angle (a: IVec2Like, b: IVec2Like): number
{
    return Math.atan2(b.y - a.y, b.x - a.x);
}
