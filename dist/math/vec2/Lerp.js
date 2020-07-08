import { Vec2 } from './Vec2.js';

function Lerp(a, b, t, out = new Vec2()) {
    const x = a.x;
    const y = a.y;
    return out.set(x + t * (b.x - x), y + t * (b.y - y));
}

export { Lerp };