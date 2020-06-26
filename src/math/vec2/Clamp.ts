import { IVec2Like } from './IVec2Like';
import { Clamp as MathClamp } from '../Clamp';
import { Vec2 } from './Vec2';

export function Clamp (a: IVec2Like, min: IVec2Like, max: IVec2Like, out: Vec2 = new Vec2()): Vec2
{
    // assumes min < max, componentwise

    return out.set(
        MathClamp(a.x, min.x, max.x),
        MathClamp(a.y, min.y, max.y)
    );
}
