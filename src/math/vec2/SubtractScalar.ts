import { Vec2 } from './Vec2';

export function SubtractScalar (a: Vec2, scalar: number, out: Vec2 = new Vec2()): Vec2
{
    return out.set(
        a.x - scalar,
        a.y - scalar
    );
}
