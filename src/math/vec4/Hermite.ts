import { IVec4Like } from './IVec4Like';
import { Hermite as MathHermite } from '../Hermite';
import { Vec4 } from './Vec4';

export function Hermite (a: IVec4Like, b: IVec4Like, c: IVec4Like, d: IVec4Like, t: number, out: Vec4 = new Vec4()): Vec4
{
    return out.set(
        MathHermite(t, a.x, b.x, c.x, d.x),
        MathHermite(t, a.y, b.y, c.y, d.y),
        MathHermite(t, a.z, b.z, c.z, d.z),
        MathHermite(t, a.w, b.w, c.w, d.w)
    );
}
