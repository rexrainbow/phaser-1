import { Vec2 } from './Vec2.js';
import { Clamp as Clamp$1 } from '../Clamp.js';

function Clamp(a, min, max, out = new Vec2()) {
    return out.set(Clamp$1(a.x, min.x, max.x), Clamp$1(a.y, min.y, max.y));
}

export { Clamp };
