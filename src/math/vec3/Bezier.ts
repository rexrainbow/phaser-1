import { IVec3Like } from './IVec3Like';
import { Bezier as MathBezier } from '../Bezier';
import { Vec3 } from './Vec3';

export function Bezier (a: IVec3Like, b: IVec3Like, c: IVec3Like, d: IVec3Like, t: number, out: Vec3 = new Vec3()): Vec3
{
    return out.set(
        MathBezier(t, a.x, b.x, c.x, d.x),
        MathBezier(t, a.y, b.y, c.y, d.y),
        MathBezier(t, a.z, b.z, c.z, d.z)
    );
}
