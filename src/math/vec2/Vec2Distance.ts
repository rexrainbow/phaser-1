import { IVec2Like } from './IVec2Like';
import { Vec2DistanceSquared } from './Vec2DistanceSquared';

export function Vec2Distance (a: IVec2Like, b: IVec2Like): number
{
    return Math.sqrt(Vec2DistanceSquared(a, b));
}
