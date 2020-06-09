import { DivideScalar } from './DivideScalar';
import { IVec3 } from './IVec3';
import { Length } from './Length';
import { Clamp as MathClamp } from '../Clamp';
import { Scale } from './Scale';
import { Vec3 } from './Vec3';

export function ClampLength (a: IVec3, min: number, max: number, out: Vec3 = new Vec3()): IVec3
{
    const length = Length(a);

    DivideScalar(a, length || 1, out);

    return Scale(out, MathClamp(min, max, length), out);
}
