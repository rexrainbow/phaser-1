import { Vec2 } from './Vec2.js';

function Fract(a, out = new Vec2()) {
    return out.set(a.x - Math.floor(a.x), a.y - Math.floor(a.y));
}

export { Fract };
