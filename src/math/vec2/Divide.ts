import { IVec2Like } from './IVec2Like';
import { Vec2 } from './Vec2';

export function Divide (a: IVec2Like, b: IVec2Like, out: Vec2 = new Vec2()): Vec2
{
    return out.set(
        a.x / b.x,
        a.y / b.y
    );
}
