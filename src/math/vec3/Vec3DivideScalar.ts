import { Vec3 } from './Vec3';

export function Vec3DivideScalar (a: Vec3, scalar: number, out: Vec3 = new Vec3()): Vec3
{
    const { x, y, z } = a;

    return out.set(
        x / scalar,
        y / scalar,
        z / scalar
    );
}
