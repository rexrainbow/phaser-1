import { Vec2 } from './Vec2.js';

function DivideScalar(a, scalar, out = new Vec2()) {
    return out.set(a.x / scalar, a.y / scalar);
}

export { DivideScalar };
