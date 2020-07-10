import { Vec2 } from './Vec2.js';

function Inverse(a, out = new Vec2()) {
    return out.set(1 / a.x, 1 / a.y);
}

export { Inverse };
