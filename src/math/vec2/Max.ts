import { IVec2 } from './IVec2';
import { Vec2 } from './Vec2';

export function Max (a: IVec2, out: Vec2 = new Vec2()): IVec2
{
    return out.set(Math.max(a.x), Math.max(a.y));
}
