import { IVec3Like } from './IVec3Like';
import { Vec3 } from './Vec3';

export function Abs (a: IVec3Like, out: Vec3 = new Vec3()): Vec3
{
    return out.set(
        Math.abs(a.x),
        Math.abs(a.y),
        Math.abs(a.z)
    );
}
