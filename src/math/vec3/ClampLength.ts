import { DivideScalar } from './DivideScalar';
import { Length } from './Length';
import { Clamp as MathClamp } from '../Clamp';
import { Scale } from './Scale';
import { Vec3 } from './Vec3';

export function ClampLength (a: Vec3, min: number, max: number, out: Vec3 = new Vec3()): Vec3
{
    const length = Length(a);

    DivideScalar(a, length || 1, out);

    return Scale(out, MathClamp(min, max, length), out);
}
