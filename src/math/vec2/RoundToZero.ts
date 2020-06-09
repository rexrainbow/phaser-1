import { IVec2 } from './IVec2';
import { Vec2 } from './Vec2';

export function RoundToZero (a: IVec2, out: Vec2 = new Vec2()): IVec2
{
    return out.set(
        (a.x < 0) ? Math.ceil(a.x) : Math.floor(a.x),
        (a.y < 0) ? Math.ceil(a.y) : Math.floor(a.y)
    );
}
