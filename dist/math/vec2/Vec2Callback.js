import { NOOP } from '../../utils/NOOP.js';

class Vec2Callback {
    constructor(callback, x = 0, y = 0, compareValue = false) {
        this.compareValue = false;
        this._x = x;
        this._y = y;
        this.callback = callback;
        this.compareValue = compareValue;
    }
    set(x = 0, y = 0) {
        this._x = x;
        this._y = y;
        this.callback(this);
        return this;
    }
    destroy() {
        this.callback = NOOP;
    }
    set x(value) {
        if (!this.compareValue || (this.compareValue && value !== this._x)) {
            this._x = value;
            this.callback(this);
        }
    }
    get x() {
        return this._x;
    }
    set y(value) {
        if (!this.compareValue || (this.compareValue && value !== this._x)) {
            this._y = value;
            this.callback(this);
        }
    }
    get y() {
        return this._y;
    }
}

export { Vec2Callback };
