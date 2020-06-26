import { Vec4 } from './Vec4';

export function Round (a: Vec4, out: Vec4 = new Vec4()): Vec4
{
    const { x, y, z, w } = a;

    return out.set(
        Math.round(x),
        Math.round(y),
        Math.round(z),
        Math.round(w)
    );
}
