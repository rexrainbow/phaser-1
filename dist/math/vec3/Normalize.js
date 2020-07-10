import { Vec3 } from './Vec3.js';

function Normalize(a, out = new Vec3()) {
    const { x, y, z } = a;
    let len = x * x + y * y + z * z;
    if (len > 0) {
        len = 1 / Math.sqrt(len);
    }
    return out.set(x * len, y * len, z * len);
}

export { Normalize };
