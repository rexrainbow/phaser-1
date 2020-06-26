import { Vec4 } from './Vec4';

export function Negate (a: Vec4, out: Vec4 = new Vec4()): Vec4
{
    return out.set(
        -a.x,
        -a.y,
        -a.z,
        -a.w
    );
}
