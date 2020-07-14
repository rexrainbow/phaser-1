import { Hermite } from '../Hermite';
import { IVec4Like } from './IVec4Like';
import { Vec4 } from './Vec4';

export function Vec4Hermite (a: IVec4Like, b: IVec4Like, c: IVec4Like, d: IVec4Like, t: number, out: Vec4 = new Vec4()): Vec4
{
    return out.set(
        Hermite(t, a.x, b.x, c.x, d.x),
        Hermite(t, a.y, b.y, c.y, d.y),
        Hermite(t, a.z, b.z, c.z, d.z),
        Hermite(t, a.w, b.w, c.w, d.w)
    );
}
