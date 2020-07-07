import '../../utils/NOOP.js';
import './Vec3.js';
import { Vec3Callback } from './Vec3Callback.js';

class RGBCallback extends Vec3Callback {
    constructor(onChange, r = 0, g = 0, b = 0) {
        super(onChange, r, g, b);
    }
    set r(value) {
        this.x = value;
    }
    get r() {
        return this.x;
    }
    set g(value) {
        this.y = value;
    }
    get g() {
        return this.y;
    }
    set b(value) {
        this.z = value;
    }
    get b() {
        return this.z;
    }
    toString() {
        const { x, y, z } = this;
        return `[ r=${x}, g=${y}, b=${z} ]`;
    }
}

export { RGBCallback };
