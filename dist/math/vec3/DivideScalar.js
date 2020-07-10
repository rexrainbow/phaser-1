import { Vec3 } from './Vec3.js';

function DivideScalar(a, scalar, out = new Vec3()) {
    const { x, y, z } = a;
    return out.set(x / scalar, y / scalar, z / scalar);
}

export { DivideScalar };
