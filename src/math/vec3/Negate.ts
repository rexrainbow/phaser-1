import { IVec3Like } from './IVec3Like';
import { Vec3 } from './Vec3';

export function Negate (a: IVec3Like, out: Vec3 = new Vec3()): Vec3
{
    return out.set(
        -a.x,
        -a.y,
        -a.z
    );
}
