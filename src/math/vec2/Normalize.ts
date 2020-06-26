import { DivideScalar } from './DivideScalar';
import { IVec2Like } from './IVec2Like';
import { Length } from './Length';
import { Vec2 } from './Vec2';

export function Normalize (a: IVec2Like, out: Vec2 = new Vec2()): Vec2
{
    return DivideScalar(a, Length(a) || 1, out);
}
