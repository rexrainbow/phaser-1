import { IVec3 } from './IVec3';
import { Vec3 } from './Vec3';

export function Floor (a: IVec3, out: Vec3 = new Vec3()): IVec3
{
    return out.set(
        Math.floor(a.x),
        Math.floor(a.y),
        Math.floor(a.z)
    );
}
