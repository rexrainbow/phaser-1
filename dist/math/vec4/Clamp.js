import { Clamp as Clamp$1 } from '../Clamp.js';
import { Vec4 } from './Vec4.js';

function Clamp(a, min, max, out = new Vec4()) {
    return out.set(Clamp$1(a.x, min.x, max.x), Clamp$1(a.y, min.y, max.y), Clamp$1(a.z, min.z, max.z), Clamp$1(a.w, min.w, max.w));
}

export { Clamp };
