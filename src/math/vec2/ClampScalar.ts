import { IVec2Like } from './IVec2Like';
import { Clamp as MathClamp } from '../Clamp';
import { Vec2 } from './Vec2';

export function ClampScalar (a: IVec2Like, min: number, max: number, out: Vec2 = new Vec2()): Vec2
{
    return out.set(
        MathClamp(a.x, min, max),
        MathClamp(a.y, min, max)
    );
}
