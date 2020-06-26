import { Clamp as MathClamp } from '../Clamp';
import { Vec2 } from './Vec2';

export function Clamp (a: Vec2, min: Vec2, max: Vec2, out: Vec2 = new Vec2()): Vec2
{
    // assumes min < max, componentwise

    return out.set(
        MathClamp(a.x, min.x, max.x),
        MathClamp(a.y, min.y, max.y)
    );
}
