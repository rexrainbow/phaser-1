import { Vec2 } from './Vec2';

// Returns the minimum of two vec2's

export function Min (a: Vec2, b: Vec2, out: Vec2 = new Vec2()): Vec2
{
    const { x: ax, y: ay } = a;
    const { x: bx, y: by } = b;

    return out.set(
        Math.min(ax, bx),
        Math.min(ay, by)
    );
}
