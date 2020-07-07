import { Vec2 } from './Vec2.js';

function Random(a, scale = 1, out = new Vec2()) {
    const r = Math.random() * 2 * Math.PI;
    return out.set(Math.cos(r) * scale, Math.sin(r) * scale);
}

export { Random };
