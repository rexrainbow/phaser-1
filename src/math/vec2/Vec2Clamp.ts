import { Clamp } from '../Clamp';
import { Vec2 } from './Vec2';

export function Vec2Clamp (a: Vec2, min: Vec2, max: Vec2, out: Vec2 = new Vec2()): Vec2
{
    // assumes min < max, componentwise

    return out.set(
        Clamp(a.x, min.x, max.x),
        Clamp(a.y, min.y, max.y)
    );
}
