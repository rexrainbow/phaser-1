import { Vec3 } from './Vec3';

export function Vec3Ceil (a: Vec3, out: Vec3 = new Vec3()): Vec3
{
    return out.set(
        Math.ceil(a.x),
        Math.ceil(a.y),
        Math.ceil(a.z)
    );
}
