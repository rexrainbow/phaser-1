import {NOOP as NOOP2} from "../../utils/NOOP";
import {Vec3 as Vec32} from "./Vec3";
export class Vec3Callback extends Vec32 {
  constructor(onChange, x = 0, y = 0, z = 0) {
    super(x, y, z);
    this.onChange = onChange;
  }
  destroy() {
    this.onChange = NOOP2;
  }
  set(x = 0, y = 0, z = 0) {
    this._x = x;
    this._y = y;
    this._z = z;
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
}
