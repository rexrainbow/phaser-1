import { Vec2 } from './Vec2.js';

function Abs(a, out = new Vec2()) {
    return out.set(Math.abs(a.x), Math.abs(a.y));
}

export { Abs };
