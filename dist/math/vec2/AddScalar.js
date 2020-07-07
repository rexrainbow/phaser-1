import { Vec2 } from './Vec2.js';

function AddScalar(a, scalar, out = new Vec2()) {
    return out.set(a.x + scalar, a.y + scalar);
}

export { AddScalar };
