import { Vec2 } from './Vec2';

export function Vec2Inverse (a: Vec2, out: Vec2 = new Vec2()): Vec2
{
    return out.set(
        1 / a.x,
        1 / a.y
    );
}
