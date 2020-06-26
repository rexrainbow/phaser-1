import { Vec2 } from './Vec2';

export function Ceil (a: Vec2, out: Vec2 = new Vec2()): Vec2
{
    return out.set(
        Math.ceil(a.x),
        Math.ceil(a.y)
    );
}
