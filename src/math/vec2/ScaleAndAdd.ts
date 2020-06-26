import { IVec2Like } from './IVec2Like';
import { Vec2 } from './Vec2';

export function ScaleAndAdd (a: IVec2Like, b: IVec2Like, scalar: number, out: Vec2 = new Vec2()): Vec2
{
    return out.set(
        a.x + b.x * scalar,
        a.y + b.y * scalar
    );
}
