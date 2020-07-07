import { Vec2 } from './Vec2.js';

function Ceil(a, out = new Vec2()) {
    return out.set(Math.ceil(a.x), Math.ceil(a.y));
}

export { Ceil };
