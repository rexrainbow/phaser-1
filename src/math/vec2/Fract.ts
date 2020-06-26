import { IVec2Like } from './IVec2Like';
import { Vec2 } from './Vec2';

//  Get a Vec2 from a Vec2s floored values

export function Fract (a: IVec2Like, out: Vec2 = new Vec2()): Vec2
{
    return out.set(
        a.x - Math.floor(a.x),
        a.y - Math.floor(a.y)
    );
}
