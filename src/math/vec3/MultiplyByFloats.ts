import { Vec3 } from './Vec3';

export function MultiplyByFloats (a: Vec3, x: number, y: number, z: number, out: Vec3 = new Vec3()): Vec3
{
    return out.set(
        a.x * x,
        a.y * y,
        a.z * z
    );
}
