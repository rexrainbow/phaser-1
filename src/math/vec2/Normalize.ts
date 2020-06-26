import { DivideScalar } from './DivideScalar';
import { Length } from './Length';
import { Vec2 } from './Vec2';

export function Normalize (a: Vec2, out: Vec2 = new Vec2()): Vec2
{
    return DivideScalar(a, Length(a) || 1, out);
}
