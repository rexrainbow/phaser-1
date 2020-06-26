import { Vec3 } from './Vec3';

export function Abs (a: Vec3, out: Vec3 = new Vec3()): Vec3
{
    return out.set(
        Math.abs(a.x),
        Math.abs(a.y),
        Math.abs(a.z)
    );
}
