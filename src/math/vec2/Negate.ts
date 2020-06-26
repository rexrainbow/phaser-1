import { Vec2 } from './Vec2';

export function Negate (a: Vec2, out: Vec2 = new Vec2()): Vec2
{
    return out.set(
        -a.x,
        -a.y
    );
}
