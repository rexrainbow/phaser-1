import { Vec2 } from './Vec2.js';

function Multiply(a, b, out = new Vec2()) {
    return out.set(a.x * b.x, a.y * b.y);
}

export { Multiply };
