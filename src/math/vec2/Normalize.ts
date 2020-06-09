import { DivideScalar } from './DivideScalar';
import { IVec2 } from './IVec2';
import { Length } from './Length';
import { Vec2 } from './Vec2';

export function Normalize (a: IVec2, out: Vec2 = new Vec2()): IVec2
{
    return DivideScalar(a, Length(a) || 1, out);
}
