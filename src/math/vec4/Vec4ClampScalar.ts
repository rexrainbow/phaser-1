import { Clamp } from '../Clamp';
import { Vec4 } from './Vec4';

export function Vec4ClampScalar (a: Vec4, min: number, max: number, out: Vec4 = new Vec4()): Vec4
{
    return out.set(
        Clamp(a.x, min, max),
        Clamp(a.y, min, max),
        Clamp(a.z, min, max),
        Clamp(a.w, min, max)
    );
}
