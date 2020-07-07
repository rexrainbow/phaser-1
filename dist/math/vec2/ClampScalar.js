import { Vec2 } from './Vec2.js';
import { Clamp } from '../Clamp.js';

function ClampScalar(a, min, max, out = new Vec2()) {
    return out.set(Clamp(a.x, min, max), Clamp(a.y, min, max));
}

export { ClampScalar };
