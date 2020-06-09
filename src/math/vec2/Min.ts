import { IVec2 } from './IVec2';
import { Vec2 } from './Vec2';

export function Min (a: IVec2, out: Vec2 = new Vec2()): IVec2
{
    return out.set(Math.min(a.x), Math.min(a.y));
}
