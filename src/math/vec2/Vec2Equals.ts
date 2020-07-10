import { IVec2Like } from './IVec2Like';

export function Vec2Equals (a: IVec2Like, b: IVec2Like): boolean
{
    return a.x === b.x && a.y === b.y;
}
