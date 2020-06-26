import { Vec3 } from './Vec3';

export function ScaleAndAdd (a: Vec3, b: Vec3, scalar: number, out: Vec3 = new Vec3()): Vec3
{
    return out.set(
        a.x + b.x * scalar,
        a.y + b.y * scalar,
        a.z + b.z * scalar
    );
}
