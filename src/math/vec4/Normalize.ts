import { DivideScalar } from './DivideScalar';
import { IVec4Like } from './IVec4Like';
import { Length } from './Length';
import { Vec4 } from './Vec4';

export function Normalize (a: IVec4Like, out: Vec4 = new Vec4()): Vec4
{
    return DivideScalar(a, Length(a) || 1, out);
}
