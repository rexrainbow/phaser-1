import { IVec3Like } from './IVec3Like';
import { Vec3 } from './Vec3';

export function Inverse (a: IVec3Like, out: Vec3 = new Vec3()): Vec3
{
    return out.set(
        1 / a.x,
        1 / a.y,
        1 / a.z
    );
}
