import { Vec3 } from './Vec3';

export function Vec3Negate (a: Vec3, out: Vec3 = new Vec3()): Vec3
{
    return out.set(
        -a.x,
        -a.y,
        -a.z
    );
}
