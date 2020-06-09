import { IVec4 } from './IVec4';
import { Vec4 } from './Vec4';

export function Max (a: IVec4, out: Vec4 = new Vec4()): IVec4
{
    return out.set(
        Math.max(a.x),
        Math.max(a.y),
        Math.max(a.z),
        Math.max(a.w)
    );
}
