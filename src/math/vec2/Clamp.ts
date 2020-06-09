import { IVec2 } from './IVec2';
import { Clamp as MathClamp } from '../Clamp';
import { Vec2 } from './Vec2';

export function Clamp (a: IVec2, min: IVec2, max: IVec2, out: Vec2 = new Vec2()): IVec2
{
    // assumes min < max, componentwise

    return out.set(
        MathClamp(a.x, min.x, max.x),
        MathClamp(a.y, min.y, max.y)
    );
}
