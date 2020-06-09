import { IVec2 } from './IVec2';
import { Clamp as MathClamp } from '../Clamp';
import { Vec2 } from './Vec2';

export function ClampScalar (a: IVec2, min: number, max: number, out: Vec2 = new Vec2()): IVec2
{
    return out.set(
        MathClamp(a.x, min, max),
        MathClamp(a.y, min, max)
    );
}
