import { Vec2 } from './Vec2.js';
import { Hermite as Hermite$1 } from '../Hermite.js';

function Hermite(a, b, c, d, t, out = new Vec2()) {
    return out.set(Hermite$1(t, a.x, b.x, c.x, d.x), Hermite$1(t, a.y, b.y, c.y, d.y));
}

export { Hermite };
