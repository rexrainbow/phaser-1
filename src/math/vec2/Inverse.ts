import { IVec2Like } from './IVec2Like';
import { Vec2 } from './Vec2';

export function Inverse (a: IVec2Like, out: Vec2 = new Vec2()): Vec2
{
    return out.set(
        1 / a.x,
        1 / a.y
    );
}
