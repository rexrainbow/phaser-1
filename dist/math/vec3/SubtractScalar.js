import { Vec3 } from './Vec3.js';

function SubtractScalar(a, scalar, out = new Vec3()) {
    return out.set(a.x - scalar, a.y - scalar, a.z - scalar);
}

export { SubtractScalar };
