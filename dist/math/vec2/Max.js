import { Vec2 } from './Vec2.js';

function Max(a, b, out = new Vec2()) {
    const { x: ax, y: ay } = a;
    const { x: bx, y: by } = b;
    return out.set(Math.max(ax, bx), Math.max(ay, by));
}

export { Max };
