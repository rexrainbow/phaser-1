import { Vec4 } from './Vec4.js';

function Floor(a, out = new Vec4()) {
    const { x, y, z, w } = a;
    return out.set(Math.floor(x), Math.floor(y), Math.floor(z), Math.floor(w));
}

export { Floor };
