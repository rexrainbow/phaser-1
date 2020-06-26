import { IVec3Like } from './IVec3Like';
import { Vec3 } from './Vec3';

export function Add (a: IVec3Like, b: IVec3Like, out: Vec3 = new Vec3()): Vec3
{
    return out.set(
        a.x + b.x,
        a.y + b.y,
        a.z + b.z
    );
}
