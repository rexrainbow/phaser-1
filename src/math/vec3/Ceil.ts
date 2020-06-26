import { IVec3Like } from './IVec3Like';
import { Vec3 } from './Vec3';

export function Ceil (a: IVec3Like, out: Vec3 = new Vec3()): Vec3
{
    return out.set(
        Math.ceil(a.x),
        Math.ceil(a.y),
        Math.ceil(a.z)
    );
}
