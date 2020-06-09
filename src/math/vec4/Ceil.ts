import { IVec4 } from './IVec4';
import { Vec4 } from './Vec4';

export function Ceil (a: IVec4, out: Vec4 = new Vec4()): IVec4
{
    const { x, y, z, w } = a;

    return out.set(
        Math.ceil(x),
        Math.ceil(y),
        Math.ceil(z),
        Math.ceil(w)
    );
}
