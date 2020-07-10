import { Vec4 } from './Vec4.js';

function Negate(a, out = new Vec4()) {
    return out.set(-a.x, -a.y, -a.z, -a.w);
}

export { Negate };
