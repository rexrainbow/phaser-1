import { IVec3Like } from './IVec3Like';
import { Vec3 } from './Vec3';

export function Floor (a: IVec3Like, out: Vec3 = new Vec3()): Vec3
{
    return out.set(
        Math.floor(a.x),
        Math.floor(a.y),
        Math.floor(a.z)
    );
}
