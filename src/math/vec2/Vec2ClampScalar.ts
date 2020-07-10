import { Clamp } from '../Clamp';
import { Vec2 } from './Vec2';

export function Vec2ClampScalar (a: Vec2, min: number, max: number, out: Vec2 = new Vec2()): Vec2
{
    return out.set(
        Clamp(a.x, min, max),
        Clamp(a.y, min, max)
    );
}
