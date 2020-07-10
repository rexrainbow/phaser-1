import { Vec4 } from './Vec4.js';

function Ceil(a, out = new Vec4()) {
    const { x, y, z, w } = a;
    return out.set(Math.ceil(x), Math.ceil(y), Math.ceil(z), Math.ceil(w));
}

export { Ceil };
