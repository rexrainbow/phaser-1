import { IVec2 } from './IVec2';
import { Vec2 } from './Vec2';

export function Round (a: IVec2, out: Vec2 = new Vec2()): IVec2
{
    return out.set(Math.round(a.x), Math.round(a.y));
}
