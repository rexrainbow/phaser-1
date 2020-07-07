import { Vec3 } from './Vec3.js';

function Clone(source) {
    const { x, y, z } = source;
    return new Vec3(x, y, z);
}

export { Clone };
