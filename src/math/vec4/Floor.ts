import { IVec4 } from './IVec4';
import { Vec4 } from './Vec4';

export function Floor (a: IVec4, out: Vec4 = new Vec4()): IVec4
{
    const { x, y, z, w } = a;

    return out.set(
        Math.floor(x),
        Math.floor(y),
        Math.floor(z),
        Math.floor(w)
    );
}
