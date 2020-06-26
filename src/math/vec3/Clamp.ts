import { IVec3Like } from './IVec3Like';
import { Clamp as MathClamp } from '../Clamp';
import { Vec3 } from './Vec3';

export function Clamp (a: IVec3Like, min: IVec3Like, max: IVec3Like, out: Vec3 = new Vec3()): Vec3
{
    // assumes min < max, componentwise

    return out.set(
        MathClamp(a.x, min.x, max.x),
        MathClamp(a.y, min.y, max.y),
        MathClamp(a.z, min.z, max.z)
    );
}
