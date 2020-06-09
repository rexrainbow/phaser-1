import { IVec4 } from './IVec4';
import { Hermite as MathHermite } from '../Hermite';
import { Vec4 } from './Vec4';

export function Hermite (a: IVec4, b: IVec4, c: IVec4, d: IVec4, t: number, out: Vec4 = new Vec4()): IVec4
{
    return out.set(
        MathHermite(t, a.x, b.x, c.x, d.x),
        MathHermite(t, a.y, b.y, c.y, d.y),
        MathHermite(t, a.z, b.z, c.z, d.z),
        MathHermite(t, a.w, b.w, c.w, d.w)
    );
}
