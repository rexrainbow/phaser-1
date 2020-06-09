import { IVec2 } from './IVec2';
import { Vec2 } from './Vec2';

export function SubtractScalar (a: IVec2, scalar: number, out: Vec2 = new Vec2()): IVec2
{
    return out.set(
        a.x - scalar,
        a.y - scalar
    );
}
