import { Vec3 } from './Vec3.js';

function ScaleAndAdd(a, b, scalar, out = new Vec3()) {
    return out.set(a.x + b.x * scalar, a.y + b.y * scalar, a.z + b.z * scalar);
}

export { ScaleAndAdd };
