import { Vec3 } from './Vec3';

export function Round (a: Vec3, out: Vec3 = new Vec3()): Vec3
{
    return out.set(
        Math.round(a.x),
        Math.round(a.y),
        Math.round(a.z)
    );
}
