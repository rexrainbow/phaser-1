import { Vec4 } from './Vec4.js';

function Lerp(a, b, t, out = new Vec4()) {
    const { x, y, z, w } = a;
    return out.set(x + t * (b.x - x), y + t * (b.y - y), z + t * (b.z - z), w + t * (b.w - w));
}

export { Lerp };
