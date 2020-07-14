import { Clamp } from '../Clamp';
import { GetVec4Length } from './GetVec4Length';
import { Vec4 } from './Vec4';
import { Vec4DivideScalar } from './Vec4DivideScalar';
import { Vec4Scale } from './Vec4Scale';

export function Vec4ClampLength (a: Vec4, min: number, max: number, out: Vec4 = new Vec4()): Vec4
{
    const length = GetVec4Length(a);

    Vec4DivideScalar(a, length || 1, out);

    return Vec4Scale(out, Clamp(min, max, length), out);
}
