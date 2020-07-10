import { Vec3 } from './Vec3.js';

function Negate(a, out = new Vec3()) {
    return out.set(-a.x, -a.y, -a.z);
}

export { Negate };
