import { Vec4 } from './Vec4';

export function Vec4ScaleAndAdd (a: Vec4, b: Vec4, scalar: number, out: Vec4 = new Vec4()): Vec4
{
    return out.set(
        a.x + b.x * scalar,
        a.y + b.y * scalar,
        a.z + b.z * scalar,
        a.w + b.w * scalar
    );
}
