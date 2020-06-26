import { IVec3Like } from './IVec3Like';
import { Vec3 } from './Vec3';

export function Scale (a: IVec3Like, scalar: number, out: Vec3 = new Vec3()): Vec3
{
    return out.set(
        a.x * scalar,
        a.y * scalar,
        a.z * scalar
    );
}
