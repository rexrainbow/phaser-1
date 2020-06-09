import { IVec2 } from './IVec2';
import { Vec2 } from './Vec2';

export function Ceil (a: IVec2, out: Vec2 = new Vec2()): IVec2
{
    return out.set(Math.ceil(a.x), Math.ceil(a.y));
}
