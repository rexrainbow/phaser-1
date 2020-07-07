import { Vec3 } from './Vec3.js';
import { Clamp as Clamp$1 } from '../Clamp.js';

function Clamp(a, min, max, out = new Vec3()) {
    return out.set(Clamp$1(a.x, min.x, max.x), Clamp$1(a.y, min.y, max.y), Clamp$1(a.z, min.z, max.z));
}

export { Clamp };
