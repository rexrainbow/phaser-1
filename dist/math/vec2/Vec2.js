export class Vec2 {
  constructor(x = 0, y = 0) {
    this.set(x, y);
  }
  set(x = 0, y = 0) {
    this.x = x;
    this.y = y;
    return this;
  }
  toArray(dst = [], index = 0) {
    const {x, y} = this;
    dst[index] = x;
    dst[index + 1] = y;
    return dst;
  }
  fromArray(src, index = 0) {
    return this.set(src[index], src[index + 1]);
  }
  toString() {
    const {x, y} = this;
    return `{ x=${x}, y=${y} }`;
  }
}
