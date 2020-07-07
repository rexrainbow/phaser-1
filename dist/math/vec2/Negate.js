import { Vec2 } from './Vec2.js';

function Negate(a, out = new Vec2()) {
    return out.set(-a.x, -a.y);
}

export { Negate };
