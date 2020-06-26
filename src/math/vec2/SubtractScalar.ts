import { IVec2Like } from './IVec2Like';
import { Vec2 } from './Vec2';

export function SubtractScalar (a: IVec2Like, scalar: number, out: Vec2 = new Vec2()): Vec2
{
    return out.set(
        a.x - scalar,
        a.y - scalar
    );
}
