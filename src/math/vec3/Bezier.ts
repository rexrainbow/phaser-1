import { IVec3 } from './IVec3';
import { Bezier as MathBezier } from '../Bezier';
import { Vec3 } from './Vec3';

export function Bezier (a: IVec3, b: IVec3, c: IVec3, d: IVec3, t: number, out: Vec3 = new Vec3()): IVec3
{
    return out.set(
        MathBezier(t, a.x, b.x, c.x, d.x),
        MathBezier(t, a.y, b.y, c.y, d.y),
        MathBezier(t, a.z, b.z, c.z, d.z)
    );
}
