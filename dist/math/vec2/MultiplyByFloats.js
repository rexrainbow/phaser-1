import { Vec2 } from './Vec2.js';

function MultiplyByFloats(a, x, y, out = new Vec2()) {
    return out.set(a.x * x, a.y * y);
}

export { MultiplyByFloats };
