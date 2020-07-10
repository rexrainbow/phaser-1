import { Vec4 } from './Vec4.js';

function AddScalar(a, scalar, out = new Vec4()) {
    return out.set(a.x + scalar, a.y + scalar, a.z + scalar, a.w + scalar);
}

export { AddScalar };
