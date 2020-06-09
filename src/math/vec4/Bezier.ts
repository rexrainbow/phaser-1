import { IVec4 } from './IVec4';
import { Bezier as MathBezier } from '../Bezier';
import { Vec4 } from './Vec4';

export function Bezier (a: IVec4, b: IVec4, c: IVec4, d: IVec4, t: number, out: Vec4 = new Vec4()): IVec4
{
    return out.set(
        MathBezier(t, a.x, b.x, c.x, d.x),
        MathBezier(t, a.y, b.y, c.y, d.y),
        MathBezier(t, a.z, b.z, c.z, d.z),
        MathBezier(t, a.w, b.w, c.w, d.w)
    );
}
