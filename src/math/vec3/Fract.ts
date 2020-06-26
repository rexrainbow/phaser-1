import { IVec3Like } from './IVec3Like';
import { Vec3 } from './Vec3';

//  Get a Vec3 from a Vec3s floored values

export function Fract (a: IVec3Like, out: Vec3 = new Vec3()): Vec3
{
    return out.set(
        a.x - Math.floor(a.x),
        a.y - Math.floor(a.y),
        a.z - Math.floor(a.z)
    );
}
