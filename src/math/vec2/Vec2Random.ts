import { Vec2 } from './Vec2';

export function Vec2Random (a: Vec2, scale: number = 1, out: Vec2 = new Vec2()): Vec2
{
    const r = Math.random() * 2 * Math.PI;

    return out.set(
        Math.cos(r) * scale,
        Math.sin(r) * scale
    );
}
