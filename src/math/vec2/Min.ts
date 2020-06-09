import { IVec2 } from './IVec2';
import { Vec2 } from './Vec2';

// Returns the minimum of two vec2's

export function Min (a: IVec2, b: IVec2, out: Vec2 = new Vec2()): IVec2
{
    const { x: ax, y: ay } = a;
    const { x: bx, y: by } = b;

    return out.set(
        Math.min(ax, bx),
        Math.min(ay, by)
    );
}
