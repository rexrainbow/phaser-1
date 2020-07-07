import { Vec2 } from './Vec2.js';

function Scale(a, scalar, out = new Vec2()) {
    return out.set(a.x * scalar, a.y * scalar);
}

export { Scale };
