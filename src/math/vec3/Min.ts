import { IVec3 } from './IVec3';
import { Vec3 } from './Vec3';

export function Min (a: IVec3, out: Vec3 = new Vec3()): IVec3
{
    return out.set(
        Math.min(a.x),
        Math.min(a.y),
        Math.min(a.z)
    );
}
