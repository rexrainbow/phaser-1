import { Vec3 } from './Vec3.js';
import { Clamp } from '../Clamp.js';

function ClampScalar(a, min, max, out = new Vec3()) {
    return out.set(Clamp(a.x, min, max), Clamp(a.y, min, max), Clamp(a.z, min, max));
}

export { ClampScalar };
