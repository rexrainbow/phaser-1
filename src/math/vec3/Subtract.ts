import { IVec3 } from './IVec3';
import { Vec3 } from './Vec3';

export function Subtract (a: IVec3, b: IVec3, out: Vec3 = new Vec3()): IVec3
{
    return out.set(
        a.x - b.x,
        a.y - b.y,
        a.z - b.z
    );
}
