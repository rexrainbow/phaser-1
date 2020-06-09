import { IVec4 } from './IVec4';
import { Clamp as MathClamp } from '../Clamp';
import { Vec4 } from './Vec4';

export function Clamp (a: IVec4, min: IVec4, max: IVec4, out: Vec4 = new Vec4()): IVec4
{
    // assumes min < max, componentwise

    return out.set(
        MathClamp(a.x, min.x, max.x),
        MathClamp(a.y, min.y, max.y),
        MathClamp(a.z, min.z, max.z),
        MathClamp(a.w, min.w, max.w)
    );
}
