import { IVec2Like } from './IVec2Like';
import { Bezier as MathBezier } from '../Bezier';
import { Vec2 } from './Vec2';

export function Bezier (a: IVec2Like, b: IVec2Like, c: IVec2Like, d: IVec2Like, t: number, out: Vec2 = new Vec2()): Vec2
{
    return out.set(
        MathBezier(t, a.x, b.x, c.x, d.x),
        MathBezier(t, a.y, b.y, c.y, d.y)
    );
}
