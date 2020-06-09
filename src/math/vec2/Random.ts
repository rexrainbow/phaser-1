import { IVec2 } from './IVec2';
import { Vec2 } from './Vec2';

export function Random (a: IVec2, scale: number = 1, out: Vec2 = new Vec2()): IVec2
{
    const r = Math.random() * 2 * Math.PI;

    return out.set(
        Math.cos(r) * scale,
        Math.sin(r) * scale
    );
}
