import { Vec2 } from './Vec2';

// Returns the maximum of two vec2's

export function Vec2Max (a: Vec2, b: Vec2, out: Vec2 = new Vec2()): Vec2
{
    const { x: ax, y: ay } = a;
    const { x: bx, y: by } = b;

    return out.set(
        Math.max(ax, bx),
        Math.max(ay, by)
    );
}
