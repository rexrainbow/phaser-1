import { Vec2 } from './Vec2';

export function Abs (a: Vec2, out: Vec2 = new Vec2()): Vec2
{
    return out.set(
        Math.abs(a.x),
        Math.abs(a.y)
    );
}
