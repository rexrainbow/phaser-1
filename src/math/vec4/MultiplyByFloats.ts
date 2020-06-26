import { Vec4 } from './Vec4';

export function MultiplyByFloats (a: Vec4, x: number, y: number, z: number, w: number, out: Vec4 = new Vec4()): Vec4
{
    return out.set(
        a.x * x,
        a.y * y,
        a.z * z,
        a.w * w
    );
}
