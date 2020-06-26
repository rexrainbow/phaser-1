import { Vec4 } from './Vec4';

export function Divide (a: Vec4, b: Vec4, out: Vec4 = new Vec4()): Vec4
{
    return out.set(
        a.x / b.x,
        a.y / b.y,
        a.z / b.z,
        a.w / b.w
    );
}
