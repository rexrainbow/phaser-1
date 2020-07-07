import { NOOP } from '../../utils/NOOP.js';
import { Vec2 } from './Vec2.js';

class Vec2Callback extends Vec2 {
    constructor(onChange = NOOP, x = 0, y = 0) {
        super(x, y);
        this.onChange = NOOP;
        this.onChange = onChange;
    }
    destroy() {
        this.onChange = NOOP;
    }
    set(x = 0, y = 0) {
        this._x = x;
        this._y = y;
        this.onChange(this);
        return this;
    }
    get x() {
        return this._x;
    }
    set x(value) {
        const prev = this._x;
        this._x = value;
        if (prev !== value) {
            this.onChange(this);
        }
    }
    get y() {
        return this._y;
    }
    set y(value) {
        const prev = this._y;
        this._y = value;
        if (prev !== value) {
            this.onChange(this);
        }
    }
}

export { Vec2Callback };
