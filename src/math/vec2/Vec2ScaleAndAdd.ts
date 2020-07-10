import { Vec2 } from './Vec2';

export function Vec2ScaleAndAdd (a: Vec2, b: Vec2, scalar: number, out: Vec2 = new Vec2()): Vec2
{
    return out.set(
        a.x + b.x * scalar,
        a.y + b.y * scalar
    );
}
