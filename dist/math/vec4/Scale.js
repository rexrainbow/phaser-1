import { Vec4 } from './Vec4.js';

function Scale(a, scalar, out = new Vec4()) {
    const { x, y, z, w } = a;
    return out.set(x * scalar, y * scalar, z * scalar, w * scalar);
}

export { Scale };
