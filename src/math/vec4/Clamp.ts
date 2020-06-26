import { Clamp as MathClamp } from '../Clamp';
import { Vec4 } from './Vec4';

export function Clamp (a: Vec4, min: Vec4, max: Vec4, out: Vec4 = new Vec4()): Vec4
{
    // assumes min < max, componentwise

    return out.set(
        MathClamp(a.x, min.x, max.x),
        MathClamp(a.y, min.y, max.y),
        MathClamp(a.z, min.z, max.z),
        MathClamp(a.w, min.w, max.w)
    );
}
