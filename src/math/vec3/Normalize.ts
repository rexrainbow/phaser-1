import { Vec3 } from './Vec3';

export function Normalize (a: Vec3, out: Vec3 = new Vec3()): Vec3
{
    const { x, y, z } = a;

    let len = x * x + y * y + z * z;

    if (len > 0)
    {
        len = 1 / Math.sqrt(len);
    }

    return out.set(
        x * len,
        y * len,
        z * len
    );
}
