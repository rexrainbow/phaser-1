import { Vec3 } from './Vec3';

export function Divide (a: Vec3, b: Vec3, out: Vec3 = new Vec3()): Vec3
{
    return out.set(
        a.x / b.x,
        a.y / b.y,
        a.z / b.z
    );
}
