import { DivideScalar } from './DivideScalar';
import { Length } from './Length';
import { Clamp as MathClamp } from '../Clamp';
import { Scale } from './Scale';
import { Vec4 } from './Vec4';

export function ClampLength (a: Vec4, min: number, max: number, out: Vec4 = new Vec4()): Vec4
{
    const length = Length(a);

    DivideScalar(a, length || 1, out);

    return Scale(out, MathClamp(min, max, length), out);
}
