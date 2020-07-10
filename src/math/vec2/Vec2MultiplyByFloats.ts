import { Vec2 } from './Vec2';

export function Vec2MultiplyByFloats (a: Vec2, x: number, y: number, out: Vec2 = new Vec2()): Vec2
{
    return out.set(
        a.x * x,
        a.y * y
    );
}
