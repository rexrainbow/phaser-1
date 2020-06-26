import { IVec2Like } from './IVec2Like';
import { Vec2 } from './Vec2';

export function MultiplyByFloats (a: IVec2Like, x: number, y: number, out: Vec2 = new Vec2()): Vec2
{
    return out.set(
        a.x * x,
        a.y * y
    );
}
