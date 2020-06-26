import { Vec2 } from './Vec2';

export function Round (a: Vec2, out: Vec2 = new Vec2()): Vec2
{
    return out.set(
        Math.round(a.x),
        Math.round(a.y)
    );
}
