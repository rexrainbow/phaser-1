import { Vec2 } from './Vec2.js';

function Round(a, out = new Vec2()) {
    return out.set(Math.round(a.x), Math.round(a.y));
}

export { Round };
