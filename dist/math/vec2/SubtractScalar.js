import { Vec2 } from './Vec2.js';

function SubtractScalar(a, scalar, out = new Vec2()) {
    return out.set(a.x - scalar, a.y - scalar);
}

export { SubtractScalar };
