import { IVec2 } from './IVec2';
import { Bezier as MathBezier } from '../Bezier';
import { Vec2 } from './Vec2';

export function Bezier (a: IVec2, b: IVec2, c: IVec2, d: IVec2, t: number, out: Vec2 = new Vec2()): IVec2
{
    return out.set(
        MathBezier(t, a.x, b.x, c.x, d.x),
        MathBezier(t, a.y, b.y, c.y, d.y)
    );
}
