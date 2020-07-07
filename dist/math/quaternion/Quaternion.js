import '../../utils/base64/Base64ToArrayBuffer.js';
import { NOOP } from '../../utils/NOOP.js';

class Quaternion {
    constructor(x = 0, y = 0, z = 0, w = 1) {
        this._x = x;
        this._y = y;
        this._z = z;
        this._w = w;
        this.onChange = NOOP;
    }
    set(x = 0, y = 0, z = 0, w = 1) {
        this._x = x;
        this._y = y;
        this._z = z;
        this._w = w;
        this.onChange(this);
        return this;
    }
    set x(value) {
        const prev = this._x;
        this._x = value;
        if (value !== prev) {
            this.onChange(this);
        }
    }
    get x() {
        return this._x;
    }
    set y(value) {
        const prev = this._y;
        this._y = value;
        if (value !== prev) {
            this.onChange(this);
        }
    }
    get y() {
        return this._y;
    }
    set z(value) {
        const prev = this._z;
        this._z = value;
        if (value !== prev) {
            this.onChange(this);
        }
    }
    get z() {
        return this._z;
    }
    set w(value) {
        const prev = this._w;
        this._w = value;
        if (value !== prev) {
            this.onChange(this);
        }
    }
    get w() {
        return this._w;
    }
    toArray(dst = [], index = 0) {
        const { x, y, z, w } = this;
        dst[index] = x;
        dst[index + 1] = y;
        dst[index + 2] = z;
        dst[index + 3] = w;
        return dst;
    }
    fromArray(src, index = 0) {
        return this.set(src[index], src[index + 1], src[index + 2], src[index + 3]);
    }
    destroy() {
        this.onChange = NOOP;
    }
    toString() {
        const { x, y, z, w } = this;
        return `{ x=${x}, y=${y}, z=${z}, w=${w} }`;
    }
}

export { Quaternion };
