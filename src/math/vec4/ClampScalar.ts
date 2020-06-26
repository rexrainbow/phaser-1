import { IVec4Like } from './IVec4Like';
import { Clamp as MathClamp } from '../Clamp';
import { Vec4 } from './Vec4';

export function ClampScalar (a: IVec4Like, min: number, max: number, out: Vec4 = new Vec4()): Vec4
{
    return out.set(
        MathClamp(a.x, min, max),
        MathClamp(a.y, min, max),
        MathClamp(a.z, min, max),
        MathClamp(a.w, min, max)
    );
}
