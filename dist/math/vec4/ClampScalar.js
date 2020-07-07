import { Clamp } from '../Clamp.js';
import { Vec4 } from './Vec4.js';

function ClampScalar(a, min, max, out = new Vec4()) {
    return out.set(Clamp(a.x, min, max), Clamp(a.y, min, max), Clamp(a.z, min, max), Clamp(a.w, min, max));
}

export { ClampScalar };
