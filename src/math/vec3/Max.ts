import { IVec3 } from './IVec3';
import { Vec3 } from './Vec3';

export function Max (a: IVec3, out: Vec3 = new Vec3()): IVec3
{
    return out.set(
        Math.max(a.x),
        Math.max(a.y),
        Math.max(a.z)
    );
}
