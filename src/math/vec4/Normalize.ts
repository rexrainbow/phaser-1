import { DivideScalar } from './DivideScalar';
import { IVec4 } from './IVec4';
import { Length } from './Length';
import { Vec4 } from './Vec4';

export function Normalize (a: IVec4, out: Vec4 = new Vec4()): IVec4
{
    return DivideScalar(a, Length(a) || 1, out);
}
