import { IVec2 } from './IVec2';
import { Hermite as MathHermite } from '../Hermite';
import { Vec2 } from './Vec2';

export function Hermite (a: IVec2, b: IVec2, c: IVec2, d: IVec2, t: number, out: Vec2 = new Vec2()): IVec2
{
    return out.set(
        MathHermite(t, a.x, b.x, c.x, d.x),
        MathHermite(t, a.y, b.y, c.y, d.y)
    );
}
