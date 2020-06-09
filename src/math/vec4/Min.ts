import { IVec4 } from './IVec4';
import { Vec4 } from './Vec4';

export function Min (a: IVec4, out: Vec4 = new Vec4()): IVec4
{
    return out.set(
        Math.min(a.x),
        Math.min(a.y),
        Math.min(a.z),
        Math.min(a.w)
    );
}
