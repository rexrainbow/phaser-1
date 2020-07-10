import { Vec3 } from './Vec3.js';

function Inverse(a, out = new Vec3()) {
    return out.set(1 / a.x, 1 / a.y, 1 / a.z);
}

export { Inverse };
