import { IVec2Like } from './IVec2Like';
import { Hermite as MathHermite } from '../Hermite';
import { Vec2 } from './Vec2';

export function Hermite (a: IVec2Like, b: IVec2Like, c: IVec2Like, d: IVec2Like, t: number, out: Vec2 = new Vec2()): Vec2
{
    return out.set(
        MathHermite(t, a.x, b.x, c.x, d.x),
        MathHermite(t, a.y, b.y, c.y, d.y)
    );
}
