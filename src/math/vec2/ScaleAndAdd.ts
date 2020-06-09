import { IVec2 } from './IVec2';
import { Vec2 } from './Vec2';

export function ScaleAndAdd (a: IVec2, b: IVec2, scalar: number, out: Vec2 = new Vec2()): IVec2
{
    return out.set(a.x + b.x * scalar, a.y + b.y * scalar);
}
