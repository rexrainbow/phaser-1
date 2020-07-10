import { Vec2 } from './Vec2';

export function Vec2Add (a: Vec2, b: Vec2, out: Vec2 = new Vec2()): Vec2
{
    return out.set(
        a.x + b.x,
        a.y + b.y
    );
}
