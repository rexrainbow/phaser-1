import { IVec3 } from './IVec3';
import { Vec3 } from './Vec3';

export function RoundToZero (a: IVec3, out: Vec3 = new Vec3()): IVec3
{
    return out.set(
        (a.x < 0) ? Math.ceil(a.x) : Math.floor(a.x),
        (a.y < 0) ? Math.ceil(a.y) : Math.floor(a.y),
        (a.z < 0) ? Math.ceil(a.z) : Math.floor(a.z)
    );
}
