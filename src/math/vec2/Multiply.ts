import { IVec2 } from './IVec2';
import { Vec2 } from './Vec2';

export function Multiply (a: IVec2, b: IVec2, out: Vec2 = new Vec2()): IVec2
{
    return out.set(
        a.x * b.x,
        a.y * b.y
    );
}
