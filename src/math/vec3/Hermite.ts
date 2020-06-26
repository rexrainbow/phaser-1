import { IVec3Like } from './IVec3Like';
import { Hermite as MathHermite } from '../Hermite';
import { Vec3 } from './Vec3';

export function Hermite (a: IVec3Like, b: IVec3Like, c: IVec3Like, d: IVec3Like, t: number, out: Vec3 = new Vec3()): Vec3
{
    return out.set(
        MathHermite(t, a.x, b.x, c.x, d.x),
        MathHermite(t, a.y, b.y, c.y, d.y),
        MathHermite(t, a.z, b.z, c.z, d.z)
    );
}
