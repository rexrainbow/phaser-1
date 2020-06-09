import { IVec3 } from './IVec3';
import { Vec3 } from './Vec3';

export function Negate (a: IVec3, out: Vec3 = new Vec3()): IVec3
{
    return out.set(-a.x, -a.y, -a.z);
}
