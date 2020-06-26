import { Vec4 } from './Vec4';

export function Ceil (a: Vec4, out: Vec4 = new Vec4()): Vec4
{
    const { x, y, z, w } = a;

    return out.set(
        Math.ceil(x),
        Math.ceil(y),
        Math.ceil(z),
        Math.ceil(w)
    );
}
