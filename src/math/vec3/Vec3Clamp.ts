import { Clamp } from '../Clamp';
import { Vec3 } from './Vec3';

export function Vec3Clamp (a: Vec3, min: Vec3, max: Vec3, out: Vec3 = new Vec3()): Vec3
{
    // assumes min < max, componentwise

    return out.set(
        Clamp(a.x, min.x, max.x),
        Clamp(a.y, min.y, max.y),
        Clamp(a.z, min.z, max.z)
    );
}
