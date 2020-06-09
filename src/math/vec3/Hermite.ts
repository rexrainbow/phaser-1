import { IVec3 } from './IVec3';
import { Hermite as MathHermite } from '../Hermite';
import { Vec3 } from './Vec3';

export function Hermite (a: IVec3, b: IVec3, c: IVec3, d: IVec3, t: number, out: Vec3 = new Vec3()): IVec3
{
    return out.set(
        MathHermite(t, a.x, b.x, c.x, d.x),
        MathHermite(t, a.y, b.y, c.y, d.y),
        MathHermite(t, a.z, b.z, c.z, d.z)
    );
}
