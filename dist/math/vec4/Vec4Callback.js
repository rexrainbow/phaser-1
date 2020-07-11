import {NOOP as NOOP2} from "../../utils/NOOP";
import {Vec4 as Vec42} from "./Vec4";
export class Vec4Callback extends Vec42 {
  constructor(onChange, x = 0, y = 0, z = 0, w = 0) {
    super(x, y, z, w);
    this.onChange = onChange;
  }
  destroy() {
    this.onChange = NOOP2;
  }
  set(x = 0, y = 0, z = 0, w = 0) {
    this._x = x;
    this._y = y;
    this._z = z;
    this._w = w;
    if (this.onChange) {
      this.onChange(this);
    }
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
  get z() {
    return this._z;
  }
  set z(value) {
    const prev = this._z;
    this._z = value;
    if (prev !== value) {
      this.onChange(this);
    }
  }
  get w() {
    return this._w;
  }
  set w(value) {
    const prev = this._w;
    this._w = value;
    if (prev !== value) {
      this.onChange(this);
    }
  }
}
