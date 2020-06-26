import { IVec2Like } from './IVec2Like';
import { Vec2 } from './Vec2';

export function Floor (a: IVec2Like, out: Vec2 = new Vec2()): Vec2
{
    return out.set(
        Math.floor(a.x),
        Math.floor(a.y)
    );
}
