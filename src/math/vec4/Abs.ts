import { IVec4Like } from './IVec4Like';
import { Vec4 } from './Vec4';

export function Abs (a: IVec4Like, out: Vec4 = new Vec4()): Vec4
{
    return out.set(
        Math.abs(a.x),
        Math.abs(a.y),
        Math.abs(a.z),
        Math.abs(a.w)
    );
}
