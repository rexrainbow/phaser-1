import { Vec4 } from './Vec4.js';

function Divide(a, b, out = new Vec4()) {
    return out.set(a.x / b.x, a.y / b.y, a.z / b.z, a.w / b.w);
}

export { Divide };
