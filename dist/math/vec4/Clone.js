import { Vec4 } from './Vec4.js';

function Clone(source) {
    const { x, y, z, w } = source;
    return new Vec4(x, y, z, w);
}

export { Clone };
