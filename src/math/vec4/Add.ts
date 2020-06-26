import { IVec4Like } from './IVec4Like';
import { Vec4 } from './Vec4';

export function Add (a: IVec4Like, b: IVec4Like, out: Vec4 = new Vec4()): Vec4
{
    return out.set(
        a.x + b.x,
        a.y + b.y,
        a.z + b.z,
        a.w + b.w
    );
}
