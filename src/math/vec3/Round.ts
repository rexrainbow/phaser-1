import { IVec3 } from './IVec3';
import { Vec3 } from './Vec3';

export function Round (a: IVec3, out: Vec3 = new Vec3()): IVec3
{
    return out.set(
        Math.round(a.x),
        Math.round(a.y),
        Math.round(a.z)
    );
}
