import { IVec3 } from './IVec3';
import { Vec3 } from './Vec3';

export function Abs (a: IVec3, out: Vec3 = new Vec3()): IVec3
{
    return out.set(Math.abs(a.x), Math.abs(a.y), Math.abs(a.z));
}
