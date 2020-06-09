import { IVec3 } from './IVec3';
import { Vec3 } from './Vec3';

export function Ceil (a: IVec3, out: Vec3 = new Vec3()): IVec3
{
    return out.set(
        Math.ceil(a.x),
        Math.ceil(a.y),
        Math.ceil(a.z)
    );
}
