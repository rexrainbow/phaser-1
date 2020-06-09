import { DivideScalar } from './DivideScalar';
import { IVec3 } from './IVec3';
import { Length } from './Length';
import { Vec3 } from './Vec3';

export function Normalize (a: IVec3, out: Vec3 = new Vec3()): IVec3
{
    return DivideScalar(a, Length(a) || 1, out);
}
