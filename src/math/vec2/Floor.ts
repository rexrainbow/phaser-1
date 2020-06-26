import { Vec2 } from './Vec2';

export function Floor (a: Vec2, out: Vec2 = new Vec2()): Vec2
{
    return out.set(
        Math.floor(a.x),
        Math.floor(a.y)
    );
}
