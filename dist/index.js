(() => {
  var __defineProperty = Object.defineProperty;
  var __commonJS = (callback, module) => () => {
    if (!module) {
      module = {exports: {}};
      callback(module.exports, module);
    }
    return module.exports;
  };
  var __markAsModule = (target) => {
    return __defineProperty(target, "__esModule", {value: true});
  };
  var __export = (target, all) => {
    __markAsModule(target);
    for (var name in all)
      __defineProperty(target, name, {get: all[name], enumerable: true});
  };

  // src/index.ts
  var require_src = __commonJS((exports) => {
    __export(exports, {
      Camera: () => camera_exports,
      Camera3D: () => camera3d_exports,
      Config: () => config_exports,
      DOM: () => dom_exports,
      Device: () => device_exports,
      Display: () => display_exports,
      Display3D: () => display3d_exports,
      Events: () => events_exports,
      Game: () => Game,
      GameObjects: () => gameobjects_exports,
      GameObjects3D: () => gameobjects3d_exports,
      Geom: () => geom_exports,
      Geom3D: () => geom3d_exports,
      Input: () => input_exports2,
      Loader: () => loader_exports,
      Materials3D: () => materials3d_exports,
      Math: () => math_exports,
      Scene: () => Scene,
      Textures: () => textures_exports,
      Time: () => time_exports,
      WebGL1: () => webgl1_exports,
      World: () => world_exports,
      World3D: () => world3d_exports
    });
  });

  // src/GameInstance.ts
  let instance;
  let frame = 0;
  let elapsed = 0;
  const GameInstance2 = {
    get: () => {
      return instance;
    },
    set: (game) => {
      instance = game;
    },
    getFrame: () => {
      return frame;
    },
    setFrame: (current) => {
      frame = current;
    },
    getElapsed: () => {
      return elapsed;
    },
    setElapsed: (current) => {
      elapsed = current;
    }
  };

  // src/utils/array/matrix/CheckMatrix.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */

  // src/utils/array/matrix/MatrixToString.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */

  // src/utils/array/matrix/ReverseColumns.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */

  // src/utils/array/matrix/ReverseRows.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */

  // src/utils/array/matrix/TransposeMatrix.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */

  // src/utils/array/matrix/RotateMatrix.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */

  // src/utils/array/matrix/Rotate180.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */

  // src/utils/array/matrix/RotateLeft.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */

  // src/utils/array/matrix/RotateRight.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */

  // src/utils/array/matrix/index.ts

  // src/utils/array/GetRandom.ts

  // src/utils/array/NumberArray.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */

  // src/math/RoundAwayFromZero.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function RoundAwayFromZero(value) {
    return value > 0 ? Math.ceil(value) : Math.floor(value);
  }

  // src/utils/array/NumberArrayStep.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */

  // src/utils/array/index.ts

  // src/utils/base64/ArrayBufferToBase64.ts
  /**
   * @author       Niklas von Hertzen (https://github.com/niklasvh/base64-arraybuffer)
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */

  // src/utils/base64/Base64ToArrayBuffer.ts
  /**
   * @author       Niklas von Hertzen (https://github.com/niklasvh/base64-arraybuffer)
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  const chars2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  const lookup = new Uint8Array(256);
  for (let i = 0; i < chars2.length; i++) {
    lookup[chars2.charCodeAt(i)] = i;
  }

  // src/utils/base64/index.ts

  // src/utils/string/UppercaseFirst.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */

  // src/utils/string/index.ts

  // src/utils/NOOP.ts
  function NOOP() {
  }

  // src/utils/index.ts

  // src/math/mat4/Matrix4.ts
  class Matrix4 {
    constructor(src) {
      const data = new Float32Array(16);
      this.data = data;
      this.onChange = NOOP;
      if (src) {
        if (Array.isArray(src)) {
          this.fromArray(src);
        } else {
          this.fromArray(src.data);
        }
      } else {
        data[0] = 1;
        data[5] = 1;
        data[10] = 1;
        data[15] = 1;
      }
    }
    set(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
      const data = this.data;
      data[0] = m00;
      data[1] = m01;
      data[2] = m02;
      data[3] = m03;
      data[4] = m10;
      data[5] = m11;
      data[6] = m12;
      data[7] = m13;
      data[8] = m20;
      data[9] = m21;
      data[10] = m22;
      data[11] = m23;
      data[12] = m30;
      data[13] = m31;
      data[14] = m32;
      data[15] = m33;
      this.onChange(this);
      return this;
    }
    toArray(dst = [], index = 0) {
      const data = this.data;
      for (let i = 0; i < 16; i++) {
        dst[index + i] = data[i];
      }
      return dst;
    }
    fromArray(src, index = 0) {
      const data = this.data;
      for (let i = 0; i < 16; i++) {
        data[i] = src[index + i];
      }
      this.onChange(this);
      return this;
    }
    toString() {
      return "[ mat4=" + this.data.join(", ") + " ]";
    }
    destroy() {
      this.onChange = NOOP;
      this.data = null;
    }
  }

  // src/math/mat4/Add.ts
  function Add2(a, b, out = new Matrix4()) {
    const [a00, a01, a02, a03, a10, a11, a12, a13, a20, a21, a22, a23, a30, a31, a32, a33] = a.data;
    const [b00, b01, b02, b03, b10, b11, b12, b13, b20, b21, b22, b23, b30, b31, b32, b33] = b.data;
    return out.set(a00 + b00, a01 + b01, a02 + b02, a03 + b03, a10 + b10, a11 + b11, a12 + b12, a13 + b13, a20 + b20, a21 + b21, a22 + b22, a23 + b23, a30 + b30, a31 + b31, a32 + b32, a33 + b33);
  }

  // src/math/mat4/AddTranslationFromFloats.ts
  function AddTranslationFromFloats(matrix2, x, y, z) {
    const data = matrix2.data;
    data[12] += x;
    data[13] += y;
    data[14] += z;
    matrix2.onChange(matrix2);
    return matrix2;
  }

  // src/math/mat4/Adjoint.ts
  function Adjoint(matrix2, out = new Matrix4()) {
    const [a00, a01, a02, a03, a10, a11, a12, a13, a20, a21, a22, a23, a30, a31, a32, a33] = matrix2.data;
    const b00 = a00 * a11 - a01 * a10;
    const b01 = a00 * a12 - a02 * a10;
    const b02 = a00 * a13 - a03 * a10;
    const b03 = a01 * a12 - a02 * a11;
    const b04 = a01 * a13 - a03 * a11;
    const b05 = a02 * a13 - a03 * a12;
    const b06 = a20 * a31 - a21 * a30;
    const b07 = a20 * a32 - a22 * a30;
    const b08 = a20 * a33 - a23 * a30;
    const b09 = a21 * a32 - a22 * a31;
    const b10 = a21 * a33 - a23 * a31;
    const b11 = a22 * a33 - a23 * a32;
    return out.set(a11 * b11 - a12 * b10 + a13 * b09, a02 * b10 - a01 * b11 - a03 * b09, a31 * b05 - a32 * b04 + a33 * b03, a22 * b04 - a21 * b05 - a23 * b03, a12 * b08 - a10 * b11 - a13 * b07, a00 * b11 - a02 * b08 + a03 * b07, a32 * b02 - a30 * b05 - a33 * b01, a20 * b05 - a22 * b02 + a23 * b01, a10 * b10 - a11 * b08 + a13 * b06, a01 * b08 - a00 * b10 - a03 * b06, a30 * b04 - a31 * b02 + a33 * b00, a21 * b02 - a20 * b04 - a23 * b00, a11 * b07 - a10 * b09 - a12 * b06, a00 * b09 - a01 * b07 + a02 * b06, a31 * b01 - a30 * b03 - a32 * b00, a20 * b03 - a21 * b01 + a22 * b00);
  }

  // src/math/mat4/Clone.ts
  function Clone11(src) {
    return new Matrix4(src);
  }

  // src/math/mat4/CopyFrom.ts
  function CopyFrom13(src, dest) {
    return dest.fromArray(src.data);
  }

  // src/math/mat4/CopyPosition.ts
  function CopyPosition(src, dest) {
    const srcData = src.data;
    const destData = dest.data;
    destData[12] = srcData[12];
    destData[13] = srcData[13];
    destData[14] = srcData[14];
    dest.onChange(dest);
    return dest;
  }

  // src/math/mat4/Determinant.ts
  function Determinant(matrix2) {
    const [m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33] = matrix2.data;
    const det22x33 = m22 * m33 - m32 * m23;
    const det21x33 = m21 * m33 - m31 * m23;
    const det21x32 = m21 * m32 - m31 * m22;
    const det20x33 = m20 * m33 - m30 * m23;
    const det20x32 = m20 * m32 - m22 * m30;
    const det20x31 = m20 * m31 - m30 * m21;
    const cofact00 = +(m11 * det22x33 - m12 * det21x33 + m13 * det21x32);
    const cofact01 = -(m10 * det22x33 - m12 * det20x33 + m13 * det20x32);
    const cofact02 = +(m10 * det21x33 - m11 * det20x33 + m13 * det20x31);
    const cofact03 = -(m10 * det21x32 - m11 * det20x32 + m12 * det20x31);
    return m00 * cofact00 + m01 * cofact01 + m02 * cofact02 + m03 * cofact03;
  }

  // src/math/mat4/Equals.ts
  function Equals11(a, b) {
    const [a00, a01, a02, a03, a10, a11, a12, a13, a20, a21, a22, a23, a30, a31, a32, a33] = a.data;
    const [b00, b01, b02, b03, b10, b11, b12, b13, b20, b21, b22, b23, b30, b31, b32, b33] = b.data;
    return a00 === b00 && a01 === b01 && a02 === b02 && a03 === b03 && a10 === b10 && a11 === b11 && a12 === b12 && a13 === b13 && a20 === b20 && a21 === b21 && a22 === b22 && a23 === b23 && a30 === b30 && a31 === b31 && a32 === b32 && a33 === b33;
  }

  // src/math/mat4/Frobenius.ts
  function Frobenius(matrix2) {
    const [m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33] = matrix2.data;
    return Math.hypot(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33);
  }

  // src/math/mat4/FromQuat.ts
  function FromQuat(q, out = new Matrix4()) {
    const {x, y, z, w} = q;
    const x2 = x + x;
    const y2 = y + y;
    const z2 = z + z;
    const xx = x * x2;
    const yx = y * x2;
    const yy = y * y2;
    const zx = z * x2;
    const zy = z * y2;
    const zz = z * z2;
    const wx = w * x2;
    const wy = w * y2;
    const wz = w * z2;
    return out.set(1 - yy - zz, yx + wz, zx - wy, 0, yx - wz, 1 - xx - zz, zy + wx, 0, zx + wy, zy - wx, 1 - xx - yy, 0, 0, 0, 0, 1);
  }

  // src/math/mat4/FromRotation.ts
  function FromRotation(angle2, axis, out = new Matrix4()) {
    let {x, y, z} = axis;
    let len = Math.hypot(x, y, z);
    if (len < 1e-5) {
      return null;
    }
    len = 1 / len;
    x *= len;
    y *= len;
    z *= len;
    const s = Math.sin(angle2);
    const c = Math.cos(angle2);
    const t = 1 - c;
    return out.set(x * x * t + c, y * x * t + z * s, z * x * t - y * s, 0, x * y * t - z * s, y * y * t + c, z * y * t + x * s, 0, x * z * t + y * s, y * z * t - x * s, z * z * t + c, 0, 0, 0, 0, 1);
  }

  // src/math/mat4/FromRotationTranslation.ts
  function FromRotationTranslation(q, v, out = new Matrix4()) {
    const {x, y, z, w} = q;
    const x2 = x + x;
    const y2 = y + y;
    const z2 = z + z;
    const xx = x * x2;
    const xy = x * y2;
    const xz = x * z2;
    const yy = y * y2;
    const yz = y * z2;
    const zz = z * z2;
    const wx = w * x2;
    const wy = w * y2;
    const wz = w * z2;
    const {x: vx, y: vy, z: vz} = v;
    return out.set(1 - (yy + zz), xy + wz, xz - wy, 0, xy - wz, 1 - (xx + zz), yz + wx, 0, xz + wy, yz - wx, 1 - (xx + yy), 0, vx, vy, vz, 1);
  }

  // src/math/mat4/FromRotationTranslationScale.ts
  function FromRotationTranslationScale(q, v, s, out = new Matrix4()) {
    const {x, y, z, w} = q;
    const x2 = x + x;
    const y2 = y + y;
    const z2 = z + z;
    const xx = x * x2;
    const xy = x * y2;
    const xz = x * z2;
    const yy = y * y2;
    const yz = y * z2;
    const zz = z * z2;
    const wx = w * x2;
    const wy = w * y2;
    const wz = w * z2;
    const {x: sx, y: sy, z: sz} = s;
    const {x: vx, y: vy, z: vz} = v;
    return out.set((1 - (yy + zz)) * sx, (xy + wz) * sx, (xz - wy) * sx, 0, (xy - wz) * sy, (1 - (xx + zz)) * sy, (yz + wx) * sy, 0, (xz + wy) * sz, (yz - wx) * sz, (1 - (xx + yy)) * sz, 0, vx, vy, vz, 1);
  }

  // src/math/mat4/FromRotationTranslationScaleOrigin.ts
  function FromRotationTranslationScaleOrigin(q, v, s, o, out = new Matrix4()) {
    const {x, y, z, w} = q;
    const x2 = x + x;
    const y2 = y + y;
    const z2 = z + z;
    const xx = x * x2;
    const xy = x * y2;
    const xz = x * z2;
    const yy = y * y2;
    const yz = y * z2;
    const zz = z * z2;
    const wx = w * x2;
    const wy = w * y2;
    const wz = w * z2;
    const {x: sx, y: sy, z: sz} = s;
    const {x: ox, y: oy, z: oz} = o;
    const {x: vx, y: vy, z: vz} = v;
    const out0 = (1 - (yy + zz)) * sx;
    const out1 = (xy + wz) * sx;
    const out2 = (xz - wy) * sx;
    const out4 = (xy - wz) * sy;
    const out5 = (1 - (xx + zz)) * sy;
    const out6 = (yz + wx) * sy;
    const out8 = (xz + wy) * sz;
    const out9 = (yz - wx) * sz;
    const out10 = (1 - (xx + yy)) * sz;
    return out.set(out0, out1, out2, 0, out4, out5, out6, 0, out8, out9, out10, 0, vx + ox - (out0 * ox + out4 * oy + out8 * oz), vy + oy - (out1 * ox + out5 * oy + out9 * oz), vz + oz - (out2 * ox + out6 * oy + out10 * oz), 1);
  }

  // src/math/mat4/FromRotationXYTranslation.ts
  function FromRotationXYTranslation(rotation, position, translateFirst = true, out = new Matrix4()) {
    const {x, y, z} = position;
    const sx = Math.sin(rotation.x);
    const cx = Math.cos(rotation.x);
    const sy = Math.sin(rotation.y);
    const cy = Math.cos(rotation.y);
    let a30 = x;
    let a31 = y;
    let a32 = z;
    const b21 = -sx;
    const c01 = 0 - b21 * sy;
    const c02 = 0 - cx * sy;
    const c21 = b21 * cy;
    const c22 = cx * cy;
    if (!translateFirst) {
      a30 = cy * x + sy * z;
      a31 = c01 * x + cx * y + c21 * z;
      a32 = c02 * x + sx * y + c22 * z;
    }
    return out.set(cy, c01, c02, 0, 0, cx, sx, 0, sy, c21, c22, 0, a30, a31, a32, 1);
  }

  // src/math/mat4/FromScaling.ts
  function FromScaling(vec310, out = new Matrix4()) {
    const {x, y, z} = vec310;
    return out.set(x, 0, 0, 0, 0, y, 0, 0, 0, 0, z, 0, 0, 0, 0, 1);
  }

  // src/math/mat4/FromTranslation.ts
  function FromTranslation(vec310, out = new Matrix4()) {
    const {x, y, z} = vec310;
    return out.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, x, y, z, 1);
  }

  // src/math/mat4/FromXRotation.ts
  function FromXRotation(angle2, out = new Matrix4()) {
    const c = Math.cos(angle2);
    const s = Math.sin(angle2);
    return out.set(1, 0, 0, 0, 0, c, s, 0, 0, -s, c, 0, 0, 0, 0, 1);
  }

  // src/math/mat4/FromYRotation.ts
  function FromYRotation(angle2, out = new Matrix4()) {
    const c = Math.cos(angle2);
    const s = Math.sin(angle2);
    return out.set(c, 0, -s, 0, 0, 1, 0, 0, s, 0, c, 0, 0, 0, 0, 1);
  }

  // src/math/mat4/FromZRotation.ts
  function FromZRotation(angle2, out = new Matrix4()) {
    const c = Math.cos(angle2);
    const s = Math.sin(angle2);
    return out.set(c, s, 0, 0, -s, c, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }

  // src/math/mat4/Frustum.ts
  function Frustum(left, right, bottom, top, near, far, out = new Matrix4()) {
    const rl = 1 / (right - left);
    const tb = 1 / (top - bottom);
    const nf = 1 / (near - far);
    return out.set(near * 2 * rl, 0, 0, 0, 0, near * 2 * tb, 0, 0, (right + left) * rl, (top + bottom) * tb, (far + near) * nf, -1, 0, 0, far * near * 2 * nf, 0);
  }

  // src/math/vec3/Vec3.ts
  class Vec3 {
    constructor(x = 0, y = 0, z = 0) {
      this.set(x, y, z);
    }
    set(x = 0, y = 0, z = 0) {
      this.x = x;
      this.y = y;
      this.z = z;
      return this;
    }
    toArray(dst = [], index = 0) {
      const {x, y, z} = this;
      dst[index] = x;
      dst[index + 1] = y;
      dst[index + 2] = z;
      return dst;
    }
    fromArray(src, index = 0) {
      return this.set(src[index], src[index + 1], src[index + 2]);
    }
    toString() {
      const {x, y, z} = this;
      return `{ x=${x}, y=${y}, z=${z} }`;
    }
  }

  // src/math/mat4/GetScaling.ts
  function GetScaling2(matrix2, out = new Vec3()) {
    const [m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22] = matrix2.data;
    return out.set(Math.hypot(m00, m01, m02), Math.hypot(m10, m11, m12), Math.hypot(m20, m21, m22));
  }

  // src/math/quaternion/Quaternion.ts
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
      const {x, y, z, w} = this;
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
      const {x, y, z, w} = this;
      return `{ x=${x}, y=${y}, z=${z}, w=${w} }`;
    }
  }

  // src/math/mat4/GetRotation.ts
  function GetRotation(matrix2, out = new Quaternion()) {
    const scaling = GetScaling2(matrix2);
    const is1 = 1 / scaling.x;
    const is2 = 1 / scaling.y;
    const is3 = 1 / scaling.z;
    const [m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22] = matrix2.data;
    const sm11 = m00 * is1;
    const sm12 = m01 * is2;
    const sm13 = m02 * is3;
    const sm21 = m10 * is1;
    const sm22 = m11 * is2;
    const sm23 = m12 * is3;
    const sm31 = m20 * is1;
    const sm32 = m21 * is2;
    const sm33 = m22 * is3;
    const trace = sm11 + sm22 + sm33;
    let S = 0;
    if (trace > 0) {
      S = Math.sqrt(trace + 1) * 2;
      return out.set((sm23 - sm32) / S, (sm31 - sm13) / S, (sm12 - sm21) / S, 0.25 * S);
    } else if (sm11 > sm22 && sm11 > sm33) {
      S = Math.sqrt(1 + sm11 - sm22 - sm33) * 2;
      return out.set(0.25 * S, (sm12 + sm21) / S, (sm31 + sm13) / S, (sm23 - sm32) / S);
    } else if (sm22 > sm33) {
      S = Math.sqrt(1 + sm22 - sm11 - sm33) * 2;
      return out.set((sm12 + sm21) / S, 0.25 * S, (sm23 + sm32) / S, (sm31 - sm13) / S);
    } else {
      S = Math.sqrt(1 + sm33 - sm11 - sm22) * 2;
      return out.set((sm31 + sm13) / S, (sm23 + sm32) / S, 0.25 * S, (sm12 - sm21) / S);
    }
  }

  // src/math/mat4/GetTranslation.ts
  function GetTranslation(matrix2, out = new Vec3()) {
    const data = matrix2.data;
    return out.set(data[12], data[13], data[14]);
  }

  // src/math/mat4/Identity.ts
  function Identity(matrix2 = new Matrix4()) {
    return matrix2.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }

  // src/math/mat4/Invert.ts
  function Invert(matrix2, out = new Matrix4()) {
    const [m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33] = matrix2.data;
    const det22x33 = m22 * m33 - m32 * m23;
    const det21x33 = m21 * m33 - m31 * m23;
    const det21x32 = m21 * m32 - m31 * m22;
    const det20x33 = m20 * m33 - m30 * m23;
    const det20x32 = m20 * m32 - m22 * m30;
    const det20x31 = m20 * m31 - m30 * m21;
    const cofact00 = +(m11 * det22x33 - m12 * det21x33 + m13 * det21x32);
    const cofact01 = -(m10 * det22x33 - m12 * det20x33 + m13 * det20x32);
    const cofact02 = +(m10 * det21x33 - m11 * det20x33 + m13 * det20x31);
    const cofact03 = -(m10 * det21x32 - m11 * det20x32 + m12 * det20x31);
    const det = m00 * cofact00 + m01 * cofact01 + m02 * cofact02 + m03 * cofact03;
    if (det === 0) {
      return out;
    }
    const detInv = 1 / det;
    const det12x33 = m12 * m33 - m32 * m13;
    const det11x33 = m11 * m33 - m31 * m13;
    const det11x32 = m11 * m32 - m31 * m12;
    const det10x33 = m10 * m33 - m30 * m13;
    const det10x32 = m10 * m32 - m30 * m12;
    const det10x31 = m10 * m31 - m30 * m11;
    const det12x23 = m12 * m23 - m22 * m13;
    const det11x23 = m11 * m23 - m21 * m13;
    const det11x22 = m11 * m22 - m21 * m12;
    const det10x23 = m10 * m23 - m20 * m13;
    const det10x22 = m10 * m22 - m20 * m12;
    const det10x21 = m10 * m21 - m20 * m11;
    const cofact10 = -(m01 * det22x33 - m02 * det21x33 + m03 * det21x32);
    const cofact11 = +(m00 * det22x33 - m02 * det20x33 + m03 * det20x32);
    const cofact12 = -(m00 * det21x33 - m01 * det20x33 + m03 * det20x31);
    const cofact13 = +(m00 * det21x32 - m01 * det20x32 + m02 * det20x31);
    const cofact20 = +(m01 * det12x33 - m02 * det11x33 + m03 * det11x32);
    const cofact21 = -(m00 * det12x33 - m02 * det10x33 + m03 * det10x32);
    const cofact22 = +(m00 * det11x33 - m01 * det10x33 + m03 * det10x31);
    const cofact23 = -(m00 * det11x32 - m01 * det10x32 + m02 * det10x31);
    const cofact30 = -(m01 * det12x23 - m02 * det11x23 + m03 * det11x22);
    const cofact31 = +(m00 * det12x23 - m02 * det10x23 + m03 * det10x22);
    const cofact32 = -(m00 * det11x23 - m01 * det10x23 + m03 * det10x21);
    const cofact33 = +(m00 * det11x22 - m01 * det10x22 + m02 * det10x21);
    return out.set(cofact00 * detInv, cofact10 * detInv, cofact20 * detInv, cofact30 * detInv, cofact01 * detInv, cofact11 * detInv, cofact21 * detInv, cofact31 * detInv, cofact02 * detInv, cofact12 * detInv, cofact22 * detInv, cofact32 * detInv, cofact03 * detInv, cofact13 * detInv, cofact23 * detInv, cofact33 * detInv);
  }

  // src/math/mat4/LookAt.ts
  function LookAt(eye, center, up, out = new Matrix4()) {
    const {x: eyex, y: eyey, z: eyez} = eye;
    const {x: upx, y: upy, z: upz} = up;
    const {x: centerx, y: centery, z: centerz} = center;
    if (Math.abs(eyex - centerx) < 1e-5 && Math.abs(eyey - centery) < 1e-5 && Math.abs(eyez - centerz) < 1e-5) {
      return Identity(out);
    }
    let z0 = eyex - centerx;
    let z1 = eyey - centery;
    let z2 = eyez - centerz;
    let len = 1 / Math.hypot(z0, z1, z2);
    z0 *= len;
    z1 *= len;
    z2 *= len;
    let x0 = upy * z2 - upz * z1;
    let x1 = upz * z0 - upx * z2;
    let x2 = upx * z1 - upy * z0;
    len = Math.hypot(x0, x1, x2);
    if (!len) {
      x0 = 0;
      x1 = 0;
      x2 = 0;
    } else {
      len = 1 / len;
      x0 *= len;
      x1 *= len;
      x2 *= len;
    }
    let y0 = z1 * x2 - z2 * x1;
    let y1 = z2 * x0 - z0 * x2;
    let y2 = z0 * x1 - z1 * x0;
    len = Math.hypot(y0, y1, y2);
    if (!len) {
      y0 = 0;
      y1 = 0;
      y2 = 0;
    } else {
      len = 1 / len;
      y0 *= len;
      y1 *= len;
      y2 *= len;
    }
    return out.set(x0, y0, z0, 0, x1, y1, z1, 0, x2, y2, z2, 0, -(x0 * eyex + x1 * eyey + x2 * eyez), -(y0 * eyex + y1 * eyey + y2 * eyez), -(z0 * eyex + z1 * eyey + z2 * eyez), 1);
  }

  // src/math/mat4/Multiply.ts
  function Multiply(a, b, out = new Matrix4()) {
    const [a00, a01, a02, a03, a10, a11, a12, a13, a20, a21, a22, a23, a30, a31, a32, a33] = a.data;
    const [b00, b01, b02, b03, b10, b11, b12, b13, b20, b21, b22, b23, b30, b31, b32, b33] = b.data;
    return out.set(b00 * a00 + b01 * a10 + b02 * a20 + b03 * a30, b01 * a01 + b01 * a11 + b02 * a21 + b03 * a31, b02 * a02 + b01 * a12 + b02 * a22 + b03 * a32, b03 * a03 + b01 * a13 + b02 * a23 + b03 * a33, b10 * a00 + b11 * a10 + b12 * a20 + b13 * a30, b10 * a01 + b11 * a11 + b12 * a21 + b13 * a31, b10 * a02 + b11 * a12 + b12 * a22 + b13 * a32, b10 * a03 + b11 * a13 + b12 * a23 + b13 * a33, b20 * a00 + b21 * a10 + b22 * a20 + b23 * a30, b20 * a01 + b21 * a11 + b22 * a21 + b23 * a31, b20 * a02 + b21 * a12 + b22 * a22 + b23 * a32, b20 * a03 + b21 * a13 + b22 * a23 + b23 * a33, b30 * a00 + b31 * a10 + b32 * a20 + b33 * a30, b30 * a01 + b31 * a11 + b32 * a21 + b33 * a31, b30 * a02 + b31 * a12 + b32 * a22 + b33 * a32, b30 * a03 + b31 * a13 + b32 * a23 + b33 * a33);
  }

  // src/math/mat4/MultiplyScalar.ts
  function MultiplyScalar(matrix2, scalar, out = new Matrix4()) {
    const [a00, a01, a02, a03, a10, a11, a12, a13, a20, a21, a22, a23, a30, a31, a32, a33] = matrix2.data;
    return out.set(a00 * scalar, a01 * scalar, a02 * scalar, a03 * scalar, a10 * scalar, a11 * scalar, a12 * scalar, a13 * scalar, a20 * scalar, a21 * scalar, a22 * scalar, a23 * scalar, a30 * scalar, a31 * scalar, a32 * scalar, a33 * scalar);
  }

  // src/math/mat4/MultiplyScalarAndAdd.ts
  function MultiplyScalarAndAdd(a, b, scalar, out = new Matrix4()) {
    const [a00, a01, a02, a03, a10, a11, a12, a13, a20, a21, a22, a23, a30, a31, a32, a33] = a.data;
    const [b00, b01, b02, b03, b10, b11, b12, b13, b20, b21, b22, b23, b30, b31, b32, b33] = b.data;
    return out.set(a00 + b00 * scalar, a01 + b01 * scalar, a02 + b02 * scalar, a03 + b03 * scalar, a10 + b10 * scalar, a11 + b11 * scalar, a12 + b12 * scalar, a13 + b13 * scalar, a20 + b20 * scalar, a21 + b21 * scalar, a22 + b22 * scalar, a23 + b23 * scalar, a30 + b30 * scalar, a31 + b31 * scalar, a32 + b32 * scalar, a33 + b33 * scalar);
  }

  // src/math/mat4/Ortho.ts
  function Ortho(left, right, bottom, top, near, far, out = new Matrix4()) {
    const lr = 1 / (left - right);
    const bt = 1 / (bottom - top);
    const nf = 1 / (near - far);
    return out.set(-2 * lr, 0, 0, 0, 0, -2 * bt, 0, 0, 0, 0, 2 * nf, 0, (left + right) * lr, (top + bottom) * bt, (far + near) * nf, 1);
  }

  // src/math/mat4/Perspective.ts
  function Perspective(fovY, aspect, near, far, out = new Matrix4()) {
    const f = 1 / Math.tan(fovY / 2);
    let m22 = -1;
    let m32 = -2 * near;
    if (far !== null && far !== Infinity) {
      const nf = 1 / (near - far);
      m22 = (far + near) * nf;
      m32 = 2 * far * near * nf;
    }
    return out.set(f / aspect, 0, 0, 0, 0, f, 0, 0, 0, 0, m22, -1, 0, 0, m32, 0);
  }

  // src/math/mat4/PerspectiveFromFieldOfView.ts
  function PerspectiveFromFieldOfView(fov, near, far, out = new Matrix4()) {
    const upTan = Math.tan(fov.upDegrees * Math.PI / 180);
    const downTan = Math.tan(fov.downDegrees * Math.PI / 180);
    const leftTan = Math.tan(fov.leftDegrees * Math.PI / 180);
    const rightTan = Math.tan(fov.rightDegrees * Math.PI / 180);
    const xScale = 2 / (leftTan + rightTan);
    const yScale = 2 / (upTan + downTan);
    return out.set(xScale, 0, 0, 0, 0, yScale, 0, 0, -((leftTan - rightTan) * xScale * 0.5), (upTan - downTan) * yScale * 0.5, far / (near - far), -1, 0, 0, far * near / (near - far), 0);
  }

  // src/math/mat4/Rotate.ts
  function Rotate5(matrix2, angle2, axis, out = new Matrix4()) {
    let {x, y, z} = axis;
    let len = Math.hypot(x, y, z);
    if (len < 1e-5) {
      return null;
    }
    len = 1 / len;
    x *= len;
    y *= len;
    z *= len;
    const s = Math.sin(angle2);
    const c = Math.cos(angle2);
    const t = 1 - c;
    const [a00, a01, a02, a03, a10, a11, a12, a13, a20, a21, a22, a23, a30, a31, a32, a33] = matrix2.data;
    const b00 = x * x * t + c;
    const b01 = y * x * t + z * s;
    const b02 = z * x * t - y * s;
    const b10 = x * y * t - z * s;
    const b11 = y * y * t + c;
    const b12 = z * y * t + x * s;
    const b20 = x * z * t + y * s;
    const b21 = y * z * t - x * s;
    const b22 = z * z * t + c;
    return out.set(a00 * b00 + a10 * b01 + a20 * b02, a01 * b00 + a11 * b01 + a21 * b02, a02 * b00 + a12 * b01 + a22 * b02, a03 * b00 + a13 * b01 + a23 * b02, a00 * b10 + a10 * b11 + a20 * b12, a01 * b10 + a11 * b11 + a21 * b12, a02 * b10 + a12 * b11 + a22 * b12, a03 * b10 + a13 * b11 + a23 * b12, a00 * b20 + a10 * b21 + a20 * b22, a01 * b20 + a11 * b21 + a21 * b22, a02 * b20 + a12 * b21 + a22 * b22, a03 * b20 + a13 * b21 + a23 * b22, a30, a31, a32, a33);
  }

  // src/math/mat4/RotateX.ts
  function RotateX2(matrix2, angle2, out = new Matrix4()) {
    const s = Math.sin(angle2);
    const c = Math.cos(angle2);
    const [a00, a01, a02, a03, a10, a11, a12, a13, a20, a21, a22, a23, a30, a31, a32, a33] = matrix2.data;
    return out.set(a00, a01, a02, a03, a10 * c + a20 * s, a11 * c + a21 * s, a12 * c + a22 * s, a13 * c + a23 * s, a20 * c - a10 * s, a21 * c - a11 * s, a22 * c - a12 * s, a23 * c - a13 * s, a30, a31, a32, a33);
  }

  // src/math/mat4/RotateY.ts
  function RotateY2(matrix2, angle2, out = new Matrix4()) {
    const s = Math.sin(angle2);
    const c = Math.cos(angle2);
    const [a00, a01, a02, a03, a10, a11, a12, a13, a20, a21, a22, a23, a30, a31, a32, a33] = matrix2.data;
    return out.set(a00 * c - a20 * s, a01 * c - a21 * s, a02 * c - a22 * s, a03 * c - a23 * s, a10, a11, a12, a13, a00 * s + a20 * c, a01 * s + a21 * c, a02 * s + a22 * c, a03 * s + a23 * c, a30, a31, a32, a33);
  }

  // src/math/mat4/RotateZ.ts
  function RotateZ2(matrix2, angle2, out = new Matrix4()) {
    const s = Math.sin(angle2);
    const c = Math.cos(angle2);
    const [a00, a01, a02, a03, a10, a11, a12, a13, a20, a21, a22, a23, a30, a31, a32, a33] = matrix2.data;
    return out.set(a00 * c + a10 * s, a01 * c + a11 * s, a02 * c + a12 * s, a03 * c + a13 * s, a10 * c - a00 * s, a11 * c - a01 * s, a12 * c - a02 * s, a13 * c - a03 * s, a20, a21, a22, a23, a30, a31, a32, a33);
  }

  // src/math/mat4/Scale.ts
  function Scale3(matrix2, v, out = new Matrix4()) {
    const [m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33] = matrix2.data;
    const {x, y, z} = v;
    return out.set(m00 * x, m01 * x, m02 * x, m03 * x, m10 * y, m11 * y, m12 * y, m13 * y, m20 * z, m21 * z, m22 * z, m23 * z, m30, m31, m32, m33);
  }

  // src/math/mat4/SetTranslation.ts
  function SetTranslation(matrix2, vec310) {
    const data = matrix2.data;
    const {x, y, z} = vec310;
    data[12] = x;
    data[13] = y;
    data[14] = z;
    matrix2.onChange(matrix2);
    return matrix2;
  }

  // src/math/mat4/SetTranslationFromFloats.ts
  function SetTranslationFromFloats(matrix2, x, y, z) {
    const data = matrix2.data;
    data[12] = x;
    data[13] = y;
    data[14] = z;
    matrix2.onChange(matrix2);
    return matrix2;
  }

  // src/math/mat4/Subtract.ts
  function Subtract2(a, b, out = new Matrix4()) {
    const [a00, a01, a02, a03, a10, a11, a12, a13, a20, a21, a22, a23, a30, a31, a32, a33] = a.data;
    const [b00, b01, b02, b03, b10, b11, b12, b13, b20, b21, b22, b23, b30, b31, b32, b33] = b.data;
    return out.set(a00 - b00, a01 - b01, a02 - b02, a03 - b03, a10 - b10, a11 - b11, a12 - b12, a13 - b13, a20 - b20, a21 - b21, a22 - b22, a23 - b23, a30 - b30, a31 - b31, a32 - b32, a33 - b33);
  }

  // src/math/mat4/TargetTo.ts
  function TargetTo2(eye, target, up, out = new Matrix4()) {
    const {x: eyex, y: eyey, z: eyez} = eye;
    const {x: upx, y: upy, z: upz} = up;
    const {x: targetx, y: targety, z: targetz} = target;
    let z0 = eyex - targetx;
    let z1 = eyey - targety;
    let z2 = eyez - targetz;
    let len = z0 * z0 + z1 * z1 + z2 * z2;
    if (len > 0) {
      len = 1 / Math.sqrt(len);
      z0 *= len;
      z1 *= len;
      z2 *= len;
    }
    let x0 = upy * z2 - upz * z1;
    let x1 = upz * z0 - upx * z2;
    let x2 = upx * z1 - upy * z0;
    len = x0 * x0 + x1 * x1 + x2 * x2;
    if (len > 0) {
      len = 1 / Math.sqrt(len);
      x0 *= len;
      x1 *= len;
      x2 *= len;
    }
    return out.set(x0, x1, x2, 0, z1 * x2 - z2 * x1, z2 * x0 - z0 * x2, z0 * x1 - z1 * x0, 0, z0, z1, z2, 0, eyex, eyey, eyez, 1);
  }

  // src/math/mat4/Translate.ts
  function Translate(matrix2, vec310, out = new Matrix4()) {
    const {x, y, z} = vec310;
    const data = matrix2.data;
    const [a00, a01, a02, a03, a10, a11, a12, a13, a20, a21, a22, a23, a30, a31, a32, a33] = data;
    if (matrix2 === out) {
      data[12] = a00 * x + a10 * y + a20 * z + a30;
      data[13] = a01 * x + a11 * y + a21 * z + a31;
      data[14] = a02 * x + a12 * y + a22 * z + a32;
      data[15] = a03 * x + a13 * y + a23 * z + a33;
    } else {
      out.set(a00, a01, a02, a03, a10, a11, a12, a13, a20, a21, a22, a23, a00 * x + a10 * y + a20 * z + a30, a01 * x + a11 * y + a21 * z + a31, a02 * x + a12 * y + a22 * z + a32, a03 * x + a13 * y + a23 * z + a33);
    }
    return out;
  }

  // src/math/mat4/TranslateFromFloats.ts
  function TranslateFromFloats(matrix2, x, y, z, out = new Matrix4()) {
    const data = matrix2.data;
    const [a00, a01, a02, a03, a10, a11, a12, a13, a20, a21, a22, a23, a30, a31, a32, a33] = data;
    if (matrix2 === out) {
      data[12] = a00 * x + a10 * y + a20 * z + a30;
      data[13] = a01 * x + a11 * y + a21 * z + a31;
      data[14] = a02 * x + a12 * y + a22 * z + a32;
      data[15] = a03 * x + a13 * y + a23 * z + a33;
    } else {
      out.set(a00, a01, a02, a03, a10, a11, a12, a13, a20, a21, a22, a23, a00 * x + a10 * y + a20 * z + a30, a01 * x + a11 * y + a21 * z + a31, a02 * x + a12 * y + a22 * z + a32, a03 * x + a13 * y + a23 * z + a33);
    }
    return out;
  }

  // src/math/mat4/Transpose.ts
  function Transpose(matrix2, out = new Matrix4()) {
    const [m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33] = matrix2.data;
    return out.set(m00, m10, m20, m30, m01, m11, m21, m31, m02, m12, m22, m32, m03, m13, m23, m33);
  }

  // src/math/mat4/Zero.ts
  function Zero(matrix2) {
    return matrix2.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  }

  // src/math/mat4/index.ts
  const mat4_exports = {};
  __export(mat4_exports, {
    Add: () => Add2,
    AddTranslationFromFloats: () => AddTranslationFromFloats,
    Adjoint: () => Adjoint,
    Clone: () => Clone11,
    CopyFrom: () => CopyFrom13,
    CopyPosition: () => CopyPosition,
    Determinant: () => Determinant,
    Equals: () => Equals11,
    Frobenius: () => Frobenius,
    FromQuat: () => FromQuat,
    FromRotation: () => FromRotation,
    FromRotationTranslation: () => FromRotationTranslation,
    FromRotationTranslationScale: () => FromRotationTranslationScale,
    FromRotationTranslationScaleOrigin: () => FromRotationTranslationScaleOrigin,
    FromRotationXYTranslation: () => FromRotationXYTranslation,
    FromScaling: () => FromScaling,
    FromTranslation: () => FromTranslation,
    FromXRotation: () => FromXRotation,
    FromYRotation: () => FromYRotation,
    FromZRotation: () => FromZRotation,
    Frustum: () => Frustum,
    GetRotation: () => GetRotation,
    GetScaling: () => GetScaling2,
    GetTranslation: () => GetTranslation,
    Identity: () => Identity,
    Invert: () => Invert,
    LookAt: () => LookAt,
    Matrix4: () => Matrix4,
    Multiply: () => Multiply,
    MultiplyScalar: () => MultiplyScalar,
    MultiplyScalarAndAdd: () => MultiplyScalarAndAdd,
    Ortho: () => Ortho,
    Perspective: () => Perspective,
    PerspectiveFromFieldOfView: () => PerspectiveFromFieldOfView,
    Rotate: () => Rotate5,
    RotateX: () => RotateX2,
    RotateY: () => RotateY2,
    RotateZ: () => RotateZ2,
    Scale: () => Scale3,
    SetTranslation: () => SetTranslation,
    SetTranslationFromFloats: () => SetTranslationFromFloats,
    Subtract: () => Subtract2,
    TargetTo: () => TargetTo2,
    Translate: () => Translate,
    TranslateFromFloats: () => TranslateFromFloats,
    Transpose: () => Transpose,
    Zero: () => Zero
  });

  // src/math/matrix2d/Matrix2D.ts
  class Matrix2D2 {
    constructor(a = 1, b = 0, c = 0, d = 1, tx = 0, ty = 0) {
      this.set(a, b, c, d, tx, ty);
    }
    set(a = 1, b = 0, c = 0, d = 1, tx = 0, ty = 0) {
      this.a = a;
      this.b = b;
      this.c = c;
      this.d = d;
      this.tx = tx;
      this.ty = ty;
      return this;
    }
    identity() {
      return this.set();
    }
    toArray() {
      const {a, b, c, d, tx, ty} = this;
      return [a, b, c, d, tx, ty];
    }
    fromArray(src) {
      return this.set(src[0], src[1], src[2], src[3], src[4], src[5]);
    }
  }

  // src/geom/rectangle/Contains.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function Contains13(rect, x, y) {
    if (rect.width <= 0 || rect.height <= 0) {
      return false;
    }
    return rect.x <= x && rect.x + rect.width >= x && rect.y <= y && rect.y + rect.height >= y;
  }

  // src/geom/rectangle/Rectangle.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  class Rectangle {
    constructor(x = 0, y = 0, width = 0, height = 0) {
      this.set(x, y, width, height);
    }
    set(x = 0, y = 0, width = 0, height = 0) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      return this;
    }
    contains(x, y) {
      return Contains13(this, x, y);
    }
    set right(value) {
      if (value <= this.x) {
        this.width = 0;
      } else {
        this.width = value - this.x;
      }
    }
    get right() {
      return this.x + this.width;
    }
    set bottom(value) {
      if (value <= this.y) {
        this.height = 0;
      } else {
        this.height = value - this.y;
      }
    }
    get bottom() {
      return this.y + this.height;
    }
  }

  // src/math/vec2/Vec2.ts
  class Vec25 {
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

  // src/math/vec2/Vec2Callback.ts
  class Vec2Callback2 extends Vec25 {
    constructor(onChange, x = 0, y = 0) {
      super(x, y);
      this.onChange = onChange;
    }
    destroy() {
      this.onChange = NOOP;
    }
    set(x = 0, y = 0) {
      this._x = x;
      this._y = y;
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
  }

  // src/math/angle/AngleBetween.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function AngleBetween(x1, y1, x2, y2) {
    return Math.atan2(y2 - y1, x2 - x1);
  }

  // src/math/angle/AngleBetweenY.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function AngleBetweenY(x1, y1, x2, y2) {
    return Math.atan2(x2 - x1, y2 - y1);
  }

  // src/math/const.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  const MATH_CONST = {
    PI2: Math.PI * 2,
    HALF_PI: Math.PI * 0.5,
    EPSILON: 1e-6,
    DEG_TO_RAD: Math.PI / 180,
    RAD_TO_DEG: 180 / Math.PI,
    MIN_SAFE_INTEGER: Number.MIN_SAFE_INTEGER || -9007199254740991,
    MAX_SAFE_INTEGER: Number.MAX_SAFE_INTEGER || 9007199254740991
  };

  // src/math/angle/CounterClockwise.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function CounterClockwise(angle2) {
    if (angle2 > Math.PI) {
      angle2 -= MATH_CONST.PI2;
    }
    return Math.abs(((angle2 + MATH_CONST.HALF_PI) % MATH_CONST.PI2 - MATH_CONST.PI2) % MATH_CONST.PI2);
  }

  // src/math/angle/NormalizeAngle.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function NormalizeAngle(angle2) {
    angle2 = angle2 % MATH_CONST.PI2;
    if (angle2 >= 0) {
      return angle2;
    } else {
      return angle2 + MATH_CONST.PI2;
    }
  }

  // src/math/angle/ReverseAngle.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function ReverseAngle(angle2) {
    return NormalizeAngle(angle2 + Math.PI);
  }

  // src/math/angle/RotateAngleTo.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function RotateAngleTo(currentAngle, targetAngle, lerp = 0.05) {
    if (currentAngle === targetAngle) {
      return currentAngle;
    }
    if (Math.abs(targetAngle - currentAngle) <= lerp || Math.abs(targetAngle - currentAngle) >= MATH_CONST.PI2 - lerp) {
      currentAngle = targetAngle;
    } else {
      if (Math.abs(targetAngle - currentAngle) > Math.PI) {
        if (targetAngle < currentAngle) {
          targetAngle += MATH_CONST.PI2;
        } else {
          targetAngle -= MATH_CONST.PI2;
        }
      }
      if (targetAngle > currentAngle) {
        currentAngle += lerp;
      } else if (targetAngle < currentAngle) {
        currentAngle -= lerp;
      }
    }
    return currentAngle;
  }

  // src/math/angle/ShortestAngleBetween.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function ShortestAngleBetween(angle1, angle2) {
    const difference = angle2 - angle1;
    if (difference === 0) {
      return 0;
    }
    const times = Math.floor((difference - -180) / 360);
    return difference - times * 360;
  }

  // src/math/Wrap.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function Wrap2(value, min, max) {
    const range = max - min;
    return min + ((value - min) % range + range) % range;
  }

  // src/math/angle/WrapAngle.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function WrapAngle(angle2) {
    return Wrap2(angle2, -Math.PI, Math.PI);
  }

  // src/math/angle/WrapAngleDegrees.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function WrapAngleDegrees(angle2) {
    return Wrap2(angle2, -180, 180);
  }

  // src/math/angle/index.ts
  const angle_exports = {};
  __export(angle_exports, {
    AngleBetween: () => AngleBetween,
    AngleBetweenY: () => AngleBetweenY,
    CounterClockwise: () => CounterClockwise,
    NormalizeAngle: () => NormalizeAngle,
    ReverseAngle: () => ReverseAngle,
    RotateAngleTo: () => RotateAngleTo,
    ShortestAngleBetween: () => ShortestAngleBetween,
    WrapAngle: () => WrapAngle,
    WrapAngleDegrees: () => WrapAngleDegrees
  });
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */

  // src/camera/Camera.ts
  class Camera {
    constructor() {
      this._rotation = 0;
      this.type = "Camera";
      this.dirtyRender = true;
      const game = GameInstance2.get();
      this.renderer = game.renderer;
      this.matrix = Identity();
      this.bounds = new Rectangle();
      this.worldTransform = new Matrix2D2();
      this.position = new Vec2Callback2(() => this.updateTransform(), 0, 0);
      this.scale = new Vec2Callback2(() => this.updateTransform(), 1, 1);
      this.origin = new Vec2Callback2(() => this.updateTransform(), 0.5, 0.5);
      this.reset();
    }
    updateTransform() {
      const matrix2 = this.matrix.data;
      const px = this.position.x;
      const py = this.position.y;
      const sx = this.scale.x;
      const sy = this.scale.y;
      const ox = -px + this.width * this.origin.x;
      const oy = -py + this.height * this.origin.y;
      const z = Math.sin(this.rotation);
      const w = Math.cos(this.rotation);
      const z2 = z + z;
      const zz = z * z2;
      const wz = w * z2;
      const out0 = (1 - zz) * sx;
      const out1 = wz * sx;
      const out4 = -wz * sy;
      const out5 = (1 - zz) * sy;
      matrix2[0] = out0;
      matrix2[1] = out1;
      matrix2[4] = out4;
      matrix2[5] = out5;
      matrix2[12] = px + ox - (out0 * ox + out4 * oy);
      matrix2[13] = py + oy - (out1 * ox + out5 * oy);
      this.worldTransform.set(w * sx, z * sx, -z * sy, w * sy, -px, -py);
      const bw = this.width * (1 / sx);
      const bh = this.height * (1 / sy);
      this.bounds.set(ox - bw / 2, oy - bh / 2, bw, bh);
      this.dirtyRender = true;
    }
    reset() {
      const width = this.renderer.width;
      const height = this.renderer.height;
      this.width = width;
      this.height = height;
      this.bounds.set(0, 0, width, height);
    }
    set rotation(value) {
      if (value !== this._rotation) {
        this._rotation = WrapAngle(value);
        this.updateTransform();
      }
    }
    get rotation() {
      return this._rotation;
    }
    destroy() {
      this.position.destroy();
      this.scale.destroy();
      this.origin.destroy();
      this.world = null;
      this.worldTransform = null;
      this.renderer = null;
      this.matrix = null;
      this.bounds = null;
    }
  }

  // src/camera/StaticCamera.ts
  class StaticCamera {
    constructor() {
      this.type = "StaticCamera";
      this.dirtyRender = true;
      const game = GameInstance2.get();
      this.renderer = game.renderer;
      this.matrix = Identity();
      this.bounds = new Rectangle();
      this.worldTransform = new Matrix2D2();
      this.reset();
    }
    reset() {
      const renderer = this.renderer;
      if (renderer) {
        const width = renderer.width;
        const height = renderer.height;
        this.width = width;
        this.height = height;
      }
      this.bounds.set(0, 0, this.width, this.height);
    }
    destroy() {
      this.world = null;
      this.worldTransform = null;
      this.renderer = null;
      this.matrix = null;
      this.bounds = null;
    }
  }

  // src/camera/index.ts
  const camera_exports = {};
  __export(camera_exports, {
    Camera: () => Camera,
    StaticCamera: () => StaticCamera
  });

  // src/math/vec3/Backward.ts
  function Backward() {
    return new Vec3(0, 0, -1);
  }

  // src/math/vec3/Down.ts
  function Down() {
    return new Vec3(0, -1, 0);
  }

  // src/math/vec3/Forward.ts
  function Forward() {
    return new Vec3(0, 0, 1);
  }

  // src/math/vec3/Left.ts
  function Left() {
    return new Vec3(-1, 0, 0);
  }

  // src/math/vec3/Right.ts
  function Right() {
    return new Vec3(1, 0, 0);
  }

  // src/math/vec3/Up.ts
  function Up() {
    return new Vec3(0, 1, 0);
  }

  // src/math/vec3/Zero.ts
  function Zero9() {
    return new Vec3(0, 0, 0);
  }

  // src/math/vec3/const.ts
  const UP = Up();
  const DOWN = Down();
  const LEFT = Left();
  const RIGHT = Right();
  const FORWARD = Forward();
  const BACKWARD = Backward();
  const ZERO = Zero9();

  // src/math/vec3/Abs.ts
  function Abs3(a, out = new Vec3()) {
    return out.set(Math.abs(a.x), Math.abs(a.y), Math.abs(a.z));
  }

  // src/math/vec3/Add.ts
  function Add(a, b, out = new Vec3()) {
    return out.set(a.x + b.x, a.y + b.y, a.z + b.z);
  }

  // src/math/vec3/AddScalar.ts
  function AddScalar5(a, scalar, out = new Vec3()) {
    return out.set(a.x + scalar, a.y + scalar, a.z + scalar);
  }

  // src/math/vec3/Dot.ts
  function Dot5(a, b) {
    return a.x * b.x + a.y * b.y + a.z * b.z;
  }

  // src/math/vec3/Angle.ts
  function Angle10(a, b) {
    const {x: ax, y: ay, z: az} = a;
    const {x: bx, y: by, z: bz} = b;
    const mag1 = Math.sqrt(ax * ax + ay * ay + az * az);
    const mag2 = Math.sqrt(bx * bx + by * by + bz * bz);
    const mag = mag1 * mag2;
    const c = mag && Dot5(a, b) / mag;
    return Math.acos(Math.min(Math.max(c, -1), 1));
  }

  // src/math/Bezier.ts
  function Bezier(a, b, c, d, t) {
    const inverseFactor = 1 - t;
    const inverseFactorTimesTwo = inverseFactor * inverseFactor;
    const factorTimes2 = t * t;
    const factor1 = inverseFactorTimesTwo * inverseFactor;
    const factor2 = 3 * t * inverseFactorTimesTwo;
    const factor3 = 3 * factorTimes2 * inverseFactor;
    const factor4 = factorTimes2 * t;
    return a * factor1 + b * factor2 + c * factor3 + d * factor4;
  }

  // src/math/vec3/Bezier.ts
  function Bezier7(a, b, c, d, t, out = new Vec3()) {
    return out.set(Bezier(t, a.x, b.x, c.x, d.x), Bezier(t, a.y, b.y, c.y, d.y), Bezier(t, a.z, b.z, c.z, d.z));
  }

  // src/math/CatmullRom.ts
  function CatmullRom(t, p0, p1, p2, p3) {
    const v0 = (p2 - p0) * 0.5;
    const v1 = (p3 - p1) * 0.5;
    const t2 = t * t;
    const t3 = t * t2;
    return (2 * p1 - 2 * p2 + v0 + v1) * t3 + (-3 * p1 + 3 * p2 - 2 * v0 - v1) * t2 + v0 * t + p1;
  }

  // src/math/vec3/CatmullRom.ts
  function CatmullRom8(p1, p2, p3, p4, t, out = new Vec3()) {
    return out.set(CatmullRom(t, p1.x, p2.x, p3.x, p4.x), CatmullRom(t, p1.y, p2.y, p3.y, p4.y), CatmullRom(t, p1.z, p2.z, p3.z, p4.z));
  }

  // src/math/vec3/Ceil.ts
  function Ceil5(a, out = new Vec3()) {
    return out.set(Math.ceil(a.x), Math.ceil(a.y), Math.ceil(a.z));
  }

  // src/math/vec3/Scale.ts
  function Scale16(a, scalar, out = new Vec3()) {
    return out.set(a.x * scalar, a.y * scalar, a.z * scalar);
  }

  // src/math/vec3/Center.ts
  function Center3(a, b, out = new Vec3()) {
    Add(a, b, out);
    return Scale16(out, 0.5, out);
  }

  // src/math/Clamp.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function Clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }

  // src/math/vec3/Clamp.ts
  function Clamp11(a, min, max, out = new Vec3()) {
    return out.set(Clamp(a.x, min.x, max.x), Clamp(a.y, min.y, max.y), Clamp(a.z, min.z, max.z));
  }

  // src/math/vec3/DivideScalar.ts
  function DivideScalar5(a, scalar, out = new Vec3()) {
    const {x, y, z} = a;
    return out.set(x / scalar, y / scalar, z / scalar);
  }

  // src/math/vec3/Length.ts
  function Length15(a) {
    const {x, y, z} = a;
    return Math.sqrt(x * x + y * y + z * z);
  }

  // src/math/vec3/ClampLength.ts
  function ClampLength(a, min, max, out = new Vec3()) {
    const length = Length15(a);
    DivideScalar5(a, length || 1, out);
    return Scale16(out, Clamp(min, max, length), out);
  }

  // src/math/vec3/ClampScalar.ts
  function ClampScalar3(a, min, max, out = new Vec3()) {
    return out.set(Clamp(a.x, min, max), Clamp(a.y, min, max), Clamp(a.z, min, max));
  }

  // src/math/vec3/Clone.ts
  function Clone19(source) {
    const {x, y, z} = source;
    return new Vec3(x, y, z);
  }

  // src/math/vec3/CopyFrom.ts
  function CopyFrom22(source, dest) {
    const {x, y, z} = source;
    return dest.set(x, y, z);
  }

  // src/math/vec3/Cross.ts
  function Cross3(a, b, out = new Vec3()) {
    const {x: ax, y: ay, z: az} = a;
    const {x: bx, y: by, z: bz} = b;
    return out.set(ay * bz - az * by, az * bx - ax * bz, ax * by - ay * bx);
  }

  // src/math/vec3/CrossNormalize.ts
  function CrossNormalize(a, b, out = new Vec3()) {
    const {x: ax, y: ay, z: az} = a;
    const {x: bx, y: by, z: bz} = b;
    const x = ay * bz - az * by;
    const y = az * bx - ax * bz;
    const z = ax * by - ay * bx;
    let len = x * x + y * y + z * z;
    if (len > 0) {
      len = 1 / Math.sqrt(len);
    }
    return out.set(x * len, y * len, z * len);
  }

  // src/math/vec3/DistanceSquared.ts
  function DistanceSquared6(a, b) {
    const x = a.x - b.x;
    const y = a.y - b.y;
    const z = a.z - b.z;
    return x * x + y * y + z * z;
  }

  // src/math/vec3/Distance.ts
  function Distance7(a, b) {
    return Math.sqrt(DistanceSquared6(a, b));
  }

  // src/math/vec3/Divide.ts
  function Divide3(a, b, out = new Vec3()) {
    return out.set(a.x / b.x, a.y / b.y, a.z / b.z);
  }

  // src/math/vec3/Equals.ts
  function Equals19(a, b) {
    return a.x === b.x && a.y === b.y && a.z === b.z;
  }

  // src/math/vec3/Floor.ts
  function Floor5(a, out = new Vec3()) {
    return out.set(Math.floor(a.x), Math.floor(a.y), Math.floor(a.z));
  }

  // src/math/vec3/Fract.ts
  function Fract3(a, out = new Vec3()) {
    return out.set(a.x - Math.floor(a.x), a.y - Math.floor(a.y), a.z - Math.floor(a.z));
  }

  // src/math/fuzzy/FuzzyEqual.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function FuzzyEqual(a, b, epsilon = 1e-4) {
    return Math.abs(a - b) < epsilon;
  }

  // src/math/vec3/FuzzyEquals.ts
  function FuzzyEquals5(a, b, epsilon = 1e-4) {
    return FuzzyEqual(a.x, b.x, epsilon) && FuzzyEqual(a.y, b.y, epsilon) && FuzzyEqual(a.z, b.z, epsilon);
  }

  // src/math/Hermite.ts
  function Hermite(a, b, c, d, t) {
    const squared = t * t;
    const factor1 = squared * (2 * t - 3) + 1;
    const factor2 = squared * (t - 2) + t;
    const factor3 = squared * (t - 1);
    const factor4 = squared * (3 - 2 * t);
    return a * factor1 + b * factor2 + c * factor3 + d * factor4;
  }

  // src/math/vec3/Hermite.ts
  function Hermite10(a, b, c, d, t, out = new Vec3()) {
    return out.set(Hermite(t, a.x, b.x, c.x, d.x), Hermite(t, a.y, b.y, c.y, d.y), Hermite(t, a.z, b.z, c.z, d.z));
  }

  // src/math/vec3/Inverse.ts
  function Inverse3(a, out = new Vec3()) {
    return out.set(1 / a.x, 1 / a.y, 1 / a.z);
  }

  // src/math/vec3/IsNonUniform.ts
  function IsNonUniform(a) {
    const absX = Math.abs(a.x);
    const absY = Math.abs(a.y);
    const absZ = Math.abs(a.z);
    return absX !== absY || absX !== absZ || absY !== absZ;
  }

  // src/math/vec3/LengthSquared.ts
  function LengthSquared5(a) {
    const {x, y, z} = a;
    return x * x + y * y + z * z;
  }

  // src/math/vec3/Lerp.ts
  function Lerp3(a, b, t, out = new Vec3()) {
    const {x, y, z} = a;
    return out.set(x + t * (b.x - x), y + t * (b.y - y), z + t * (b.z - z));
  }

  // src/math/vec3/ManhattanDistance.ts
  function ManhattanDistance3(a, b) {
    return Math.abs(a.x - b.x) + Math.abs(a.y - b.y) + Math.abs(a.z - b.z);
  }

  // src/math/vec3/ManhattanLength.ts
  function ManhattanLength3(a) {
    return Math.abs(a.x) + Math.abs(a.y) + Math.abs(a.z);
  }

  // src/math/vec3/Max.ts
  function Max3(a, b, out = new Vec3()) {
    const {x: ax, y: ay, z: az} = a;
    const {x: bx, y: by, z: bz} = b;
    return out.set(Math.max(ax, bx), Math.max(ay, by), Math.max(az, bz));
  }

  // src/math/vec3/Min.ts
  function Min3(a, b, out = new Vec3()) {
    const {x: ax, y: ay, z: az} = a;
    const {x: bx, y: by, z: bz} = b;
    return out.set(Math.min(ax, bx), Math.min(ay, by), Math.min(az, bz));
  }

  // src/math/vec3/Multiply.ts
  function Multiply9(a, b, out = new Vec3()) {
    return out.set(a.x * b.x, a.y * b.y, a.z * b.z);
  }

  // src/math/vec3/MultiplyByFloats.ts
  function MultiplyByFloats6(a, x, y, z, out = new Vec3()) {
    return out.set(a.x * x, a.y * y, a.z * z);
  }

  // src/math/vec3/Negate.ts
  function Negate3(a, out = new Vec3()) {
    return out.set(-a.x, -a.y, -a.z);
  }

  // src/math/vec3/Normalize.ts
  function Normalize(a, out = new Vec3()) {
    const {x, y, z} = a;
    let len = x * x + y * y + z * z;
    if (len > 0) {
      len = 1 / Math.sqrt(len);
    }
    return out.set(x * len, y * len, z * len);
  }

  // src/math/vec3/One.ts
  function One3() {
    return new Vec3(1, 1, 1);
  }

  // src/math/vec3/TransformMat4.ts
  function TransformMat44(a, m, out = new Vec3()) {
    const [m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33] = m.data;
    const {x, y, z} = a;
    let w = m03 * x + m13 * y + m23 * z + m33;
    w = w || 1;
    return out.set((m00 * x + m10 * y + m20 * z + m30) / w, (m01 * x + m11 * y + m21 * z + m31) / w, (m02 * x + m12 * y + m22 * z + m32) / w);
  }

  // src/math/vec3/Project.ts
  const tempMatrix1 = new Matrix4();
  const tempMatrix2 = new Matrix4();
  function Project(v, world, transform, viewport, out = new Vec3()) {
    const {x, y, width, height} = viewport;
    tempMatrix1.set(width / 2, 0, 0, 0, 0, -height / 2, 0, 0, 0, 0, 0.5, 0, x + width / 2, height / 2 + y, 0.5, 1);
    Multiply(world, transform, tempMatrix2);
    Multiply(tempMatrix2, tempMatrix1, tempMatrix2);
    return TransformMat44(v, tempMatrix2, out);
  }

  // src/math/vec3/Vec3Callback.ts
  class Vec3Callback extends Vec3 {
    constructor(onChange, x = 0, y = 0, z = 0) {
      super(x, y, z);
      this.onChange = onChange;
    }
    destroy() {
      this.onChange = NOOP;
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

  // src/math/vec3/RGBCallback.ts
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
      const {x, y, z} = this;
      return `[ r=${x}, g=${y}, b=${z} ]`;
    }
  }

  // src/math/vec3/Random.ts
  function Random13(a, scale = 1, out = new Vec3()) {
    const r = Math.random() * 2 * Math.PI;
    const z = Math.random() * 2 - 1;
    const zScale = Math.sqrt(1 - z * z) * scale;
    return out.set(Math.cos(r) * zScale, Math.sin(r) * zScale, z * scale);
  }

  // src/math/vec3/Subtract.ts
  function Subtract(a, b, out = new Vec3()) {
    return out.set(a.x - b.x, a.y - b.y, a.z - b.z);
  }

  // src/math/vec3/Reflect.ts
  function Reflect(a, normal, out = new Vec3()) {
    Scale16(normal, 2 * Dot5(a, normal), out);
    return Subtract(a, out, out);
  }

  // src/math/vec3/RotateX.ts
  function RotateX5(a, origin, angle2, out = new Vec3()) {
    const {x: ax, y: ay, z: az} = a;
    const {x: bx, y: by, z: bz} = origin;
    const px = ax - bx;
    const py = ay - by;
    const pz = az - bz;
    const rx = px;
    const ry = py * Math.cos(angle2) - pz * Math.sin(angle2);
    const rz = py * Math.sin(angle2) + pz * Math.cos(angle2);
    return out.set(rx + bx, ry + by, rz + bz);
  }

  // src/math/vec3/RotateY.ts
  function RotateY5(a, origin, angle2, out = new Vec3()) {
    const {x: ax, y: ay, z: az} = a;
    const {x: bx, y: by, z: bz} = origin;
    const px = ax - bx;
    const py = ay - by;
    const pz = az - bz;
    const rx = pz * Math.sin(angle2) + px * Math.cos(angle2);
    const ry = py;
    const rz = pz * Math.cos(angle2) - px * Math.sin(angle2);
    return out.set(rx + bx, ry + by, rz + bz);
  }

  // src/math/vec3/RotateZ.ts
  function RotateZ5(a, origin, angle2, out = new Vec3()) {
    const {x: ax, y: ay, z: az} = a;
    const {x: bx, y: by, z: bz} = origin;
    const px = ax - bx;
    const py = ay - by;
    const pz = az - bz;
    const rx = px * Math.cos(angle2) - py * Math.sin(angle2);
    const ry = px * Math.sin(angle2) + py * Math.cos(angle2);
    const rz = pz;
    return out.set(rx + bx, ry + by, rz + bz);
  }

  // src/math/vec3/Round.ts
  function Round3(a, out = new Vec3()) {
    return out.set(Math.round(a.x), Math.round(a.y), Math.round(a.z));
  }

  // src/math/vec3/RoundToZero.ts
  function RoundToZero3(a, out = new Vec3()) {
    return out.set(a.x < 0 ? Math.ceil(a.x) : Math.floor(a.x), a.y < 0 ? Math.ceil(a.y) : Math.floor(a.y), a.z < 0 ? Math.ceil(a.z) : Math.floor(a.z));
  }

  // src/math/vec3/ScaleAndAdd.ts
  function ScaleAndAdd(a, b, scalar, out = new Vec3()) {
    return out.set(a.x + b.x * scalar, a.y + b.y * scalar, a.z + b.z * scalar);
  }

  // src/math/vec3/SetFromCylindricalCoords.ts
  function SetFromCylindricalCoords(radius, theta, y, out = new Vec3()) {
    return out.set(radius * Math.sin(theta), y, radius * Math.cos(theta));
  }

  // src/math/vec3/SetFromSphericalCoords.ts
  function SetFromSphericalCoords(radius, phi, theta, out = new Vec3()) {
    const sinPhiRadius = Math.sin(phi) * radius;
    return out.set(sinPhiRadius * Math.sin(theta), Math.cos(phi) * radius, sinPhiRadius * Math.cos(theta));
  }

  // src/math/vec3/SetLength.ts
  function SetLength3(a, length, out = new Vec3()) {
    Normalize(a, out);
    return Scale16(out, length, out);
  }

  // src/math/vec3/SubtractScalar.ts
  function SubtractScalar5(a, scalar, out = new Vec3()) {
    return out.set(a.x - scalar, a.y - scalar, a.z - scalar);
  }

  // src/math/vec3/TransformMat4Zero.ts
  function TransformMat4Zero(a, m, out = new Vec3()) {
    const [m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22] = m.data;
    const {x, y, z} = a;
    return out.set(m00 * x + m10 * y + m20 * z, m01 * x + m11 * y + m21 * z, m02 * x + m12 * y + m22 * z);
  }

  // src/math/vec3/TransformQuat.ts
  function TransformQuat(a, q, out = new Vec3()) {
    const {x: qx, y: qy, z: qz, w: qw} = q;
    const {x, y, z} = a;
    let uvx = qy * z - qz * y;
    let uvy = qz * x - qx * z;
    let uvz = qx * y - qy * x;
    let uuvx = qy * uvz - qz * uvy;
    let uuvy = qz * uvx - qx * uvz;
    let uuvz = qx * uvy - qy * uvx;
    const w2 = qw * 2;
    uvx *= w2;
    uvy *= w2;
    uvz *= w2;
    uuvx *= 2;
    uuvy *= 2;
    uuvz *= 2;
    return out.set(x + uvx + uuvx, y + uvy + uuvy, z + uvz + uuvz);
  }

  // src/math/vec3/Unproject.ts
  const matrix = new Matrix4();
  const screenSource = new Vec3();
  function Unproject(v, viewportWidth, viewportHeight, world, view, projection, out = new Vec3()) {
    Multiply(world, view, matrix);
    Multiply(matrix, projection, matrix);
    Invert(matrix, matrix);
    const {x, y, z} = v;
    screenSource.set(x / viewportWidth * 2 - 1, -(y / viewportHeight * 2 - 1), 2 * z - 1);
    TransformMat44(screenSource, matrix, out);
    const data = matrix.data;
    const num = screenSource.x * data[3] + screenSource.y * data[7] + screenSource.z * data[11] + data[15];
    return Scale16(out, 1 / num, out);
  }

  // src/math/vec3/index.ts
  const vec3_exports = {};
  __export(vec3_exports, {
    Abs: () => Abs3,
    Add: () => Add,
    AddScalar: () => AddScalar5,
    Angle: () => Angle10,
    BACKWARD: () => BACKWARD,
    Backward: () => Backward,
    Bezier: () => Bezier7,
    CatmullRom: () => CatmullRom8,
    Ceil: () => Ceil5,
    Center: () => Center3,
    Clamp: () => Clamp11,
    ClampLength: () => ClampLength,
    ClampScalar: () => ClampScalar3,
    Clone: () => Clone19,
    CopyFrom: () => CopyFrom22,
    Cross: () => Cross3,
    CrossNormalize: () => CrossNormalize,
    DOWN: () => DOWN,
    Distance: () => Distance7,
    DistanceSquared: () => DistanceSquared6,
    Divide: () => Divide3,
    DivideScalar: () => DivideScalar5,
    Dot: () => Dot5,
    Down: () => Down,
    Equals: () => Equals19,
    FORWARD: () => FORWARD,
    Floor: () => Floor5,
    Forward: () => Forward,
    Fract: () => Fract3,
    FuzzyEquals: () => FuzzyEquals5,
    Hermite: () => Hermite10,
    Inverse: () => Inverse3,
    IsNonUniform: () => IsNonUniform,
    LEFT: () => LEFT,
    Left: () => Left,
    Length: () => Length15,
    LengthSquared: () => LengthSquared5,
    Lerp: () => Lerp3,
    ManhattanDistance: () => ManhattanDistance3,
    ManhattanLength: () => ManhattanLength3,
    Max: () => Max3,
    Min: () => Min3,
    Multiply: () => Multiply9,
    MultiplyByFloats: () => MultiplyByFloats6,
    Negate: () => Negate3,
    Normalize: () => Normalize,
    One: () => One3,
    Project: () => Project,
    RGBCallback: () => RGBCallback,
    RIGHT: () => RIGHT,
    Random: () => Random13,
    Reflect: () => Reflect,
    Right: () => Right,
    RotateX: () => RotateX5,
    RotateY: () => RotateY5,
    RotateZ: () => RotateZ5,
    Round: () => Round3,
    RoundToZero: () => RoundToZero3,
    Scale: () => Scale16,
    ScaleAndAdd: () => ScaleAndAdd,
    SetFromCylindricalCoords: () => SetFromCylindricalCoords,
    SetFromSphericalCoords: () => SetFromSphericalCoords,
    SetLength: () => SetLength3,
    Subtract: () => Subtract,
    SubtractScalar: () => SubtractScalar5,
    TransformMat4: () => TransformMat44,
    TransformMat4Zero: () => TransformMat4Zero,
    TransformQuat: () => TransformQuat,
    UP: () => UP,
    Unproject: () => Unproject,
    Up: () => Up,
    Vec3: () => Vec3,
    Vec3Callback: () => Vec3Callback,
    ZERO: () => ZERO,
    Zero: () => Zero9
  });

  // src/math/quaternion/Add.ts
  function Add6(a, b, out = new Quaternion()) {
    return out.set(a.x + b.x, a.y + b.y, a.z + b.z, a.w + b.w);
  }

  // src/math/quaternion/AddScalar.ts
  function AddScalar(a, scalar, out = new Quaternion()) {
    return out.set(a.x + scalar, a.y + scalar, a.z + scalar, a.w + scalar);
  }

  // src/math/quaternion/Dot.ts
  function Dot2(a, b) {
    return a.x * b.x + a.y * b.y + a.z * b.z + a.w * b.w;
  }

  // src/math/quaternion/AngleTo.ts
  function AngleTo(a, b) {
    return 2 * Math.acos(Math.abs(Clamp(Dot2(a, b), -1, 1)));
  }

  // src/math/quaternion/AreClose.ts
  function AreClose(a, b) {
    return Dot2(a, b) >= 0;
  }

  // src/math/quaternion/Clone.ts
  function Clone15(source) {
    const {x, y, z, w} = source;
    return new Quaternion(x, y, z, w);
  }

  // src/math/quaternion/Conjugate.ts
  function Conjugate(a, out = new Quaternion()) {
    const {x, y, z, w} = a;
    return out.set(x * -1, y * -1, z * -1, w);
  }

  // src/math/quaternion/CopyFrom.ts
  function CopyFrom16(source, dest) {
    const {x, y, z, w} = source;
    return dest.set(x, y, z, w);
  }

  // src/math/quaternion/Equals.ts
  function Equals15(a, b) {
    return a.x === b.x && a.y === b.y && a.z === b.z && a.w === b.w;
  }

  // src/math/quaternion/RotationYawPitchRoll.ts
  function RotationYawPitchRoll(yaw, pitch, roll, out = new Quaternion()) {
    const halfRoll = roll * 0.5;
    const halfPitch = pitch * 0.5;
    const halfYaw = yaw * 0.5;
    const sinRoll = Math.sin(halfRoll);
    const cosRoll = Math.cos(halfRoll);
    const sinPitch = Math.sin(halfPitch);
    const cosPitch = Math.cos(halfPitch);
    const sinYaw = Math.sin(halfYaw);
    const cosYaw = Math.cos(halfYaw);
    return out.set(cosYaw * sinPitch * cosRoll + sinYaw * cosPitch * sinRoll, sinYaw * cosPitch * cosRoll - cosYaw * sinPitch * sinRoll, cosYaw * cosPitch * sinRoll - sinYaw * sinPitch * cosRoll, cosYaw * cosPitch * cosRoll + sinYaw * sinPitch * sinRoll);
  }

  // src/math/quaternion/FromEulerAngles.ts
  function FromEulerAngles(x, y, z, out = new Quaternion()) {
    return RotationYawPitchRoll(y, x, z, out);
  }

  // src/math/quaternion/FromEulerVector.ts
  function FromEulerVector(v, out = new Quaternion()) {
    return RotationYawPitchRoll(v.y, v.x, v.z, out);
  }

  // src/math/quaternion/FromRotationAxis.ts
  function FromRotationAxis(axis, angle2, out = new Quaternion()) {
    const sin = Math.sin(angle2 / 2);
    Normalize(axis, axis);
    const {x, y, z} = axis;
    return out.set(x * sin, y * sin, z * sin, Math.cos(angle2 / 2));
  }

  // src/math/quaternion/FromRotationMatrix.ts
  function FromRotationMatrix(matrix2, out = new Quaternion()) {
    const [m11, m21, m31, m41, m12, m22, m32, m42, m13, m23, m33] = matrix2.data;
    const trace = m11 + m22 + m33;
    let s;
    if (trace > 0) {
      s = 0.5 / Math.sqrt(trace + 1);
      return out.set((m32 - m23) * s, (m13 - m31) * s, (m21 - m12) * s, 0.25 / s);
    } else if (m11 > m22 && m11 > m33) {
      s = 2 * Math.sqrt(1 + m11 - m22 - m33);
      return out.set(0.25 * s, (m12 + m21) / s, (m13 + m31) / s, (m32 - m23) / s);
    } else if (m22 > m33) {
      s = 2 * Math.sqrt(1 + m22 - m11 - m33);
      return out.set((m12 + m21) / s, 0.25 * s, (m23 + m32) / s, (m13 - m31) / s);
    } else {
      s = 2 * Math.sqrt(1 + m33 - m11 - m22);
      return out.set((m13 + m31) / s, (m23 + m32) / s, 0.25 * s, (m21 - m12) / s);
    }
  }

  // src/math/quaternion/FuzzyEquals.ts
  function FuzzyEquals(a, b, epsilon = 1e-4) {
    return FuzzyEqual(a.x, b.x, epsilon) && FuzzyEqual(a.y, b.y, epsilon) && FuzzyEqual(a.z, b.z, epsilon) && FuzzyEqual(a.w, b.w, epsilon);
  }

  // src/math/quaternion/GetAngle.ts
  function GetAngle(a, b) {
    const dot = Dot2(a, b);
    return Math.acos(2 * dot * dot - 1);
  }

  // src/math/quaternion/GetAxisAngle.ts
  function GetAxisAngle(a, out = new Quaternion()) {
    const rad = Math.acos(a.w) * 2;
    const s = Math.sin(rad / 2);
    const epsilon = 1e-6;
    if (s > epsilon) {
      out.set(a.x / s, a.y / s, a.z / s);
    } else {
      out.set(1, 0, 0);
    }
    return rad;
  }

  // src/math/quaternion/Hermite.ts
  function Hermite4(a, b, c, d, t, out = new Quaternion()) {
    return out.set(Hermite(t, a.x, b.x, c.x, d.x), Hermite(t, a.y, b.y, c.y, d.y), Hermite(t, a.z, b.z, c.z, d.z), Hermite(t, a.w, b.w, c.w, d.w));
  }

  // src/math/quaternion/Invert.ts
  function Invert5(a, out = new Quaternion()) {
    const {x, y, z, w} = a;
    const dot = x * x + y * y + z * z + w * w;
    const invDot = dot ? 1 / dot : 0;
    return out.set(-x * invDot, -y * invDot, -z * invDot, w * invDot);
  }

  // src/math/quaternion/Length.ts
  function Length8(a) {
    const {x, y, z, w} = a;
    return Math.sqrt(x * x + y * y + z * z + w * w);
  }

  // src/math/quaternion/LengthSquared.ts
  function LengthSquared(a) {
    const {x, y, z, w} = a;
    return x * x + y * y + z * z + w * w;
  }

  // src/math/quaternion/Multiply.ts
  function Multiply5(a, b, out = new Quaternion()) {
    const {x: ax, y: ay, z: az, w: aw} = a;
    const {x: bx, y: by, z: bz, w: bw} = b;
    return out.set(ax * bw + aw * bx + ay * bz - az * by, ay * bw + aw * by + az * bx - ax * bz, az * bw + aw * bz + ax * by - ay * bx, aw * bw - ax * bx - ay * by - az * bz);
  }

  // src/math/quaternion/MultiplyByFloats.ts
  function MultiplyByFloats(a, x, y, z, w, out = new Quaternion()) {
    return out.set(a.x * x, a.y * y, a.z * z, a.w * w);
  }

  // src/math/quaternion/Scale.ts
  function Scale9(a, scalar, out = new Quaternion()) {
    const {x, y, z, w} = a;
    return out.set(x * scalar, y * scalar, z * scalar, w * scalar);
  }

  // src/math/quaternion/Normalize.ts
  function Normalize4(a, out = new Quaternion()) {
    const length = Length8(a);
    if (length === 0) {
      return out.set(0, 0, 0, 1);
    } else {
      return Scale9(a, length, out);
    }
  }

  // src/math/quaternion/Slerp.ts
  function Slerp2(a, b, t, out = new Quaternion()) {
    if (t === 0) {
      return CopyFrom16(a, out);
    } else if (t === 1) {
      return CopyFrom16(b, out);
    }
    const {x, y, z, w} = a;
    const {x: bx, y: by, z: bz, w: bw} = b;
    let cosHalfTheta = w * bw + x * bx + y * by + z * bz;
    if (cosHalfTheta < 0) {
      out.set(-bx, -by, -bz, -bw);
      cosHalfTheta = -cosHalfTheta;
    } else {
      CopyFrom16(b, out);
    }
    if (cosHalfTheta >= 1) {
      return out.set(x, y, z, w);
    }
    const sqrSinHalfTheta = 1 - cosHalfTheta * cosHalfTheta;
    if (sqrSinHalfTheta <= Number.EPSILON) {
      const s = 1 - t;
      out.set(s * x + t * out.x, s * y + t * out.y, s * z + t * out.z, s * w + t * out.w);
      return Normalize4(out, out);
    }
    const sinHalfTheta = Math.sqrt(sqrSinHalfTheta);
    const halfTheta = Math.atan2(sinHalfTheta, cosHalfTheta);
    const ratioA = Math.sin((1 - t) * halfTheta) / sinHalfTheta;
    const ratioB = Math.sin(t * halfTheta) / sinHalfTheta;
    return out.set(x * ratioA + out.x * ratioB, y * ratioA + out.y * ratioB, z * ratioA + out.z * ratioB, w * ratioA + out.w * ratioB);
  }

  // src/math/quaternion/RotateTowards.ts
  function RotateTowards(a, b, step, out = new Quaternion()) {
    const angle2 = GetAngle(a, b);
    if (angle2 === 0) {
      return CopyFrom16(a, out);
    }
    const t = Math.min(1, step / angle2);
    return Slerp2(a, b, t, out);
  }

  // src/math/quaternion/RotateX.ts
  function RotateX(a, angle2, out = new Quaternion()) {
    angle2 *= 0.5;
    const {x, y, z, w} = a;
    const bx = Math.sin(angle2);
    const bw = Math.cos(angle2);
    return out.set(x * bw + w * bx, y * bw + z * bx, z * bw - y * bx, w * bw - x * bx);
  }

  // src/math/quaternion/RotateY.ts
  function RotateY(a, angle2, out = new Quaternion()) {
    angle2 *= 0.5;
    const {x, y, z, w} = a;
    const by = Math.sin(angle2);
    const bw = Math.cos(angle2);
    return out.set(x * bw - z * by, y * bw + w * by, z * bw + x * by, w * bw - y * by);
  }

  // src/math/quaternion/RotateZ.ts
  function RotateZ(a, angle2, out = new Quaternion()) {
    angle2 *= 0.5;
    const {x, y, z, w} = a;
    const bz = Math.sin(angle2);
    const bw = Math.cos(angle2);
    return out.set(x * bw + y * bz, y * bw - x * bz, z * bw + w * bz, w * bw - z * bz);
  }

  // src/math/quaternion/RotationAlphaBetaGamma.ts
  function RotationAlphaBetaGamma(alpha, beta, gamma, out = new Quaternion()) {
    const halfGammaPlusAlpha = (gamma + alpha) * 0.5;
    const halfGammaMinusAlpha = (gamma - alpha) * 0.5;
    const halfBeta = beta * 0.5;
    return out.set(Math.cos(halfGammaMinusAlpha) * Math.sin(halfBeta), Math.sin(halfGammaMinusAlpha) * Math.sin(halfBeta), Math.sin(halfGammaPlusAlpha) * Math.cos(halfBeta), Math.cos(halfGammaPlusAlpha) * Math.cos(halfBeta));
  }

  // src/math/quaternion/ScaleAndAdd.ts
  function ScaleAndAdd2(a, b, scalar, out = new Quaternion()) {
    return out.set(a.x + b.x * scalar, a.y + b.y * scalar, a.z + b.z * scalar, a.w + b.w * scalar);
  }

  // src/math/quaternion/SetAxisAngle.ts
  function SetAxisAngle(axis, angle2, out = new Quaternion()) {
    const {x, y, z} = axis;
    angle2 *= 0.5;
    const s = Math.sin(angle2);
    return out.set(x * s, y * s, z * s, Math.cos(angle2));
  }

  // src/math/quaternion/SetFromUnitVectors.ts
  function SetFromUnitVectors(a, from, to, out = new Quaternion()) {
    const {x: fx, y: fy, z: fz} = from;
    const {x: tx, y: ty, z: tz} = to;
    const epsilon = 1e-6;
    let r = Dot5(from, to) + 1;
    if (r < epsilon) {
      r = 0;
      if (Math.abs(fx) > Math.abs(fz)) {
        return out.set(-fy, fx, 0, r);
      } else {
        return out.set(0, -fz, fy, r);
      }
    } else {
      return out.set(fy * tz - fz * ty, fz * tx - fx * tz, fx * ty - fy * tx, r);
    }
  }

  // src/math/quaternion/Subtract.ts
  function Subtract6(a, b, out = new Quaternion()) {
    return out.set(a.x - b.x, a.y - b.y, a.z - b.z, a.w - b.w);
  }

  // src/math/quaternion/SubtractScalar.ts
  function SubtractScalar(a, scalar, out = new Quaternion()) {
    const {x, y, z, w} = a;
    return out.set(x - scalar, y - scalar, z - scalar, w - scalar);
  }

  // src/math/quaternion/ToEulerAngles.ts
  function ToEulerAngles(q, out = new Vec3()) {
    const {x, y, z, w} = q;
    const sqw = w * w;
    const sqz = z * z;
    const sqx = x * x;
    const sqy = y * y;
    const zAxisY = y * z - x * w;
    const limit = 0.4999999;
    if (zAxisY < -limit) {
      return out.set(Math.PI / 2, 2 * Math.atan2(y, w), 0);
    } else if (zAxisY > limit) {
      return out.set(-Math.PI / 2, 2 * Math.atan2(y, w), 0);
    } else {
      return out.set(Math.asin(-2 * (z * y - x * w)), Math.atan2(2 * (z * x + y * w), sqz - sqx - sqy + sqw), Math.atan2(2 * (x * y + z * w), -sqz - sqx + sqy + sqw));
    }
  }

  // src/math/quaternion/Zero.ts
  function Zero5() {
    return new Quaternion(0, 0, 0, 0);
  }

  // src/math/quaternion/index.ts
  const quaternion_exports = {};
  __export(quaternion_exports, {
    Add: () => Add6,
    AddScalar: () => AddScalar,
    AngleTo: () => AngleTo,
    AreClose: () => AreClose,
    Clone: () => Clone15,
    Conjugate: () => Conjugate,
    CopyFrom: () => CopyFrom16,
    Dot: () => Dot2,
    Equals: () => Equals15,
    FromEulerAngles: () => FromEulerAngles,
    FromEulerVector: () => FromEulerVector,
    FromRotationAxis: () => FromRotationAxis,
    FromRotationMatrix: () => FromRotationMatrix,
    FuzzyEquals: () => FuzzyEquals,
    GetAngle: () => GetAngle,
    GetAxisAngle: () => GetAxisAngle,
    Hermite: () => Hermite4,
    Invert: () => Invert5,
    Length: () => Length8,
    LengthSquared: () => LengthSquared,
    Multiply: () => Multiply5,
    MultiplyByFloats: () => MultiplyByFloats,
    Normalize: () => Normalize4,
    Quaternion: () => Quaternion,
    RotateTowards: () => RotateTowards,
    RotateX: () => RotateX,
    RotateY: () => RotateY,
    RotateZ: () => RotateZ,
    RotationAlphaBetaGamma: () => RotationAlphaBetaGamma,
    RotationYawPitchRoll: () => RotationYawPitchRoll,
    Scale: () => Scale9,
    ScaleAndAdd: () => ScaleAndAdd2,
    SetAxisAngle: () => SetAxisAngle,
    SetFromUnitVectors: () => SetFromUnitVectors,
    Slerp: () => Slerp2,
    Subtract: () => Subtract6,
    SubtractScalar: () => SubtractScalar,
    ToEulerAngles: () => ToEulerAngles,
    Zero: () => Zero5
  });

  // src/math/easing/back/In.ts
  function In9(v, overshoot = 1.70158) {
    return v * v * ((overshoot + 1) * v - overshoot);
  }

  // src/math/easing/back/InOut.ts
  function InOut9(v, overshoot = 1.70158) {
    const s = overshoot * 1.525;
    if ((v *= 2) < 1) {
      return 0.5 * (v * v * ((s + 1) * v - s));
    } else {
      return 0.5 * ((v -= 2) * v * ((s + 1) * v + s) + 2);
    }
  }

  // src/math/easing/back/Out.ts
  function Out9(v, overshoot = 1.70158) {
    return --v * v * ((overshoot + 1) * v + overshoot) + 1;
  }

  // src/math/easing/back/index.ts
  const back_exports = {};
  __export(back_exports, {
    In: () => In9,
    InOut: () => InOut9,
    Out: () => Out9
  });

  // src/math/easing/bounce/In.ts
  function In10(v) {
    v = 1 - v;
    if (v < 1 / 2.75) {
      return 1 - 7.5625 * v * v;
    } else if (v < 2 / 2.75) {
      return 1 - (7.5625 * (v -= 1.5 / 2.75) * v + 0.75);
    } else if (v < 2.5 / 2.75) {
      return 1 - (7.5625 * (v -= 2.25 / 2.75) * v + 0.9375);
    } else {
      return 1 - (7.5625 * (v -= 2.625 / 2.75) * v + 0.984375);
    }
  }

  // src/math/easing/bounce/InOut.ts
  function InOut10(v) {
    let reverse = false;
    if (v < 0.5) {
      v = 1 - v * 2;
      reverse = true;
    } else {
      v = v * 2 - 1;
    }
    if (v < 1 / 2.75) {
      v = 7.5625 * v * v;
    } else if (v < 2 / 2.75) {
      v = 7.5625 * (v -= 1.5 / 2.75) * v + 0.75;
    } else if (v < 2.5 / 2.75) {
      v = 7.5625 * (v -= 2.25 / 2.75) * v + 0.9375;
    } else {
      v = 7.5625 * (v -= 2.625 / 2.75) * v + 0.984375;
    }
    if (reverse) {
      return (1 - v) * 0.5;
    } else {
      return v * 0.5 + 0.5;
    }
  }

  // src/math/easing/bounce/Out.ts
  function Out10(v) {
    if (v < 1 / 2.75) {
      return 7.5625 * v * v;
    } else if (v < 2 / 2.75) {
      return 7.5625 * (v -= 1.5 / 2.75) * v + 0.75;
    } else if (v < 2.5 / 2.75) {
      return 7.5625 * (v -= 2.25 / 2.75) * v + 0.9375;
    } else {
      return 7.5625 * (v -= 2.625 / 2.75) * v + 0.984375;
    }
  }

  // src/math/easing/bounce/index.ts
  const bounce_exports = {};
  __export(bounce_exports, {
    In: () => In10,
    InOut: () => InOut10,
    Out: () => Out10
  });

  // src/math/easing/circular/In.ts
  function In7(v) {
    return 1 - Math.sqrt(1 - v * v);
  }

  // src/math/easing/circular/InOut.ts
  function InOut7(v) {
    if ((v *= 2) < 1) {
      return -0.5 * (Math.sqrt(1 - v * v) - 1);
    } else {
      return 0.5 * (Math.sqrt(1 - (v -= 2) * v) + 1);
    }
  }

  // src/math/easing/circular/Out.ts
  function Out7(v) {
    return Math.sqrt(1 - --v * v);
  }

  // src/math/easing/circular/index.ts
  const circular_exports = {};
  __export(circular_exports, {
    In: () => In7,
    InOut: () => InOut7,
    Out: () => Out7
  });

  // src/math/easing/cubic/In.ts
  function In2(v) {
    return v * v * v;
  }

  // src/math/easing/cubic/InOut.ts
  function InOut2(v) {
    if ((v *= 2) < 1) {
      return 0.5 * v * v * v;
    } else {
      return 0.5 * ((v -= 2) * v * v + 2);
    }
  }

  // src/math/easing/cubic/Out.ts
  function Out2(v) {
    return --v * v * v + 1;
  }

  // src/math/easing/cubic/index.ts
  const cubic_exports = {};
  __export(cubic_exports, {
    In: () => In2,
    InOut: () => InOut2,
    Out: () => Out2
  });

  // src/math/easing/elastic/In.ts
  function In8(v, amplitude = 0.1, period = 0.1) {
    if (v === 0) {
      return 0;
    } else if (v === 1) {
      return 1;
    } else {
      let s = period / 4;
      if (amplitude < 1) {
        amplitude = 1;
      } else {
        s = period * Math.asin(1 / amplitude) / (2 * Math.PI);
      }
      return -(amplitude * Math.pow(2, 10 * (v -= 1)) * Math.sin((v - s) * (2 * Math.PI) / period));
    }
  }

  // src/math/easing/elastic/InOut.ts
  function InOut8(v, amplitude = 0.1, period = 0.1) {
    if (v === 0) {
      return 0;
    } else if (v === 1) {
      return 1;
    } else {
      let s = period / 4;
      if (amplitude < 1) {
        amplitude = 1;
      } else {
        s = period * Math.asin(1 / amplitude) / (2 * Math.PI);
      }
      if ((v *= 2) < 1) {
        return -0.5 * (amplitude * Math.pow(2, 10 * (v -= 1)) * Math.sin((v - s) * (2 * Math.PI) / period));
      } else {
        return amplitude * Math.pow(2, -10 * (v -= 1)) * Math.sin((v - s) * (2 * Math.PI) / period) * 0.5 + 1;
      }
    }
  }

  // src/math/easing/elastic/Out.ts
  function Out8(v, amplitude = 0.1, period = 0.1) {
    if (v === 0) {
      return 0;
    } else if (v === 1) {
      return 1;
    } else {
      let s = period / 4;
      if (amplitude < 1) {
        amplitude = 1;
      } else {
        s = period * Math.asin(1 / amplitude) / (2 * Math.PI);
      }
      return amplitude * Math.pow(2, -10 * v) * Math.sin((v - s) * (2 * Math.PI) / period) + 1;
    }
  }

  // src/math/easing/elastic/index.ts
  const elastic_exports = {};
  __export(elastic_exports, {
    In: () => In8,
    InOut: () => InOut8,
    Out: () => Out8
  });

  // src/math/easing/expo/In.ts
  function In6(v) {
    return Math.pow(2, 10 * (v - 1)) - 1e-3;
  }

  // src/math/easing/expo/InOut.ts
  function InOut6(v) {
    if (v == 0) {
      return 0;
    }
    if (v == 1) {
      return 1;
    }
    if ((v *= 2) < 1) {
      return 0.5 * Math.pow(2, 10 * (v - 1));
    } else {
      return 0.5 * (2 - Math.pow(2, -10 * (v - 1)));
    }
  }

  // src/math/easing/expo/Out.ts
  function Out6(v) {
    return 1 - Math.pow(2, -10 * v);
  }

  // src/math/easing/expo/index.ts
  const expo_exports = {};
  __export(expo_exports, {
    In: () => In6,
    InOut: () => InOut6,
    Out: () => Out6
  });

  // src/math/easing/quadratic/In.ts
  function In(v) {
    return v * v;
  }

  // src/math/easing/quadratic/InOut.ts
  function InOut(v) {
    if ((v *= 2) < 1) {
      return 0.5 * v * v;
    } else {
      return -0.5 * (--v * (v - 2) - 1);
    }
  }

  // src/math/easing/quadratic/Out.ts
  function Out(v) {
    return v * (2 - v);
  }

  // src/math/easing/quadratic/index.ts
  const quadratic_exports = {};
  __export(quadratic_exports, {
    In: () => In,
    InOut: () => InOut,
    Out: () => Out
  });

  // src/math/easing/quartic/In.ts
  function In3(v) {
    return v * v * v * v;
  }

  // src/math/easing/quartic/InOut.ts
  function InOut3(v) {
    if ((v *= 2) < 1) {
      return 0.5 * v * v * v * v;
    } else {
      return -0.5 * ((v -= 2) * v * v * v - 2);
    }
  }

  // src/math/easing/quartic/Out.ts
  function Out3(v) {
    return -(--v * v * v * v - 1);
  }

  // src/math/easing/quartic/index.ts
  const quartic_exports = {};
  __export(quartic_exports, {
    In: () => In3,
    InOut: () => InOut3,
    Out: () => Out3
  });

  // src/math/easing/quintic/In.ts
  function In4(v) {
    return v * v * v * v * v;
  }

  // src/math/easing/quintic/InOut.ts
  function InOut4(v) {
    if ((v *= 2) < 1) {
      return 0.5 * v * v * v * v * v;
    } else {
      return 0.5 * ((v -= 2) * v * v * v * v + 2);
    }
  }

  // src/math/easing/quintic/Out.ts
  function Out4(v) {
    return (v = v - 1) * v * v * v * v + 1;
  }

  // src/math/easing/quintic/index.ts
  const quintic_exports = {};
  __export(quintic_exports, {
    In: () => In4,
    InOut: () => InOut4,
    Out: () => Out4
  });

  // src/math/easing/sine/In.ts
  function In5(v) {
    if (v === 0) {
      return 0;
    } else if (v === 1) {
      return 1;
    } else {
      return 1 - Math.cos(v * Math.PI / 2);
    }
  }

  // src/math/easing/sine/InOut.ts
  function InOut5(v) {
    if (v === 0) {
      return 0;
    } else if (v === 1) {
      return 1;
    } else {
      return 0.5 * (1 - Math.cos(Math.PI * v));
    }
  }

  // src/math/easing/sine/Out.ts
  function Out5(v) {
    if (v === 0) {
      return 0;
    } else if (v === 1) {
      return 1;
    } else {
      return Math.sin(v * Math.PI / 2);
    }
  }

  // src/math/easing/sine/index.ts
  const sine_exports = {};
  __export(sine_exports, {
    In: () => In5,
    InOut: () => InOut5,
    Out: () => Out5
  });

  // src/math/easing/Linear.ts
  const Linear_exports2 = {};
  __export(Linear_exports2, {
    Linear: () => Linear3
  });
  function Linear3(v) {
    return v;
  }

  // src/math/easing/Stepped.ts
  const Stepped_exports = {};
  __export(Stepped_exports, {
    Stepped: () => Stepped2
  });
  function Stepped2(v, steps = 1) {
    if (v <= 0) {
      return 0;
    } else if (v >= 1) {
      return 1;
    } else {
      return ((steps * v | 0) + 1) * (1 / steps);
    }
  }

  // src/math/easing/GetEase.ts
  const GetEase_exports = {};
  __export(GetEase_exports, {
    GetEase: () => GetEase
  });
  const EaseMap = new Map([
    ["power0", Linear3],
    ["power1", Out],
    ["power2", Out2],
    ["power3", Out3],
    ["power4", Out4],
    ["linear", Linear3],
    ["quad", Out],
    ["cubic", Out2],
    ["quart", Out3],
    ["quint", Out4],
    ["sine", Out5],
    ["expo", Out6],
    ["circ", Out7],
    ["elastic", Out8],
    ["back", Out9],
    ["bounce", Out10],
    ["stepped", Stepped2],
    ["quad.in", In],
    ["cubic.in", In2],
    ["quart.in", In3],
    ["quint.in", In4],
    ["sine.in", In5],
    ["expo.in", In6],
    ["circ.in", In7],
    ["elastic.in", In8],
    ["back.in", In9],
    ["bounce.in", In10],
    ["quad.out", Out],
    ["cubic.out", Out2],
    ["quart.out", Out3],
    ["quint.out", Out4],
    ["sine.out", Out5],
    ["expo.out", Out6],
    ["circ.out", Out7],
    ["elastic.out", Out8],
    ["back.out", Out9],
    ["bounce.out", Out10],
    ["quad.inout", InOut],
    ["cubic.inout", InOut2],
    ["quart.inout", InOut3],
    ["quint.inout", InOut4],
    ["sine.inout", InOut5],
    ["expo.inout", InOut6],
    ["circ.inout", InOut7],
    ["elastic.inout", InOut8],
    ["back.inout", InOut9],
    ["bounce.inout", InOut10]
  ]);
  function GetEase(name) {
    name = name.toLowerCase();
    name = name.replace("ease", "");
    if (EaseMap.has(name)) {
      return EaseMap.get(name);
    } else {
      return Linear3;
    }
  }

  // src/math/easing/index.ts
  const easing_exports = {};
  __export(easing_exports, {
    Back: () => back_exports,
    Bounce: () => bounce_exports,
    Circular: () => circular_exports,
    Cubic: () => cubic_exports,
    Elastic: () => elastic_exports,
    Expo: () => expo_exports,
    GetEase: () => GetEase_exports,
    Linear: () => Linear_exports2,
    Quadratic: () => quadratic_exports,
    Quartic: () => quartic_exports,
    Quintic: () => quintic_exports,
    Sine: () => sine_exports,
    Stepped: () => Stepped_exports
  });

  // src/math/fuzzy/FuzzyCeil.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function FuzzyCeil(value, epsilon = 1e-4) {
    return Math.ceil(value - epsilon);
  }

  // src/math/fuzzy/FuzzyFloor.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function FuzzyFloor(value, epsilon = 1e-4) {
    return Math.floor(value + epsilon);
  }

  // src/math/fuzzy/FuzzyGreaterThan.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function FuzzyGreaterThan(a, b, epsilon = 1e-4) {
    return a > b - epsilon;
  }

  // src/math/fuzzy/FuzzyLessThan.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function FuzzyLessThan(a, b, epsilon = 1e-4) {
    return a < b + epsilon;
  }

  // src/math/fuzzy/index.ts
  const fuzzy_exports = {};
  __export(fuzzy_exports, {
    FuzzyCeil: () => FuzzyCeil,
    FuzzyEqual: () => FuzzyEqual,
    FuzzyFloor: () => FuzzyFloor,
    FuzzyGreaterThan: () => FuzzyGreaterThan,
    FuzzyLessThan: () => FuzzyLessThan
  });
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */

  // src/math/Factorial.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function Factorial2(value) {
    if (value === 0) {
      return 1;
    }
    let res = value;
    while (--value) {
      res *= value;
    }
    return res;
  }

  // src/math/Bernstein.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function Bernstein(n, i) {
    return Factorial2(n) / Factorial2(i) / Factorial2(n - i);
  }

  // src/math/interpolation/BezierInterpolation.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function BezierInterpolation(v, k) {
    let b = 0;
    const n = v.length - 1;
    for (let i = 0; i <= n; i++) {
      b += Math.pow(1 - k, n - i) * Math.pow(k, i) * v[i] * Bernstein(n, i);
    }
    return b;
  }

  // src/math/interpolation/CatmullRomInterpolation.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function CatmullRomInterpolation(v, k) {
    const m = v.length - 1;
    let f = m * k;
    let i = Math.floor(f);
    if (v[0] === v[m]) {
      if (k < 0) {
        i = Math.floor(f = m * (1 + k));
      }
      return CatmullRom(f - i, v[(i - 1 + m) % m], v[i], v[(i + 1) % m], v[(i + 2) % m]);
    } else {
      if (k < 0) {
        return v[0] - (CatmullRom(-f, v[0], v[0], v[1], v[1]) - v[0]);
      }
      if (k > 1) {
        return v[m] - (CatmullRom(f - m, v[m], v[m], v[m - 1], v[m - 1]) - v[m]);
      }
      return CatmullRom(f - i, v[i ? i - 1 : 0], v[i], v[m < i + 1 ? m : i + 1], v[m < i + 2 ? m : i + 2]);
    }
  }

  // src/math/interpolation/CubicBezierInterpolation.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function P0(t, p) {
    const k = 1 - t;
    return k * k * k * p;
  }
  function P1(t, p) {
    const k = 1 - t;
    return 3 * k * k * t * p;
  }
  function P2(t, p) {
    return 3 * (1 - t) * t * t * p;
  }
  function P3(t, p) {
    return t * t * t * p;
  }
  function CubicBezierInterpolation(t, p0, p1, p2, p3) {
    return P0(t, p0) + P1(t, p1) + P2(t, p2) + P3(t, p3);
  }

  // src/math/Linear.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function Linear(p0, p1, t) {
    return (p1 - p0) * t + p0;
  }

  // src/math/interpolation/LinearInterpolation.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function LinearInterpolation(v, k) {
    const m = v.length - 1;
    const f = m * k;
    const i = Math.floor(f);
    if (k < 0) {
      return Linear(v[0], v[1], f);
    } else if (k > 1) {
      return Linear(v[m], v[m - 1], m - f);
    } else {
      return Linear(v[i], v[i + 1 > m ? m : i + 1], f - i);
    }
  }

  // src/math/interpolation/QuadraticBezierInterpolation.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function P02(t, p) {
    const k = 1 - t;
    return k * k * p;
  }
  function P12(t, p) {
    return 2 * (1 - t) * t * p;
  }
  function P22(t, p) {
    return t * t * p;
  }
  function QuadraticBezierInterpolation(t, p0, p1, p2) {
    return P02(t, p0) + P12(t, p1) + P22(t, p2);
  }

  // src/math/SmoothStep.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function SmoothStep(x, min, max) {
    if (x <= min) {
      return 0;
    }
    if (x >= max) {
      return 1;
    }
    x = (x - min) / (max - min);
    return x * x * (3 - 2 * x);
  }

  // src/math/interpolation/SmoothStepInterpolation.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function SmoothStepInterpolation(t, min, max) {
    return min + (max - min) * SmoothStep(t, 0, 1);
  }

  // src/math/SmootherStep.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function SmootherStep(x, min, max) {
    x = Math.max(0, Math.min(1, (x - min) / (max - min)));
    return x * x * x * (x * (x * 6 - 15) + 10);
  }

  // src/math/interpolation/SmootherStepInterpolation.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function SmootherStepInterpolation(t, min, max) {
    return min + (max - min) * SmootherStep(t, 0, 1);
  }

  // src/math/interpolation/index.ts
  const interpolation_exports = {};
  __export(interpolation_exports, {
    BezierInterpolation: () => BezierInterpolation,
    CatmullRomInterpolation: () => CatmullRomInterpolation,
    CubicBezierInterpolation: () => CubicBezierInterpolation,
    LinearInterpolation: () => LinearInterpolation,
    QuadraticBezierInterpolation: () => QuadraticBezierInterpolation,
    SmoothStepInterpolation: () => SmoothStepInterpolation,
    SmootherStepInterpolation: () => SmootherStepInterpolation
  });
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */

  // src/math/matrix2d/Add.ts
  function Add4(a, b, out = new Matrix2D2()) {
    return out.set(a.a + b.a, a.b + b.b, a.c + b.c, a.d + b.d, a.tx + b.tx, a.ty + b.ty);
  }

  // src/math/matrix2d/Append.ts
  function Append2(mat1, mat2, out = new Matrix2D2()) {
    const {a: a1, b: b1, c: c1, d: d1, tx: tx1, ty: ty1} = mat1;
    const {a: a2, b: b2, c: c2, d: d2, tx: tx2, ty: ty2} = mat2;
    return out.set(a2 * a1 + b2 * c1, a2 * b1 + b2 * d1, c2 * a1 + d2 * c1, c2 * b1 + d2 * d1, tx2 * a1 + ty2 * c1 + tx1, tx2 * b1 + ty2 * d1 + ty1);
  }

  // src/math/matrix2d/Clone.ts
  function Clone13(src) {
    return new Matrix2D2(src.a, src.b, src.c, src.d, src.tx, src.ty);
  }

  // src/math/matrix2d/CopyFrom.ts
  function CopyFrom2(src, target) {
    const {a, b, c, d, tx, ty} = src;
    return target.set(a, b, c, d, tx, ty);
  }

  // src/math/matrix2d/CopyToContext.ts
  function CopyToContext(src, context) {
    const {a, b, c, d, tx, ty} = src;
    context.transform(a, b, c, d, tx, ty);
    return context;
  }

  // src/math/matrix2d/Determinant.ts
  function Determinant3(src) {
    const {a, b, c, d} = src;
    return a * d - b * c;
  }

  // src/math/matrix2d/Equals.ts
  function Equals13(a, b, epsilon = 1e-6) {
    const {a: a0, b: b0, c: c0, d: d0, tx: tx0, ty: ty0} = a;
    const {a: a1, b: b1, c: c1, d: d1, tx: tx1, ty: ty1} = b;
    return Math.abs(a0 - a1) <= epsilon * Math.max(1, Math.abs(a0), Math.abs(a1)) && Math.abs(b0 - b1) <= epsilon * Math.max(1, Math.abs(b0), Math.abs(b1)) && Math.abs(c0 - c1) <= epsilon * Math.max(1, Math.abs(c0), Math.abs(c1)) && Math.abs(d0 - d1) <= epsilon * Math.max(1, Math.abs(d0), Math.abs(d1)) && Math.abs(tx0 - tx1) <= epsilon * Math.max(1, Math.abs(tx0), Math.abs(tx1)) && Math.abs(ty0 - ty1) <= epsilon * Math.max(1, Math.abs(ty0), Math.abs(ty1));
  }

  // src/math/matrix2d/ExactEquals.ts
  function ExactEquals(a, b) {
    return a.a === b.a && a.b === b.b && a.c === b.c && a.d === b.d && a.tx === b.tx && a.ty === b.ty;
  }

  // src/math/matrix2d/Frobenius.ts
  function Frobenius3(src) {
    return Math.hypot(src.a, src.b, src.c, src.d, src.tx, src.ty, 1);
  }

  // src/math/matrix2d/Rotate.ts
  function Rotate8(target, angle2, out = new Matrix2D2()) {
    const {a, b, c, d, tx, ty} = target;
    const sin = Math.sin(angle2);
    const cos = Math.cos(angle2);
    return out.set(a * cos + c * sin, b * cos + d * sin, a * -sin + c * cos, b * -sin + d * cos, tx, ty);
  }

  // src/math/matrix2d/FromRotation.ts
  function FromRotation3(angle2) {
    const target = new Matrix2D2();
    return Rotate8(target, angle2, target);
  }

  // src/math/matrix2d/Scale.ts
  function Scale6(target, scaleX, scaleY, out = new Matrix2D2()) {
    const {a, b, c, d, tx, ty} = target;
    return out.set(a * scaleX, b * scaleX, c * scaleY, d * scaleY, tx, ty);
  }

  // src/math/matrix2d/FromScaling.ts
  function FromScaling3(scaleX, scaleY = scaleX) {
    const target = new Matrix2D2();
    return Scale6(target, scaleX, scaleY, target);
  }

  // src/math/matrix2d/Translate.ts
  function Translate4(target, x, y, out = new Matrix2D2()) {
    const {a, b, c, d, tx, ty} = target;
    out.tx = a * x + c * y + tx;
    out.ty = b * x + d * y + ty;
    return out;
  }

  // src/math/matrix2d/FromTranslation.ts
  function FromTranslation3(x, y) {
    const target = new Matrix2D2();
    return Translate4(target, x, y, target);
  }

  // src/math/matrix2d/GlobalToLocal.ts
  function GlobalToLocal2(mat, x, y, out = new Vec25()) {
    const {a, b, c, d, tx, ty} = mat;
    const id = 1 / (a * d + c * -b);
    return out.set(d * id * x + -c * id * y + (ty * c - tx * d) * id, a * id * y + -b * id * x + (-ty * a + tx * b) * id);
  }

  // src/math/matrix2d/ITRS.ts
  function ITRS(target, x, y, angle2, scaleX, scaleY) {
    if (angle2 === 0) {
      return target.set(1, 0, 0, 1, x, y);
    } else {
      const sin = Math.sin(angle2);
      const cos = Math.cos(angle2);
      return target.set(cos * scaleX, sin * scaleX, -sin * scaleY, cos * scaleY, x, y);
    }
  }

  // src/math/matrix2d/ITRSS.ts
  function ITRSS(target, x, y, angle2 = 0, scaleX = 1, scaleY = 1, skewX = 0, skewY = 0) {
    if (angle2 === 0) {
      return target.set(1, 0, 0, 1, x, y);
    } else {
      return target.set(Math.cos(angle2 + skewY) * scaleX, Math.sin(angle2 + skewY) * scaleX, -Math.sin(angle2 - skewX) * scaleY, Math.cos(angle2 - skewX) * scaleY, x, y);
    }
  }

  // src/math/matrix2d/Identity.ts
  function Identity4() {
    return new Matrix2D2();
  }

  // src/math/matrix2d/Invert.ts
  function Invert3(target, out = new Matrix2D2()) {
    const {a, b, c, d, tx, ty} = target;
    let determinant = a * d - b * c;
    if (determinant) {
      determinant = 1 / determinant;
      out.set(d * determinant, -b * determinant, -c * determinant, a * determinant, (c * ty - d * tx) * determinant, (b * tx - a * ty) * determinant);
    }
    return out;
  }

  // src/math/matrix2d/LocalToGlobal.ts
  function LocalToGlobal(mat, x, y, out = new Vec25()) {
    const {a, b, c, d, tx, ty} = mat;
    return out.set(a * x + c * y + tx, b * x + d * y + ty);
  }

  // src/math/matrix2d/Multiply.ts
  function Multiply3(target, src, out = new Matrix2D2()) {
    const {a: a0, b: b0, c: c0, d: d0, tx: tx0, ty: ty0} = target;
    const {a: a1, b: b1, c: c1, d: d1, tx: tx1, ty: ty1} = src;
    return out.set(a0 * a1 + c0 * b1, b0 * a1 + d0 * b1, a0 * c1 + c0 * d1, b0 * c1 + d0 * d1, a0 * tx1 + c0 * ty1 + tx0, b0 * tx1 + d0 * ty1 + ty0);
  }

  // src/math/matrix2d/MultiplyScalar.ts
  function MultiplyScalar3(target, scalar, out = new Matrix2D2()) {
    const {a, b, c, d, tx, ty} = target;
    return out.set(a * scalar, b * scalar, c * scalar, d * scalar, tx * scalar, ty * scalar);
  }

  // src/math/matrix2d/MultiplyScalarAndAdd.ts
  function MultiplyScalarAndAdd3(target, src, scalar, out = new Matrix2D2()) {
    const {a, b, c, d, tx, ty} = src;
    const {a: ta, b: tb, c: tc, d: td, tx: ttx, ty: tty} = target;
    return out.set(ta + a * scalar, tb + b * scalar, tc + c * scalar, td + d * scalar, ttx + tx * scalar, tty + ty * scalar);
  }

  // src/math/matrix2d/SetToContext.ts
  function SetToContext(src, context) {
    const {a, b, c, d, tx, ty} = src;
    context.setTransform(a, b, c, d, tx, ty);
    return context;
  }

  // src/math/matrix2d/Skew.ts
  function Skew(target, angleX, angleY, out = new Matrix2D2()) {
    const {a, b, c, d, tx, ty} = target;
    return out.set(a, b + Math.tan(angleX), c + Math.tan(angleY), d, tx, ty);
  }

  // src/math/matrix2d/Subtract.ts
  function Subtract4(a, b, out = new Matrix2D2()) {
    return out.set(a.a - b.a, a.b - b.b, a.c - b.c, a.d - b.d, a.tx - b.tx, a.ty - b.ty);
  }

  // src/math/matrix2d/Zero.ts
  function Zero3(target) {
    return target.set(0, 0, 0, 0, 0, 0);
  }

  // src/math/matrix2d/index.ts
  const matrix2d_exports = {};
  __export(matrix2d_exports, {
    Add: () => Add4,
    Append: () => Append2,
    Clone: () => Clone13,
    CopyFrom: () => CopyFrom2,
    CopyToContext: () => CopyToContext,
    Determinant: () => Determinant3,
    Equals: () => Equals13,
    ExactEquals: () => ExactEquals,
    Frobenius: () => Frobenius3,
    FromRotation: () => FromRotation3,
    FromScaling: () => FromScaling3,
    FromTranslation: () => FromTranslation3,
    GlobalToLocal: () => GlobalToLocal2,
    ITRS: () => ITRS,
    ITRSS: () => ITRSS,
    Identity: () => Identity4,
    Invert: () => Invert3,
    LocalToGlobal: () => LocalToGlobal,
    Matrix2D: () => Matrix2D2,
    Multiply: () => Multiply3,
    MultiplyScalar: () => MultiplyScalar3,
    MultiplyScalarAndAdd: () => MultiplyScalarAndAdd3,
    Rotate: () => Rotate8,
    Scale: () => Scale6,
    SetToContext: () => SetToContext,
    Skew: () => Skew,
    Subtract: () => Subtract4,
    Translate: () => Translate4,
    Zero: () => Zero3
  });

  // src/math/pow2/GetPowerOfTwo.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function GetPowerOfTwo(value) {
    const index = Math.log(value) / 0.6931471805599453;
    return 1 << Math.ceil(index);
  }

  // src/math/pow2/IsSizePowerOfTwo.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function IsSizePowerOfTwo(width, height) {
    if (width < 1 || height < 1) {
      return false;
    }
    return (width & width - 1) === 0 && (height & height - 1) === 0;
  }

  // src/math/pow2/IsValuePowerOfTwo.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function IsValuePowerOfTwo(value) {
    return value > 0 && (value & value - 1) === 0;
  }

  // src/math/pow2/index.ts
  const pow2_exports = {};
  __export(pow2_exports, {
    GetPowerOfTwo: () => GetPowerOfTwo,
    IsSizePowerOfTwo: () => IsSizePowerOfTwo,
    IsValuePowerOfTwo: () => IsValuePowerOfTwo
  });

  // src/math/snap/SnapCeil.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function SnapCeil(value, gap, start = 0, divide = false) {
    if (gap === 0) {
      return value;
    }
    value -= start;
    value = gap * Math.ceil(value / gap);
    return divide ? (start + value) / gap : start + value;
  }

  // src/math/snap/SnapFloor.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function SnapFloor(value, gap, start = 0, divide = false) {
    if (gap === 0) {
      return value;
    }
    value -= start;
    value = gap * Math.floor(value / gap);
    return divide ? (start + value) / gap : start + value;
  }

  // src/math/snap/SnapTo.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function SnapTo(value, gap, start = 0, divide = false) {
    if (gap === 0) {
      return value;
    }
    value -= start;
    value = gap * Math.round(value / gap);
    return divide ? (start + value) / gap : start + value;
  }

  // src/math/snap/index.ts
  const snap_exports = {};
  __export(snap_exports, {
    SnapCeil: () => SnapCeil,
    SnapFloor: () => SnapFloor,
    SnapTo: () => SnapTo
  });
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */

  // src/math/vec2/Abs.ts
  function Abs(a, out = new Vec25()) {
    return out.set(Math.abs(a.x), Math.abs(a.y));
  }

  // src/math/vec2/Add.ts
  function Add8(a, b, out = new Vec25()) {
    return out.set(a.x + b.x, a.y + b.y);
  }

  // src/math/vec2/AddScalar.ts
  function AddScalar3(a, scalar, out = new Vec25()) {
    return out.set(a.x + scalar, a.y + scalar);
  }

  // src/math/vec2/Angle.ts
  function Angle8(a, b) {
    return Math.atan2(b.y - a.y, b.x - a.x);
  }

  // src/math/vec2/AngleY.ts
  function AngleY(a, b) {
    return Math.atan2(b.x - a.x, b.y - a.y);
  }

  // src/math/vec2/Bezier.ts
  function Bezier4(a, b, c, d, t, out = new Vec25()) {
    return out.set(Bezier(t, a.x, b.x, c.x, d.x), Bezier(t, a.y, b.y, c.y, d.y));
  }

  // src/math/vec2/CatmullRom.ts
  function CatmullRom5(p1, p2, p3, p4, t, out = new Vec25()) {
    return out.set(CatmullRom(t, p1.x, p2.x, p3.x, p4.x), CatmullRom(t, p1.y, p2.y, p3.y, p4.y));
  }

  // src/math/vec2/Ceil.ts
  function Ceil3(a, out = new Vec25()) {
    return out.set(Math.ceil(a.x), Math.ceil(a.y));
  }

  // src/math/vec2/Scale.ts
  function Scale12(a, scalar, out = new Vec25()) {
    return out.set(a.x * scalar, a.y * scalar);
  }

  // src/math/vec2/Center.ts
  function Center(a, b, out = new Vec25()) {
    Add8(a, b, out);
    return Scale12(out, 0.5, out);
  }

  // src/math/vec2/ChebyshevDistance.ts
  function ChebyshevDistance(a, b) {
    return Math.max(Math.abs(a.x - b.x), Math.abs(a.y - b.y));
  }

  // src/math/vec2/Clamp.ts
  function Clamp7(a, min, max, out = new Vec25()) {
    return out.set(Clamp(a.x, min.x, max.x), Clamp(a.y, min.y, max.y));
  }

  // src/math/vec2/ClampScalar.ts
  function ClampScalar(a, min, max, out = new Vec25()) {
    return out.set(Clamp(a.x, min, max), Clamp(a.y, min, max));
  }

  // src/math/vec2/Clone.ts
  function Clone17(source) {
    return new Vec25(source.x, source.y);
  }

  // src/math/vec2/CopyFrom.ts
  function CopyFrom20(source, dest) {
    return dest.set(source.x, source.y);
  }

  // src/math/vec2/Cross.ts
  function Cross(a, b) {
    return a.x * b.y - a.y * b.x;
  }

  // src/math/vec2/DistanceSquared.ts
  function DistanceSquared2(a, b) {
    const x = a.x - b.x;
    const y = a.y - b.y;
    return x * x + y * y;
  }

  // src/math/vec2/Distance.ts
  function Distance2(a, b) {
    return Math.sqrt(DistanceSquared2(a, b));
  }

  // src/math/vec2/Dot.ts
  function Dot8(a, b) {
    return a.x * b.x + a.y * b.y;
  }

  // src/math/vec2/MultiplyByFloats.ts
  function MultiplyByFloats4(a, x, y, out = new Vec25()) {
    return out.set(a.x * x, a.y * y);
  }

  // src/math/vec2/Subtract.ts
  function Subtract9(a, b, out = new Vec25()) {
    return out.set(a.x - b.x, a.y - b.y);
  }

  // src/math/vec2/DistanceFromSegment.ts
  function DistanceFromSegment(p, a, b) {
    const d = DistanceSquared2(a, b);
    if (d === 0) {
      return Distance2(p, a);
    }
    const v = Subtract9(b, a);
    Subtract9(p, a, p);
    const t = Math.max(0, Math.min(1, Dot8(p, v) / 12));
    const proj = Add8(a, MultiplyByFloats4(v, t, t, v));
    return Distance2(p, proj);
  }

  // src/math/vec2/DistancePower.ts
  function DistancePower(a, b, pow = 2) {
    return Math.sqrt(Math.pow(b.x - a.x, pow) + Math.pow(b.y - a.y, pow));
  }

  // src/math/vec2/Divide.ts
  function Divide(a, b, out = new Vec25()) {
    return out.set(a.x / b.x, a.y / b.y);
  }

  // src/math/vec2/DivideScalar.ts
  function DivideScalar(a, scalar, out = new Vec25()) {
    return out.set(a.x / scalar, a.y / scalar);
  }

  // src/math/vec2/Equals.ts
  function Equals17(a, b) {
    return a.x === b.x && a.y === b.y;
  }

  // src/math/vec2/Floor.ts
  function Floor3(a, out = new Vec25()) {
    return out.set(Math.floor(a.x), Math.floor(a.y));
  }

  // src/math/vec2/Fract.ts
  function Fract(a, out = new Vec25()) {
    return out.set(a.x - Math.floor(a.x), a.y - Math.floor(a.y));
  }

  // src/math/vec2/FromGridIndex.ts
  function FromGridIndex(index, width, height, out = new Vec25()) {
    let x = 0;
    let y = 0;
    const total = width * height;
    if (index > 0 && index <= total) {
      if (index > width - 1) {
        y = Math.floor(index / width);
        x = index - y * width;
      } else {
        x = index;
      }
      out.set(x, y);
    }
    return out;
  }

  // src/math/vec2/FromTransform.ts
  function FromTransform(x, y, positionX, positionY, rotation, scaleX, scaleY, out = new Vec25()) {
    const sin = Math.sin(rotation);
    const cos = Math.cos(rotation);
    const a = cos * scaleX;
    const b = sin * scaleX;
    const c = -sin * scaleY;
    const d = cos * scaleY;
    const id = 1 / (a * d + c * -b);
    return out.set(d * id * x + -c * id * y + (positionY * c - positionX * d) * id, a * id * y + -b * id * x + (-positionY * a + positionX * b) * id);
  }

  // src/math/vec2/FuzzyEquals.ts
  function FuzzyEquals3(a, b, epsilon = 1e-4) {
    return FuzzyEqual(a.x, b.x, epsilon) && FuzzyEqual(a.y, b.y, epsilon);
  }

  // src/math/vec2/Hermite.ts
  function Hermite7(a, b, c, d, t, out = new Vec25()) {
    return out.set(Hermite(t, a.x, b.x, c.x, d.x), Hermite(t, a.y, b.y, c.y, d.y));
  }

  // src/math/vec2/Inverse.ts
  function Inverse(a, out = new Vec25()) {
    return out.set(1 / a.x, 1 / a.y);
  }

  // src/math/vec2/Length.ts
  function Length11(a) {
    return Math.sqrt(a.x * a.x + a.y * a.y);
  }

  // src/math/vec2/LengthSquared.ts
  function LengthSquared3(a) {
    return a.x * a.x + a.y * a.y;
  }

  // src/math/vec2/Lerp.ts
  function Lerp(a, b, t, out = new Vec25()) {
    const x = a.x;
    const y = a.y;
    return out.set(x + t * (b.x - x), y + t * (b.y - y));
  }

  // src/math/vec2/ManhattanDistance.ts
  function ManhattanDistance(a, b) {
    return Math.abs(a.x - b.x) + Math.abs(a.y - b.y);
  }

  // src/math/vec2/ManhattanLength.ts
  function ManhattanLength(a) {
    return Math.abs(a.x) + Math.abs(a.y);
  }

  // src/math/vec2/Max.ts
  function Max(a, b, out = new Vec25()) {
    const {x: ax, y: ay} = a;
    const {x: bx, y: by} = b;
    return out.set(Math.max(ax, bx), Math.max(ay, by));
  }

  // src/math/vec2/Min.ts
  function Min(a, b, out = new Vec25()) {
    const {x: ax, y: ay} = a;
    const {x: bx, y: by} = b;
    return out.set(Math.min(ax, bx), Math.min(ay, by));
  }

  // src/math/vec2/Multiply.ts
  function Multiply7(a, b, out = new Vec25()) {
    return out.set(a.x * b.x, a.y * b.y);
  }

  // src/math/vec2/Negate.ts
  function Negate(a, out = new Vec25()) {
    return out.set(-a.x, -a.y);
  }

  // src/math/vec2/Normalize.ts
  function Normalize7(a, out = new Vec25()) {
    return DivideScalar(a, Length11(a) || 1, out);
  }

  // src/math/vec2/One.ts
  function One() {
    return new Vec25(1, 1);
  }

  // src/math/vec2/PerpDot.ts
  function PerpDot(a, b) {
    return a.x * b.y - a.y * b.x;
  }

  // src/math/vec2/Random.ts
  function Random11(a, scale = 1, out = new Vec25()) {
    const r = Math.random() * 2 * Math.PI;
    return out.set(Math.cos(r) * scale, Math.sin(r) * scale);
  }

  // src/math/vec2/Rotate.ts
  function Rotate10(a, origin, angle2, out = new Vec25()) {
    const s = Math.sin(angle2);
    const c = Math.cos(angle2);
    const x = a.x - origin.x;
    const y = a.y - origin.y;
    return out.set(x * c - y * s + origin.x, x * s + y * c + origin.y);
  }

  // src/math/vec2/Round.ts
  function Round(a, out = new Vec25()) {
    return out.set(Math.round(a.x), Math.round(a.y));
  }

  // src/math/vec2/RoundToZero.ts
  function RoundToZero(a, out = new Vec25()) {
    return out.set(a.x < 0 ? Math.ceil(a.x) : Math.floor(a.x), a.y < 0 ? Math.ceil(a.y) : Math.floor(a.y));
  }

  // src/math/vec2/ScaleAndAdd.ts
  function ScaleAndAdd4(a, b, scalar, out = new Vec25()) {
    return out.set(a.x + b.x * scalar, a.y + b.y * scalar);
  }

  // src/math/vec2/SetLength.ts
  function SetLength(a, length, out = new Vec25()) {
    Normalize7(a, out);
    return Scale12(out, length, out);
  }

  // src/math/vec2/SubtractScalar.ts
  function SubtractScalar3(a, scalar, out = new Vec25()) {
    return out.set(a.x - scalar, a.y - scalar);
  }

  // src/math/vec2/Transform.ts
  function Transform(v, positionX, positionY, rotation, scaleX, scaleY, out = new Vec25()) {
    return FromTransform(v.x, v.y, positionX, positionY, rotation, scaleX, scaleY, out);
  }

  // src/math/vec2/TransformMat2d.ts
  function TransformMat2d(v, m, out = new Vec25()) {
    const {a, b, c, d, tx, ty} = m;
    return out.set(a * v.x + c * v.y + tx, b * v.x + d * v.y + ty);
  }

  // src/math/vec2/TransformMat4.ts
  function TransformMat4(v, m, out = new Vec25()) {
    const data = m.data;
    return out.set(data[0] * v.x + data[4] * v.y + data[12], data[1] * v.x + data[5] * v.y + data[13]);
  }

  // src/math/vec2/Zero.ts
  function Zero7() {
    return new Vec25(0, 0);
  }

  // src/math/vec2/index.ts
  const vec2_exports = {};
  __export(vec2_exports, {
    Abs: () => Abs,
    Add: () => Add8,
    AddScalar: () => AddScalar3,
    Angle: () => Angle8,
    AngleY: () => AngleY,
    Bezier: () => Bezier4,
    CatmullRom: () => CatmullRom5,
    Ceil: () => Ceil3,
    Center: () => Center,
    ChebyshevDistance: () => ChebyshevDistance,
    Clamp: () => Clamp7,
    ClampScalar: () => ClampScalar,
    Clone: () => Clone17,
    CopyFrom: () => CopyFrom20,
    Cross: () => Cross,
    Distance: () => Distance2,
    DistanceFromSegment: () => DistanceFromSegment,
    DistancePower: () => DistancePower,
    DistanceSquared: () => DistanceSquared2,
    Divide: () => Divide,
    DivideScalar: () => DivideScalar,
    Dot: () => Dot8,
    Equals: () => Equals17,
    Floor: () => Floor3,
    Fract: () => Fract,
    FromGridIndex: () => FromGridIndex,
    FromTransform: () => FromTransform,
    FuzzyEquals: () => FuzzyEquals3,
    Hermite: () => Hermite7,
    Inverse: () => Inverse,
    Length: () => Length11,
    LengthSquared: () => LengthSquared3,
    Lerp: () => Lerp,
    ManhattanDistance: () => ManhattanDistance,
    ManhattanLength: () => ManhattanLength,
    Max: () => Max,
    Min: () => Min,
    Multiply: () => Multiply7,
    MultiplyByFloats: () => MultiplyByFloats4,
    Negate: () => Negate,
    Normalize: () => Normalize7,
    One: () => One,
    PerpDot: () => PerpDot,
    Random: () => Random11,
    Rotate: () => Rotate10,
    Round: () => Round,
    RoundToZero: () => RoundToZero,
    Scale: () => Scale12,
    ScaleAndAdd: () => ScaleAndAdd4,
    SetLength: () => SetLength,
    Subtract: () => Subtract9,
    SubtractScalar: () => SubtractScalar3,
    Transform: () => Transform,
    TransformMat2d: () => TransformMat2d,
    TransformMat4: () => TransformMat4,
    Vec2: () => Vec25,
    Vec2Callback: () => Vec2Callback2,
    Zero: () => Zero7
  });

  // src/math/vec4/Vec4.ts
  class Vec42 {
    constructor(x = 0, y = 0, z = 0, w = 1) {
      this.set(x, y, z, w);
    }
    set(x = 0, y = 0, z = 0, w = 1) {
      this.x = x;
      this.y = y;
      this.z = z;
      this.w = w;
      return this;
    }
    toArray(dst = [], index = 0) {
      const {x, y, z, w} = this;
      dst[index] = x;
      dst[index + 1] = y;
      dst[index + 2] = z;
      dst[index + 3] = w;
      return dst;
    }
    fromArray(src, index = 0) {
      return this.set(src[index], src[index + 1], src[index + 2], src[index + 3]);
    }
    toString() {
      const {x, y, z, w} = this;
      return `{ x=${x}, y=${y}, z=${z}, w=${w} }`;
    }
  }

  // src/math/vec4/Abs.ts
  function Abs5(a, out = new Vec42()) {
    return out.set(Math.abs(a.x), Math.abs(a.y), Math.abs(a.z), Math.abs(a.w));
  }

  // src/math/vec4/Add.ts
  function Add14(a, b, out = new Vec42()) {
    return out.set(a.x + b.x, a.y + b.y, a.z + b.z, a.w + b.w);
  }

  // src/math/vec4/AddScalar.ts
  function AddScalar7(a, scalar, out = new Vec42()) {
    return out.set(a.x + scalar, a.y + scalar, a.z + scalar, a.w + scalar);
  }

  // src/math/vec4/Bezier.ts
  function Bezier10(a, b, c, d, t, out = new Vec42()) {
    return out.set(Bezier(t, a.x, b.x, c.x, d.x), Bezier(t, a.y, b.y, c.y, d.y), Bezier(t, a.z, b.z, c.z, d.z), Bezier(t, a.w, b.w, c.w, d.w));
  }

  // src/math/vec4/CatmullRom.ts
  function CatmullRom11(p1, p2, p3, p4, t, out = new Vec42()) {
    return out.set(CatmullRom(t, p1.x, p2.x, p3.x, p4.x), CatmullRom(t, p1.y, p2.y, p3.y, p4.y), CatmullRom(t, p1.z, p2.z, p3.z, p4.z), CatmullRom(t, p1.w, p2.w, p3.w, p4.w));
  }

  // src/math/vec4/Ceil.ts
  function Ceil7(a, out = new Vec42()) {
    const {x, y, z, w} = a;
    return out.set(Math.ceil(x), Math.ceil(y), Math.ceil(z), Math.ceil(w));
  }

  // src/math/vec4/Scale.ts
  function Scale23(a, scalar, out = new Vec42()) {
    const {x, y, z, w} = a;
    return out.set(x * scalar, y * scalar, z * scalar, w * scalar);
  }

  // src/math/vec4/Center.ts
  function Center5(a, b, out = new Vec42()) {
    Add14(a, b, out);
    return Scale23(out, 0.5, out);
  }

  // src/math/vec4/Clamp.ts
  function Clamp16(a, min, max, out = new Vec42()) {
    return out.set(Clamp(a.x, min.x, max.x), Clamp(a.y, min.y, max.y), Clamp(a.z, min.z, max.z), Clamp(a.w, min.w, max.w));
  }

  // src/math/vec4/DivideScalar.ts
  function DivideScalar8(a, scalar, out = new Vec42()) {
    const {x, y, z, w} = a;
    return out.set(x / scalar, y / scalar, z / scalar, w / scalar);
  }

  // src/math/vec4/Length.ts
  function Length18(a) {
    const {x, y, z, w} = a;
    return Math.sqrt(x * x + y * y + z * z + w * w);
  }

  // src/math/vec4/ClampLength.ts
  function ClampLength3(a, min, max, out = new Vec42()) {
    const length = Length18(a);
    DivideScalar8(a, length || 1, out);
    return Scale23(out, Clamp(min, max, length), out);
  }

  // src/math/vec4/ClampScalar.ts
  function ClampScalar5(a, min, max, out = new Vec42()) {
    return out.set(Clamp(a.x, min, max), Clamp(a.y, min, max), Clamp(a.z, min, max), Clamp(a.w, min, max));
  }

  // src/math/vec4/Clone.ts
  function Clone21(source) {
    const {x, y, z, w} = source;
    return new Vec42(x, y, z, w);
  }

  // src/math/vec4/CopyFrom.ts
  function CopyFrom24(source, dest) {
    const {x, y, z, w} = source;
    return dest.set(x, y, z, w);
  }

  // src/math/vec4/Cross.ts
  function Cross5(u, v, w, out = new Vec42()) {
    const {x: ux, y: uy, z: uz, w: uw} = u;
    const {x: vx, y: vy, z: vz, w: vw} = v;
    const {x: wx, y: wy, z: wz, w: ww} = w;
    const A = vx * wy - vy * wx;
    const B = vx * wz - vz * wx;
    const C = vx * ww - vw * wx;
    const D = vy * wz - vz * wy;
    const E = vy * ww - vw * wy;
    const F = vz * ww - vw * wz;
    const G = ux;
    const H = uy;
    const I = uz;
    const J = uw;
    return out.set(H * F - I * E + J * D, -(G * F) + I * C - J * B, G * E - H * C + J * A, -(G * D) + H * B - I * A);
  }

  // src/math/vec4/DistanceSquared.ts
  function DistanceSquared9(a, b) {
    const x = a.x - b.x;
    const y = a.y - b.y;
    const z = a.z - b.z;
    const w = a.w - b.w;
    return x * x + y * y + z * z + w * w;
  }

  // src/math/vec4/Distance.ts
  function Distance9(a, b) {
    return Math.sqrt(DistanceSquared9(a, b));
  }

  // src/math/vec4/Divide.ts
  function Divide5(a, b, out = new Vec42()) {
    return out.set(a.x / b.x, a.y / b.y, a.z / b.z, a.w / b.w);
  }

  // src/math/vec4/Dot.ts
  function Dot13(a, b) {
    return a.x * b.x + a.y * b.y + a.z * b.z + a.w * b.w;
  }

  // src/math/vec4/Equals.ts
  function Equals21(a, b) {
    return a.x === b.x && a.y === b.y && a.z === b.z && a.w === b.w;
  }

  // src/math/vec4/Floor.ts
  function Floor7(a, out = new Vec42()) {
    const {x, y, z, w} = a;
    return out.set(Math.floor(x), Math.floor(y), Math.floor(z), Math.floor(w));
  }

  // src/math/vec4/Fract.ts
  function Fract5(a, out = new Vec42()) {
    return out.set(a.x - Math.floor(a.x), a.y - Math.floor(a.y), a.z - Math.floor(a.z), a.w - Math.floor(a.w));
  }

  // src/math/vec4/FuzzyEquals.ts
  function FuzzyEquals7(a, b, epsilon = 1e-4) {
    return FuzzyEqual(a.x, b.x, epsilon) && FuzzyEqual(a.y, b.y, epsilon) && FuzzyEqual(a.z, b.z, epsilon) && FuzzyEqual(a.w, b.w, epsilon);
  }

  // src/math/vec4/Hermite.ts
  function Hermite13(a, b, c, d, t, out = new Vec42()) {
    return out.set(Hermite(t, a.x, b.x, c.x, d.x), Hermite(t, a.y, b.y, c.y, d.y), Hermite(t, a.z, b.z, c.z, d.z), Hermite(t, a.w, b.w, c.w, d.w));
  }

  // src/math/vec4/LengthSquared.ts
  function LengthSquared7(a) {
    const {x, y, z, w} = a;
    return x * x + y * y + z * z + w * w;
  }

  // src/math/vec4/Lerp.ts
  function Lerp5(a, b, t, out = new Vec42()) {
    const {x, y, z, w} = a;
    return out.set(x + t * (b.x - x), y + t * (b.y - y), z + t * (b.z - z), w + t * (b.w - w));
  }

  // src/math/vec4/ManhattanDistance.ts
  function ManhattanDistance5(a, b) {
    return Math.abs(a.x - b.x) + Math.abs(a.y - b.y) + Math.abs(a.z - b.z) + Math.abs(a.w - b.w);
  }

  // src/math/vec4/ManhattanLength.ts
  function ManhattanLength5(a) {
    const {x, y, z, w} = a;
    return Math.abs(x) + Math.abs(y) + Math.abs(z) + Math.abs(w);
  }

  // src/math/vec4/Max.ts
  function Max5(a, b, out = new Vec42()) {
    const {x: ax, y: ay, z: az, w: aw} = a;
    const {x: bx, y: by, z: bz, w: bw} = b;
    return out.set(Math.max(ax, bx), Math.max(ay, by), Math.max(az, bz), Math.max(aw, bw));
  }

  // src/math/vec4/Min.ts
  function Min5(a, b, out = new Vec42()) {
    const {x: ax, y: ay, z: az, w: aw} = a;
    const {x: bx, y: by, z: bz, w: bw} = b;
    return out.set(Math.min(ax, bx), Math.min(ay, by), Math.min(az, bz), Math.min(aw, bw));
  }

  // src/math/vec4/Multiply.ts
  function Multiply13(a, b, out = new Vec42()) {
    return out.set(a.x * b.x, a.y * b.y, a.z * b.z, a.w * b.w);
  }

  // src/math/vec4/MultiplyByFloats.ts
  function MultiplyByFloats8(a, x, y, z, w, out = new Vec42()) {
    return out.set(a.x * x, a.y * y, a.z * z, a.w * w);
  }

  // src/math/vec4/Negate.ts
  function Negate5(a, out = new Vec42()) {
    return out.set(-a.x, -a.y, -a.z, -a.w);
  }

  // src/math/vec4/Normalize.ts
  function Normalize12(a, out = new Vec42()) {
    return DivideScalar8(a, Length18(a) || 1, out);
  }

  // src/math/vec4/One.ts
  function One5() {
    return new Vec42(1, 1, 1, 1);
  }

  // src/math/vec4/Vec4Callback.ts
  class Vec4Callback2 extends Vec42 {
    constructor(onChange, x = 0, y = 0, z = 0, w = 0) {
      super(x, y, z, w);
      this.onChange = onChange;
    }
    destroy() {
      this.onChange = NOOP;
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

  // src/math/vec4/RGBACallback.ts
  class RGBACallback extends Vec4Callback2 {
    constructor(onChange, r = 0, g = 0, b = 0, a = 1) {
      super(onChange, r, g, b, a);
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
    set a(value) {
      this.w = value;
    }
    get a() {
      return this.w;
    }
    toString() {
      const {x, y, z, w} = this;
      return `[ r=${x}, g=${y}, b=${z}, a=${w} ]`;
    }
  }

  // src/math/vec4/Random.ts
  function Random15(a, scale = 1, out = new Vec42()) {
    let v1;
    let v2;
    let v3;
    let v4;
    let s1;
    let s2;
    do {
      v1 = Math.random() * 2 - 1;
      v2 = Math.random() * 2 - 1;
      s1 = v1 * v1 + v2 * v2;
    } while (s1 >= 1);
    do {
      v3 = Math.random() * 2 - 1;
      v4 = Math.random() * 2 - 1;
      s2 = v3 * v3 + v4 * v4;
    } while (s2 >= 1);
    const d = Math.sqrt((1 - s1) / s2);
    return out.set(scale * v1, scale * v2, scale * v3 * d, scale * v4 * d);
  }

  // src/math/vec4/Round.ts
  function Round5(a, out = new Vec42()) {
    const {x, y, z, w} = a;
    return out.set(Math.round(x), Math.round(y), Math.round(z), Math.round(w));
  }

  // src/math/vec4/RoundToZero.ts
  function RoundToZero5(a, out = new Vec42()) {
    const {x, y, z, w} = a;
    return out.set(x < 0 ? Math.ceil(x) : Math.floor(x), y < 0 ? Math.ceil(y) : Math.floor(y), z < 0 ? Math.ceil(z) : Math.floor(z), w < 0 ? Math.ceil(w) : Math.floor(w));
  }

  // src/math/vec4/ScaleAndAdd.ts
  function ScaleAndAdd7(a, b, scalar, out = new Vec42()) {
    return out.set(a.x + b.x * scalar, a.y + b.y * scalar, a.z + b.z * scalar, a.w + b.w * scalar);
  }

  // src/math/vec4/SetLength.ts
  function SetLength5(a, length, out = new Vec42()) {
    Normalize12(a, out);
    return Scale23(out, length, out);
  }

  // src/math/vec4/Subtract.ts
  function Subtract13(a, b, out = new Vec42()) {
    return out.set(a.x - b.x, a.y - b.y, a.z - b.z, a.w - b.w);
  }

  // src/math/vec4/SubtractScalar.ts
  function SubtractScalar7(a, scalar, out = new Vec42()) {
    const {x, y, z, w} = a;
    return out.set(x - scalar, y - scalar, z - scalar, w - scalar);
  }

  // src/math/vec4/TransformMat4.ts
  function TransformMat47(a, m, out = new Vec42()) {
    const [m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33] = m.data;
    const {x, y, z, w} = a;
    return out.set(m00 * x + m10 * y + m20 * z + m30 * w, m01 * x + m11 * y + m21 * z + m31 * w, m02 * x + m12 * y + m22 * z + m32 * w, m03 * x + m13 * y + m23 * z + m33 * w);
  }

  // src/math/vec4/Zero.ts
  function Zero12() {
    return new Vec42(0, 0, 0, 0);
  }

  // src/math/vec4/index.ts
  const vec4_exports = {};
  __export(vec4_exports, {
    Abs: () => Abs5,
    Add: () => Add14,
    AddScalar: () => AddScalar7,
    Bezier: () => Bezier10,
    CatmullRom: () => CatmullRom11,
    Ceil: () => Ceil7,
    Center: () => Center5,
    Clamp: () => Clamp16,
    ClampLength: () => ClampLength3,
    ClampScalar: () => ClampScalar5,
    Clone: () => Clone21,
    CopyFrom: () => CopyFrom24,
    Cross: () => Cross5,
    Distance: () => Distance9,
    DistanceSquared: () => DistanceSquared9,
    Divide: () => Divide5,
    DivideScalar: () => DivideScalar8,
    Dot: () => Dot13,
    Equals: () => Equals21,
    Floor: () => Floor7,
    Fract: () => Fract5,
    FuzzyEquals: () => FuzzyEquals7,
    Hermite: () => Hermite13,
    Length: () => Length18,
    LengthSquared: () => LengthSquared7,
    Lerp: () => Lerp5,
    ManhattanDistance: () => ManhattanDistance5,
    ManhattanLength: () => ManhattanLength5,
    Max: () => Max5,
    Min: () => Min5,
    Multiply: () => Multiply13,
    MultiplyByFloats: () => MultiplyByFloats8,
    Negate: () => Negate5,
    Normalize: () => Normalize12,
    One: () => One5,
    RGBACallback: () => RGBACallback,
    Random: () => Random15,
    Round: () => Round5,
    RoundToZero: () => RoundToZero5,
    Scale: () => Scale23,
    ScaleAndAdd: () => ScaleAndAdd7,
    SetLength: () => SetLength5,
    Subtract: () => Subtract13,
    SubtractScalar: () => SubtractScalar7,
    TransformMat4: () => TransformMat47,
    Vec4: () => Vec42,
    Vec4Callback: () => Vec4Callback2,
    Zero: () => Zero12
  });

  // src/math/Average.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function Average(values) {
    let sum = 0;
    for (let i = 0; i < values.length; i++) {
      sum += +values[i];
    }
    return sum / values.length;
  }

  // src/math/Between.ts
  function Between2(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  // src/math/CeilTo.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function CeilTo(value, place = 0, base = 10) {
    const p = Math.pow(base, -place);
    return Math.ceil(value * p) / p;
  }

  // src/math/DegToRad.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function DegToRad(degrees) {
    return degrees * MATH_CONST.DEG_TO_RAD;
  }

  // src/math/Difference.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function Difference(a, b) {
    return Math.abs(a - b);
  }

  // src/math/FloatBetween.ts
  function FloatBetween(min, max) {
    return Math.random() * (max - min) + min;
  }

  // src/math/FloorTo.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function FloorTo(value, place = 0, base = 10) {
    const p = Math.pow(base, -place);
    return Math.floor(value * p) / p;
  }

  // src/math/FromPercent.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function FromPercent2(percent, min, max) {
    percent = Clamp(percent, 0, 1);
    return (max - min) * percent;
  }

  // src/math/GetSpeed.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function GetSpeed(distance, time) {
    return distance / time / 1e3;
  }

  // src/math/MaxAdd.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function MaxAdd(value, amount, max) {
    return Math.min(value + amount, max);
  }

  // src/math/MinSub.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function MinSub(value, amount, min) {
    return Math.max(value - amount, min);
  }

  // src/math/Percent.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function Percent(value, min, max, upperMax) {
    if (max === void 0) {
      max = min + 1;
    }
    let percentage = (value - min) / (max - min);
    if (percentage > 1) {
      if (upperMax !== void 0) {
        percentage = (upperMax - value) / (upperMax - max);
        if (percentage < 0) {
          percentage = 0;
        }
      } else {
        percentage = 1;
      }
    } else if (percentage < 0) {
      percentage = 0;
    }
    return percentage;
  }

  // src/math/RadToDeg.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function RadToDeg(radians) {
    return radians * MATH_CONST.RAD_TO_DEG;
  }

  // src/math/RoundTo.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function RoundTo(value, place = 0, base = 10) {
    const p = Math.pow(base, -place);
    return Math.round(value * p) / p;
  }

  // src/math/SinCosTableGenerator.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function SinCosTableGenerator(length, sinAmp = 1, cosAmp = 1, frequency = 1) {
    frequency *= Math.PI / length;
    const cos = [];
    const sin = [];
    for (let c = 0; c < length; c++) {
      cosAmp -= sinAmp * frequency;
      sinAmp += cosAmp * frequency;
      cos[c] = cosAmp;
      sin[c] = sinAmp;
    }
    return {
      sin,
      cos,
      length
    };
  }

  // src/math/Within.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function Within(a, b, tolerance) {
    return Math.abs(a - b) <= tolerance;
  }

  // src/math/index.ts
  const math_exports = {};
  __export(math_exports, {
    Angle: () => angle_exports,
    Average: () => Average,
    Bernstein: () => Bernstein,
    Between: () => Between2,
    Bezier: () => Bezier,
    CatmullRom: () => CatmullRom,
    CeilTo: () => CeilTo,
    Clamp: () => Clamp,
    DegToRad: () => DegToRad,
    Difference: () => Difference,
    Easing: () => easing_exports,
    Factorial: () => Factorial2,
    FloatBetween: () => FloatBetween,
    FloorTo: () => FloorTo,
    FromPercent: () => FromPercent2,
    Fuzzy: () => fuzzy_exports,
    GetSpeed: () => GetSpeed,
    Hermite: () => Hermite,
    Interpolation: () => interpolation_exports,
    Linear: () => Linear,
    MATH_CONST: () => MATH_CONST,
    Matrix2D: () => matrix2d_exports,
    Matrix4: () => mat4_exports,
    MaxAdd: () => MaxAdd,
    MinSub: () => MinSub,
    Percent: () => Percent,
    Pow2: () => pow2_exports,
    Quaternion: () => quaternion_exports,
    RadToDeg: () => RadToDeg,
    RoundAwayFromZero: () => RoundAwayFromZero,
    RoundTo: () => RoundTo,
    SinCosTableGenerator: () => SinCosTableGenerator,
    SmoothStep: () => SmoothStep,
    SmootherStep: () => SmootherStep,
    Snap: () => snap_exports,
    Vec2: () => vec2_exports,
    Vec3: () => vec3_exports,
    Vec4: () => vec4_exports,
    Within: () => Within,
    Wrap: () => Wrap2
  });

  // src/camera3d/Camera3D.ts
  class Camera3D {
    constructor(x = 0, y = 0, z = 0, fov = 45, near = 0.1, far = 1e3) {
      this.dirtyRender = true;
      this.type = "Camera3D";
      const game = GameInstance2.get();
      this.renderer = game.renderer;
      this.position = new Vec3Callback(() => this.update(), x, y, z);
      this.direction = new Vec3Callback(() => this.update(), 0, 1, 0);
      this._lookAtPosition = new Vec3();
      this._lookAtView = new Matrix4();
      this._axis = new Quaternion();
      this.up = Up();
      this.left = Left();
      this._fov = fov;
      this._near = near;
      this._far = far;
      this.aspectRatio = this.renderer.width / this.renderer.height;
      this.viewMatrix = new Matrix4();
      this.projectionMatrix = Perspective(DegToRad(fov), this.aspectRatio, near, far);
      this.lookAt(new Vec3());
    }
    updateProjectionMatrix() {
      Perspective(DegToRad(this._fov), this.aspectRatio, this._near, this._far, this.projectionMatrix);
      return this;
    }
    lookAt(point) {
      const pos = this.position;
      const dir = this.direction;
      const left = this.left;
      Subtract(point, pos, dir);
      Normalize(dir, dir);
      CrossNormalize(UP, dir, left);
      CrossNormalize(dir, left, this.up);
      return this.update();
    }
    rotateOnAxis(axisVec, angle2) {
      const dir = this.direction;
      const left = this.left;
      const up = this.up;
      const q = SetAxisAngle(axisVec, angle2, this._axis);
      TransformQuat(dir, q, dir);
      TransformQuat(left, q, left);
      TransformQuat(up, q, up);
      Normalize(up, up);
      Normalize(left, left);
      Normalize(dir, dir);
      return this.update();
    }
    yaw(angle2) {
      return this.rotateOnAxis(this.up, angle2);
    }
    pitch(angle2) {
      return this.rotateOnAxis(this.left, angle2);
    }
    roll(angle2) {
      return this.rotateOnAxis(this.direction, angle2);
    }
    forward(s) {
      const pos = this.position;
      const {x: px, y: py, z: pz} = pos;
      const {x: dx, y: dy, z: dz} = this.direction;
      pos.set(px - s * dx, py - s * dy, pz - s * dz);
      return this.update();
    }
    update() {
      const lookPosition = this._lookAtPosition;
      const lookView = this._lookAtView;
      const pos = this.position;
      Add(pos, this.direction, lookPosition);
      LookAt(pos, lookPosition, this.up, lookView);
      TranslateFromFloats(lookView, -pos.x, -pos.y, -pos.z, this.viewMatrix);
      return this;
    }
    reset() {
    }
    destroy() {
      this.position.destroy();
      this.direction.destroy();
      this.up = null;
      this.left = null;
      this.viewMatrix = null;
      this.projectionMatrix = null;
      this._lookAtPosition = null;
      this._lookAtView = null;
      this._axis = null;
    }
    get fov() {
      return this._fov;
    }
    set fov(value) {
      if (value > 0 && value < 180) {
        this._fov = value;
        this.updateProjectionMatrix();
      }
    }
    get near() {
      return this._near;
    }
    set near(value) {
      if (value > 0) {
        this._near = value;
        this.updateProjectionMatrix();
      }
    }
    get far() {
      return this._far;
    }
    set far(value) {
      if (value > 0) {
        this._far = value;
        this.updateProjectionMatrix();
      }
    }
  }

  // src/camera3d/index.ts
  const camera3d_exports = {};
  __export(camera3d_exports, {
    Camera3D: () => Camera3D
  });

  // src/config/BackgroundColor.ts
  let bgColor = 0;
  function BackgroundColor(color2 = 0) {
    return () => {
      bgColor = color2;
    };
  }
  function GetBackgroundColor() {
    return bgColor;
  }

  // src/config/Banner.ts
  let title = "Phaser";
  let url = "https://phaser4.io";
  let color = "#fff";
  let background = "linear-gradient(#3e0081 40%, #00bcc3)";
  function Banner(gameTitle = "", gameURL = "", textColor, textBackground) {
    return () => {
      title = gameTitle;
      url = gameURL;
      if (textColor) {
        color = textColor;
      }
      if (textBackground) {
        background = textBackground;
      }
    };
  }
  function GetBanner() {
    if (title !== "") {
      const game = GameInstance2.get();
      const version = title === "Phaser" ? " v" + game.VERSION : "";
      console.log(`%c${title}${version}%c ${url}`, `padding: 4px 16px; color: ${color}; background: ${background}`, "");
    }
  }

  // src/config/BatchSize.ts
  let batchSize = 4096;
  function BatchSize(size) {
    return () => {
      batchSize = size;
    };
  }

  // src/config/CanvasContext.ts
  let _contextAttributes = {
    alpha: false,
    desynchronized: false
  };
  function CanvasContext(contextAttributes) {
    return () => {
      _contextAttributes = contextAttributes;
    };
  }
  function GetCanvasContext() {
    return _contextAttributes;
  }

  // src/config/DefaultOrigin.ts
  let originX = 0.5;
  let originY = 0.5;
  function DefaultOrigin(x = 0.5, y = x) {
    return () => {
      originX = x;
      originY = y;
    };
  }

  // src/config/Size.ts
  let _width = 800;
  let _height = 600;
  let _resolution = 1;
  function Size(width = 800, height = 600, resolution = 1) {
    if (resolution === 0) {
      resolution = window.devicePixelRatio;
    }
    return () => {
      _width = width;
      _height = height;
      _resolution = resolution;
    };
  }
  function GetWidth() {
    return _width;
  }
  function GetHeight() {
    return _height;
  }
  function GetResolution() {
    return _resolution;
  }

  // src/config/MaxTextures.ts
  let maxTextures = 0;
  function MaxTextures(max = 0) {
    return () => {
      maxTextures = max;
    };
  }
  function SetMaxTextures(max) {
    maxTextures = max;
  }
  function GetMaxTextures() {
    return maxTextures;
  }

  // src/dom/GetElement.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function GetElement2(target) {
    let element;
    if (target) {
      if (typeof target === "string") {
        element = document.getElementById(target);
      } else if (typeof target === "object" && target.nodeType === 1) {
        element = target;
      }
    }
    if (!element) {
      element = document.body;
    }
    return element;
  }

  // src/config/Parent.ts
  let parent;
  function Parent(parentElement) {
    return () => {
      if (parentElement) {
        parent = GetElement2(parentElement);
      }
    };
  }
  function GetParent() {
    return parent;
  }

  // src/config/SetRenderer.ts
  let instance2;
  function SetRenderer2(renderer) {
    instance2 = renderer;
  }
  function GetRenderer() {
    return instance2;
  }

  // src/config/Scenes.ts
  let _scenes = [];
  function Scenes(scenes) {
    return () => {
      _scenes = [].concat(scenes);
    };
  }
  function GetScenes() {
    return _scenes;
  }

  // src/config/WebGLContext.ts
  let _contextAttributes2 = {
    alpha: false,
    antialias: false,
    depth: true,
    premultipliedAlpha: false
  };
  function WebGLContext(contextAttributes) {
    return () => {
      _contextAttributes2 = contextAttributes;
    };
  }
  function GetWebGLContext() {
    return _contextAttributes2;
  }

  // src/renderer/BindingQueue.ts
  const queue = [];
  const BindingQueue = {
    add: (texture, glConfig) => {
      queue.push({texture, glConfig});
    },
    get: () => {
      return queue;
    },
    clear: () => {
      queue.length = 0;
    }
  };

  // src/renderer/canvas/CanvasRenderer.ts
  class CanvasRenderer2 {
    constructor() {
      this.clearBeforeRender = true;
      this.optimizeRedraw = true;
      this.autoResize = true;
      this.width = GetWidth();
      this.height = GetHeight();
      this.resolution = GetResolution();
      this.setBackgroundColor(GetBackgroundColor());
      const canvas = document.createElement("canvas");
      this.canvas = canvas;
      this.initContext();
    }
    initContext() {
      const ctx = this.canvas.getContext("2d", GetCanvasContext());
      this.ctx = ctx;
      this.resize(this.width, this.height, this.resolution);
    }
    resize(width, height, resolution = 1) {
      this.width = width * resolution;
      this.height = height * resolution;
      this.resolution = resolution;
      const canvas = this.canvas;
      canvas.width = this.width;
      canvas.height = this.height;
      if (this.autoResize) {
        canvas.style.width = (this.width / resolution).toString() + "px";
        canvas.style.height = (this.height / resolution).toString() + "px";
      }
    }
    setBackgroundColor(color2) {
      const r = color2 >> 16 & 255;
      const g = color2 >> 8 & 255;
      const b = color2 & 255;
      const a = color2 > 16777215 ? color2 >>> 24 : 255;
      this.clearColor = `rgba(${r}, ${g}, ${b}, ${a})`;
      return this;
    }
    reset() {
      const ctx = this.ctx;
      ctx.globalAlpha = 1;
      ctx.globalCompositeOperation = "source-over";
      ctx.setTransform(1, 0, 0, 1, 0, 0);
    }
    render(renderData) {
      BindingQueue.clear();
      const ctx = this.ctx;
      if (this.optimizeRedraw && renderData.numDirtyFrames === 0 && renderData.numDirtyCameras === 0) {
        return;
      }
      this.reset();
      if (this.clearBeforeRender) {
        ctx.clearRect(0, 0, this.width, this.height);
        ctx.fillStyle = this.clearColor;
        ctx.fillRect(0, 0, this.width, this.height);
      }
    }
    destroy() {
    }
  }

  // src/config/SetCanvas.ts
  function SetCanvas() {
    return () => {
      SetRenderer2(CanvasRenderer2);
    };
  }

  // src/renderer/webgl1/renderpass/AddViewport.ts
  function AddViewport(renderPass, x = 0, y = 0, width = 0, height = 0) {
    const viewport = new Rectangle(x, y, width, height);
    renderPass.viewportStack.push(viewport);
    return viewport;
  }

  // src/renderer/webgl1/GL.ts
  let gl;
  const GL2 = {
    get: () => {
      return gl;
    },
    set: (context) => {
      gl = context;
    }
  };

  // src/renderer/webgl1/renderpass/BindViewport.ts
  function BindViewport(renderPass, viewport) {
    if (!viewport) {
      viewport = renderPass.currentViewport;
      if (!viewport) {
        return;
      }
    }
    const glv = gl.getParameter(gl.VIEWPORT);
    if (glv[0] !== viewport.x || glv[1] !== viewport.y || glv[2] !== viewport.width || glv[3] !== viewport.height) {
      gl.viewport(viewport.x, viewport.y, viewport.width, viewport.height);
    }
  }

  // src/renderer/webgl1/renderpass/SetViewport.ts
  function SetViewport2(renderPass, x = 0, y = 0, width = 0, height = 0) {
    const entry = AddViewport(renderPass, x, y, width, height);
    BindViewport(renderPass, entry);
    renderPass.currentViewport = entry;
  }

  // src/renderer/webgl1/renderpass/BindFramebuffer.ts
  function BindFramebuffer(renderPass, clear = true, entry) {
    if (!entry) {
      entry = renderPass.currentFramebuffer;
    }
    const {framebuffer, viewport} = entry;
    gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer);
    if (clear) {
      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    }
    if (viewport) {
      SetViewport2(renderPass, viewport.x, viewport.y, viewport.width, viewport.height);
    }
  }

  // src/renderer/webgl1/renderpass/PopViewport.ts
  function PopViewport2(renderPass) {
    const stack = renderPass.viewportStack;
    if (stack.length > 1) {
      stack.pop();
    }
    renderPass.currentViewport = stack[stack.length - 1];
    BindViewport(renderPass);
  }

  // src/renderer/webgl1/renderpass/PopFramebuffer.ts
  function PopFramebuffer(renderPass) {
    const stack = renderPass.framebufferStack;
    if (stack.length > 1) {
      if (renderPass.currentFramebuffer.viewport) {
        PopViewport2(renderPass);
      }
      stack.pop();
    }
    renderPass.currentFramebuffer = stack[stack.length - 1];
    BindFramebuffer(renderPass, false);
  }

  // src/renderer/webgl1/renderpass/AddFramebuffer.ts
  function AddFramebuffer(renderPass, framebuffer, viewport) {
    const entry = {framebuffer, viewport};
    renderPass.framebufferStack.push(entry);
    return entry;
  }

  // src/renderer/webgl1/renderpass/SetFramebuffer.ts
  function SetFramebuffer(renderPass, framebuffer, clear = true, viewport) {
    const entry = AddFramebuffer(renderPass, framebuffer, viewport);
    BindFramebuffer(renderPass, clear, entry);
    renderPass.currentFramebuffer = entry;
  }

  // src/renderer/webgl1/renderpass/Draw.ts
  function Draw(renderPass) {
    const count = renderPass.count;
    if (count === 0) {
      return;
    }
    const currentBuffer = renderPass.currentVertexBuffer;
    const currentShader = renderPass.currentShader;
    const renderToFramebuffer = currentShader.shader.renderToFramebuffer;
    if (renderToFramebuffer) {
      SetFramebuffer(renderPass, currentShader.shader.framebuffer, true);
    }
    if (count === currentBuffer.batchSize) {
      const type = currentBuffer.isDynamic ? gl.DYNAMIC_DRAW : gl.STATIC_DRAW;
      gl.bufferData(gl.ARRAY_BUFFER, currentBuffer.data, type);
    } else {
      const subsize = currentBuffer.indexed ? count * currentBuffer.entryElementSize : count * currentBuffer.vertexElementSize;
      const view = currentBuffer.vertexViewF32.subarray(0, subsize);
      gl.bufferSubData(gl.ARRAY_BUFFER, 0, view);
    }
    if (currentBuffer.indexed) {
      gl.drawElements(gl.TRIANGLES, count * currentBuffer.entryIndexSize, gl.UNSIGNED_SHORT, 0);
    } else {
      gl.drawArrays(gl.TRIANGLES, 0, count);
    }
    if (renderToFramebuffer) {
      PopFramebuffer(renderPass);
    }
  }

  // src/renderer/webgl1/renderpass/Flush.ts
  function Flush(renderPass, forceCount) {
    if (forceCount) {
      renderPass.count = forceCount;
    }
    const count = renderPass.count;
    if (count === 0) {
      return false;
    }
    Draw(renderPass);
    renderPass.prevCount = count;
    renderPass.count = 0;
    renderPass.flushTotal++;
    return true;
  }

  // src/renderer/webgl1/renderpass/End.ts
  function End2(renderPass) {
    Flush(renderPass);
  }

  // src/renderer/webgl1/colors/GetRGBArray.ts
  function GetRGBArray2(color2, output = []) {
    const r = color2 >> 16 & 255;
    const g = color2 >> 8 & 255;
    const b = color2 & 255;
    const a = color2 > 16777215 ? color2 >>> 24 : 255;
    output[0] = r / 255;
    output[1] = g / 255;
    output[2] = b / 255;
    output[3] = a / 255;
    return output;
  }

  // src/renderer/webgl1/textures/CreateGLTexture.ts
  function CreateGLTexture2(binding) {
    const {parent: parent2, flipY, unpackPremultiplyAlpha, minFilter, magFilter, wrapS, wrapT, generateMipmap, isPOT} = binding;
    const source = parent2.image;
    let width = parent2.width;
    let height = parent2.height;
    const glTexture = gl.createTexture();
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, glTexture);
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, flipY);
    gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, unpackPremultiplyAlpha);
    if (source) {
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, source);
      width = source.width;
      height = source.height;
    } else {
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, width, height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
    }
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, minFilter);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, magFilter);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, wrapS);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, wrapT);
    if (generateMipmap && isPOT) {
      gl.generateMipmap(gl.TEXTURE_2D);
    }
    binding.texture = glTexture;
    return glTexture;
  }

  // src/renderer/webgl1/fbo/DeleteFramebuffer.ts
  function DeleteFramebuffer2(framebuffer) {
    if (gl && gl.isFramebuffer(framebuffer)) {
      gl.deleteFramebuffer(framebuffer);
    }
  }

  // src/renderer/webgl1/textures/DeleteGLTexture.ts
  function DeleteGLTexture2(texture) {
    if (gl.isTexture(texture)) {
      gl.deleteTexture(texture);
    }
  }

  // src/renderer/webgl1/textures/SetGLTextureFilterMode.ts
  function SetGLTextureFilterMode2(texture, linear = true) {
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, texture);
    const mode = linear ? gl.LINEAR : gl.NEAREST;
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, mode);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, mode);
  }

  // src/renderer/webgl1/textures/UpdateGLTexture.ts
  function UpdateGLTexture2(binding) {
    const source = binding.parent.image;
    const width = source.width;
    const height = source.height;
    if (width > 0 && height > 0) {
      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, binding.texture);
      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, binding.flipY);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, source);
    }
    return binding.texture;
  }

  // src/renderer/webgl1/textures/GLTextureBinding.ts
  class GLTextureBinding2 {
    constructor(parent2, config5 = {}) {
      this.index = 0;
      this.indexCounter = -1;
      this.dirtyIndex = true;
      this.unpackPremultiplyAlpha = true;
      this.flipY = false;
      this.isPOT = false;
      this.generateMipmap = false;
      this.parent = parent2;
      this.isPOT = IsSizePowerOfTwo(parent2.width, parent2.height);
      const {
        texture = null,
        framebuffer = null,
        depthbuffer = null,
        unpackPremultiplyAlpha = true,
        minFilter = this.isPOT ? gl.LINEAR_MIPMAP_LINEAR : gl.LINEAR,
        magFilter = gl.LINEAR,
        wrapS = gl.CLAMP_TO_EDGE,
        wrapT = gl.CLAMP_TO_EDGE,
        generateMipmap = this.isPOT,
        flipY = false
      } = config5;
      this.minFilter = minFilter;
      this.magFilter = magFilter;
      this.wrapS = wrapS;
      this.wrapT = wrapT;
      this.generateMipmap = generateMipmap;
      this.flipY = flipY;
      this.unpackPremultiplyAlpha = unpackPremultiplyAlpha;
      if (framebuffer) {
        this.framebuffer = framebuffer;
      }
      if (depthbuffer) {
        this.depthbuffer = depthbuffer;
      }
      if (texture) {
        this.texture = texture;
      } else {
        CreateGLTexture2(this);
      }
    }
    setFilter(linear) {
      if (this.texture) {
        SetGLTextureFilterMode2(this.texture, linear);
      }
    }
    create() {
      const texture = this.texture;
      if (texture) {
        DeleteGLTexture2(texture);
      }
      return CreateGLTexture2(this);
    }
    update() {
      const texture = this.texture;
      if (!texture) {
        return CreateGLTexture2(this);
      } else {
        return UpdateGLTexture2(this);
      }
    }
    setIndex(index) {
      this.dirtyIndex = index !== this.index;
      this.index = index;
    }
    destroy() {
      DeleteGLTexture2(this.texture);
      DeleteFramebuffer2(this.framebuffer);
      this.parent = null;
      this.texture = null;
      this.framebuffer = null;
    }
  }

  // src/renderer/webgl1/renderpass/ProcessBindingQueue.ts
  function ProcessBindingQueue2() {
    const queue2 = BindingQueue.get();
    queue2.forEach((entry) => {
      const {texture, glConfig} = entry;
      if (!texture.binding) {
        texture.binding = new GLTextureBinding2(texture, glConfig);
      }
    });
    BindingQueue.clear();
  }

  // src/renderer/webgl1/shaders/CheckShaderMaxIfStatements.ts
  const fragTemplate = [
    "precision mediump float;",
    "void main(void){",
    "float test = 0.1;",
    "%forloop%",
    "gl_FragColor = vec4(0.0);",
    "}"
  ].join("\n");
  function GenerateSrc(maxIfs) {
    let src = "";
    for (let i = 0; i < maxIfs; ++i) {
      if (i > 0) {
        src += "\nelse ";
      }
      if (i < maxIfs - 1) {
        src += `if(test == ${i}.0){}`;
      }
    }
    return src;
  }
  function CheckShaderMaxIfStatements2(maxIfs) {
    const shader = gl.createShader(gl.FRAGMENT_SHADER);
    while (true) {
      const fragmentSrc = fragTemplate.replace(/%forloop%/gi, GenerateSrc(maxIfs));
      gl.shaderSource(shader, fragmentSrc);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        maxIfs = maxIfs / 2 | 0;
      } else {
        break;
      }
    }
    return maxIfs;
  }

  // src/renderer/webgl1/renderpass/CreateTempTextures.ts
  function CreateTempTextures(renderPass) {
    let maxGPUTextures = CheckShaderMaxIfStatements2(gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS));
    const maxConfigTextures = GetMaxTextures();
    if (maxConfigTextures === 0 || maxConfigTextures > 0 && maxConfigTextures > maxGPUTextures) {
      SetMaxTextures(maxGPUTextures);
    } else if (maxConfigTextures > 0 && maxConfigTextures < maxGPUTextures) {
      maxGPUTextures = Math.max(8, maxConfigTextures);
    }
    const tempTextures = renderPass.tempTextures;
    if (tempTextures.length) {
      tempTextures.forEach((texture) => {
        gl.deleteTexture(texture);
      });
    }
    const index = [];
    for (let texturesIndex = 0; texturesIndex < maxGPUTextures; texturesIndex++) {
      const tempTexture = gl.createTexture();
      gl.activeTexture(gl.TEXTURE0 + texturesIndex);
      gl.bindTexture(gl.TEXTURE_2D, tempTexture);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array([0, 0, 255, 255]));
      tempTextures[texturesIndex] = tempTexture;
      index.push(texturesIndex);
    }
    renderPass.maxTextures = maxGPUTextures;
    renderPass.textureIndex = index;
    renderPass.currentActiveTexture = 1;
  }

  // src/renderer/webgl1/buffers/DeleteGLBuffer.ts
  function DeleteGLBuffer(buffer) {
    if (gl.isBuffer(buffer)) {
      gl.deleteBuffer(buffer);
    }
  }

  // src/renderer/webgl1/buffers/VertexBuffer.ts
  class VertexBuffer2 {
    constructor(config5 = {}) {
      this.indexed = false;
      this.isDynamic = false;
      this.count = 0;
      this.offset = 0;
      const {
        batchSize: batchSize2 = 1,
        dataSize = 4,
        isDynamic = true,
        elementsPerEntry = 4,
        vertexElementSize = 6
      } = config5;
      this.batchSize = batchSize2;
      this.dataSize = dataSize;
      this.vertexElementSize = vertexElementSize;
      this.isDynamic = isDynamic;
      this.elementsPerEntry = elementsPerEntry;
      this.vertexByteSize = vertexElementSize * dataSize;
      this.entryByteSize = this.vertexByteSize * elementsPerEntry;
      this.bufferByteSize = batchSize2 * this.entryByteSize;
      this.create();
    }
    resize(batchSize2) {
      this.batchSize = batchSize2;
      this.bufferByteSize = batchSize2 * this.entryByteSize;
      if (this.vertexBuffer) {
        DeleteGLBuffer(this.vertexBuffer);
      }
      this.create();
    }
    create() {
      const data = new ArrayBuffer(this.bufferByteSize);
      this.data = data;
      this.vertexViewF32 = new Float32Array(data);
      this.vertexViewU32 = new Uint32Array(data);
      this.vertexBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);
      const type = this.isDynamic ? gl.DYNAMIC_DRAW : gl.STATIC_DRAW;
      gl.bufferData(gl.ARRAY_BUFFER, data, type);
      gl.bindBuffer(gl.ARRAY_BUFFER, null);
    }
    add(count) {
      this.count += count;
      this.offset += this.vertexElementSize * count;
    }
    reset() {
      this.count = 0;
      this.offset = 0;
    }
    canContain(count) {
      return this.count + count <= this.batchSize;
    }
    free() {
      return Math.max(0, 1 - this.count / this.batchSize);
    }
    bind() {
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
      gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);
    }
    destroy() {
      DeleteGLBuffer(this.vertexBuffer);
      this.data = null;
      this.vertexViewF32 = null;
      this.vertexViewU32 = null;
      this.vertexBuffer = null;
    }
  }

  // src/renderer/webgl1/buffers/IndexedVertexBuffer.ts
  class IndexedVertexBuffer extends VertexBuffer2 {
    constructor(config5 = {}) {
      super(config5);
      const {
        indexSize = 4,
        entryIndexSize = 6,
        indexLayout = null
      } = config5;
      this.indexed = true;
      this.indexSize = indexSize;
      this.entryIndexSize = entryIndexSize;
      this.entryElementSize = this.vertexElementSize * this.elementsPerEntry;
      const seededIndexBuffer = [];
      if (indexLayout) {
        this.indexLayout = indexLayout;
        for (let i = 0; i < this.batchSize * indexSize; i += indexSize) {
          for (let c = 0; c < indexLayout.length; c++) {
            seededIndexBuffer.push(i + indexLayout[c]);
          }
        }
      }
      this.create();
      this.createIndexBuffer(seededIndexBuffer);
    }
    createIndexBuffer(seededIndex) {
      this.index = new Uint16Array(seededIndex);
      this.indexBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
      gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, this.index, gl.STATIC_DRAW);
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
      seededIndex = [];
    }
    bind() {
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
      gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);
    }
    destroy() {
      super.destroy();
      DeleteGLBuffer(this.indexBuffer);
      this.index = null;
      this.indexLayout = null;
      this.indexBuffer = null;
    }
  }

  // src/renderer/webgl1/shaders/CreateAttributes.ts
  function CreateAttributes(program, config5) {
    const attributes = new Map();
    const defaultSettings = {
      size: 1,
      type: gl.FLOAT,
      normalized: false,
      stride: 0,
      offset: 0
    };
    const total = gl.getProgramParameter(program, gl.ACTIVE_ATTRIBUTES);
    for (let i = 0; i < total; i++) {
      const attrib = gl.getActiveAttrib(program, i);
      if (!attrib) {
        break;
      }
      const name = attrib.name;
      const index = gl.getAttribLocation(program, name);
      gl.enableVertexAttribArray(index);
      const setting = config5.hasOwnProperty(name) ? config5[name] : {};
      const {
        size = defaultSettings.size,
        type = defaultSettings.type,
        normalized = defaultSettings.normalized,
        stride = defaultSettings.stride,
        offset = defaultSettings.offset
      } = setting;
      attributes.set(name, {index, size, type, normalized, stride, offset});
    }
    return attributes;
  }

  // src/renderer/webgl1/shaders/DeleteShaders.ts
  function DeleteShaders2(...shaders2) {
    shaders2.forEach((shader) => {
      gl.deleteShader(shader);
    });
  }

  // src/renderer/webgl1/shaders/CreateProgram.ts
  function CreateProgram(...shaders2) {
    const program = gl.createProgram();
    shaders2.forEach((shader) => {
      gl.attachShader(program, shader);
    });
    gl.linkProgram(program);
    const status = gl.getProgramParameter(program, gl.LINK_STATUS);
    if (!status) {
      const info = gl.getProgramInfoLog(program);
      console.error(`Error linking program: ${info}`);
      gl.deleteProgram(program);
      DeleteShaders2(...shaders2);
      return null;
    }
    return program;
  }

  // src/renderer/webgl1/shaders/CreateShader.ts
  function CreateShader(source, type) {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    const status = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
    if (!status) {
      const info = gl.getShaderInfoLog(shader);
      const sourceLines = source.split("\n").map((line, index) => {
        return `${index}: ${line}`;
      });
      console.error(`Error compiling shader: ${info}`, sourceLines.join("\n"));
      gl.deleteShader(shader);
      return null;
    }
    return shader;
  }

  // src/renderer/webgl1/shaders/CreateUniformSetter.ts
  function CreateUniformSetter(uniform, location, isArray = false) {
    switch (uniform.type) {
      case gl.INT:
      case gl.BOOL: {
        if (isArray) {
          return (v) => {
            gl.uniform1iv(location, v);
          };
        } else {
          return (v) => {
            gl.uniform1i(location, v);
          };
        }
      }
      case gl.INT_VEC2:
      case gl.BOOL_VEC2: {
        return (v) => {
          gl.uniform2iv(location, v);
        };
      }
      case gl.INT_VEC3:
      case gl.BOOL_VEC3: {
        return (v) => {
          gl.uniform3iv(location, v);
        };
      }
      case gl.INT_VEC4:
      case gl.BOOL_VEC4: {
        return (v) => {
          gl.uniform4iv(location, v);
        };
      }
      case gl.FLOAT: {
        if (isArray) {
          return (v) => {
            gl.uniform1fv(location, v);
          };
        } else {
          return (v) => {
            gl.uniform1f(location, v);
          };
        }
      }
      case gl.FLOAT_VEC2: {
        return (v) => {
          gl.uniform2fv(location, v);
        };
      }
      case gl.FLOAT_VEC3: {
        return (v) => {
          gl.uniform3fv(location, v);
        };
      }
      case gl.FLOAT_VEC4: {
        return (v) => {
          gl.uniform4fv(location, v);
        };
      }
      case gl.FLOAT_MAT2: {
        return (v) => {
          gl.uniformMatrix2fv(location, false, v);
        };
      }
      case gl.FLOAT_MAT3: {
        return (v) => {
          gl.uniformMatrix3fv(location, false, v);
        };
      }
      case gl.FLOAT_MAT4: {
        return (v) => {
          gl.uniformMatrix4fv(location, false, v);
        };
      }
      case gl.SAMPLER_2D:
      case gl.SAMPLER_CUBE: {
        if (uniform.size > 1) {
          return (v) => {
            gl.uniform1iv(location, v);
          };
        } else {
          return (v) => {
            gl.uniform1i(location, v);
          };
        }
      }
    }
  }

  // src/renderer/webgl1/shaders/CreateUniforms.ts
  function CreateUniforms(program) {
    const uniforms = new Map();
    const total = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);
    for (let i = 0; i < total; i++) {
      const uniform = gl.getActiveUniform(program, i);
      let name = uniform.name;
      if (name.startsWith("gl_") || name.startsWith("webgl_")) {
        continue;
      }
      const location = gl.getUniformLocation(program, uniform.name);
      if (location) {
        let isArray = false;
        if (name.substr(-3) === "[0]") {
          name = name.substr(0, name.length - 3);
          isArray = uniform.size > 1;
        }
        uniforms.set(name, CreateUniformSetter(uniform, location, isArray));
      }
    }
    return uniforms;
  }

  // src/renderer/webgl1/GL_CONST.ts
  const UNSIGNED_BYTE = 5121;
  const FLOAT = 5126;

  // src/renderer/webgl1/shaders/DefaultQuadAttributes.ts
  const DefaultQuadAttributes = {
    aVertexPosition: {size: 2, type: FLOAT, normalized: false, offset: 0},
    aTextureCoord: {size: 2, type: FLOAT, normalized: false, offset: 8},
    aTextureId: {size: 1, type: FLOAT, normalized: false, offset: 16},
    aTintColor: {size: 4, type: UNSIGNED_BYTE, normalized: true, offset: 20}
  };

  // src/renderer/webgl1/shaders/DefaultQuadUniforms.ts
  const DefaultQuadUniforms = {
    uProjectionMatrix: new Float32Array(),
    uCameraMatrix: new Float32Array(),
    uTexture: 0
  };

  // src/renderer/webgl1/fbo/CreateDepthBuffer.ts
  function CreateDepthBuffer2(framebuffer, textureWidth, textureHeight) {
    gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer);
    const depthBuffer = gl.createRenderbuffer();
    gl.bindRenderbuffer(gl.RENDERBUFFER, depthBuffer);
    gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, textureWidth, textureHeight);
    gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, depthBuffer);
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    return depthBuffer;
  }

  // src/renderer/webgl1/fbo/CreateFramebuffer.ts
  function CreateFramebuffer2(texture, attachment) {
    if (!attachment) {
      attachment = gl.COLOR_ATTACHMENT0;
    }
    const framebuffer = gl.createFramebuffer();
    gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, attachment, gl.TEXTURE_2D, texture, 0);
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    return framebuffer;
  }

  // src/renderer/webgl1/glsl/SINGLE_QUAD_FRAG.ts
  const SINGLE_QUAD_FRAG = `#define SHADER_NAME SINGLE_QUAD_FRAG\r
\r
precision highp float;\r
\r
varying vec2 vTextureCoord;\r
varying float vTextureId;\r
varying vec4 vTintColor;\r
\r
uniform sampler2D uTexture;\r
\r
void main (void)\r
{\r
    vec4 color = texture2D(uTexture, vTextureCoord);\r
\r
    gl_FragColor = color * vec4(vTintColor.bgr * vTintColor.a, vTintColor.a);\r
}`;

  // src/renderer/webgl1/glsl/SINGLE_QUAD_VERT.ts
  const SINGLE_QUAD_VERT = `#define SHADER_NAME SINGLE_QUAD_VERT\r
\r
precision highp float;\r
\r
attribute vec2 aVertexPosition;\r
attribute vec2 aTextureCoord;\r
attribute float aTextureId;\r
attribute vec4 aTintColor;\r
\r
uniform mat4 uProjectionMatrix;\r
uniform mat4 uCameraMatrix;\r
\r
varying vec2 vTextureCoord;\r
varying float vTextureId;\r
varying vec4 vTintColor;\r
\r
void main (void)\r
{\r
    vTextureCoord = aTextureCoord;\r
    vTextureId = aTextureId;\r
    vTintColor = aTintColor;\r
\r
    gl_Position = uProjectionMatrix * uCameraMatrix * vec4(aVertexPosition, 0.0, 1.0);\r
}`;

  // src/textures/Frame.ts
  class Frame16 {
    constructor(texture, key, x, y, width, height) {
      this.trimmed = false;
      this.texture = texture;
      this.key = key;
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.sourceSizeWidth = width;
      this.sourceSizeHeight = height;
      this.updateUVs();
    }
    setPivot(x, y) {
      this.pivot = {x, y};
    }
    setSize(width, height) {
      this.width = width;
      this.height = height;
      this.sourceSizeWidth = width;
      this.sourceSizeHeight = height;
      this.updateUVs();
    }
    setSourceSize(width, height) {
      this.sourceSizeWidth = width;
      this.sourceSizeHeight = height;
    }
    setTrim(width, height, x, y, w, h) {
      this.trimmed = true;
      this.sourceSizeWidth = width;
      this.sourceSizeHeight = height;
      this.spriteSourceSizeX = x;
      this.spriteSourceSizeY = y;
      this.spriteSourceSizeWidth = w;
      this.spriteSourceSizeHeight = h;
    }
    getExtent(originX2, originY2) {
      const sourceSizeWidth = this.sourceSizeWidth;
      const sourceSizeHeight = this.sourceSizeHeight;
      let left;
      let right;
      let top;
      let bottom;
      if (this.trimmed) {
        left = this.spriteSourceSizeX - originX2 * sourceSizeWidth;
        right = left + this.spriteSourceSizeWidth;
        top = this.spriteSourceSizeY - originY2 * sourceSizeHeight;
        bottom = top + this.spriteSourceSizeHeight;
      } else {
        left = -originX2 * sourceSizeWidth;
        right = left + sourceSizeWidth;
        top = -originY2 * sourceSizeHeight;
        bottom = top + sourceSizeHeight;
      }
      return {left, right, top, bottom};
    }
    setExtent(child) {
      const transform = child.transform;
      const originX2 = transform.origin.x;
      const originY2 = transform.origin.y;
      const sourceSizeWidth = this.sourceSizeWidth;
      const sourceSizeHeight = this.sourceSizeHeight;
      let x;
      let y;
      let width;
      let height;
      if (this.trimmed) {
        x = this.spriteSourceSizeX - originX2 * sourceSizeWidth;
        y = this.spriteSourceSizeY - originY2 * sourceSizeHeight;
        width = this.spriteSourceSizeWidth;
        height = this.spriteSourceSizeHeight;
      } else {
        x = -originX2 * sourceSizeWidth;
        y = -originY2 * sourceSizeHeight;
        width = sourceSizeWidth;
        height = sourceSizeHeight;
      }
      transform.setExtent(x, y, width, height);
    }
    updateUVs() {
      const {x, y, width, height} = this;
      const baseTextureWidth = this.texture.width;
      const baseTextureHeight = this.texture.height;
      this.u0 = x / baseTextureWidth;
      this.v0 = y / baseTextureHeight;
      this.u1 = (x + width) / baseTextureWidth;
      this.v1 = (y + height) / baseTextureHeight;
    }
  }

  // src/textures/Texture.ts
  class Texture5 {
    constructor(image, width, height, glConfig) {
      this.key = "";
      if (image) {
        width = image.width;
        height = image.height;
      }
      this.image = image;
      this.width = width;
      this.height = height;
      this.frames = new Map();
      this.data = {};
      this.addFrame("__BASE", 0, 0, width, height);
      BindingQueue.add(this, glConfig);
    }
    addFrame(key, x, y, width, height) {
      if (this.frames.has(key)) {
        return null;
      }
      const frame2 = new Frame16(this, key, x, y, width, height);
      this.frames.set(key, frame2);
      if (!this.firstFrame || this.firstFrame.key === "__BASE") {
        this.firstFrame = frame2;
      }
      return frame2;
    }
    getFrame(key) {
      if (!key) {
        return this.firstFrame;
      }
      if (key instanceof Frame16) {
        key = key.key;
      }
      let frame2 = this.frames.get(key);
      if (!frame2) {
        console.warn(`Frame missing: ${key}`);
        frame2 = this.firstFrame;
      }
      return frame2;
    }
    setSize(width, height) {
      this.width = width;
      this.height = height;
      const frame2 = this.frames.get("__BASE");
      frame2.setSize(width, height);
    }
    destroy() {
      if (this.binding) {
        this.binding.destroy();
      }
      this.frames.clear();
      this.data = null;
      this.image = null;
      this.firstFrame = null;
    }
  }

  // src/renderer/webgl1/shaders/Shader.ts
  class Shader2 {
    constructor(config5) {
      this.renderToFramebuffer = false;
      this.renderToDepthbuffer = false;
      if (config5) {
        this.fromConfig(config5);
      }
    }
    fromConfig(config5) {
      const {
        attributes = DefaultQuadAttributes,
        fragmentShader = SINGLE_QUAD_FRAG,
        height = GetHeight(),
        renderToFramebuffer = false,
        renderToDepthbuffer = false,
        resolution = GetResolution(),
        vertexShader = SINGLE_QUAD_VERT,
        width = GetWidth(),
        uniforms = DefaultQuadUniforms
      } = config5;
      this.create(fragmentShader, vertexShader, uniforms, attributes);
      if (renderToFramebuffer) {
        this.renderToFramebuffer = true;
        const texture = new Texture5(null, width * resolution, height * resolution);
        const binding = new GLTextureBinding2(texture);
        texture.binding = binding;
        binding.framebuffer = CreateFramebuffer2(binding.texture);
        if (renderToDepthbuffer) {
          this.renderToDepthbuffer = true;
          binding.depthbuffer = CreateDepthBuffer2(binding.framebuffer, texture.width, texture.height);
        }
        this.texture = texture;
        this.framebuffer = binding.framebuffer;
      }
    }
    create(fragmentShaderSource, vertexShaderSource, uniforms, attribs) {
      const fragmentShader = CreateShader(fragmentShaderSource, gl.FRAGMENT_SHADER);
      const vertexShader = CreateShader(vertexShaderSource, gl.VERTEX_SHADER);
      if (!fragmentShader || !vertexShader) {
        return;
      }
      const program = CreateProgram(fragmentShader, vertexShader);
      if (!program) {
        return;
      }
      const currentProgram = gl.getParameter(gl.CURRENT_PROGRAM);
      gl.useProgram(program);
      this.program = program;
      this.uniformSetters = CreateUniforms(program);
      this.uniforms = new Map();
      for (const [key, value] of Object.entries(uniforms)) {
        this.uniforms.set(key, value);
      }
      this.attributes = CreateAttributes(program, attribs);
      gl.useProgram(currentProgram);
    }
    updateUniforms(renderPass) {
    }
    bind(renderPass) {
      this.updateUniforms(renderPass);
      return this.setUniforms(renderPass);
    }
    setUniform(key, value) {
      const uniforms = this.uniforms;
      if (uniforms.has(key)) {
        uniforms.set(key, value);
        const setter = this.uniformSetters.get(key);
        setter(value);
      }
    }
    setUniforms(renderPass) {
      if (!this.program) {
        return false;
      }
      gl.useProgram(this.program);
      const uniforms = this.uniforms;
      for (const [name, setter] of this.uniformSetters.entries()) {
        setter(uniforms.get(name));
      }
      return true;
    }
    setAttributes(renderPass) {
      if (this.program) {
        const stride = renderPass.currentVertexBuffer.vertexByteSize;
        this.attributes.forEach((attrib) => {
          gl.vertexAttribPointer(attrib.index, attrib.size, attrib.type, attrib.normalized, stride, attrib.offset);
        });
      }
    }
    destroy() {
      DeleteShaders2(this.program);
      DeleteGLTexture2(this.texture);
      DeleteFramebuffer2(this.framebuffer);
      this.uniforms.clear();
      this.uniformSetters.clear();
      this.attributes.clear();
      this.program = null;
      this.texture = null;
      this.framebuffer = null;
    }
  }

  // src/renderer/webgl1/shaders/QuadShader.ts
  class QuadShader2 extends Shader2 {
    constructor(config5 = {}) {
      const shaderConfig = config5;
      shaderConfig.attributes = !shaderConfig.attributes ? DefaultQuadAttributes : shaderConfig.attributes;
      super(shaderConfig);
    }
    bind(renderPass) {
      const uniforms = this.uniforms;
      uniforms.set("uProjectionMatrix", renderPass.projectionMatrix.data);
      uniforms.set("uCameraMatrix", renderPass.cameraMatrix.data);
      return super.bind(renderPass);
    }
  }

  // src/renderer/webgl1/shaders/FXShader.ts
  class FXShader extends QuadShader2 {
    constructor(config5 = {}) {
      const shaderConfig = config5;
      shaderConfig.attributes = !shaderConfig.attributes ? DefaultQuadAttributes : shaderConfig.attributes;
      shaderConfig.renderToFramebuffer = true;
      super(shaderConfig);
    }
    bind(renderPass) {
      const renderer = renderPass.renderer;
      this.uniforms.set("uTime", performance.now());
      this.uniforms.set("uResolution", [renderer.width, renderer.height]);
      return super.bind(renderPass);
    }
  }

  // src/renderer/webgl1/glsl/MULTI_QUAD_FRAG.ts
  const MULTI_QUAD_FRAG = `#define SHADER_NAME MULTI_QUAD_FRAG\r
\r
precision highp float;\r
\r
varying vec2 vTextureCoord;\r
varying float vTextureId;\r
varying vec4 vTintColor;\r
\r
uniform sampler2D uTexture[%count%];\r
\r
void main (void)\r
{\r
    vec4 color;\r
\r
    %forloop%\r
\r
    gl_FragColor = color * vec4(vTintColor.bgr * vTintColor.a, vTintColor.a);\r
}`;

  // src/renderer/webgl1/shaders/MultiTextureQuadShader.ts
  class MultiTextureQuadShader extends QuadShader2 {
    constructor(config5 = {}) {
      if (!config5.fragmentShader) {
        config5.fragmentShader = MULTI_QUAD_FRAG;
      }
      super(config5);
    }
    create(fragmentShaderSource, vertexShaderSource, uniforms, attribs) {
      const maxTextures2 = GetMaxTextures();
      let src = "";
      for (let i = 1; i < maxTextures2; i++) {
        if (i > 1) {
          src += "\n	else ";
        }
        if (i < maxTextures2 - 1) {
          src += `if (vTextureId < ${i}.5)`;
        }
        src += "\n	{";
        src += `
		color = texture2D(uTexture[${i}], vTextureCoord);`;
        src += "\n	}";
      }
      fragmentShaderSource = fragmentShaderSource.replace(/%count%/gi, `${maxTextures2}`);
      fragmentShaderSource = fragmentShaderSource.replace(/%forloop%/gi, src);
      super.create(fragmentShaderSource, vertexShaderSource, uniforms, attribs);
    }
    bind(renderPass) {
      this.uniforms.set("uTexture", renderPass.textureIndex);
      return super.bind(renderPass);
    }
  }

  // src/renderer/webgl1/shaders/index.ts

  // src/renderer/webgl1/renderpass/SetDefaultBlendMode.ts
  function SetDefaultBlendMode2(renderPass, enable, sfactor, dfactor) {
    const entry = {enable, sfactor, dfactor};
    renderPass.blendModeStack[0] = entry;
    renderPass.currentBlendMode = entry;
    renderPass.defaultBlendMode = entry;
  }

  // src/renderer/webgl1/renderpass/SetDefaultFramebuffer.ts
  function SetDefaultFramebuffer2(renderPass, framebuffer = null, viewport) {
    const entry = {framebuffer, viewport};
    renderPass.framebufferStack[0] = entry;
    renderPass.currentFramebuffer = entry;
    renderPass.defaultFramebuffer = entry;
  }

  // src/renderer/webgl1/renderpass/SetDefaultShader.ts
  function SetDefaultShader2(renderPass, shader, textureID) {
    const entry = {shader, textureID};
    renderPass.shaderStack[0] = entry;
    renderPass.currentShader = entry;
    renderPass.defaultShader = entry;
  }

  // src/renderer/webgl1/renderpass/SetDefaultVertexBuffer.ts
  function SetDefaultVertexBuffer2(renderPass, buffer) {
    renderPass.vertexBufferStack[0] = buffer;
    renderPass.currentVertexBuffer = buffer;
    renderPass.defaultVertexBuffer = buffer;
  }

  // src/renderer/webgl1/renderpass/SetDefaultViewport.ts
  function SetDefaultViewport2(renderPass, x = 0, y = 0, width = 0, height = 0) {
    const entry = new Rectangle(x, y, width, height);
    renderPass.viewportStack[0] = entry;
    renderPass.currentViewport = entry;
    renderPass.defaultViewport = entry;
  }

  // src/renderer/webgl1/renderpass/RenderPass.ts
  class RenderPass2 {
    constructor(renderer) {
      this.count = 0;
      this.prevCount = 0;
      this.flushTotal = 0;
      this.maxTextures = 0;
      this.currentActiveTexture = 0;
      this.startActiveTexture = 0;
      this.tempTextures = [];
      this.textureIndex = [];
      this.framebufferStack = [];
      this.currentFramebuffer = null;
      this.defaultFramebuffer = null;
      this.vertexBufferStack = [];
      this.currentVertexBuffer = null;
      this.defaultVertexBuffer = null;
      this.shaderStack = [];
      this.currentShader = null;
      this.defaultShader = null;
      this.viewportStack = [];
      this.currentViewport = null;
      this.defaultViewport = null;
      this.blendModeStack = [];
      this.currentBlendMode = null;
      this.defaultBlendMode = null;
      this.renderer = renderer;
      this.projectionMatrix = new Matrix4();
      this.reset();
    }
    reset() {
      const gl3 = this.renderer.gl;
      const indexLayout = [0, 1, 2, 2, 3, 0];
      this.quadShader = new QuadShader2();
      this.quadBuffer = new IndexedVertexBuffer({isDynamic: false, indexLayout});
      this.quadCamera = new StaticCamera();
      CreateTempTextures(this);
      SetDefaultFramebuffer2(this);
      SetDefaultBlendMode2(this, true, gl3.ONE, gl3.ONE_MINUS_SRC_ALPHA);
      SetDefaultVertexBuffer2(this, new IndexedVertexBuffer({batchSize, indexLayout}));
      SetDefaultShader2(this, new MultiTextureQuadShader());
    }
    resize(width, height) {
      Ortho(0, width, height, 0, -1e3, 1e3, this.projectionMatrix);
      this.quadCamera.reset();
      SetDefaultViewport2(this, 0, 0, width, height);
    }
  }

  // src/renderer/webgl1/renderpass/AddBlendMode.ts

  // src/renderer/webgl1/renderpass/AddShader.ts
  function AddShader(renderPass, shader, textureID) {
    const stackEntry = {shader, textureID};
    renderPass.shaderStack.push(stackEntry);
    return stackEntry;
  }

  // src/renderer/webgl1/renderpass/AddVertexBuffer.ts
  function AddVertexBuffer(renderPass, buffer) {
    renderPass.vertexBufferStack.push(buffer);
    return buffer;
  }

  // src/renderer/webgl1/renderpass/BindShader.ts
  function BindShader2(renderPass, entry) {
    if (!entry) {
      entry = renderPass.currentShader;
    }
    const success = entry.shader.bind(renderPass, entry.textureID);
    if (success) {
      entry.shader.setAttributes(renderPass);
    }
  }

  // src/renderer/webgl1/renderpass/Begin.ts
  function Begin(renderPass, camera2D) {
    renderPass.current2DCamera = camera2D;
    renderPass.cameraMatrix = camera2D.matrix;
    BindShader2(renderPass);
  }

  // src/renderer/webgl1/renderpass/BindBlendMode.ts
  function BindBlendMode(renderPass, entry) {
    if (!entry) {
      entry = renderPass.currentBlendMode;
    }
    if (entry.enable) {
      gl.enable(gl.BLEND);
      gl.blendFunc(entry.sfactor, entry.dfactor);
    } else {
      gl.disable(gl.BLEND);
    }
  }

  // src/renderer/webgl1/renderpass/BindTexture.ts
  function BindTexture(texture, index = 0) {
    const binding = texture.binding;
    binding.setIndex(index);
    gl.activeTexture(gl.TEXTURE0 + index);
    gl.bindTexture(gl.TEXTURE_2D, binding.texture);
  }

  // src/renderer/webgl1/renderpass/BindVertexBuffer.ts
  function BindVertexBuffer(renderPass, buffer) {
    if (!buffer) {
      buffer = renderPass.currentVertexBuffer;
    }
    const indexBuffer = buffer.indexed ? buffer.indexBuffer : null;
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer.vertexBuffer);
  }

  // src/renderer/webgl1/renderpass/PopVertexBuffer.ts
  function PopVertexBuffer(renderPass) {
    const stack = renderPass.vertexBufferStack;
    if (stack.length > 1) {
      stack.pop();
    }
    renderPass.currentVertexBuffer = stack[stack.length - 1];
    BindVertexBuffer(renderPass);
  }

  // src/renderer/webgl1/renderpass/SetVertexBuffer.ts
  function SetVertexBuffer(renderPass, buffer) {
    const entry = AddVertexBuffer(renderPass, buffer);
    BindVertexBuffer(renderPass, entry);
    renderPass.currentVertexBuffer = entry;
  }

  // src/renderer/webgl1/renderpass/FlushBuffer.ts
  function FlushBuffer(renderPass, buffer) {
    SetVertexBuffer(renderPass, buffer);
    renderPass.currentShader.shader.setAttributes(renderPass);
    const result = Flush(renderPass, buffer.count);
    PopVertexBuffer(renderPass);
    return result;
  }

  // src/renderer/webgl1/renderpass/GetVertexBufferEntry.ts
  function GetVertexBufferEntry2(renderPass, addToCount = 0) {
    const buffer = renderPass.currentVertexBuffer;
    if (renderPass.count + addToCount >= buffer.batchSize) {
      Flush(renderPass);
    }
    const offset = buffer.indexed ? renderPass.count * buffer.entryElementSize : renderPass.count * buffer.vertexElementSize;
    renderPass.count += addToCount;
    return {
      buffer,
      F32: buffer.vertexViewF32,
      U32: buffer.vertexViewU32,
      offset
    };
  }

  // src/renderer/webgl1/renderpass/IRenderPass.ts

  // src/renderer/webgl1/renderpass/PopBlendMode.ts

  // src/renderer/webgl1/renderpass/PopShader.ts
  function PopShader(renderPass) {
    const stack = renderPass.shaderStack;
    if (stack.length > 1) {
      stack.pop();
    }
    renderPass.currentShader = stack[stack.length - 1];
    BindShader2(renderPass);
  }

  // src/renderer/webgl1/renderpass/ResetTextures.ts

  // src/renderer/webgl1/renderpass/SetBlendMode.ts

  // src/renderer/webgl1/renderpass/SetShader.ts
  function SetShader(renderPass, shader, textureID) {
    const entry = AddShader(renderPass, shader, textureID);
    BindShader2(renderPass, entry);
    renderPass.currentShader = entry;
  }

  // src/renderer/webgl1/renderpass/SetTexture.ts
  function SetTexture2(renderPass, texture) {
    const binding = texture.binding;
    const currentActiveTexture = renderPass.currentActiveTexture;
    if (binding.indexCounter < renderPass.startActiveTexture) {
      binding.indexCounter = renderPass.startActiveTexture;
      if (currentActiveTexture < renderPass.maxTextures) {
        binding.setIndex(currentActiveTexture);
        gl.activeTexture(gl.TEXTURE0 + currentActiveTexture);
        gl.bindTexture(gl.TEXTURE_2D, binding.texture);
        renderPass.currentActiveTexture++;
      } else {
        Flush(renderPass);
        renderPass.startActiveTexture++;
        binding.indexCounter = renderPass.startActiveTexture;
        binding.setIndex(1);
        gl.activeTexture(gl.TEXTURE1);
        gl.bindTexture(gl.TEXTURE_2D, binding.texture);
        renderPass.currentActiveTexture = 2;
      }
    }
    return binding.index;
  }

  // src/renderer/webgl1/renderpass/Start.ts
  function Start(renderPass) {
    renderPass.current2DCamera = renderPass.quadCamera;
    renderPass.cameraMatrix = renderPass.quadCamera.matrix;
    renderPass.count = 0;
    renderPass.flushTotal = 0;
    BindFramebuffer(renderPass, false, renderPass.defaultFramebuffer);
    BindBlendMode(renderPass, renderPass.defaultBlendMode);
    BindViewport(renderPass, renderPass.defaultViewport);
    BindVertexBuffer(renderPass, renderPass.defaultVertexBuffer);
  }

  // src/renderer/webgl1/renderpass/UnbindTexture.ts
  function UnbindTexture(renderPass, index = 0) {
    gl.activeTexture(gl.TEXTURE0 + index);
    gl.bindTexture(gl.TEXTURE_2D, renderPass.tempTextures[index]);
    if (index > 0) {
      renderPass.startActiveTexture++;
    }
  }

  // src/renderer/webgl1/renderpass/index.ts

  // src/renderer/webgl1/WebGLRendererInstance.ts
  let instance3;
  const WebGLRendererInstance2 = {
    get: () => {
      return instance3;
    },
    set: (renderer) => {
      instance3 = renderer;
    }
  };

  // src/renderer/webgl1/WebGLRenderer.ts
  class WebGLRenderer2 {
    constructor() {
      this.clearColor = [0, 0, 0, 1];
      this.clearBeforeRender = true;
      this.optimizeRedraw = false;
      this.autoResize = true;
      this.contextLost = false;
      this.width = GetWidth();
      this.height = GetHeight();
      this.resolution = GetResolution();
      this.setBackgroundColor(GetBackgroundColor());
      const canvas = document.createElement("canvas");
      canvas.addEventListener("webglcontextlost", (event) => this.onContextLost(event), false);
      canvas.addEventListener("webglcontextrestored", () => this.onContextRestored(), false);
      this.canvas = canvas;
      this.initContext();
      WebGLRendererInstance2.set(this);
      this.renderPass = new RenderPass2(this);
      this.resize(this.width, this.height, this.resolution);
    }
    initContext() {
      const gl3 = this.canvas.getContext("webgl", GetWebGLContext());
      GL2.set(gl3);
      this.gl = gl3;
      gl3.disable(gl3.DEPTH_TEST);
      gl3.disable(gl3.CULL_FACE);
    }
    resize(width, height, resolution = 1) {
      const calcWidth = width * resolution;
      const calcHeight = height * resolution;
      this.width = calcWidth;
      this.height = calcHeight;
      this.resolution = resolution;
      const canvas = this.canvas;
      canvas.width = calcWidth;
      canvas.height = calcHeight;
      if (this.autoResize) {
        canvas.style.width = width.toString() + "px";
        canvas.style.height = height.toString() + "px";
      }
      this.renderPass.resize(calcWidth, calcHeight);
    }
    onContextLost(event) {
      event.preventDefault();
      this.contextLost = true;
    }
    onContextRestored() {
      this.contextLost = false;
      this.initContext();
    }
    setBackgroundColor(color2) {
      GetRGBArray2(color2, this.clearColor);
      return this;
    }
    reset() {
    }
    render(renderData) {
      if (this.contextLost) {
        return;
      }
      const gl3 = this.gl;
      const renderPass = this.renderPass;
      ProcessBindingQueue2();
      if (this.optimizeRedraw && renderData.numDirtyFrames === 0 && renderData.numDirtyCameras === 0) {
        return;
      }
      if (this.clearBeforeRender) {
        const cls = this.clearColor;
        gl3.clearColor(cls[0], cls[1], cls[2], cls[3]);
        gl3.clear(gl3.COLOR_BUFFER_BIT);
      }
      const worlds = renderData.worldData;
      Start(renderPass);
      for (let i = 0; i < worlds.length; i++) {
        const {world} = worlds[i];
        world.renderGL(renderPass);
        world.postRenderGL(renderPass);
      }
      End2(renderPass);
    }
    destroy() {
      WebGLRendererInstance2.set(void 0);
    }
  }

  // src/config/SetWebGL.ts
  function SetWebGL() {
    return () => {
      SetRenderer2(WebGLRenderer2);
    };
  }

  // src/config/index.ts
  const config_exports = {};
  __export(config_exports, {
    BackgroundColor: () => BackgroundColor,
    Banner: () => Banner,
    BatchSize: () => BatchSize,
    CanvasContext: () => CanvasContext,
    DefaultOrigin: () => DefaultOrigin,
    GetBackgroundColor: () => GetBackgroundColor,
    GetBanner: () => GetBanner,
    GetCanvasContext: () => GetCanvasContext,
    GetHeight: () => GetHeight,
    GetMaxTextures: () => GetMaxTextures,
    GetParent: () => GetParent,
    GetRenderer: () => GetRenderer,
    GetResolution: () => GetResolution,
    GetScenes: () => GetScenes,
    GetWebGLContext: () => GetWebGLContext,
    GetWidth: () => GetWidth,
    MaxTextures: () => MaxTextures,
    Parent: () => Parent,
    Scenes: () => Scenes,
    SetCanvas: () => SetCanvas,
    SetMaxTextures: () => SetMaxTextures,
    SetRenderer: () => SetRenderer2,
    SetWebGL: () => SetWebGL,
    Size: () => Size,
    WebGLContext: () => WebGLContext
  });

  // src/dom/AddToDOM.ts
  function AddToDOM(element, parent2) {
    const target = GetElement2(parent2);
    target.appendChild(element);
    return element;
  }

  // src/dom/DOMContentLoaded.ts
  function DOMContentLoaded(callback) {
    const readyState = document.readyState;
    if (readyState === "complete" || readyState === "interactive") {
      callback();
      return;
    }
    const check = () => {
      document.removeEventListener("deviceready", check, true);
      document.removeEventListener("DOMContentLoaded", check, true);
      window.removeEventListener("load", check, true);
      callback();
    };
    if (!document.body) {
      window.setTimeout(check, 20);
    } else if (window.hasOwnProperty("cordova")) {
      document.addEventListener("deviceready", check, true);
    } else {
      document.addEventListener("DOMContentLoaded", check, true);
      window.addEventListener("load", check, true);
    }
  }

  // src/dom/ParseXML.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function ParseXML(data) {
    let xml;
    try {
      const parser = new DOMParser();
      xml = parser.parseFromString(data, "text/xml");
      if (!xml || !xml.documentElement || xml.getElementsByTagName("parsererror").length) {
        return null;
      } else {
        return xml;
      }
    } catch (error) {
      return null;
    }
  }

  // src/dom/RemoveFromDOM.ts
  function RemoveFromDOM(element) {
    if (element.parentNode) {
      element.parentNode.removeChild(element);
    }
  }

  // src/dom/index.ts
  const dom_exports = {};
  __export(dom_exports, {
    AddToDOM: () => AddToDOM,
    DOMContentLoaded: () => DOMContentLoaded,
    GetElement: () => GetElement2,
    ParseXML: () => ParseXML,
    RemoveFromDOM: () => RemoveFromDOM
  });

  // src/device/audio/CanPlayAudioType.ts
  let _audioElement;
  function CanPlayAudioType(type, audioElement) {
    if (!audioElement) {
      if (!_audioElement) {
        _audioElement = document.createElement("audio");
      }
      audioElement = _audioElement;
    }
    return audioElement && audioElement.canPlayType(type) !== "";
  }

  // src/device/audio/CanPlayM4A.ts
  function CanPlayM4A(audioElement) {
    return CanPlayAudioType("audio/x-m4a", audioElement) || CanPlayAudioType("audio/aac", audioElement);
  }

  // src/device/audio/CanPlayMP3.ts
  function CanPlayMP3(audioElement) {
    return CanPlayAudioType('audio/mpeg; codecs="mp3"', audioElement);
  }

  // src/device/audio/CanPlayOGG.ts
  function CanPlayOGG(audioElement) {
    return CanPlayAudioType('audio/ogg; codecs="vorbis"', audioElement);
  }

  // src/device/audio/CanPlayOpus.ts
  function CanPlayOpus(audioElement) {
    return CanPlayAudioType('audio/ogg; codecs="opus"', audioElement) || CanPlayAudioType('audio/webm; codecs="opus"', audioElement);
  }

  // src/device/audio/CanPlayWAV.ts
  function CanPlayWAV(audioElement) {
    return CanPlayAudioType('audio/wav; codecs="1"', audioElement);
  }

  // src/device/audio/CanPlayWebM.ts
  function CanPlayWebM(audioElement) {
    return CanPlayAudioType('audio/webm; codecs="vorbis"', audioElement);
  }

  // src/device/audio/HasAudio.ts
  function HasAudio2() {
    return window && window.hasOwnProperty("Audio");
  }

  // src/device/audio/HasWebAudio.ts
  function HasWebAudio2() {
    return window && (window.hasOwnProperty("AudioContext") || window.hasOwnProperty("webkitAudioContext"));
  }

  // src/device/audio/GetAudio.ts
  function GetAudio() {
    const result = {
      audioData: HasAudio2(),
      m4a: false,
      mp3: false,
      ogg: false,
      opus: false,
      wav: false,
      webAudio: HasWebAudio2(),
      webm: false
    };
    if (result.audioData) {
      result.m4a = CanPlayM4A();
      result.mp3 = CanPlayMP3();
      result.ogg = CanPlayOGG();
      result.opus = CanPlayOpus();
      result.wav = CanPlayWAV();
      result.webm = CanPlayWebM();
    }
    return result;
  }

  // src/device/audio/index.ts
  const audio_exports = {};
  __export(audio_exports, {
    CanPlayAudioType: () => CanPlayAudioType,
    CanPlayM4A: () => CanPlayM4A,
    CanPlayMP3: () => CanPlayMP3,
    CanPlayOGG: () => CanPlayOGG,
    CanPlayOpus: () => CanPlayOpus,
    CanPlayWAV: () => CanPlayWAV,
    CanPlayWebM: () => CanPlayWebM,
    GetAudio: () => GetAudio,
    HasAudio: () => HasAudio2,
    HasWebAudio: () => HasWebAudio2
  });

  // src/device/browser/IsChrome.ts
  function IsChrome2() {
    const chrome = /Chrome\/(\d+)/.test(navigator.userAgent);
    const chromeVersion = chrome ? parseInt(RegExp.$1, 10) : 0;
    return {
      chrome,
      chromeVersion
    };
  }

  // src/device/browser/IsEdge.ts
  function IsEdge2() {
    const edge = /Edge\/\d+/.test(navigator.userAgent);
    return {
      edge
    };
  }

  // src/device/browser/IsFirefox.ts
  function IsFirefox2() {
    const firefox = /Firefox\D+(\d+)/.test(navigator.userAgent);
    const firefoxVersion = firefox ? parseInt(RegExp.$1, 10) : 0;
    return {
      firefox,
      firefoxVersion
    };
  }

  // src/device/browser/IsMSIE.ts
  function IsMSIE2() {
    const ie = /MSIE (\d+\.\d+);/.test(navigator.userAgent);
    const ieVersion = ie ? parseInt(RegExp.$1, 10) : 0;
    return {
      ie,
      ieVersion
    };
  }

  // src/device/os/IsiOS.ts
  function IsiOS2() {
    const ua = navigator.userAgent;
    const result = {
      iOS: false,
      iOSVersion: 0,
      iPhone: false,
      iPad: false
    };
    if (/iP[ao]d|iPhone/i.test(ua)) {
      const match = /OS (\d+)/.exec(navigator.appVersion);
      result.iOS = true;
      result.iOSVersion = parseInt(match[0], 10);
      result.iPhone = ua.toLowerCase().includes("iphone");
      result.iPad = ua.toLowerCase().includes("ipad");
    }
    return result;
  }

  // src/device/browser/IsMobileSafari.ts
  function IsMobileSafari2() {
    const {iOS} = IsiOS2();
    const mobileSafari = navigator.userAgent.includes("AppleWebKit") && iOS;
    return {
      mobileSafari
    };
  }

  // src/device/browser/IsOpera.ts
  function IsOpera2() {
    const opera = navigator.userAgent.includes("Opera");
    return {
      opera
    };
  }

  // src/device/os/IsWindowsPhone.ts
  function IsWindowsPhone2() {
    const ua = navigator.userAgent;
    return /Windows Phone/i.test(ua) || /IEMobile/i.test(ua);
  }

  // src/device/browser/IsSafari.ts
  function IsSafari2() {
    const ua = navigator.userAgent;
    const safari = ua.includes("Safari") && !IsWindowsPhone2();
    const safariVersion = /Version\/(\d+)\./.test(ua) ? parseInt(RegExp.$1, 10) : 0;
    return {
      safari,
      safariVersion
    };
  }

  // src/device/browser/IsSilk.ts
  function IsSilk2() {
    const silk = navigator.userAgent.includes("Silk");
    return {
      silk
    };
  }

  // src/device/browser/IsTrident.ts
  function IsTrident2() {
    const trident = /Trident\/(\d+\.\d+)(.*)rv:(\d+\.\d+)/.test(navigator.userAgent);
    const tridentVersion = trident ? parseInt(RegExp.$1, 10) : 0;
    const tridentIEVersion = trident ? parseInt(RegExp.$3, 10) : 0;
    return {
      trident,
      tridentVersion,
      tridentIEVersion
    };
  }

  // src/device/browser/GetBrowser.ts
  function GetBrowser() {
    const {chrome, chromeVersion} = IsChrome2();
    const {edge} = IsEdge2();
    const {firefox, firefoxVersion} = IsFirefox2();
    let {ie, ieVersion} = IsMSIE2();
    const {mobileSafari} = IsMobileSafari2();
    const {opera} = IsOpera2();
    const {safari, safariVersion} = IsSafari2();
    const {silk} = IsSilk2();
    const {trident, tridentVersion, tridentIEVersion} = IsTrident2();
    if (trident) {
      ie = true;
      ieVersion = tridentIEVersion;
    }
    const result = {
      chrome,
      chromeVersion,
      edge,
      firefox,
      firefoxVersion,
      ie,
      ieVersion,
      mobileSafari,
      opera,
      safari,
      safariVersion,
      silk,
      trident,
      tridentVersion
    };
    return result;
  }

  // src/device/browser/index.ts
  const browser_exports = {};
  __export(browser_exports, {
    GetBrowser: () => GetBrowser,
    IsChrome: () => IsChrome2,
    IsEdge: () => IsEdge2,
    IsFirefox: () => IsFirefox2,
    IsMSIE: () => IsMSIE2,
    IsMobileSafari: () => IsMobileSafari2,
    IsOpera: () => IsOpera2,
    IsSafari: () => IsSafari2,
    IsSilk: () => IsSilk2,
    IsTrident: () => IsTrident2
  });

  // src/device/os/IsAndroid.ts
  function IsAndroid2() {
    return navigator.userAgent.includes("Android");
  }

  // src/device/os/IsChromeOS.ts
  function IsChromeOS2() {
    return navigator.userAgent.includes("CrOS");
  }

  // src/device/os/IsCordova.ts
  function IsCordova2() {
    return window.hasOwnProperty("cordova");
  }

  // src/device/os/IsCrosswalk.ts
  function IsCrosswalk2() {
    return navigator.userAgent.includes("Crosswalk");
  }

  // src/device/os/IsEjecta.ts
  function IsEjecta2() {
    return window.hasOwnProperty("ejecta");
  }

  // src/device/os/IsKindle.ts
  function IsKindle2() {
    const ua = navigator.userAgent;
    return ua.includes("Kindle") || /\bKF[A-Z][A-Z]+/.test(ua) || /Silk.*Mobile Safari/.test(ua);
  }

  // src/device/os/IsLinux.ts
  function IsLinux2() {
    return navigator.userAgent.includes("Linux");
  }

  // src/device/os/IsMacOS.ts
  function IsMacOS2() {
    const ua = navigator.userAgent;
    return ua.includes("Mac OS") && !ua.includes("like Mac OS");
  }

  // src/device/os/IsNode.ts
  function IsNode2() {
    return typeof process !== "undefined" && typeof process.versions === "object" && process.versions.hasOwnProperty("node");
  }

  // src/device/os/IsNodeWebkit.ts
  function IsNodeWebkit2() {
    return IsNode2() && !!process.versions.hasOwnProperty("node-webkit");
  }

  // src/device/os/IsWebApp.ts
  function IsWebApp2() {
    return navigator.hasOwnProperty("standalone");
  }

  // src/device/os/IsWindows.ts
  function IsWindows2() {
    return navigator.userAgent.includes("Windows");
  }

  // src/device/os/GetOS.ts
  function GetOS() {
    const ua = navigator.userAgent;
    const {iOS, iOSVersion, iPad, iPhone} = IsiOS2();
    const result = {
      android: IsAndroid2(),
      chromeOS: IsChromeOS2(),
      cordova: IsCordova2(),
      crosswalk: IsCrosswalk2(),
      desktop: false,
      ejecta: IsEjecta2(),
      iOS,
      iOSVersion,
      iPad,
      iPhone,
      kindle: IsKindle2(),
      linux: IsLinux2(),
      macOS: IsMacOS2(),
      node: IsNode2(),
      nodeWebkit: IsNodeWebkit2(),
      pixelRatio: 1,
      webApp: IsWebApp2(),
      windows: IsWindows2(),
      windowsPhone: IsWindowsPhone2()
    };
    if (result.windowsPhone) {
      result.android = false;
      result.iOS = false;
      result.macOS = false;
      result.windows = true;
    }
    const silk = ua.includes("Silk");
    if (result.windows || result.macOS || result.linux && !silk || result.chromeOS) {
      result.desktop = true;
    }
    if (result.windowsPhone || /Windows NT/i.test(ua) && /Touch/i.test(ua)) {
      result.desktop = false;
    }
    return result;
  }

  // src/device/os/index.ts
  const os_exports = {};
  __export(os_exports, {
    GetOS: () => GetOS,
    IsAndroid: () => IsAndroid2,
    IsChromeOS: () => IsChromeOS2,
    IsCordova: () => IsCordova2,
    IsCrosswalk: () => IsCrosswalk2,
    IsEjecta: () => IsEjecta2,
    IsKindle: () => IsKindle2,
    IsLinux: () => IsLinux2,
    IsMacOS: () => IsMacOS2,
    IsNode: () => IsNode2,
    IsNodeWebkit: () => IsNodeWebkit2,
    IsWebApp: () => IsWebApp2,
    IsWindows: () => IsWindows2,
    IsWindowsPhone: () => IsWindowsPhone2,
    IsiOS: () => IsiOS2
  });

  // src/device/video/CanPlayVideoType.ts
  let _videoElement;
  function CanPlayVideoType2(type, videoElement) {
    if (!videoElement) {
      if (!_videoElement) {
        _videoElement = document.createElement("video");
      }
      videoElement = _videoElement;
    }
    return videoElement && videoElement.canPlayType(type) !== "";
  }

  // src/device/video/CanPlayH264Video.ts
  function CanPlayH264Video(videoElement) {
    return CanPlayVideoType2('video/mp4; codecs="avc1.42E01E"', videoElement);
  }

  // src/device/video/CanPlayHLSVideo.ts
  function CanPlayHLSVideo(videoElement) {
    return CanPlayVideoType2('application/x-mpegURL; codecs="avc1.42E01E"', videoElement);
  }

  // src/device/video/CanPlayOGGVideo.ts
  function CanPlayOGGVideo(videoElement) {
    return CanPlayVideoType2('video/ogg; codecs="theora"', videoElement);
  }

  // src/device/video/CanPlayVP9Video.ts
  function CanPlayVP9Video(videoElement) {
    return CanPlayVideoType2('video/webm; codecs="vp9"', videoElement);
  }

  // src/device/video/CanPlayWebMVideo.ts
  function CanPlayWebMVideo(videoElement) {
    return CanPlayVideoType2('video/webm; codecs="vp8, vorbis"', videoElement);
  }

  // src/device/video/GetVideo.ts
  function GetVideo() {
    return {
      h264Video: CanPlayH264Video(),
      hlsVideo: CanPlayHLSVideo(),
      oggVideo: CanPlayOGGVideo(),
      vp9Video: CanPlayVP9Video(),
      webmVideo: CanPlayWebMVideo()
    };
  }

  // src/device/video/index.ts
  const video_exports = {};
  __export(video_exports, {
    CanPlayH264Video: () => CanPlayH264Video,
    CanPlayHLSVideo: () => CanPlayHLSVideo,
    CanPlayOGGVideo: () => CanPlayOGGVideo,
    CanPlayVP9Video: () => CanPlayVP9Video,
    CanPlayVideoType: () => CanPlayVideoType2,
    CanPlayWebMVideo: () => CanPlayWebMVideo,
    GetVideo: () => GetVideo
  });

  // src/device/index.ts
  const device_exports = {};
  __export(device_exports, {
    Audio: () => audio_exports,
    Browser: () => browser_exports,
    CanPlayAudioType: () => CanPlayAudioType,
    CanPlayH264Video: () => CanPlayH264Video,
    CanPlayHLSVideo: () => CanPlayHLSVideo,
    CanPlayM4A: () => CanPlayM4A,
    CanPlayMP3: () => CanPlayMP3,
    CanPlayOGG: () => CanPlayOGG,
    CanPlayOGGVideo: () => CanPlayOGGVideo,
    CanPlayOpus: () => CanPlayOpus,
    CanPlayVP9Video: () => CanPlayVP9Video,
    CanPlayVideoType: () => CanPlayVideoType2,
    CanPlayWAV: () => CanPlayWAV,
    CanPlayWebM: () => CanPlayWebM,
    CanPlayWebMVideo: () => CanPlayWebMVideo,
    GetAudio: () => GetAudio,
    GetBrowser: () => GetBrowser,
    GetOS: () => GetOS,
    GetVideo: () => GetVideo,
    HasAudio: () => HasAudio2,
    HasWebAudio: () => HasWebAudio2,
    IsAndroid: () => IsAndroid2,
    IsChrome: () => IsChrome2,
    IsChromeOS: () => IsChromeOS2,
    IsCordova: () => IsCordova2,
    IsCrosswalk: () => IsCrosswalk2,
    IsEdge: () => IsEdge2,
    IsEjecta: () => IsEjecta2,
    IsFirefox: () => IsFirefox2,
    IsKindle: () => IsKindle2,
    IsLinux: () => IsLinux2,
    IsMSIE: () => IsMSIE2,
    IsMacOS: () => IsMacOS2,
    IsMobileSafari: () => IsMobileSafari2,
    IsNode: () => IsNode2,
    IsNodeWebkit: () => IsNodeWebkit2,
    IsOpera: () => IsOpera2,
    IsSafari: () => IsSafari2,
    IsSilk: () => IsSilk2,
    IsTrident: () => IsTrident2,
    IsWebApp: () => IsWebApp2,
    IsWindows: () => IsWindows2,
    IsWindowsPhone: () => IsWindowsPhone2,
    IsiOS: () => IsiOS2,
    OS: () => os_exports,
    Video: () => video_exports
  });

  // src/display/DepthFirstSearch.ts
  function DepthFirstSearch(parent2) {
    const stack = [parent2];
    const output = [];
    while (stack.length > 0) {
      const node = stack.shift();
      output.push(node);
      const numChildren = node.numChildren;
      if (numChildren > 0) {
        for (let i = numChildren - 1; i >= 0; i--) {
          stack.unshift(node.children[i]);
        }
      }
    }
    output.shift();
    return output;
  }

  // src/display/GetChildIndex.ts
  function GetChildIndex2(parent2, child) {
    return parent2.children.indexOf(child);
  }

  // src/display/RemoveChildAt.ts
  function RemoveChildAt2(parent2, index) {
    const children = parent2.children;
    let child;
    if (index >= 0 && index < children.length) {
      const removed = children.splice(index, 1);
      if (removed[0]) {
        child = removed[0];
        child.parent = null;
      }
    }
    return child;
  }

  // src/display/RemoveChild.ts
  function RemoveChild(parent2, child) {
    const currentIndex = GetChildIndex2(parent2, child);
    if (currentIndex > -1) {
      RemoveChildAt2(parent2, currentIndex);
    }
    return child;
  }

  // src/gameobjects/events/AddedToWorldEvent.ts
  const AddedToWorldEvent = "addedtoworld";

  // src/gameobjects/events/DestroyEvent.ts
  const DestroyEvent = "destroy";

  // src/gameobjects/events/PostUpdateEvent.ts
  const PostUpdateEvent = "postupdate";

  // src/gameobjects/events/RemovedFromWorldEvent.ts
  const RemovedFromWorldEvent = "removedfromworld";

  // src/gameobjects/events/UpdateEvent.ts
  const UpdateEvent = "update";

  // src/gameobjects/events/index.ts

  // src/events/Emit.ts
  function Emit(emitter, event, ...args) {
    if (emitter.events.size === 0 || !emitter.events.has(event)) {
      return false;
    }
    const listeners = emitter.events.get(event);
    for (const ee of listeners) {
      ee.callback.apply(ee.context, args);
      if (ee.once) {
        listeners.delete(ee);
      }
    }
    if (listeners.size === 0) {
      emitter.events.delete(event);
    }
    return true;
  }

  // src/display/SetWorld.ts
  function SetWorld2(world, ...children) {
    children.forEach((child) => {
      if (child.world) {
        Emit(child.world, RemovedFromWorldEvent, child, child.world);
        Emit(child, RemovedFromWorldEvent, child, child.world);
      }
      child.world = world;
      Emit(world, AddedToWorldEvent, child, world);
      Emit(child, AddedToWorldEvent, child, world);
    });
    return children;
  }

  // src/display/SetParent.ts
  function SetParent2(parent2, ...children) {
    children.forEach((child) => {
      if (child.parent) {
        RemoveChild(child.parent, child);
      }
      child.parent = parent2;
    });
    const parentWorld = parent2.world;
    if (parentWorld) {
      SetWorld2(parentWorld, ...DepthFirstSearch(parent2));
    }
    return children;
  }

  // src/display/AddChild.ts
  function AddChild(parent2, child) {
    parent2.children.push(child);
    SetParent2(parent2, child);
    child.transform.updateWorld();
    return child;
  }

  // src/display/AddChildAt.ts
  function AddChildAt(parent2, index, child) {
    const children = parent2.children;
    if (index >= 0 && index <= children.length) {
      SetParent2(parent2, child);
      children.splice(index, 0, child);
      child.transform.updateWorld();
    }
    return child;
  }

  // src/display/AddChildren.ts
  function AddChildren(parent2, ...children) {
    children.forEach((child) => {
      AddChild(parent2, child);
    });
    return children;
  }

  // src/display/AddChildrenAt.ts
  function AddChildrenAt(parent2, index, ...children) {
    const parentChildren = parent2.children;
    if (index >= 0 && index <= parentChildren.length) {
      children.reverse().forEach((child) => {
        children.splice(index, 0, child);
        SetParent2(parent2, child);
        child.transform.updateWorld();
      });
    }
    return children;
  }

  // src/display/AddPosition.ts
  function AddPosition(x, y, ...children) {
    children.forEach((child) => {
      child.x += x;
      child.y += y;
    });
    return children;
  }

  // src/display/AddRotation.ts
  function AddRotation(rotation, ...children) {
    children.forEach((child) => {
      child.rotation += rotation;
    });
    return children;
  }

  // src/display/AddScale.ts
  function AddScale(scaleX, scaleY, ...children) {
    children.forEach((child) => {
      child.scaleX += scaleX;
      child.scaleY += scaleY;
    });
    return children;
  }

  // src/display/AddSkew.ts
  function AddSkew(skewX, skewY, ...children) {
    children.forEach((child) => {
      child.skewX += skewX;
      child.skewY += skewY;
    });
    return children;
  }

  // src/gameobjects/DIRTY_CONST.ts
  const DIRTY_CONST2 = {
    CLEAR: 0,
    TRANSFORM: 1,
    UPDATE: 2,
    CHILD_CACHE: 4,
    POST_RENDER: 8,
    COLORS: 16,
    BOUNDS: 32,
    TEXTURE: 64,
    FRAME: 128,
    ALPHA: 256,
    CHILD: 512,
    DEFAULT: 1 + 2 + 16 + 32,
    USER1: 536870912,
    USER2: 1073741824,
    USER3: 2147483648,
    USER4: 4294967296
  };

  // src/display/BringChildToTop.ts
  function BringChildToTop(parent2, child) {
    const parentChildren = parent2.children;
    const currentIndex = GetChildIndex2(parent2, child);
    if (currentIndex !== -1 && currentIndex < parentChildren.length) {
      parentChildren.splice(currentIndex, 1);
      parentChildren.push(child);
      child.setDirty(DIRTY_CONST2.TRANSFORM);
    }
    return child;
  }

  // src/display/DepthFirstSearchRecursiveNested.ts
  function DepthFirstSearchRecursiveNested2(parent2, output = []) {
    for (let i = 0; i < parent2.numChildren; i++) {
      const node = parent2.children[i];
      const children = [];
      output.push({node, children});
      if (node.numChildren > 0) {
        DepthFirstSearchRecursiveNested2(node, children);
      }
    }
    return output;
  }

  // src/display/ConsoleTreeChildren.ts
  function GetInfo2(entry) {
    const legend = entry.numChildren > 0 ? "Parent" : "Child";
    return `${legend} [ type=${entry.type}, name=${entry.name} ]`;
  }
  function LogChildren2(entry) {
    console.group(GetInfo2(entry.node));
    entry.children.forEach((child) => {
      if (child.children.length > 0) {
        LogChildren2(child);
      } else {
        console.log(GetInfo2(child.node));
      }
    });
    console.groupEnd();
  }
  function ConsoleTreeChildren(parent2) {
    const entries = DepthFirstSearchRecursiveNested2(parent2);
    if (parent2.world === parent2) {
      console.group("World");
    } else {
      console.group(GetInfo2(parent2));
    }
    entries.forEach((entry) => {
      if (entry.children.length) {
        LogChildren2(entry);
      } else {
        console.log(GetInfo2(entry.node));
      }
    });
    console.groupEnd();
  }

  // src/display/CountMatchingChildren.ts
  function CountMatchingChildren(parent2, property, value) {
    const children = parent2.children;
    let total = 0;
    children.forEach((child) => {
      const descriptor = Object.getOwnPropertyDescriptor(child, property);
      if (descriptor && (value === void 0 || value === descriptor.value)) {
        total++;
      }
    });
    return total;
  }

  // src/display/DepthFirstSearchRecursive.ts
  function DepthFirstSearchRecursive(parent2, output = []) {
    for (let i = 0; i < parent2.numChildren; i++) {
      const child = parent2.children[i];
      output.push(child);
      if (child.numChildren > 0) {
        DepthFirstSearchRecursive(child, output);
      }
    }
    return output;
  }

  // src/display/RemoveChildrenBetween.ts
  function RemoveChildrenBetween2(parent2, beginIndex = 0, endIndex) {
    const children = parent2.children;
    if (endIndex === void 0) {
      endIndex = children.length;
    }
    const range = endIndex - beginIndex;
    if (range > 0 && range <= endIndex) {
      const removed = children.splice(beginIndex, range);
      removed.forEach((child) => {
        child.parent = null;
      });
      return removed;
    } else {
      return [];
    }
  }

  // src/display/DestroyChildren.ts
  function DestroyChildren(parent2, beginIndex = 0, endIndex) {
    const removed = RemoveChildrenBetween2(parent2, beginIndex, endIndex);
    removed.forEach((child) => {
      child.destroy();
    });
  }

  // src/display/FindChildByName.ts
  function FindChildByName(parent2, searchString) {
    const children = DepthFirstSearch(parent2);
    const regex = RegExp(searchString);
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      if (regex.test(child.name)) {
        return child;
      }
    }
  }

  // src/display/FindChildrenByName.ts
  function FindChildrenByName(parent2, searchString) {
    const children = DepthFirstSearch(parent2);
    const regex = RegExp(searchString);
    const results = [];
    children.forEach((child) => {
      if (regex.test(child.name)) {
        results.push(child);
      }
    });
    return results;
  }

  // src/display/GetAllChildren.ts
  function GetAllChildren(parent2, property, value) {
    const children = DepthFirstSearch(parent2);
    if (!property) {
      return children;
    }
    const results = [];
    children.forEach((child) => {
      const descriptor = Object.getOwnPropertyDescriptor(child, property);
      if (descriptor && (value === void 0 || value === descriptor.value)) {
        results.push(child);
      }
    });
    return results;
  }

  // src/display/GetChildAt.ts
  function GetChildAt(parent2, index) {
    const children = parent2.children;
    if (index < 0 || index > children.length) {
      throw new Error(`Index out of bounds: ${index}`);
    }
    return children[index];
  }

  // src/display/GetChildren.ts
  function GetChildren(parent2, property, value) {
    const children = parent2.children;
    if (!property) {
      return [...children];
    }
    const results = [];
    children.forEach((child) => {
      const descriptor = Object.getOwnPropertyDescriptor(child, property);
      if (descriptor && (value === void 0 || value === descriptor.value)) {
        results.push(child);
      }
    });
    return results;
  }

  // src/display/GetClosestChild.ts
  function GetClosestChild(parent2, point) {
    const children = parent2.children;
    let closest = null;
    let distance = 0;
    children.forEach((child) => {
      const childDistance = Distance2(point, child.transform.position);
      if (!closest || childDistance < distance) {
        closest = child;
        distance = childDistance;
      }
    });
    return closest;
  }

  // src/display/GetFirstChild.ts
  function GetFirstChild(parent2, property, value) {
    const children = parent2.children;
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      const descriptor = Object.getOwnPropertyDescriptor(child, property);
      if (descriptor && (value === void 0 || value === descriptor.value)) {
        return child;
      }
    }
  }

  // src/display/GetFurthestChild.ts
  function GetFurthestChild(parent2, point) {
    const children = parent2.children;
    let furthest = null;
    let distance = 0;
    children.forEach((child) => {
      const childDistance = Distance2(point, child.transform.position);
      if (!furthest || childDistance > distance) {
        furthest = child;
        distance = childDistance;
      }
    });
    return furthest;
  }

  // src/display/GetLastChild.ts
  function GetLastChild(parent2, property, value) {
    const children = parent2.children;
    for (let i = children.length - 1; i >= 0; i--) {
      const child = children[i];
      const descriptor = Object.getOwnPropertyDescriptor(child, property);
      if (descriptor && (value === void 0 || value === descriptor.value)) {
        return child;
      }
    }
  }

  // src/display/GetParents.ts
  function GetParents(child) {
    const parents = [];
    while (child.parent) {
      parents.push(child.parent);
      child = child.parent;
    }
    return parents;
  }

  // src/display/GetRandomChild.ts
  function GetRandomChild(parent2, startIndex = 0, length) {
    const children = parent2.children;
    if (!length) {
      length = children.length;
    }
    const randomIndex = startIndex + Math.floor(Math.random() * length);
    return children[randomIndex];
  }

  // src/display/MoveChildDown.ts
  function MoveChildDown(parent2, child) {
    const parentChildren = parent2.children;
    const currentIndex = GetChildIndex2(parent2, child);
    if (currentIndex > 0) {
      const child2 = parentChildren[currentIndex - 1];
      const index2 = parentChildren.indexOf(child2);
      parentChildren[currentIndex] = child2;
      parentChildren[index2] = child;
      child.setDirty(DIRTY_CONST2.TRANSFORM);
      child2.setDirty(DIRTY_CONST2.TRANSFORM);
    }
    return child;
  }

  // src/display/MoveChildTo.ts
  function MoveChildTo(parent2, child, index) {
    const parentChildren = parent2.children;
    const currentIndex = GetChildIndex2(parent2, child);
    if (currentIndex === -1 || index < 0 || index >= parentChildren.length) {
      throw new Error("Index out of bounds");
    }
    if (currentIndex !== index) {
      parentChildren.splice(currentIndex, 1);
      parentChildren.splice(index, 0, child);
      child.setDirty(DIRTY_CONST2.TRANSFORM);
    }
    return child;
  }

  // src/display/MoveChildUp.ts
  function MoveChildUp(parent2, child) {
    const parentChildren = parent2.children;
    const currentIndex = GetChildIndex2(parent2, child);
    if (currentIndex !== -1 && currentIndex > 0) {
      const child2 = parentChildren[currentIndex + 1];
      const index2 = parentChildren.indexOf(child2);
      parentChildren[currentIndex] = child2;
      parentChildren[index2] = child;
      child.setDirty(DIRTY_CONST2.TRANSFORM);
      child2.setDirty(DIRTY_CONST2.TRANSFORM);
    }
    return child;
  }

  // src/geom/intersects/RectangleToRectangle.ts
  function RectangleToRectangle2(rectA, rectB) {
    if (rectA.width <= 0 || rectA.height <= 0 || rectB.width <= 0 || rectB.height <= 0) {
      return false;
    }
    return !(rectA.right < rectB.x || rectA.bottom < rectB.y || rectA.x > rectB.right || rectA.y > rectB.bottom);
  }

  // src/display/Overlap.ts
  function Overlap(source, ...targets) {
    const sourceBounds = source.bounds.get();
    for (let i = 0; i < targets.length; i++) {
      const target = targets[i];
      const targetBounds = target.bounds.get();
      if (RectangleToRectangle2(sourceBounds, targetBounds)) {
        return true;
      }
    }
    return false;
  }

  // src/display/RemoveChildren.ts
  function RemoveChildren(parent2, ...children) {
    children.forEach((child) => {
      RemoveChild(parent2, child);
    });
    return children;
  }

  // src/display/RemoveChildrenAt.ts
  function RemoveChildrenAt(parent2, ...index) {
    const removed = [];
    index.sort((a, b) => a - b);
    index.reverse().forEach((i) => {
      const child = RemoveChildAt2(parent2, i);
      if (child) {
        removed.push(child);
      }
    });
    return removed;
  }

  // src/display/ReparentChildren.ts
  function ReparentChildren(parent2, newParent, beginIndex = 0, endIndex) {
    const moved = RemoveChildrenBetween2(parent2, beginIndex, endIndex);
    SetParent2(newParent, ...moved);
    moved.forEach((child) => {
      child.transform.updateWorld();
    });
    return moved;
  }

  // src/display/RotateChildrenLeft.ts
  function RotateChildrenLeft(parent2, total = 1) {
    const parentChildren = parent2.children;
    let child = null;
    for (let i = 0; i < total; i++) {
      child = parentChildren.shift();
      parentChildren.push(child);
      child.setDirty(DIRTY_CONST2.TRANSFORM);
    }
    return child;
  }

  // src/display/RotateChildrenRight.ts
  function RotateChildrenRight(parent2, total = 1) {
    const parentChildren = parent2.children;
    let child = null;
    for (let i = 0; i < total; i++) {
      child = parentChildren.pop();
      parentChildren.unshift(child);
      child.setDirty(DIRTY_CONST2.TRANSFORM);
    }
    return child;
  }

  // src/display/SendChildToBack.ts
  function SendChildToBack(parent2, child) {
    const parentChildren = parent2.children;
    const currentIndex = GetChildIndex2(parent2, child);
    if (currentIndex !== -1 && currentIndex > 0) {
      parentChildren.splice(currentIndex, 1);
      parentChildren.unshift(child);
      child.setDirty(DIRTY_CONST2.TRANSFORM);
    }
    return child;
  }

  // src/display/SetBounds.ts
  function SetBounds(x, y, width, height, ...children) {
    children.forEach((child) => {
      child.bounds.set(x, y, width, height);
    });
    return children;
  }

  // src/display/SetChildrenValue.ts
  function SetChildrenValue(parent2, property, value) {
    const children = DepthFirstSearch(parent2);
    children.forEach((child) => {
      const descriptor = Object.getOwnPropertyDescriptor(child, property);
      if (descriptor) {
        descriptor.set(value);
      }
    });
    return children;
  }

  // src/display/SetName.ts
  function SetName(name, ...children) {
    children.forEach((child) => {
      child.name = name;
    });
    return children;
  }

  // src/display/SetOrigin.ts
  function SetOrigin(originX2, originY2, ...children) {
    children.forEach((child) => {
      child.setOrigin(originX2, originY2);
    });
    return children;
  }

  // src/display/SetPosition.ts
  function SetPosition(x, y, ...children) {
    children.forEach((child) => {
      child.setPosition(x, y);
    });
    return children;
  }

  // src/display/SetRotation.ts
  function SetRotation(rotation, ...children) {
    children.forEach((child) => {
      child.rotation = rotation;
    });
    return children;
  }

  // src/display/SetScale.ts
  function SetScale(scaleX, scaleY, ...children) {
    children.forEach((child) => {
      child.setScale(scaleX, scaleY);
    });
    return children;
  }

  // src/display/SetSize.ts
  function SetSize(width, height, ...children) {
    children.forEach((child) => {
      child.setSize(width, height);
    });
    return children;
  }

  // src/display/SetSkew.ts
  function SetSkew(skewX, skewY, ...children) {
    children.forEach((child) => {
      child.setSkew(skewX, skewY);
    });
    return children;
  }

  // src/display/SetType.ts
  function SetType(type, ...children) {
    children.forEach((child) => {
      child.type = type;
    });
    return children;
  }

  // src/display/SetValue.ts
  function SetValue(property, value, ...children) {
    children.forEach((child) => {
      const descriptor = Object.getOwnPropertyDescriptor(child, property);
      if (descriptor) {
        descriptor.set(value);
      }
    });
    return children;
  }

  // src/display/SetVisible.ts
  function SetVisible(visible, ...children) {
    children.forEach((child) => {
      child.visible = visible;
    });
    return children;
  }

  // src/display/ShuffleChildren.ts
  function ShuffleChildren(parent2) {
    const children = parent2.children;
    for (let i = children.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = children[i];
      children[i] = children[j];
      children[j] = temp;
      temp.setDirty(DIRTY_CONST2.TRANSFORM);
    }
    return children;
  }

  // src/display/SwapChildren.ts
  function SwapChildren(child1, child2) {
    if (child1.parent === child2.parent) {
      const children = child1.parent.children;
      const index1 = GetChildIndex2(child1.parent, child1);
      const index2 = GetChildIndex2(child2.parent, child2);
      if (index1 !== index2) {
        children[index1] = child2;
        children[index2] = child1;
      }
    }
  }

  // src/display/index.ts
  const display_exports = {};
  __export(display_exports, {
    AddChild: () => AddChild,
    AddChildAt: () => AddChildAt,
    AddChildren: () => AddChildren,
    AddChildrenAt: () => AddChildrenAt,
    AddPosition: () => AddPosition,
    AddRotation: () => AddRotation,
    AddScale: () => AddScale,
    AddSkew: () => AddSkew,
    BringChildToTop: () => BringChildToTop,
    ConsoleTreeChildren: () => ConsoleTreeChildren,
    CountMatchingChildren: () => CountMatchingChildren,
    DepthFirstSearch: () => DepthFirstSearch,
    DepthFirstSearchRecursive: () => DepthFirstSearchRecursive,
    DepthFirstSearchRecursiveNested: () => DepthFirstSearchRecursiveNested2,
    DestroyChildren: () => DestroyChildren,
    FindChildByName: () => FindChildByName,
    FindChildrenByName: () => FindChildrenByName,
    GetAllChildren: () => GetAllChildren,
    GetChildAt: () => GetChildAt,
    GetChildIndex: () => GetChildIndex2,
    GetChildren: () => GetChildren,
    GetClosestChild: () => GetClosestChild,
    GetFirstChild: () => GetFirstChild,
    GetFurthestChild: () => GetFurthestChild,
    GetLastChild: () => GetLastChild,
    GetParents: () => GetParents,
    GetRandomChild: () => GetRandomChild,
    MoveChildDown: () => MoveChildDown,
    MoveChildTo: () => MoveChildTo,
    MoveChildUp: () => MoveChildUp,
    Overlap: () => Overlap,
    RemoveChild: () => RemoveChild,
    RemoveChildAt: () => RemoveChildAt2,
    RemoveChildren: () => RemoveChildren,
    RemoveChildrenAt: () => RemoveChildrenAt,
    RemoveChildrenBetween: () => RemoveChildrenBetween2,
    ReparentChildren: () => ReparentChildren,
    RotateChildrenLeft: () => RotateChildrenLeft,
    RotateChildrenRight: () => RotateChildrenRight,
    SendChildToBack: () => SendChildToBack,
    SetBounds: () => SetBounds,
    SetChildrenValue: () => SetChildrenValue,
    SetName: () => SetName,
    SetOrigin: () => SetOrigin,
    SetParent: () => SetParent2,
    SetPosition: () => SetPosition,
    SetRotation: () => SetRotation,
    SetScale: () => SetScale,
    SetSize: () => SetSize,
    SetSkew: () => SetSkew,
    SetType: () => SetType,
    SetValue: () => SetValue,
    SetVisible: () => SetVisible,
    SetWorld: () => SetWorld2,
    ShuffleChildren: () => ShuffleChildren,
    SwapChildren: () => SwapChildren
  });

  // src/display3d/DepthFirstSearch3D.ts
  function DepthFirstSearch3D(parent2) {
    const stack = [parent2];
    const output = [];
    while (stack.length > 0) {
      const node = stack.shift();
      output.push(node);
      const numChildren = node.numChildren;
      if (numChildren > 0) {
        for (let i = numChildren - 1; i >= 0; i--) {
          stack.unshift(node.children[i]);
        }
      }
    }
    output.shift();
    return output;
  }

  // src/display3d/GetChild3DIndex.ts
  function GetChild3DIndex(parent2, child) {
    return parent2.children.indexOf(child);
  }

  // src/display3d/RemoveChild3DAt.ts
  function RemoveChild3DAt2(parent2, index) {
    const children = parent2.children;
    let child;
    if (index >= 0 && index < children.length) {
      const removed = children.splice(index, 1);
      if (removed[0]) {
        child = removed[0];
        child.parent = null;
      }
    }
    return child;
  }

  // src/display3d/RemoveChild3D.ts
  function RemoveChild3D(parent2, child) {
    const currentIndex = GetChild3DIndex(parent2, child);
    if (currentIndex > -1) {
      RemoveChild3DAt2(parent2, currentIndex);
    }
    return child;
  }

  // src/display3d/SetWorld3D.ts
  function SetWorld3D2(world, ...children) {
    children.forEach((child) => {
      if (child.world) {
        Emit(child.world, RemovedFromWorldEvent, child, child.world);
        Emit(child, RemovedFromWorldEvent, child, child.world);
      }
      child.world = world;
      Emit(world, AddedToWorldEvent, child, world);
      Emit(child, AddedToWorldEvent, child, world);
    });
    return children;
  }

  // src/display3d/SetParent3D.ts
  function SetParent3D2(parent2, ...children) {
    children.forEach((child) => {
      if (child.parent) {
        RemoveChild3D(child.parent, child);
      }
      child.parent = parent2;
    });
    const parentWorld = parent2.world;
    if (parentWorld) {
      SetWorld3D2(parentWorld, ...DepthFirstSearch3D(parent2));
    }
    return children;
  }

  // src/display3d/AddChild3D.ts
  function AddChild3D(parent2, child) {
    parent2.children.push(child);
    SetParent3D2(parent2, child);
    return child;
  }

  // src/display3d/AddChild3DAt.ts
  function AddChild3DAt(parent2, index, child) {
    const children = parent2.children;
    if (index >= 0 && index <= children.length) {
      SetParent3D2(parent2, child);
      children.splice(index, 0, child);
    }
    return child;
  }

  // src/display3d/AddChildren3D.ts
  function AddChildren3D(parent2, ...children) {
    children.forEach((child) => {
      AddChild3D(parent2, child);
    });
    return children;
  }

  // src/display3d/AddChildren3DAt.ts
  function AddChildren3DAt(parent2, index, ...children) {
    const parentChildren = parent2.children;
    if (index >= 0 && index <= parentChildren.length) {
      children.reverse().forEach((child) => {
        children.splice(index, 0, child);
        SetParent3D2(parent2, child);
      });
    }
    return children;
  }

  // src/display3d/DepthFirstSearchRecursiveNested3D.ts
  function DepthFirstSearchRecursiveNested3D2(parent2, output = []) {
    for (let i = 0; i < parent2.numChildren; i++) {
      const node = parent2.children[i];
      const children = [];
      output.push({node, children});
      if (node.numChildren > 0) {
        DepthFirstSearchRecursiveNested3D2(node, children);
      }
    }
    return output;
  }

  // src/display3d/ConsoleTreeChildren3D.ts
  function GetInfo(entry) {
    const legend = entry.numChildren > 0 ? "Parent" : "Child";
    return `${legend} [ type=${entry.type}, name=${entry.name} ]`;
  }
  function LogChildren(entry) {
    console.group(GetInfo(entry.node));
    entry.children.forEach((child) => {
      if (child.children.length > 0) {
        LogChildren(child);
      } else {
        console.log(GetInfo(child.node));
      }
    });
    console.groupEnd();
  }
  function ConsoleTreeChildren3D(parent2) {
    const entries = DepthFirstSearchRecursiveNested3D2(parent2);
    if (parent2.world === parent2) {
      console.group("World");
    } else {
      console.group(GetInfo(parent2));
    }
    entries.forEach((entry) => {
      if (entry.children.length) {
        LogChildren(entry);
      } else {
        console.log(GetInfo(entry.node));
      }
    });
    console.groupEnd();
  }

  // src/display3d/CountMatchingChildren3D.ts
  function CountMatchingChildren3D(parent2, property, value) {
    const children = parent2.children;
    let total = 0;
    children.forEach((child) => {
      const descriptor = Object.getOwnPropertyDescriptor(child, property);
      if (descriptor && (value === void 0 || value === descriptor.value)) {
        total++;
      }
    });
    return total;
  }

  // src/display3d/DepthFirstSearchRecursive3D.ts
  function DepthFirstSearchRecursive3D(parent2, output = []) {
    for (let i = 0; i < parent2.numChildren; i++) {
      const child = parent2.children[i];
      output.push(child);
      if (child.numChildren > 0) {
        DepthFirstSearchRecursive3D(child, output);
      }
    }
    return output;
  }

  // src/display3d/RemoveChildren3DBetween.ts
  function RemoveChildren3DBetween2(parent2, beginIndex = 0, endIndex) {
    const children = parent2.children;
    if (endIndex === void 0) {
      endIndex = children.length;
    }
    const range = endIndex - beginIndex;
    if (range > 0 && range <= endIndex) {
      const removed = children.splice(beginIndex, range);
      removed.forEach((child) => {
        child.parent = null;
      });
      return removed;
    } else {
      return [];
    }
  }

  // src/display3d/DestroyChildren3D.ts
  function DestroyChildren3D(parent2, beginIndex = 0, endIndex) {
    const removed = RemoveChildren3DBetween2(parent2, beginIndex, endIndex);
    removed.forEach((child) => {
      child.destroy();
    });
  }

  // src/display3d/FindChild3DByName.ts
  function FindChild3DByName(parent2, searchString) {
    const children = DepthFirstSearch3D(parent2);
    const regex = RegExp(searchString);
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      if (regex.test(child.name)) {
        return child;
      }
    }
  }

  // src/display3d/FindChildren3DByName.ts
  function FindChildren3DByName(parent2, searchString) {
    const children = DepthFirstSearch3D(parent2);
    const regex = RegExp(searchString);
    const results = [];
    children.forEach((child) => {
      if (regex.test(child.name)) {
        results.push(child);
      }
    });
    return results;
  }

  // src/display3d/GetAllChildren3D.ts
  function GetAllChildren3D(parent2, property, value) {
    const children = DepthFirstSearch3D(parent2);
    if (!property) {
      return children;
    }
    const results = [];
    children.forEach((child) => {
      const descriptor = Object.getOwnPropertyDescriptor(child, property);
      if (descriptor && (value === void 0 || value === descriptor.value)) {
        results.push(child);
      }
    });
    return results;
  }

  // src/display3d/GetChild3DAt.ts
  function GetChild3DAt(parent2, index) {
    const children = parent2.children;
    if (index < 0 || index > children.length) {
      throw new Error(`Index out of bounds: ${index}`);
    }
    return children[index];
  }

  // src/display3d/GetChildren3D.ts
  function GetChildren3D(parent2, property, value) {
    const children = parent2.children;
    if (!property) {
      return [...children];
    }
    const results = [];
    children.forEach((child) => {
      const descriptor = Object.getOwnPropertyDescriptor(child, property);
      if (descriptor && (value === void 0 || value === descriptor.value)) {
        results.push(child);
      }
    });
    return results;
  }

  // src/display3d/GetFirstChild3D.ts
  function GetFirstChild3D(parent2, property, value) {
    const children = parent2.children;
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      const descriptor = Object.getOwnPropertyDescriptor(child, property);
      if (descriptor && (value === void 0 || value === descriptor.value)) {
        return child;
      }
    }
  }

  // src/display3d/GetLastChild3D.ts
  function GetLastChild3D(parent2, property, value) {
    const children = parent2.children;
    for (let i = children.length - 1; i >= 0; i--) {
      const child = children[i];
      const descriptor = Object.getOwnPropertyDescriptor(child, property);
      if (descriptor && (value === void 0 || value === descriptor.value)) {
        return child;
      }
    }
  }

  // src/display3d/GetParents3D.ts
  function GetParents3D(child) {
    const parents = [];
    while (child.parent) {
      parents.push(child.parent);
      child = child.parent;
    }
    return parents;
  }

  // src/display3d/GetRandomChild3D.ts
  function GetRandomChild3D(parent2, startIndex = 0, length) {
    const children = parent2.children;
    if (!length) {
      length = children.length;
    }
    const randomIndex = startIndex + Math.floor(Math.random() * length);
    return children[randomIndex];
  }

  // src/display3d/MoveChild3DTo.ts
  function MoveChild3DTo(parent2, child, index) {
    const parentChildren = parent2.children;
    const currentIndex = GetChild3DIndex(parent2, child);
    if (currentIndex === -1 || index < 0 || index >= parentChildren.length) {
      throw new Error("Index out of bounds");
    }
    if (currentIndex !== index) {
      parentChildren.splice(currentIndex, 1);
      parentChildren.splice(index, 0, child);
      child.setDirty(DIRTY_CONST2.TRANSFORM);
    }
    return child;
  }

  // src/display3d/RemoveChildren3D.ts
  function RemoveChildren3D(parent2, ...children) {
    children.forEach((child) => {
      RemoveChild3D(parent2, child);
    });
    return children;
  }

  // src/display3d/RemoveChildren3DAt.ts
  function RemoveChildren3DAt(parent2, ...index) {
    const removed = [];
    index.sort((a, b) => a - b);
    index.reverse().forEach((i) => {
      const child = RemoveChild3DAt2(parent2, i);
      if (child) {
        removed.push(child);
      }
    });
    return removed;
  }

  // src/display3d/ReparentChildren3D.ts
  function ReparentChildren3D(parent2, newParent, beginIndex = 0, endIndex) {
    const moved = RemoveChildren3DBetween2(parent2, beginIndex, endIndex);
    SetParent3D2(newParent, ...moved);
    moved.forEach((child) => {
    });
    return moved;
  }

  // src/display3d/ReplaceChild3D.ts
  function ReplaceChild3D(target, source) {
    const targetParent = target.parent;
    const sourceParent = source.parent;
    const targetIndex = GetChild3DIndex(targetParent, target);
    if (targetParent === sourceParent) {
      MoveChild3DTo(targetParent, source, targetIndex);
      RemoveChild3D(targetParent, target);
    } else {
      RemoveChild3D(targetParent, target);
      RemoveChild3D(sourceParent, source);
      AddChild3DAt(targetParent, targetIndex, source);
    }
    return target;
  }

  // src/display3d/SetChildren3DValue.ts
  function SetChildren3DValue(parent2, property, value) {
    const children = DepthFirstSearch3D(parent2);
    children.forEach((child) => {
      const descriptor = Object.getOwnPropertyDescriptor(child, property);
      if (descriptor) {
        descriptor.set(value);
      }
    });
    return children;
  }

  // src/display3d/SwapChildren3D.ts
  function SwapChildren3D(child1, child2) {
    if (child1.parent === child2.parent) {
      const children = child1.parent.children;
      const index1 = GetChild3DIndex(child1.parent, child1);
      const index2 = GetChild3DIndex(child2.parent, child2);
      if (index1 !== index2) {
        children[index1] = child2;
        children[index2] = child1;
      }
    }
  }

  // src/display3d/index.ts
  const display3d_exports = {};
  __export(display3d_exports, {
    AddChild3D: () => AddChild3D,
    AddChild3DAt: () => AddChild3DAt,
    AddChildren3D: () => AddChildren3D,
    AddChildren3DAt: () => AddChildren3DAt,
    ConsoleTreeChildren3D: () => ConsoleTreeChildren3D,
    CountMatchingChildren3D: () => CountMatchingChildren3D,
    DepthFirstSearch3D: () => DepthFirstSearch3D,
    DepthFirstSearchRecursive3D: () => DepthFirstSearchRecursive3D,
    DepthFirstSearchRecursiveNested3D: () => DepthFirstSearchRecursiveNested3D2,
    DestroyChildren3D: () => DestroyChildren3D,
    FindChild3DByName: () => FindChild3DByName,
    FindChildren3DByName: () => FindChildren3DByName,
    GetAllChildren3D: () => GetAllChildren3D,
    GetChild3DAt: () => GetChild3DAt,
    GetChild3DIndex: () => GetChild3DIndex,
    GetChildren3D: () => GetChildren3D,
    GetFirstChild3D: () => GetFirstChild3D,
    GetLastChild3D: () => GetLastChild3D,
    GetParents3D: () => GetParents3D,
    GetRandomChild3D: () => GetRandomChild3D,
    MoveChild3DTo: () => MoveChild3DTo,
    RemoveChild3D: () => RemoveChild3D,
    RemoveChild3DAt: () => RemoveChild3DAt2,
    RemoveChildren3D: () => RemoveChildren3D,
    RemoveChildren3DAt: () => RemoveChildren3DAt,
    RemoveChildren3DBetween: () => RemoveChildren3DBetween2,
    ReparentChildren3D: () => ReparentChildren3D,
    ReplaceChild3D: () => ReplaceChild3D,
    SetChildren3DValue: () => SetChildren3DValue,
    SetParent3D: () => SetParent3D2,
    SetWorld3D: () => SetWorld3D2,
    SwapChildren3D: () => SwapChildren3D
  });

  // src/events/ClearEvent.ts
  function ClearEvent(emitter, event) {
    emitter.events.delete(event);
    return emitter;
  }

  // src/events/EventEmitter.ts
  class EventEmitter {
    constructor() {
      this.events = new Map();
    }
  }

  // src/events/EventInstance.ts
  class EventInstance {
    constructor(callback, context, once = false) {
      this.callback = callback;
      this.context = context;
      this.once = once;
    }
  }

  // src/events/GetEventNames.ts
  function GetEventNames(emitter) {
    return [...emitter.events.keys()];
  }

  // src/events/GetListenerCount.ts
  function GetListenerCount(emitter, event) {
    const listeners = emitter.events.get(event);
    return listeners ? listeners.size : 0;
  }

  // src/events/GetListeners.ts
  function GetListeners(emitter, event) {
    const out = [];
    const listeners = emitter.events.get(event);
    listeners.forEach((listener) => {
      out.push(listener.callback);
    });
    return out;
  }

  // src/events/Off.ts
  function Off(emitter, event, callback, context, once) {
    const events14 = emitter.events;
    const listeners = events14.get(event);
    if (!callback) {
      events14.delete(event);
    } else if (callback instanceof EventInstance) {
      listeners.delete(callback);
    } else {
      const hasContext = !context;
      const hasOnce = once !== void 0;
      for (const listener of listeners) {
        if (listener.callback === callback && (hasContext && listener.context === context) && (hasOnce && listener.once === once)) {
          listeners.delete(listener);
        }
      }
    }
    if (listeners.size === 0) {
      events14.delete(event);
    }
    return emitter;
  }

  // src/events/On.ts
  function On(emitter, event, callback, context = emitter, once = false) {
    if (typeof callback !== "function") {
      throw new TypeError("Listener not a function");
    }
    const listener = new EventInstance(callback, context, once);
    const listeners = emitter.events.get(event);
    if (!listeners) {
      emitter.events.set(event, new Set([listener]));
    } else {
      listeners.add(listener);
    }
    return listener;
  }

  // src/events/Once.ts
  function Once(emitter, event, callback, context = emitter) {
    return On(emitter, event, callback, context, true);
  }

  // src/events/RemoveAllListeners.ts
  function RemoveAllListeners(emitter, event) {
    if (!event) {
      emitter.events.clear();
    } else {
      emitter.events.delete(event);
    }
  }

  // src/events/index.ts
  const events_exports = {};
  __export(events_exports, {
    ClearEvent: () => ClearEvent,
    Emit: () => Emit,
    EventEmitter: () => EventEmitter,
    EventInstance: () => EventInstance,
    GetEventNames: () => GetEventNames,
    GetListenerCount: () => GetListenerCount,
    GetListeners: () => GetListeners,
    Off: () => Off,
    On: () => On,
    Once: () => Once,
    RemoveAllListeners: () => RemoveAllListeners
  });

  // src/gameobjects/components/transform/GetVertices.ts
  function GetVertices2(transform) {
    const {a, b, c, d, tx, ty} = transform.world;
    const {x, y, right, bottom} = transform.extent;
    const x0 = x * a + y * c + tx;
    const y0 = x * b + y * d + ty;
    const x1 = x * a + bottom * c + tx;
    const y1 = x * b + bottom * d + ty;
    const x2 = right * a + bottom * c + tx;
    const y2 = right * b + bottom * d + ty;
    const x3 = right * a + y * c + tx;
    const y3 = right * b + y * d + ty;
    return {x0, y0, x1, y1, x2, y2, x3, y3};
  }

  // src/gameobjects/components/bounds/BoundsComponent.ts
  class BoundsComponent2 {
    constructor(entity) {
      this.fixed = false;
      this.includeChildren = true;
      this.visibleOnly = true;
      this.entity = entity;
      this.area = new Rectangle();
    }
    set(x, y, width, height) {
      this.area.set(x, y, width, height);
    }
    get() {
      if (this.entity.isDirty(DIRTY_CONST2.BOUNDS) && !this.fixed) {
        this.update();
      }
      return this.area;
    }
    updateLocal() {
      const {x0, y0, x1, y1, x2, y2, x3, y3} = GetVertices2(this.entity.transform);
      const x = Math.min(x0, x1, x2, x3);
      const y = Math.min(y0, y1, y2, y3);
      const right = Math.max(x0, x1, x2, x3);
      const bottom = Math.max(y0, y1, y2, y3);
      return this.area.set(x, y, right - x, bottom - y);
    }
    update() {
      const bounds = this.updateLocal();
      this.entity.clearDirty(DIRTY_CONST2.BOUNDS);
      if (!this.includeChildren || !this.entity.numChildren) {
        return bounds;
      }
      const visibleOnly = this.visibleOnly;
      const children = this.entity.children;
      let x = bounds.x;
      let y = bounds.y;
      let right = bounds.right;
      let bottom = bounds.bottom;
      for (let i = 0; i < children.length; i++) {
        const child = children[i];
        if (!child || visibleOnly && !child.visible) {
          continue;
        }
        const childBounds = child.bounds.get();
        if (childBounds.x < x) {
          x = childBounds.x;
        }
        if (childBounds.y < y) {
          y = childBounds.y;
        }
        if (childBounds.right > right) {
          right = childBounds.right;
        }
        if (childBounds.bottom > bottom) {
          bottom = childBounds.bottom;
        }
      }
      return bounds.set(x, y, right - x, bottom - y);
    }
    destroy() {
      this.entity = null;
      this.area = null;
    }
  }

  // src/gameobjects/components/bounds/index.ts
  const bounds_exports = {};
  __export(bounds_exports, {
    BoundsComponent: () => BoundsComponent2
  });

  // src/gameobjects/components/input/InputComponent.ts
  class InputComponent2 {
    constructor(entity) {
      this.enabled = false;
      this.enabledChildren = true;
      this.entity = entity;
    }
    destroy() {
      this.entity = null;
      this.hitArea = null;
    }
  }

  // src/gameobjects/components/input/index.ts
  const input_exports = {};
  __export(input_exports, {
    InputComponent: () => InputComponent2
  });

  // src/geom/rectangle/Area.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function Area5(rect) {
    return rect.width * rect.height;
  }

  // src/geom/rectangle/Ceil.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function Ceil(rect) {
    rect.x = Math.ceil(rect.x);
    rect.y = Math.ceil(rect.y);
    return rect;
  }

  // src/geom/rectangle/CeilAll.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function CeilAll(rect) {
    rect.x = Math.ceil(rect.x);
    rect.y = Math.ceil(rect.y);
    rect.width = Math.ceil(rect.width);
    rect.height = Math.ceil(rect.height);
    return rect;
  }

  // src/geom/rectangle/CenterOn.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function CenterOn3(rect, x, y) {
    rect.x = x - rect.width / 2;
    rect.y = y - rect.height / 2;
    return rect;
  }

  // src/geom/rectangle/CenterX.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function CenterX(rect) {
    return rect.x + rect.width / 2;
  }

  // src/geom/rectangle/CenterY.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function CenterY(rect) {
    return rect.y + rect.height / 2;
  }

  // src/geom/rectangle/Clone.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function Clone7(source) {
    return new Rectangle(source.x, source.y, source.width, source.height);
  }

  // src/geom/rectangle/ContainsPoint.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function ContainsPoint5(rect, point) {
    return Contains13(rect, point.x, point.y);
  }

  // src/geom/rectangle/ContainsRect.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function ContainsRect5(rectA, rectB) {
    if (rectB.width * rectB.height > rectA.width * rectA.height) {
      return false;
    }
    return rectB.x > rectA.x && rectB.x < rectA.right && (rectB.right > rectA.x && rectB.right < rectA.right) && (rectB.y > rectA.y && rectB.y < rectA.bottom) && (rectB.bottom > rectA.y && rectB.bottom < rectA.bottom);
  }

  // src/geom/rectangle/CopyFrom.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function CopyFrom9(source, dest) {
    return dest.set(source.x, source.y, source.width, source.height);
  }

  // src/geom/rectangle/Decompose.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function Decompose2(rect, out = []) {
    out.push(new Vec25(rect.x, rect.y), new Vec25(rect.right, rect.y), new Vec25(rect.right, rect.bottom), new Vec25(rect.x, rect.bottom));
    return out;
  }

  // src/geom/rectangle/Equals.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function Equals7(rect, toCompare) {
    return rect.x === toCompare.x && rect.y === toCompare.y && rect.width === toCompare.width && rect.height === toCompare.height;
  }

  // src/geom/rectangle/GetAspectRatio.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function GetAspectRatio2(rect) {
    return rect.height === 0 ? NaN : rect.width / rect.height;
  }

  // src/geom/rectangle/FitInside.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function FitInside(target, source) {
    const ratio = GetAspectRatio2(target);
    let width = source.width;
    let height = source.height;
    if (ratio < GetAspectRatio2(source)) {
      width = source.height * ratio;
    } else {
      height = source.width / ratio;
    }
    return target.set(CenterX(source) - target.width / 2, CenterY(source) - target.height / 2, width, height);
  }

  // src/geom/rectangle/FitOutside.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function FitOutside(target, source) {
    const ratio = GetAspectRatio2(target);
    let width = source.width;
    let height = source.height;
    if (ratio > GetAspectRatio2(source)) {
      width = source.height * ratio;
    } else {
      height = source.width / ratio;
    }
    return target.set(CenterX(source) - target.width / 2, CenterY(source) - target.height / 2, width, height);
  }

  // src/geom/rectangle/Floor.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function Floor(rect) {
    rect.x = Math.floor(rect.x);
    rect.y = Math.floor(rect.y);
    return rect;
  }

  // src/geom/rectangle/FloorAll.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function FloorAll(rect) {
    rect.x = Math.floor(rect.x);
    rect.y = Math.floor(rect.y);
    rect.width = Math.floor(rect.width);
    rect.height = Math.floor(rect.height);
    return rect;
  }

  // src/geom/rectangle/FromPoints.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function FromPoints(points, out = new Rectangle()) {
    if (points.length === 0) {
      return out;
    }
    let minX = Number.MAX_VALUE;
    let minY = Number.MAX_VALUE;
    let maxX = MATH_CONST.MIN_SAFE_INTEGER;
    let maxY = MATH_CONST.MIN_SAFE_INTEGER;
    for (let i = 0; i < points.length; i++) {
      const px = points[i].x;
      const py = points[i].y;
      minX = Math.min(minX, px);
      minY = Math.min(minY, py);
      maxX = Math.max(maxX, px);
      maxY = Math.max(maxY, py);
    }
    return out.set(minX, minY, maxX - minX, maxY - minY);
  }

  // src/geom/rectangle/GetCenter.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function GetCenter(rect, out = new Vec25()) {
    return out.set(CenterX(rect), CenterY(rect));
  }

  // src/geom/line/Line.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  class Line2 {
    constructor(x1 = 0, y1 = 0, x2 = 0, y2 = 0) {
      this.set(x1, y1, x2, y2);
    }
    set(x1 = 0, y1 = 0, x2 = 0, y2 = 0) {
      this.x1 = x1;
      this.y1 = y1;
      this.x2 = x2;
      this.y2 = y2;
      return this;
    }
    get left() {
      return Math.min(this.x1, this.x2);
    }
    set left(value) {
      if (this.x1 <= this.x2) {
        this.x1 = value;
      } else {
        this.x2 = value;
      }
    }
    get right() {
      return Math.max(this.x1, this.x2);
    }
    set right(value) {
      if (this.x1 > this.x2) {
        this.x1 = value;
      } else {
        this.x2 = value;
      }
    }
    get top() {
      return Math.min(this.y1, this.y2);
    }
    set top(value) {
      if (this.y1 <= this.y2) {
        this.y1 = value;
      } else {
        this.y2 = value;
      }
    }
    get bottom() {
      return Math.max(this.y1, this.y2);
    }
    set bottom(value) {
      if (this.y1 > this.y2) {
        this.y1 = value;
      } else {
        this.y2 = value;
      }
    }
  }

  // src/geom/rectangle/GetEdges.ts
  function GetEdges2(rectangle5) {
    const {x, y, right, bottom} = rectangle5;
    const line1 = new Line2(x, y, right, y);
    const line2 = new Line2(right, y, right, bottom);
    const line3 = new Line2(right, bottom, x, bottom);
    const line4 = new Line2(x, bottom, x, y);
    return [line1, line2, line3, line4];
  }

  // src/geom/rectangle/Perimeter.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function Perimeter2(rect) {
    return 2 * (rect.width + rect.height);
  }

  // src/geom/rectangle/GetPoint.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function GetPoint7(rectangle5, position, out = new Vec25()) {
    if (position <= 0 || position >= 1) {
      return out.set(rectangle5.x, rectangle5.y);
    }
    let p = Perimeter2(rectangle5) * position;
    if (position > 0.5) {
      p -= rectangle5.width + rectangle5.height;
      if (p <= rectangle5.width) {
        return out.set(rectangle5.right - p, rectangle5.bottom);
      } else {
        return out.set(rectangle5.x, rectangle5.bottom - (p - rectangle5.width));
      }
    } else if (p <= rectangle5.width) {
      return out.set(rectangle5.x + p, rectangle5.y);
    } else {
      return out.set(rectangle5.right, rectangle5.y + (p - rectangle5.width));
    }
  }

  // src/geom/rectangle/GetPoints.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function GetPoints7(rectangle5, step, quantity = 0, out = []) {
    if (!quantity) {
      quantity = Perimeter2(rectangle5) / step;
    }
    for (let i = 0; i < quantity; i++) {
      out.push(GetPoint7(rectangle5, i / quantity));
    }
    return out;
  }

  // src/geom/rectangle/GetSize.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function GetSize(rect, out = new Vec25()) {
    return out.set(rect.width, rect.height);
  }

  // src/geom/rectangle/Inflate.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function Inflate(rect, x, y) {
    const cx = CenterX(rect);
    const cy = CenterY(rect);
    rect.width = rect.width + x * 2;
    rect.height = rect.height + y * 2;
    return CenterOn3(rect, cx, cy);
  }

  // src/geom/rectangle/Intersection.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function Intersection(rectA, rectB, out = new Rectangle()) {
    if (RectangleToRectangle2(rectA, rectB)) {
      out.set(Math.max(rectA.x, rectB.x), Math.max(rectA.y, rectB.y), Math.min(rectA.right, rectB.right) - out.x, Math.min(rectA.bottom, rectB.bottom) - out.y);
    } else {
      out.set();
    }
    return out;
  }

  // src/geom/rectangle/MarchingAnts.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function MarchingAnts(rect, step, quantity, out = []) {
    if (!step && !quantity) {
      return out;
    }
    if (!step) {
      step = Perimeter2(rect) / quantity;
    } else {
      quantity = Math.round(Perimeter2(rect) / step);
    }
    let x = rect.x;
    let y = rect.y;
    let face = 0;
    for (let i = 0; i < quantity; i++) {
      out.push(new Vec25(x, y));
      switch (face) {
        case 0:
          x += step;
          if (x >= rect.right) {
            face = 1;
            y += x - rect.right;
            x = rect.right;
          }
          break;
        case 1:
          y += step;
          if (y >= rect.bottom) {
            face = 2;
            x -= y - rect.bottom;
            y = rect.bottom;
          }
          break;
        case 2:
          x -= step;
          if (x <= rect.x) {
            face = 3;
            y -= rect.x - x;
            x = rect.x;
          }
          break;
        case 3:
          y -= step;
          if (y <= rect.y) {
            face = 0;
            y = rect.y;
          }
          break;
      }
    }
    return out;
  }

  // src/geom/rectangle/MergePoints.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function MergePoints(target, points) {
    let minX = target.x;
    let maxX = target.right;
    let minY = target.y;
    let maxY = target.bottom;
    for (let i = 0; i < points.length; i++) {
      minX = Math.min(minX, points[i].x);
      maxX = Math.max(maxX, points[i].x);
      minY = Math.min(minY, points[i].y);
      maxY = Math.max(maxY, points[i].y);
    }
    return target.set(minX, minY, maxX - minX, maxY - minY);
  }

  // src/geom/rectangle/MergeRect.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function MergeRect(target, source) {
    const minX = Math.min(target.x, source.x);
    const maxX = Math.max(target.right, source.right);
    const minY = Math.min(target.y, source.y);
    const maxY = Math.max(target.bottom, source.bottom);
    return target.set(minX, minY, maxX - minX, maxY - minY);
  }

  // src/geom/rectangle/MergeXY.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function MergeXY(target, x, y) {
    const minX = Math.min(target.x, x);
    const maxX = Math.max(target.right, x);
    const minY = Math.min(target.y, y);
    const maxY = Math.max(target.bottom, y);
    return target.set(minX, minY, maxX - minX, maxY - minY);
  }

  // src/geom/rectangle/Offset.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function Offset7(rect, x, y) {
    rect.x += x;
    rect.y += y;
    return rect;
  }

  // src/geom/rectangle/OffsetPoint.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function OffsetPoint5(rect, point) {
    rect.x += point.x;
    rect.y += point.y;
    return rect;
  }

  // src/geom/rectangle/Overlaps.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function Overlaps(rectA, rectB) {
    return rectA.x < rectB.right && rectA.right > rectB.x && rectA.y < rectB.bottom && rectA.bottom > rectB.y;
  }

  // src/geom/rectangle/PerimeterPoint.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function PerimeterPoint(rectangle5, angle2, out = new Vec25()) {
    angle2 = DegToRad(angle2);
    const s = Math.sin(angle2);
    const c = Math.cos(angle2);
    let dx = c > 0 ? rectangle5.width / 2 : rectangle5.width / -2;
    let dy = s > 0 ? rectangle5.height / 2 : rectangle5.height / -2;
    if (Math.abs(dx * s) < Math.abs(dy * c)) {
      dy = dx * s / c;
    } else {
      dx = dy * c / s;
    }
    return out.set(dx + CenterX(rectangle5), dy + CenterY(rectangle5));
  }

  // src/geom/rectangle/Random.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function Random7(rect, out = new Vec25()) {
    return out.set(rect.x + Math.random() * rect.width, rect.y + Math.random() * rect.height);
  }

  // src/geom/rectangle/RandomOutside.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function RandomOutside(outer, inner, out = new Vec25()) {
    if (ContainsRect5(outer, inner)) {
      switch (Between2(0, 3)) {
        case 0:
          out.x = outer.x + Math.random() * (inner.right - outer.x);
          out.y = outer.y + Math.random() * (inner.y - outer.y);
          break;
        case 1:
          out.x = inner.x + Math.random() * (outer.right - inner.x);
          out.y = inner.bottom + Math.random() * (outer.bottom - inner.bottom);
          break;
        case 2:
          out.x = outer.x + Math.random() * (inner.x - outer.x);
          out.y = inner.y + Math.random() * (outer.bottom - inner.y);
          break;
        case 3:
          out.x = inner.right + Math.random() * (outer.right - inner.right);
          out.y = outer.y + Math.random() * (inner.bottom - outer.y);
          break;
      }
    }
    return out;
  }

  // src/geom/rectangle/SameDimensions.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function SameDimensions(rect, toCompare) {
    return rect.width === toCompare.width && rect.height === toCompare.height;
  }

  // src/geom/rectangle/Scale.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function Scale(rect, x, y = x) {
    rect.width *= x;
    rect.height *= y;
    return rect;
  }

  // src/geom/rectangle/Union.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function Union(rectA, rectB, out = new Rectangle()) {
    const x = Math.min(rectA.x, rectB.x);
    const y = Math.min(rectA.y, rectB.y);
    const w = Math.max(rectA.right, rectB.right) - x;
    const h = Math.max(rectA.bottom, rectB.bottom) - y;
    return out.set(x, y, w, h);
  }

  // src/geom/rectangle/index.ts
  const rectangle_exports = {};
  __export(rectangle_exports, {
    Area: () => Area5,
    Ceil: () => Ceil,
    CeilAll: () => CeilAll,
    CenterOn: () => CenterOn3,
    CenterX: () => CenterX,
    CenterY: () => CenterY,
    Clone: () => Clone7,
    Contains: () => Contains13,
    ContainsPoint: () => ContainsPoint5,
    ContainsRect: () => ContainsRect5,
    CopyFrom: () => CopyFrom9,
    Decompose: () => Decompose2,
    Equals: () => Equals7,
    FitInside: () => FitInside,
    FitOutside: () => FitOutside,
    Floor: () => Floor,
    FloorAll: () => FloorAll,
    FromPoints: () => FromPoints,
    GetAspectRatio: () => GetAspectRatio2,
    GetCenter: () => GetCenter,
    GetEdges: () => GetEdges2,
    GetPoint: () => GetPoint7,
    GetPoints: () => GetPoints7,
    GetSize: () => GetSize,
    Inflate: () => Inflate,
    Intersection: () => Intersection,
    MarchingAnts: () => MarchingAnts,
    MergePoints: () => MergePoints,
    MergeRect: () => MergeRect,
    MergeXY: () => MergeXY,
    Offset: () => Offset7,
    OffsetPoint: () => OffsetPoint5,
    Overlaps: () => Overlaps,
    Perimeter: () => Perimeter2,
    PerimeterPoint: () => PerimeterPoint,
    Random: () => Random7,
    RandomOutside: () => RandomOutside,
    Rectangle: () => Rectangle,
    SameDimensions: () => SameDimensions,
    Scale: () => Scale,
    Union: () => Union
  });
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */

  // src/gameobjects/components/transform/UpdateLocalTransform.ts
  function UpdateLocalTransform2(transform) {
    const local = transform.local;
    const x = transform.position.x;
    const y = transform.position.y;
    const rotation = transform.rotation;
    const scaleX = transform.scale.x;
    const scaleY = transform.scale.y;
    const skewX = transform.skew.x;
    const skewY = transform.skew.y;
    local.set(Math.cos(rotation + skewY) * scaleX, Math.sin(rotation + skewY) * scaleX, -Math.sin(rotation - skewX) * scaleY, Math.cos(rotation - skewX) * scaleY, x, y);
  }

  // src/gameobjects/components/transform/UpdateWorldTransform.ts
  function UpdateWorldTransform2(gameObject) {
    const parent2 = gameObject.parent;
    const transform = gameObject.transform;
    const lt = transform.local;
    const wt = transform.world;
    if (!parent2) {
      CopyFrom2(lt, wt);
    } else if (transform.passthru) {
      CopyFrom2(parent2.transform.world, wt);
    } else {
      const {a, b, c, d, tx, ty} = lt;
      const {a: pa, b: pb, c: pc, d: pd, tx: ptx, ty: pty} = parent2.transform.world;
      wt.set(a * pa + b * pc, a * pb + b * pd, c * pa + d * pc, c * pb + d * pd, tx * pa + ty * pc + ptx, tx * pb + ty * pd + pty);
    }
  }

  // src/gameobjects/components/transform/TransformComponent.ts
  class TransformComponent2 {
    constructor(entity, x = 0, y = 0) {
      this.passthru = false;
      this._rotation = 0;
      this.entity = entity;
      this.local = new Matrix2D2();
      this.world = new Matrix2D2();
      const update = () => this.update();
      const updateExtent = () => this.updateExtent();
      this.position = new Vec2Callback2(update, x, y);
      this.scale = new Vec2Callback2(update, 1, 1);
      this.skew = new Vec2Callback2(update);
      this.origin = new Vec2Callback2(updateExtent, originX, originY);
      this.extent = new Rectangle();
    }
    update() {
      this.updateLocal();
      this.updateWorld();
    }
    updateLocal() {
      this.entity.setDirty(DIRTY_CONST2.TRANSFORM, DIRTY_CONST2.BOUNDS);
      UpdateLocalTransform2(this);
    }
    updateWorld() {
      const entity = this.entity;
      entity.setDirty(DIRTY_CONST2.TRANSFORM, DIRTY_CONST2.BOUNDS);
      UpdateWorldTransform2(entity);
      if (entity.numChildren) {
        this.updateChildren();
      }
    }
    updateChildren() {
      const children = this.entity.children;
      for (let i = 0; i < children.length; i++) {
        const child = children[i];
        child.transform.updateWorld();
      }
    }
    globalToLocal(x, y, out = new Vec25()) {
      const {a, b, c, d, tx, ty} = this.world;
      const id = 1 / (a * d + c * -b);
      out.x = d * id * x + -c * id * y + (ty * c - tx * d) * id;
      out.y = a * id * y + -b * id * x + (-ty * a + tx * b) * id;
      return out;
    }
    localToGlobal(x, y, out = new Vec25()) {
      const {a, b, c, d, tx, ty} = this.world;
      out.x = a * x + c * y + tx;
      out.y = b * x + d * y + ty;
      return out;
    }
    setExtent(x, y, width, height) {
      this.extent.set(x, y, width, height);
      this.entity.setDirty(DIRTY_CONST2.TRANSFORM, DIRTY_CONST2.BOUNDS);
    }
    updateExtent(width, height) {
      const extent = this.extent;
      const entity = this.entity;
      if (width !== void 0) {
        extent.width = width;
      }
      if (height !== void 0) {
        extent.height = height;
      }
      extent.x = -this.origin.x * extent.width;
      extent.y = -this.origin.y * extent.height;
      entity.setDirty(DIRTY_CONST2.TRANSFORM, DIRTY_CONST2.BOUNDS);
    }
    set rotation(value) {
      if (value !== this._rotation) {
        this._rotation = value;
        this.update();
      }
    }
    get rotation() {
      return this._rotation;
    }
    destroy() {
      this.position.destroy();
      this.scale.destroy();
      this.skew.destroy();
      this.origin.destroy();
      this.entity = null;
      this.local = null;
      this.world = null;
      this.position = null;
      this.scale = null;
      this.skew = null;
      this.origin = null;
      this.extent = null;
    }
  }

  // src/gameobjects/components/transform/index.ts
  const transform_exports = {};
  __export(transform_exports, {
    GetVertices: () => GetVertices2,
    TransformComponent: () => TransformComponent2,
    UpdateLocalTransform: () => UpdateLocalTransform2,
    UpdateWorldTransform: () => UpdateWorldTransform2
  });

  // src/renderer/webgl1/colors/PackColor.ts
  function PackColor(rgb, alpha) {
    const ua = (alpha * 255 | 0) & 255;
    return (ua << 24 | rgb) >>> 0;
  }

  // src/gameobjects/components/Vertex.ts
  class Vertex {
    constructor(x = 0, y = 0, z = 0) {
      this.x = 0;
      this.y = 0;
      this.z = 0;
      this.u = 0;
      this.v = 0;
      this.texture = 0;
      this.tint = 16777215;
      this.alpha = 1;
      this.color = 4294967295;
      this.x = x;
      this.y = y;
      this.z = z;
    }
    setPosition(x, y, z = 0) {
      this.x = x;
      this.y = y;
      this.z = z;
      return this;
    }
    setUV(u, v) {
      this.u = u;
      this.v = v;
      return this;
    }
    setColor(color2, alpha = 1) {
      this.tint = color2;
      this.alpha = alpha;
      this.packColor();
      return this;
    }
    setAlpha(value) {
      this.alpha = value;
      return this;
    }
    setTint(value) {
      this.tint = value;
      return this;
    }
    packColor() {
      this.color = PackColor(this.tint, this.alpha);
    }
  }

  // src/gameobjects/components/index.ts
  const components_exports2 = {};
  __export(components_exports2, {
    Bounds: () => bounds_exports,
    Input: () => input_exports,
    Transform: () => transform_exports,
    Vertex: () => Vertex
  });

  // src/renderer/webgl1/draw/BatchTexturedQuad.ts
  function BatchTexturedQuad2(sprite, renderPass) {
    const {F32, U32, offset} = GetVertexBufferEntry2(renderPass, 1);
    const textureIndex = SetTexture2(renderPass, sprite.texture);
    let vertOffset = offset;
    sprite.vertices.forEach((vertex) => {
      F32[vertOffset + 0] = vertex.x;
      F32[vertOffset + 1] = vertex.y;
      F32[vertOffset + 2] = vertex.u;
      F32[vertOffset + 3] = vertex.v;
      F32[vertOffset + 4] = textureIndex;
      U32[vertOffset + 5] = vertex.color;
      vertOffset += 6;
    });
  }

  // src/gameobjects/GameObject.ts
  class GameObject {
    constructor(x = 0, y = 0) {
      this.type = "GameObject";
      this.name = "";
      this.willUpdate = true;
      this.willUpdateChildren = true;
      this.willRender = true;
      this.willRenderChildren = true;
      this.willCacheChildren = false;
      this.dirty = 0;
      this.dirtyFrame = 0;
      this.visible = true;
      this.children = [];
      this.events = new Map();
      this.transform = new TransformComponent2(this, x, y);
      this.bounds = new BoundsComponent2(this);
      this.input = new InputComponent2(this);
      this.dirty = DIRTY_CONST2.DEFAULT;
      this.transform.update();
    }
    isRenderable() {
      return this.visible && this.willRender;
    }
    isDirty(flag) {
      return (this.dirty & flag) !== 0;
    }
    clearDirty(flag) {
      if (this.isDirty(flag)) {
        this.dirty ^= flag;
      }
      return this;
    }
    setDirty(flag, flag2) {
      if (!this.isDirty(flag)) {
        this.dirty ^= flag;
        this.dirtyFrame = GameInstance2.getFrame();
      }
      if (!this.isDirty(flag2)) {
        this.dirty ^= flag2;
      }
      return this;
    }
    update(delta, time) {
      if (this.willUpdateChildren) {
        const children = this.children;
        for (let i = 0; i < children.length; i++) {
          const child = children[i];
          if (child && child.willUpdate) {
            child.update(delta, time);
          }
        }
      }
      this.postUpdate(delta, time);
    }
    postUpdate(delta, time) {
    }
    renderGL(renderPass) {
    }
    renderCanvas(renderer) {
    }
    postRenderGL(renderPass) {
    }
    postRenderCanvas(renderer) {
    }
    get numChildren() {
      return this.children.length;
    }
    destroy(reparentChildren) {
      if (reparentChildren) {
        ReparentChildren(this, reparentChildren);
      } else {
        DestroyChildren(this);
      }
      Emit(this, DestroyEvent, this);
      this.transform.destroy();
      this.bounds.destroy();
      this.input.destroy();
      this.events.clear();
      this.world = null;
      this.parent = null;
      this.children = null;
    }
  }

  // src/gameobjects/container/Container.ts
  class Container extends GameObject {
    constructor(x = 0, y = 0) {
      super(x, y);
      this._alpha = 1;
      this.type = "Container";
    }
    setSize(width, height = width) {
      this.transform.updateExtent(width, height);
      return this;
    }
    setPosition(x, y) {
      this.transform.position.set(x, y);
      return this;
    }
    setOrigin(x, y = x) {
      this.transform.origin.set(x, y);
      return this;
    }
    setSkew(x, y = x) {
      this.transform.skew.set(x, y);
      return this;
    }
    setScale(x, y = x) {
      this.transform.scale.set(x, y);
      return this;
    }
    setRotation(value) {
      this.transform.rotation = value;
      return this;
    }
    set width(value) {
      this.transform.updateExtent(value);
    }
    get width() {
      return this.transform.extent.width;
    }
    set height(value) {
      this.transform.updateExtent(void 0, value);
    }
    get height() {
      return this.transform.extent.height;
    }
    set x(value) {
      this.transform.position.x = value;
    }
    get x() {
      return this.transform.position.x;
    }
    set y(value) {
      this.transform.position.y = value;
    }
    get y() {
      return this.transform.position.y;
    }
    set originX(value) {
      this.transform.origin.x = value;
    }
    get originX() {
      return this.transform.origin.x;
    }
    set originY(value) {
      this.transform.origin.y = value;
    }
    get originY() {
      return this.transform.origin.y;
    }
    set skewX(value) {
      this.transform.skew.x = value;
    }
    get skewX() {
      return this.transform.skew.x;
    }
    set skewY(value) {
      this.transform.skew.y = value;
    }
    get skewY() {
      return this.transform.skew.y;
    }
    set scaleX(value) {
      this.transform.scale.x = value;
    }
    get scaleX() {
      return this.transform.scale.x;
    }
    set scaleY(value) {
      this.transform.scale.y = value;
    }
    get scaleY() {
      return this.transform.scale.y;
    }
    set rotation(value) {
      this.transform.rotation = value;
    }
    get rotation() {
      return this.transform.rotation;
    }
    get alpha() {
      return this._alpha;
    }
    set alpha(value) {
      if (value !== this._alpha) {
        this._alpha = value;
        this.setDirty(DIRTY_CONST2.TRANSFORM);
      }
    }
  }

  // src/renderer/canvas/draw/DrawTexturedQuad.ts
  function DrawTexturedQuad6(sprite, renderer) {
    const frame2 = sprite.frame;
    if (!frame2) {
      return;
    }
    const ctx = renderer.ctx;
    const transform = sprite.transform;
    const {a, b, c, d, tx, ty} = transform.world;
    const {x, y} = transform.extent;
    ctx.save();
    ctx.setTransform(a, b, c, d, tx, ty);
    ctx.globalAlpha = sprite.alpha;
    ctx.drawImage(frame2.texture.image, frame2.x, frame2.y, frame2.width, frame2.height, x, y, frame2.width, frame2.height);
    ctx.restore();
  }

  // src/renderer/webgl1/colors/PackColors.ts
  function PackColors2(sprite) {
    sprite.vertices.forEach((vertex) => {
      vertex.packColor();
    });
    return sprite;
  }

  // src/gameobjects/sprite/SetFrame.ts
  function SetFrame4(texture, key, ...children) {
    const frame2 = texture.getFrame(key);
    const {u0, u1, v0, v1, pivot} = frame2;
    children.forEach((child) => {
      if (!child || frame2 === child.frame) {
        return;
      }
      child.frame = frame2;
      if (pivot) {
        child.setOrigin(pivot.x, pivot.y);
      }
      child.frame.setExtent(child);
      child.hasTexture = true;
      const vertices = child.vertices;
      vertices[0].setUV(u0, v0);
      vertices[1].setUV(u0, v1);
      vertices[2].setUV(u1, v1);
      vertices[3].setUV(u1, v0);
    });
    return children;
  }

  // src/textures/TextureManagerInstance.ts
  let instance5;
  const TextureManagerInstance2 = {
    get: () => {
      return instance5;
    },
    set: (manager) => {
      instance5 = manager;
    }
  };

  // src/gameobjects/sprite/SetTexture.ts
  function SetTexture5(key, frame2, ...children) {
    if (!key) {
      children.forEach((child) => {
        child.texture = null;
        child.frame = null;
        child.hasTexture = false;
      });
    } else {
      let texture;
      if (key instanceof Texture5) {
        texture = key;
      } else {
        texture = TextureManagerInstance2.get().get(key);
      }
      if (!texture) {
        console.warn(`Invalid Texture key: ${key}`);
      } else {
        children.forEach((child) => {
          child.texture = texture;
        });
        SetFrame4(texture, frame2, ...children);
      }
    }
    return children;
  }

  // src/gameobjects/sprite/UpdateVertices.ts
  function UpdateVertices2(sprite) {
    const vertices = sprite.vertices;
    const {x0, y0, x1, y1, x2, y2, x3, y3} = GetVertices2(sprite.transform);
    vertices[0].setPosition(x0, y0);
    vertices[1].setPosition(x1, y1);
    vertices[2].setPosition(x2, y2);
    vertices[3].setPosition(x3, y3);
    return sprite;
  }

  // src/gameobjects/sprite/Sprite.ts
  class Sprite2 extends Container {
    constructor(x, y, texture, frame2) {
      super(x, y);
      this.hasTexture = false;
      this._tint = 16777215;
      this.type = "Sprite";
      this.vertices = [new Vertex(), new Vertex(), new Vertex(), new Vertex()];
      this.setTexture(texture, frame2);
    }
    setTexture(key, frame2) {
      SetTexture5(key, frame2, this);
      return this;
    }
    setFrame(key) {
      SetFrame4(this.texture, key, this);
      return this;
    }
    isRenderable() {
      return this.visible && this.willRender && this.hasTexture && this.alpha > 0;
    }
    preRender() {
      if (this.isDirty(DIRTY_CONST2.COLORS)) {
        PackColors2(this);
        this.clearDirty(DIRTY_CONST2.COLORS);
      }
      if (this.isDirty(DIRTY_CONST2.TRANSFORM)) {
        UpdateVertices2(this);
        this.clearDirty(DIRTY_CONST2.TRANSFORM);
      }
    }
    renderGL(renderPass) {
      this.preRender();
      BatchTexturedQuad2(this, renderPass);
    }
    renderCanvas(renderer) {
      this.preRender();
      DrawTexturedQuad6(this, renderer);
    }
    get alpha() {
      return this._alpha;
    }
    set alpha(value) {
      if (value !== this._alpha) {
        this._alpha = value;
        this.vertices.forEach((vertex) => {
          vertex.setAlpha(value);
        });
        this.setDirty(DIRTY_CONST2.COLORS);
      }
    }
    get tint() {
      return this._tint;
    }
    set tint(value) {
      if (value !== this._tint) {
        this._tint = value;
        this.vertices.forEach((vertex) => {
          vertex.setTint(value);
        });
        this.setDirty(DIRTY_CONST2.COLORS);
      }
    }
    destroy(reparentChildren) {
      super.destroy(reparentChildren);
      this.texture = null;
      this.frame = null;
      this.hasTexture = false;
      this.vertices = [];
    }
  }

  // src/gameobjects/animatedsprite/AnimatedSprite.ts
  class AnimatedSprite extends Sprite2 {
    constructor(x, y, texture, frame2) {
      super(x, y, texture, frame2);
      this.type = "AnimatedSprite";
      this.anims = new Map();
      this.animData = {
        currentAnim: "",
        currentFrames: [],
        frameIndex: 0,
        animSpeed: 0,
        nextFrameTime: 0,
        repeatCount: 0,
        isPlaying: false,
        yoyo: false,
        pendingStart: false,
        playingForward: true,
        delay: 0,
        repeatDelay: 0,
        onStart: null,
        onRepeat: null,
        onComplete: null
      };
    }
    stop() {
      const data = this.animData;
      data.isPlaying = false;
      data.currentAnim = "";
      if (data.onComplete) {
        data.onComplete(this, data.currentAnim);
      }
    }
    nextFrame() {
      const data = this.animData;
      data.frameIndex++;
      if (data.frameIndex === data.currentFrames.length) {
        if (data.yoyo) {
          data.frameIndex--;
          data.playingForward = false;
        } else if (data.repeatCount === -1 || data.repeatCount > 0) {
          data.frameIndex = 0;
          if (data.repeatCount !== -1) {
            data.repeatCount--;
          }
          if (data.onRepeat) {
            data.onRepeat(this, data.currentAnim);
          }
          data.nextFrameTime += data.repeatDelay;
        } else {
          data.frameIndex--;
          return this.stop();
        }
      }
      this.setFrame(data.currentFrames[data.frameIndex]);
      data.nextFrameTime += data.animSpeed;
    }
    prevFrame() {
      const data = this.animData;
      data.frameIndex--;
      if (data.frameIndex === -1) {
        if (data.repeatCount === -1 || data.repeatCount > 0) {
          data.frameIndex = 0;
          data.playingForward = true;
          if (data.repeatCount !== -1) {
            data.repeatCount--;
          }
          if (data.onRepeat) {
            data.onRepeat(this, data.currentAnim);
          }
          data.nextFrameTime += data.repeatDelay;
        } else {
          data.frameIndex = 0;
          return this.stop();
        }
      }
      this.setFrame(data.currentFrames[data.frameIndex]);
      data.nextFrameTime += data.animSpeed;
    }
    update(delta, now) {
      super.update(delta, now);
      const data = this.animData;
      if (!data.isPlaying) {
        return;
      }
      data.nextFrameTime -= delta * 1e3;
      data.nextFrameTime = Math.max(data.nextFrameTime, 0);
      if (data.nextFrameTime === 0) {
        if (data.pendingStart) {
          if (data.onStart) {
            data.onStart(this, data.currentAnim);
          }
          data.pendingStart = false;
          data.nextFrameTime = data.animSpeed;
        } else if (data.playingForward) {
          this.nextFrame();
        } else {
          this.prevFrame();
        }
      }
    }
    get isPlaying() {
      return this.animData.isPlaying;
    }
    get isPlayingForward() {
      return this.animData.isPlaying && this.animData.playingForward;
    }
    get currentAnimation() {
      return this.animData.currentAnim;
    }
    destroy(reparentChildren) {
      super.destroy(reparentChildren);
      this.anims.clear();
      this.animData = null;
    }
  }

  // src/renderer/webgl1/draw/BatchSingleQuad.ts
  function BatchSingleQuad(renderPass, x, y, width, height, u0, v0, u1, v1, textureIndex = 0, packedColor = 4294967295) {
    const {F32, U32, offset} = GetVertexBufferEntry2(renderPass, 1);
    F32[offset + 0] = x;
    F32[offset + 1] = y;
    F32[offset + 2] = u0;
    F32[offset + 3] = v1;
    F32[offset + 4] = textureIndex;
    U32[offset + 5] = packedColor;
    F32[offset + 6] = x;
    F32[offset + 7] = y + height;
    F32[offset + 8] = u0;
    F32[offset + 9] = v0;
    F32[offset + 10] = textureIndex;
    U32[offset + 11] = packedColor;
    F32[offset + 12] = x + width;
    F32[offset + 13] = y + height;
    F32[offset + 14] = u1;
    F32[offset + 15] = v0;
    F32[offset + 16] = textureIndex;
    U32[offset + 17] = packedColor;
    F32[offset + 18] = x + width;
    F32[offset + 19] = y;
    F32[offset + 20] = u1;
    F32[offset + 21] = v1;
    F32[offset + 22] = textureIndex;
    U32[offset + 23] = packedColor;
  }

  // src/renderer/webgl1/draw/DrawTexturedQuad.ts
  function DrawTexturedQuad2(renderPass, texture, shader) {
    if (!shader) {
      shader = renderPass.quadShader;
    }
    const {u0, v0, u1, v1} = texture.firstFrame;
    BindTexture(texture, 0);
    SetVertexBuffer(renderPass, renderPass.quadBuffer);
    SetShader(renderPass, shader, 0);
    BatchSingleQuad(renderPass, 0, 0, texture.width, texture.height, u0, v0, u1, v1, 0);
    Flush(renderPass);
    PopVertexBuffer(renderPass);
    PopShader(renderPass);
    UnbindTexture(renderPass);
  }

  // src/gameobjects/layer/Layer.ts
  class Layer2 extends GameObject {
    constructor() {
      super();
      this.type = "Layer";
      this.transform.passthru = true;
      this.willRender = false;
    }
  }

  // src/gameobjects/renderlayer/RenderLayer.ts
  class RenderLayer2 extends Layer2 {
    constructor() {
      super();
      this.type = "RenderLayer";
      this.willRender = true;
      this.willRenderChildren = true;
      this.willCacheChildren = true;
      this.setDirty(DIRTY_CONST2.CHILD_CACHE);
      const width = GetWidth();
      const height = GetHeight();
      const resolution = GetResolution();
      const texture = new Texture5(null, width * resolution, height * resolution);
      const binding = new GLTextureBinding2(texture);
      texture.binding = binding;
      binding.framebuffer = CreateFramebuffer2(binding.texture);
      this.texture = texture;
      this.framebuffer = binding.framebuffer;
    }
    renderGL(renderPass) {
      if (this.numChildren > 0) {
        Flush(renderPass);
        if (!this.willCacheChildren || this.isDirty(DIRTY_CONST2.CHILD_CACHE)) {
          SetFramebuffer(renderPass, this.framebuffer, true);
          this.clearDirty(DIRTY_CONST2.CHILD_CACHE);
        } else {
          SetFramebuffer(renderPass, this.framebuffer, false);
          this.postRenderGL(renderPass);
        }
      }
    }
    postRenderGL(renderPass) {
      Flush(renderPass);
      PopFramebuffer(renderPass);
      DrawTexturedQuad2(renderPass, this.texture);
      this.clearDirty(DIRTY_CONST2.TRANSFORM);
    }
  }

  // src/gameobjects/effectlayer/EffectLayer.ts
  class EffectLayer extends RenderLayer2 {
    constructor(...shaders2) {
      super();
      this.shaders = [];
      this.type = "EffectLayer";
      if (Array.isArray(shaders2)) {
        this.shaders = shaders2;
      }
    }
    postRenderGL(renderPass) {
      const shaders2 = this.shaders;
      const texture = this.texture;
      Flush(renderPass);
      PopFramebuffer(renderPass);
      if (shaders2.length === 0) {
        DrawTexturedQuad2(renderPass, texture);
      } else {
        let prevTexture = texture;
        for (let i = 0; i < shaders2.length; i++) {
          const shader = shaders2[i];
          DrawTexturedQuad2(renderPass, prevTexture, shader);
          prevTexture = shader.texture;
        }
        DrawTexturedQuad2(renderPass, prevTexture);
      }
      this.clearDirty(DIRTY_CONST2.TRANSFORM);
    }
  }

  // src/renderer/webgl1/draw/BatchTexturedQuadBuffer.ts
  function BatchTexturedQuadBuffer2(batch, renderPass) {
  }

  // src/gameobjects/components/transform/GetVerticesFromValues.ts
  function GetVerticesFromValues(left, right, top, bottom, x, y, rotation = 0, scaleX = 1, scaleY = 1, skewX = 0, skewY = 0) {
    const a = Math.cos(rotation + skewY) * scaleX;
    const b = Math.sin(rotation + skewY) * scaleX;
    const c = -Math.sin(rotation - skewX) * scaleY;
    const d = Math.cos(rotation - skewX) * scaleY;
    const x0 = left * a + top * c + x;
    const y0 = left * b + top * d + y;
    const x1 = left * a + bottom * c + x;
    const y1 = left * b + bottom * d + y;
    const x2 = right * a + bottom * c + x;
    const y2 = right * b + bottom * d + y;
    const x3 = right * a + top * c + x;
    const y3 = right * b + top * d + y;
    return {x0, y0, x1, y1, x2, y2, x3, y3};
  }

  // src/gameobjects/spritebatch/SpriteBatch.ts
  class SpriteBatch2 extends Layer2 {
    constructor(maxSize, texture) {
      super();
      this.glTextureIndex = 0;
      this.hasTexture = false;
      this.type = "SpriteBatch";
      this.willRender = true;
      this.setTexture(texture);
      this.setMaxSize(maxSize);
    }
    resetBuffers() {
      let ibo = [];
      for (let i = 0; i < this.maxSize * 4; i += 4) {
        ibo.push(i + 0, i + 1, i + 2, i + 2, i + 3, i + 0);
      }
      this.data = new ArrayBuffer(this.maxSize * 96);
      this.index = new Uint16Array(ibo);
      this.vertexViewF32 = new Float32Array(this.data);
      this.vertexViewU32 = new Uint32Array(this.data);
      if (gl) {
        DeleteFramebuffer2(this.vertexBuffer);
        DeleteFramebuffer2(this.indexBuffer);
        this.vertexBuffer = gl.createBuffer();
        this.indexBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, this.data, gl.STATIC_DRAW);
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, this.index, gl.STATIC_DRAW);
        gl.bindBuffer(gl.ARRAY_BUFFER, null);
      }
      ibo = [];
      this.count = 0;
    }
    setMaxSize(value) {
      this.maxSize = Clamp(value, 0, 65535);
      this.resetBuffers();
      return this;
    }
    setTexture(key) {
      let texture;
      if (key instanceof Texture5) {
        texture = key;
      } else {
        texture = TextureManagerInstance2.get().get(key);
      }
      if (!texture) {
        console.warn(`Invalid Texture key: ${key}`);
      } else {
        this.texture = texture;
        this.hasTexture = true;
        this.glTextureIndex = -1;
      }
      return this;
    }
    isRenderable() {
      return this.visible && this.willRender && this.hasTexture && this.count > 0;
    }
    clear() {
      this.count = 0;
      return this;
    }
    addToBatch(frame2, color2, x0, y0, x1, y1, x2, y2, x3, y3) {
      if (this.count >= this.maxSize) {
        console.warn("SpriteBatch full");
        return this;
      }
      const {u0, u1, v0, v1} = frame2;
      const F32 = this.vertexViewF32;
      const U32 = this.vertexViewU32;
      const offset = this.count * 24;
      const textureIndex = this.texture.binding ? this.texture.binding.index : 0;
      F32[offset + 0] = x0;
      F32[offset + 1] = y0;
      F32[offset + 2] = u0;
      F32[offset + 3] = v0;
      F32[offset + 4] = textureIndex;
      U32[offset + 5] = color2;
      F32[offset + 6] = x1;
      F32[offset + 7] = y1;
      F32[offset + 8] = u0;
      F32[offset + 9] = v1;
      F32[offset + 10] = textureIndex;
      U32[offset + 11] = color2;
      F32[offset + 12] = x2;
      F32[offset + 13] = y2;
      F32[offset + 14] = u1;
      F32[offset + 15] = v1;
      F32[offset + 16] = textureIndex;
      U32[offset + 17] = color2;
      F32[offset + 18] = x3;
      F32[offset + 19] = y3;
      F32[offset + 20] = u1;
      F32[offset + 21] = v0;
      F32[offset + 22] = textureIndex;
      U32[offset + 23] = color2;
      this.setDirty(DIRTY_CONST2.TRANSFORM);
      this.count++;
      return this;
    }
    add(config5) {
      const {
        frame: frame2 = null,
        x = 0,
        y = 0,
        rotation = 0,
        scaleX = 1,
        scaleY = 1,
        skewX = 0,
        skewY = 0,
        originX: originX2 = 0,
        originY: originY2 = 0,
        alpha = 1,
        tint = 16777215
      } = config5;
      const textureFrame = this.texture.getFrame(frame2);
      const {left, right, top, bottom} = textureFrame.getExtent(originX2, originY2);
      const {x0, y0, x1, y1, x2, y2, x3, y3} = GetVerticesFromValues(left, right, top, bottom, x, y, rotation, scaleX, scaleY, skewX, skewY);
      const packedColor = PackColor(tint, alpha);
      return this.addToBatch(textureFrame, packedColor, x0, y0, x1, y1, x2, y2, x3, y3);
    }
    addXY(x, y, frame2) {
      const textureFrame = this.texture.getFrame(frame2);
      const {left, right, top, bottom} = textureFrame.getExtent(0, 0);
      const {x0, y0, x1, y1, x2, y2, x3, y3} = GetVerticesFromValues(left, right, top, bottom, x, y);
      return this.addToBatch(textureFrame, 4294967295, x0, y0, x1, y1, x2, y2, x3, y3);
    }
    updateTextureIndex() {
      const textureIndex = this.texture.binding.index;
      if (textureIndex === this.glTextureIndex) {
        return;
      }
      const F32 = this.vertexViewF32;
      this.glTextureIndex = textureIndex;
      for (let i = 0; i < this.count; i++) {
        F32[i * 24 + 4] = textureIndex;
        F32[i * 24 + 10] = textureIndex;
        F32[i * 24 + 16] = textureIndex;
        F32[i * 24 + 22] = textureIndex;
      }
    }
    renderGL(renderPass) {
      BatchTexturedQuadBuffer2(this, renderPass);
    }
    destroy() {
      super.destroy();
      DeleteFramebuffer2(this.vertexBuffer);
      DeleteFramebuffer2(this.indexBuffer);
      this.data = null;
      this.vertexViewF32 = null;
      this.vertexViewU32 = null;
      this.index = null;
      this.texture = null;
      this.hasTexture = false;
    }
  }

  // src/textures/CreateCanvas.ts
  function CreateCanvas(width, height) {
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    return canvas.getContext("2d");
  }

  // src/textures/types/CanvasTexture.ts
  function CanvasTexture2(width = 32, height = 32) {
    const ctx = CreateCanvas(width, height);
    return new Texture5(ctx.canvas);
  }

  // src/gameobjects/text/Text.ts
  class Text2 extends Sprite2 {
    constructor(x, y, text = "", font, fillStyle) {
      super(x, y, CanvasTexture2());
      this.splitRegExp = /(?:\r\n|\r|\n)/;
      this.padding = {left: 0, right: 0, top: 0, bottom: 0};
      this.verticalAlign = "ascent";
      this.lineSpacing = 0;
      this.font = "16px monospace";
      this.fillStyle = "#fff";
      this.strokeStyle = "";
      this.backgroundStyle = "";
      this.cornerRadius = 0;
      this.textAlign = "left";
      this.textBaseline = "alphabetic";
      this.lineWidth = 0;
      this.lineDash = [];
      this.antialias = false;
      this.type = "Text";
      const game = GameInstance2.get();
      this.resolution = game.renderer.resolution;
      this.canvas = this.texture.image;
      this.context = this.canvas.getContext("2d");
      if (font) {
        this.font = font;
      }
      if (fillStyle) {
        this.fillStyle = fillStyle;
      }
      this.setText(text);
    }
    syncContext(canvas, ctx) {
      if (this.preRenderCallback) {
        this.preRenderCallback(canvas, ctx);
      }
      ctx.font = this.font;
      ctx.textBaseline = this.textBaseline;
      ctx.textAlign = this.textAlign;
      ctx.fillStyle = this.fillStyle;
      ctx.strokeStyle = this.strokeStyle;
      ctx.lineWidth = this.lineWidth;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.setLineDash(this.lineDash);
      ctx.imageSmoothingEnabled = this.antialias;
    }
    updateText() {
      const canvas = this.canvas;
      const ctx = this.context;
      const resolution = this.resolution;
      const lines = this._text.split(this.splitRegExp);
      const padding = this.padding;
      const fillStyle = this.fillStyle;
      const strokeStyle = this.strokeStyle;
      const strokeWidth = this.lineWidth;
      const lineSpacing = this.lineSpacing;
      const strokeWidthHalf = strokeWidth > 0 ? strokeWidth / 2 : 0;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      this.syncContext(canvas, ctx);
      ctx.textAlign = "start";
      let maxWidth = 0;
      let maxHeight = 0;
      let y = 0;
      const lineMetrics = [];
      const vAlignAscent = this.verticalAlign === "ascent";
      const metrics = ctx.measureText("|MÉq");
      const averageLineHeight = Math.ceil(Math.abs(metrics.actualBoundingBoxAscent) + Math.abs(metrics.actualBoundingBoxDescent)) + strokeWidth;
      for (let i = 0; i < lines.length; i++) {
        const metrics2 = ctx.measureText(lines[i]);
        const left = metrics2.actualBoundingBoxLeft;
        const right = metrics2.actualBoundingBoxRight;
        let ascent = metrics2.actualBoundingBoxAscent;
        let descent = metrics2.actualBoundingBoxDescent;
        if (!ascent && !descent || lines[i] === "") {
          ascent = averageLineHeight;
          descent = 0;
        }
        const lineWidth = Math.ceil(Math.abs(left) + Math.abs(right)) + strokeWidth;
        const lineHeight = Math.ceil(Math.abs(ascent) + Math.abs(descent)) + strokeWidth;
        if (vAlignAscent) {
          y += ascent + strokeWidthHalf;
          if (i > 0) {
            y += lineSpacing + strokeWidthHalf;
          }
          maxHeight = y + descent + strokeWidthHalf;
        } else {
          y = maxHeight + (lineHeight - descent - strokeWidthHalf);
          maxHeight += lineHeight;
          if (i < lines.length - 1) {
            maxHeight += lineSpacing;
          }
        }
        maxWidth = Math.max(maxWidth, lineWidth);
        lineMetrics.push({lineWidth, lineHeight, ascent, descent, left, right, y});
      }
      maxWidth += padding.left + padding.right;
      maxHeight += padding.top + padding.bottom;
      const displayWidth = this.fixedWidth ? this.fixedWidth : maxWidth;
      const displayHeight = this.fixedHeight ? this.fixedHeight : maxHeight;
      const canvasWidth = Math.ceil(displayWidth * resolution);
      const canvasHeight = Math.ceil(displayHeight * resolution);
      if (canvas.width !== canvasWidth || canvas.height !== canvasHeight) {
        canvas.width = canvasWidth;
        canvas.height = canvasHeight;
        this.texture.setSize(displayWidth, displayHeight);
        this.setSize(displayWidth, displayHeight);
      }
      ctx.save();
      ctx.scale(resolution, resolution);
      this.syncContext(canvas, ctx);
      const backgroundStyle = this.backgroundStyle;
      if (backgroundStyle) {
        ctx.save();
        ctx.fillStyle = backgroundStyle;
        ctx.strokeStyle = backgroundStyle;
        const cornerRadius = this.cornerRadius;
        const halfRadius = cornerRadius > 0 ? cornerRadius / 2 : 0;
        if (cornerRadius) {
          ctx.lineWidth = cornerRadius;
          ctx.strokeRect(halfRadius, halfRadius, displayWidth - cornerRadius, displayHeight - cornerRadius);
        }
        ctx.fillRect(halfRadius, halfRadius, displayWidth - cornerRadius, displayHeight - cornerRadius);
        ctx.restore();
      }
      const textAlign = this.textAlign;
      const isCenter = textAlign === "center";
      const isRight = textAlign === "right" || textAlign === "end";
      const yOffset = (displayHeight - maxHeight) / 2 + padding.top;
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        const metrics2 = lineMetrics[i];
        let tx = padding.left + metrics2.left + strokeWidthHalf;
        const ty = yOffset + metrics2.y;
        if (isCenter) {
          tx = displayWidth / 2;
        } else if (isRight) {
          tx = displayWidth - strokeWidthHalf;
        }
        if (strokeStyle) {
          ctx.strokeText(line, tx, ty);
        }
        if (fillStyle) {
          ctx.fillText(line, tx, ty);
        }
      }
      ctx.restore();
      if (this.texture.binding) {
        this.texture.binding.update();
      }
      this.setDirty(DIRTY_CONST2.TEXTURE);
      return this;
    }
    get text() {
      return this._text;
    }
    set text(value) {
      this.setText(value);
    }
    setText(value = "") {
      if (Array.isArray(value)) {
        value = value.join("\n");
      }
      if (value !== this._text) {
        this._text = value.toString();
        this.updateText();
      }
      return this;
    }
    destroy(reparentChildren) {
      this.texture.destroy();
      this.fillStyle = null;
      this.strokeStyle = null;
      this.backgroundStyle = null;
      this.canvas = null;
      this.context = null;
      super.destroy(reparentChildren);
    }
  }

  // src/gameobjects/index.ts
  const gameobjects_exports = {};
  __export(gameobjects_exports, {
    AnimatedSprite: () => AnimatedSprite,
    Components: () => components_exports2,
    Container: () => Container,
    EffectLayer: () => EffectLayer,
    GameObject: () => GameObject,
    Layer: () => Layer2,
    RenderLayer: () => RenderLayer2,
    Sprite: () => Sprite2,
    SpriteBatch: () => SpriteBatch2,
    Text: () => Text2
  });

  // src/gameobjects3d/components/transform3d/Transform3DComponent.ts
  class Transform3DComponent2 {
    constructor(entity, x = 0, y = 0, z = 0) {
      this.passthru = false;
      this.entity = entity;
      this.local = new Matrix4();
      this.world = new Matrix4();
      this.normal = new Matrix4();
      this.position = new Vec3Callback(() => this.update(), x, y, z);
      this.scale = new Vec3Callback(() => this.update(), 1, 1, 1);
      this.origin = new Vec3Callback(() => this.update());
      this.rotation = new Quaternion();
      this.rotation.onChange = () => this.update();
      this.forward = Forward();
      this.up = Up();
      this.right = Right();
      this.update();
    }
    rotateX(angle2) {
      RotateX(this.rotation, angle2, this.rotation);
    }
    rotateY(angle2) {
      RotateY(this.rotation, angle2, this.rotation);
    }
    rotateZ(angle2) {
      RotateZ(this.rotation, angle2, this.rotation);
    }
    update() {
      const model = this.local;
      const normal = this.normal;
      FromRotationTranslationScale(this.rotation, this.position, this.scale, model);
      Invert(model, normal);
      Transpose(normal, normal);
    }
    updateLocal() {
      this.entity.setDirty(DIRTY_CONST2.TRANSFORM, DIRTY_CONST2.BOUNDS);
    }
    updateWorld() {
      const entity = this.entity;
      entity.setDirty(DIRTY_CONST2.TRANSFORM, DIRTY_CONST2.BOUNDS);
      if (entity.numChildren) {
        this.updateChildren();
      }
    }
    updateChildren() {
      const children = this.entity.children;
      for (let i = 0; i < children.length; i++) {
        const child = children[i];
      }
    }
    destroy() {
      this.position.destroy();
      this.scale.destroy();
      this.origin.destroy();
      this.rotation.destroy();
      this.entity = null;
      this.local = null;
      this.world = null;
      this.position = null;
      this.scale = null;
      this.origin = null;
      this.rotation = null;
    }
  }

  // src/gameobjects3d/components/index.ts
  const components_exports = {};
  __export(components_exports, {
    Transform3DComponent: () => Transform3DComponent2
  });

  // src/gameobjects3d/geometry/CreateVertexSet.ts
  function CreateVertexSet() {
    return {
      vertices: [],
      normals: [],
      uvs: [],
      indices: [],
      numberOfVertices: 0
    };
  }

  // src/renderer/webgl1/index.ts
  const webgl1_exports = {};
  __export(webgl1_exports, {
    CreateFramebuffer: () => CreateFramebuffer2,
    CreateGLTexture: () => CreateGLTexture2,
    DeleteFramebuffer: () => DeleteFramebuffer2,
    DeleteGLBuffer: () => DeleteGLBuffer,
    DeleteGLTexture: () => DeleteGLTexture2,
    GL: () => GL2,
    PackColor: () => PackColor,
    PackColors: () => PackColors2,
    SetGLTextureFilterMode: () => SetGLTextureFilterMode2,
    UpdateGLTexture: () => UpdateGLTexture2,
    WebGLRenderer: () => WebGLRenderer2
  });

  // src/gameobjects3d/geometry/FaceUVNormalTexture.ts
  class FaceUVNormalTexture {
    constructor(v1, v2, v3, n1, n2, n3, uv1, uv2, uv3, scale = 1) {
      this.color = 16777215;
      this.alpha = 1;
      this.size = 30;
      this.vertex1 = new Vertex(v1.x * scale, v1.y * scale, v1.z * scale);
      this.vertex2 = new Vertex(v2.x * scale, v2.y * scale, v2.z * scale);
      this.vertex3 = new Vertex(v3.x * scale, v3.y * scale, v3.z * scale);
      this.vertex1.setUV(uv1.x, uv1.y);
      this.vertex2.setUV(uv2.x, uv2.y);
      this.vertex3.setUV(uv3.x, uv3.y);
      this.normal1 = n1;
      this.normal2 = n2;
      this.normal3 = n3;
      this._packedColor = PackColor(this.color, this.alpha);
    }
    setColor(color2, alpha = 1) {
      this.color = color2;
      this.alpha = alpha;
      this._packedColor = PackColor(color2, alpha);
    }
    addToBuffer(F32, U32, textureID, offset) {
      const v1 = this.vertex1;
      const v2 = this.vertex2;
      const v3 = this.vertex3;
      const n1 = this.normal1;
      const n2 = this.normal2;
      const n3 = this.normal3;
      const color2 = this._packedColor;
      F32[offset++] = v1.x;
      F32[offset++] = v1.y;
      F32[offset++] = v1.z;
      F32[offset++] = n1.x;
      F32[offset++] = n1.y;
      F32[offset++] = n1.z;
      F32[offset++] = v1.u;
      F32[offset++] = v1.v;
      F32[offset++] = textureID;
      U32[offset++] = color2;
      F32[offset++] = v2.x;
      F32[offset++] = v2.y;
      F32[offset++] = v2.z;
      F32[offset++] = n2.x;
      F32[offset++] = n2.y;
      F32[offset++] = n2.z;
      F32[offset++] = v2.u;
      F32[offset++] = v2.v;
      F32[offset++] = textureID;
      U32[offset++] = color2;
      F32[offset++] = v3.x;
      F32[offset++] = v3.y;
      F32[offset++] = v3.z;
      F32[offset++] = n3.x;
      F32[offset++] = n3.y;
      F32[offset++] = n3.z;
      F32[offset++] = v3.u;
      F32[offset++] = v3.v;
      F32[offset++] = textureID;
      U32[offset++] = color2;
      return offset;
    }
  }

  // src/renderer/webgl1/buffers/index.ts

  // src/gameobjects3d/geometry/GetBufferFromVertexSet.ts
  function GetVec3(data, index) {
    const x = data[index * 3 + 0];
    const y = data[index * 3 + 1];
    const z = data[index * 3 + 2];
    return [x, y, z];
  }
  function GetVec2(data, index) {
    const x = data[index * 2 + 0];
    const y = data[index * 2 + 1];
    return [x, y];
  }
  function CreateNonIndexedVertexBuffer(data) {
    const {
      vertices,
      normals,
      uvs
    } = data;
    const total = vertices.length;
    const count = total / 3;
    const batchSize2 = count / 3;
    const buffer = new VertexBuffer2({batchSize: batchSize2, isDynamic: false, vertexElementSize: 8, elementsPerEntry: 3});
    const F32 = buffer.vertexViewF32;
    let offset = 0;
    let uvIndex = 0;
    for (let i = 0; i < total; i += 3) {
      F32[offset++] = vertices[i + 0];
      F32[offset++] = vertices[i + 1];
      F32[offset++] = vertices[i + 2];
      F32[offset++] = normals[i + 0];
      F32[offset++] = normals[i + 1];
      F32[offset++] = normals[i + 2];
      F32[offset++] = uvs[uvIndex + 0];
      F32[offset++] = uvs[uvIndex + 1];
      uvIndex += 2;
    }
    buffer.count = count;
    return buffer;
  }
  function CreateVertexBuffer(data) {
    const {
      vertices,
      normals,
      uvs,
      indices
    } = data;
    const buffer = new VertexBuffer2({batchSize: indices.length / 3, isDynamic: false, vertexElementSize: 8, elementsPerEntry: 3});
    const F32 = buffer.vertexViewF32;
    let offset = 0;
    for (let i = 0; i < indices.length; i += 3) {
      const i1 = indices[i + 0];
      const i2 = indices[i + 1];
      const i3 = indices[i + 2];
      const v1 = GetVec3(vertices, i1);
      const v2 = GetVec3(vertices, i2);
      const v3 = GetVec3(vertices, i3);
      const n1 = GetVec3(normals, i1);
      const n2 = GetVec3(normals, i2);
      const n3 = GetVec3(normals, i3);
      const uv1 = GetVec2(uvs, i1);
      const uv2 = GetVec2(uvs, i2);
      const uv3 = GetVec2(uvs, i3);
      F32[offset++] = v1[0];
      F32[offset++] = v1[1];
      F32[offset++] = v1[2];
      F32[offset++] = n1[0];
      F32[offset++] = n1[1];
      F32[offset++] = n1[2];
      F32[offset++] = uv1[0];
      F32[offset++] = uv1[1];
      F32[offset++] = v2[0];
      F32[offset++] = v2[1];
      F32[offset++] = v2[2];
      F32[offset++] = n2[0];
      F32[offset++] = n2[1];
      F32[offset++] = n2[2];
      F32[offset++] = uv2[0];
      F32[offset++] = uv2[1];
      F32[offset++] = v3[0];
      F32[offset++] = v3[1];
      F32[offset++] = v3[2];
      F32[offset++] = n3[0];
      F32[offset++] = n3[1];
      F32[offset++] = n3[2];
      F32[offset++] = uv3[0];
      F32[offset++] = uv3[1];
    }
    buffer.count = indices.length;
    return buffer;
  }
  function GetBufferFromVertexSet2(data) {
    if (data.indices && data.indices.length > 0) {
      return CreateVertexBuffer(data);
    } else {
      return CreateNonIndexedVertexBuffer(data);
    }
  }

  // src/gameobjects3d/geometry/Geometry.ts
  class Geometry2 {
    constructor(data) {
      if (data) {
        if (data.hasOwnProperty("vertices")) {
          this.buffer = GetBufferFromVertexSet2(data);
        } else {
          this.buffer = data;
        }
      }
    }
    destroy() {
      this.buffer.destroy();
    }
  }

  // src/gameobjects3d/geometry/ParseObj.ts
  class ParseObj2 {
    constructor(fileContents, flipUVs = true, defaultModelName = "untitled") {
      this.currentMaterial = "";
      this.currentGroup = "";
      this.smoothingGroup = 0;
      this.result = {
        materialLibraries: [],
        models: []
      };
      this.fileContents = fileContents;
      this.defaultModelName = defaultModelName;
      this.flipUVs = flipUVs;
    }
    parseAsync() {
      return new Promise((resolve, reject) => {
        try {
          resolve(this.parse());
        } catch (theError) {
          reject(theError);
        }
      });
    }
    parse() {
      const stripComments = (line) => {
        const commentIndex = line.indexOf("#");
        if (commentIndex > -1) {
          return line.substring(0, commentIndex);
        }
        return line;
      };
      const lines = this.fileContents.split("\n");
      for (const line of lines) {
        const strippedline = stripComments(line);
        const lineItems = strippedline.replace(/\s\s+/g, " ").trim().split(" ");
        switch (lineItems[0].toLowerCase()) {
          case "o":
            this.parseObject(lineItems);
            break;
          case "g":
            this.parseGroup(lineItems);
            break;
          case "v":
            this.parseVertexCoords(lineItems);
            break;
          case "vt":
            this.parseTextureCoords(lineItems);
            break;
          case "vn":
            this.parseVertexNormal(lineItems);
            break;
          case "s":
            this.parseSmoothShadingStatement(lineItems);
            break;
          case "f":
            this.parsePolygon(lineItems);
            break;
          case "mtllib":
            this.parseMtlLib(lineItems);
            break;
          case "usemtl":
            this.parseUseMtl(lineItems);
            break;
        }
      }
      this.fileContents = "";
      return this.result;
    }
    currentModel() {
      if (this.result.models.length === 0) {
        this.result.models.push({
          faces: [],
          name: this.defaultModelName,
          textureCoords: [],
          vertexNormals: [],
          vertices: []
        });
        this.currentGroup = "";
        this.smoothingGroup = 0;
      }
      return this.result.models[this.result.models.length - 1];
    }
    parseObject(lineItems) {
      const modelName = lineItems.length >= 2 ? lineItems[1] : this.defaultModelName;
      this.result.models.push({
        faces: [],
        name: modelName,
        textureCoords: [],
        vertexNormals: [],
        vertices: []
      });
      this.currentGroup = "";
      this.smoothingGroup = 0;
    }
    parseGroup(lineItems) {
      if (lineItems.length !== 2) {
        throw "Group statements must have exactly 1 argument (eg. g group_1)";
      }
      this.currentGroup = lineItems[1];
    }
    parseVertexCoords(lineItems) {
      const len = lineItems.length;
      const x = len >= 2 ? parseFloat(lineItems[1]) : 0;
      const y = len >= 3 ? parseFloat(lineItems[2]) : 0;
      const z = len >= 4 ? parseFloat(lineItems[3]) : 0;
      this.currentModel().vertices.push({x, y, z});
    }
    parseTextureCoords(lineItems) {
      const len = lineItems.length;
      let u = len >= 2 ? parseFloat(lineItems[1]) : 0;
      let v = len >= 3 ? parseFloat(lineItems[2]) : 0;
      let w = len >= 4 ? parseFloat(lineItems[3]) : 0;
      if (isNaN(u)) {
        u = 0;
      }
      if (isNaN(v)) {
        v = 0;
      }
      if (isNaN(w)) {
        w = 0;
      }
      if (this.flipUVs) {
        v = 1 - v;
      }
      this.currentModel().textureCoords.push({u, v, w});
    }
    parseVertexNormal(lineItems) {
      const len = lineItems.length;
      const x = len >= 2 ? parseFloat(lineItems[1]) : 0;
      const y = len >= 3 ? parseFloat(lineItems[2]) : 0;
      const z = len >= 4 ? parseFloat(lineItems[3]) : 0;
      this.currentModel().vertexNormals.push({x, y, z});
    }
    parsePolygon(lineItems) {
      const totalVertices = lineItems.length - 1;
      if (totalVertices < 3) {
        throw "Face < 3 vertices";
      }
      const face = {
        group: this.currentGroup,
        material: this.currentMaterial,
        smoothingGroup: this.smoothingGroup,
        vertices: []
      };
      for (let i = 0; i < totalVertices; i++) {
        const vertexString = lineItems[i + 1];
        const vertexValues = vertexString.split("/");
        const vvLen = vertexValues.length;
        if (vvLen < 1 || vvLen > 3) {
          throw "Too many / values for single vertex";
        }
        let vertexIndex = 0;
        let textureCoordsIndex = 0;
        let vertexNormalIndex = 0;
        vertexIndex = parseInt(vertexValues[0], 10);
        if (vvLen > 1 && vertexValues[1] !== "") {
          textureCoordsIndex = parseInt(vertexValues[1], 10);
        }
        if (vvLen > 2) {
          vertexNormalIndex = parseInt(vertexValues[2], 10);
        }
        if (vertexIndex === 0) {
          throw "Faces uses invalid vertex index of 0";
        }
        if (vertexIndex < 0) {
          vertexIndex = this.currentModel().vertices.length + 1 + vertexIndex;
        }
        textureCoordsIndex -= 1;
        vertexIndex -= 1;
        vertexNormalIndex -= 1;
        face.vertices.push({
          textureCoordsIndex,
          vertexIndex,
          vertexNormalIndex
        });
      }
      this.currentModel().faces.push(face);
    }
    parseMtlLib(lineItems) {
      if (lineItems.length >= 2) {
        this.result.materialLibraries.push(lineItems[1]);
      }
    }
    parseUseMtl(lineItems) {
      if (lineItems.length >= 2) {
        this.currentMaterial = lineItems[1];
      }
    }
    parseSmoothShadingStatement(lineItems) {
      if (lineItems.length !== 2) {
        throw "Smoothing group statements must have exactly 1 argument (eg. s <number|off>)";
      }
      const groupNumber = lineItems[1].toLowerCase() === "off" ? 0 : parseInt(lineItems[1], 10);
      this.smoothingGroup = groupNumber;
    }
  }

  // src/gameobjects3d/geometry/GetBufferFromObj.ts
  function GetBufferFromObj(data, flipUVs = true) {
    const parser = new ParseObj2(data, flipUVs);
    const result = parser.parse();
    const output = [];
    result.models.forEach((model) => {
      const {
        faces,
        textureCoords,
        vertexNormals,
        vertices
      } = model;
      let totalFaces = 0;
      for (let i = 0; i < faces.length; i++) {
        totalFaces += faces[i].vertices.length === 4 ? 6 : 3;
      }
      const buffer = new VertexBuffer2({batchSize: totalFaces, isDynamic: false, vertexElementSize: 8, elementsPerEntry: 3});
      const F32 = buffer.vertexViewF32;
      let offset = 0;
      for (let i = 0; i < faces.length; i++) {
        const face = faces[i];
        const i1 = face.vertices[0];
        const i2 = face.vertices[1];
        const i3 = face.vertices[2];
        const v1 = vertices[i1.vertexIndex];
        const v2 = vertices[i2.vertexIndex];
        const v3 = vertices[i3.vertexIndex];
        const n1 = vertexNormals[i1.vertexNormalIndex];
        const n2 = vertexNormals[i2.vertexNormalIndex];
        const n3 = vertexNormals[i3.vertexNormalIndex];
        const uv1 = textureCoords[i1.textureCoordsIndex];
        const uv2 = textureCoords[i2.textureCoordsIndex];
        const uv3 = textureCoords[i3.textureCoordsIndex];
        F32[offset++] = v1.x;
        F32[offset++] = v1.y;
        F32[offset++] = v1.z;
        F32[offset++] = n1.x;
        F32[offset++] = n1.y;
        F32[offset++] = n1.z;
        F32[offset++] = uv1.u;
        F32[offset++] = uv1.v;
        F32[offset++] = v2.x;
        F32[offset++] = v2.y;
        F32[offset++] = v2.z;
        F32[offset++] = n2.x;
        F32[offset++] = n2.y;
        F32[offset++] = n2.z;
        F32[offset++] = uv2.u;
        F32[offset++] = uv2.v;
        F32[offset++] = v3.x;
        F32[offset++] = v3.y;
        F32[offset++] = v3.z;
        F32[offset++] = n3.x;
        F32[offset++] = n3.y;
        F32[offset++] = n3.z;
        F32[offset++] = uv3.u;
        F32[offset++] = uv3.v;
        buffer.count += 3;
        if (face.vertices.length === 4) {
          const i4 = face.vertices[3];
          const v4 = vertices[i4.vertexIndex];
          const n4 = vertexNormals[i4.vertexNormalIndex];
          const uv4 = textureCoords[i4.textureCoordsIndex];
          F32[offset++] = v1.x;
          F32[offset++] = v1.y;
          F32[offset++] = v1.z;
          F32[offset++] = n1.x;
          F32[offset++] = n1.y;
          F32[offset++] = n1.z;
          F32[offset++] = uv1.u;
          F32[offset++] = uv1.v;
          F32[offset++] = v3.x;
          F32[offset++] = v3.y;
          F32[offset++] = v3.z;
          F32[offset++] = n3.x;
          F32[offset++] = n3.y;
          F32[offset++] = n3.z;
          F32[offset++] = uv3.u;
          F32[offset++] = uv3.v;
          F32[offset++] = v4.x;
          F32[offset++] = v4.y;
          F32[offset++] = v4.z;
          F32[offset++] = n4.x;
          F32[offset++] = n4.y;
          F32[offset++] = n4.z;
          F32[offset++] = uv4.u;
          F32[offset++] = uv4.v;
          buffer.count += 3;
        }
      }
      output.push({name: model.name, buffer});
    });
    return output;
  }

  // src/gameobjects3d/geometry/GetFacesFromVertexSet.ts
  function GetVec32(data, index) {
    const x = data[index * 3 + 0];
    const y = data[index * 3 + 1];
    const z = data[index * 3 + 2];
    return [x, y, z];
  }
  function GetVec22(data, index) {
    const x = data[index * 2 + 0];
    const y = data[index * 2 + 1];
    return [x, y];
  }
  function GetFacesFromVertexSet(data) {
    const {
      vertices,
      normals,
      uvs,
      indices
    } = data;
    const faces = [];
    for (let i = 0; i < indices.length; i += 3) {
      const i1 = indices[i + 0];
      const i2 = indices[i + 1];
      const i3 = indices[i + 2];
      const v1 = GetVec32(vertices, i1);
      const v2 = GetVec32(vertices, i2);
      const v3 = GetVec32(vertices, i3);
      const n1 = GetVec32(normals, i1);
      const n2 = GetVec32(normals, i2);
      const n3 = GetVec32(normals, i3);
      const uv1 = GetVec22(uvs, i1);
      const uv2 = GetVec22(uvs, i2);
      const uv3 = GetVec22(uvs, i3);
      const f = new FaceUVNormalTexture({x: v1[0], y: v1[1], z: v1[2]}, {x: v2[0], y: v2[1], z: v2[2]}, {x: v3[0], y: v3[1], z: v3[2]}, {x: n1[0], y: n1[1], z: n1[2]}, {x: n2[0], y: n2[1], z: n2[2]}, {x: n3[0], y: n3[1], z: n3[2]}, {x: uv1[0], y: uv1[1]}, {x: uv2[0], y: uv2[1]}, {x: uv3[0], y: uv3[1]}, 1);
      faces.push(f);
    }
    return faces;
  }

  // src/gameobjects3d/geometry/VertexSet.ts

  // src/gameobjects3d/geometry/index.ts
  const geometry_exports = {};
  __export(geometry_exports, {
    CreateVertexSet: () => CreateVertexSet,
    FaceUVNormalTexture: () => FaceUVNormalTexture,
    Geometry: () => Geometry2,
    GetBufferFromObj: () => GetBufferFromObj,
    GetBufferFromVertexSet: () => GetBufferFromVertexSet2,
    GetFacesFromVertexSet: () => GetFacesFromVertexSet,
    ParseObj: () => ParseObj2
  });

  // src/geom3d/PlaneGeometry.ts
  function PlaneGeometry2(data, x = 0, y = 0, z = 0, u = 0, v = 1, w = 2, udir = 1, vdir = -1, width = 1, height = 1, depth = 1, gridX = 1, gridY = 1) {
    if (!data) {
      data = CreateVertexSet();
    }
    const {
      vertices,
      normals,
      uvs,
      indices,
      numberOfVertices
    } = data;
    const segmentWidth = width / gridX;
    const segmentHeight = height / gridY;
    const widthHalf = width / 2;
    const heightHalf = height / 2;
    const depthHalf = depth / 2;
    const gridX1 = gridX + 1;
    const gridY1 = gridY + 1;
    let vertexCounter = 0;
    const vector = [];
    for (let iy = 0; iy < gridY1; iy++) {
      const by = iy * segmentHeight - heightHalf;
      for (let ix = 0; ix < gridX1; ix++) {
        const bx = ix * segmentWidth - widthHalf;
        vector[u] = bx * udir;
        vector[v] = by * vdir;
        vector[w] = depthHalf;
        vertices.push(x + vector[0], y + vector[1], z + vector[2]);
        vector[u] = 0;
        vector[v] = 0;
        vector[w] = depth > 0 ? 1 : -1;
        normals.push(vector[0], vector[1], vector[2]);
        uvs.push(ix / gridX);
        uvs.push(1 - iy / gridY);
        vertexCounter += 1;
      }
    }
    for (let iy = 0; iy < gridY; iy++) {
      for (let ix = 0; ix < gridX; ix++) {
        const a = numberOfVertices + ix + gridX1 * iy;
        const b = numberOfVertices + ix + gridX1 * (iy + 1);
        const c = numberOfVertices + (ix + 1) + gridX1 * (iy + 1);
        const d = numberOfVertices + (ix + 1) + gridX1 * iy;
        indices.push(a, b, d);
        indices.push(b, c, d);
      }
    }
    data.numberOfVertices += vertexCounter;
    return data;
  }

  // src/geom3d/BoxGeometry.ts
  function BoxGeometry2(x = 0, y = 0, z = 0, width = 1, height = 1, depth = 1, widthSegments = 1, heightSegments = 1, depthSegments = 1) {
    const data = CreateVertexSet();
    PlaneGeometry2(data, x, y, z, 2, 1, 0, -1, -1, depth, height, width, depthSegments, heightSegments);
    PlaneGeometry2(data, x, y, z, 2, 1, 0, 1, -1, depth, height, -width, depthSegments, heightSegments);
    PlaneGeometry2(data, x, y, z, 0, 2, 1, 1, 1, width, depth, height, widthSegments, depthSegments);
    PlaneGeometry2(data, x, y, z, 0, 2, 1, 1, -1, width, depth, -height, widthSegments, depthSegments);
    PlaneGeometry2(data, x, y, z, 0, 1, 2, 1, -1, width, height, depth, widthSegments, heightSegments);
    PlaneGeometry2(data, x, y, z, 0, 1, 2, -1, -1, width, height, -depth, widthSegments, heightSegments);
    return data;
  }

  // src/gameobjects3d/GameObject3D.ts
  class GameObject3D {
    constructor(x = 0, y = 0, z = 0) {
      this.type = "GameObject3D";
      this.name = "";
      this.willUpdate = true;
      this.willUpdateChildren = true;
      this.willRender = true;
      this.willRenderChildren = true;
      this.willCacheChildren = false;
      this.dirty = 0;
      this.dirtyFrame = 0;
      this.visible = true;
      this.children = [];
      this.events = new Map();
      this.transform = new Transform3DComponent2(this, x, y, z);
      this.dirty = DIRTY_CONST2.DEFAULT;
    }
    isRenderable() {
      return this.visible && this.willRender;
    }
    isDirty(flag) {
      return (this.dirty & flag) !== 0;
    }
    clearDirty(flag) {
      if (this.isDirty(flag)) {
        this.dirty ^= flag;
      }
      return this;
    }
    setDirty(flag, flag2) {
      if (!this.isDirty(flag)) {
        this.dirty ^= flag;
        this.dirtyFrame = GameInstance2.getFrame();
      }
      if (!this.isDirty(flag2)) {
        this.dirty ^= flag2;
      }
      return this;
    }
    update(delta, time) {
      if (this.willUpdateChildren) {
        const children = this.children;
        for (let i = 0; i < children.length; i++) {
          const child = children[i];
          if (child && child.willUpdate) {
            child.update(delta, time);
          }
        }
      }
      this.postUpdate(delta, time);
    }
    postUpdate(delta, time) {
    }
    renderGL(renderPass) {
    }
    postRenderGL(renderPass) {
    }
    get numChildren() {
      return this.children.length;
    }
    destroy(reparentChildren) {
      if (reparentChildren) {
      } else {
      }
      Emit(this, DestroyEvent, this);
      this.transform.destroy();
      this.events.clear();
      this.world = null;
      this.parent = null;
      this.children = null;
    }
  }

  // src/gameobjects3d/material/Material.ts
  class Material2 {
    constructor(config5 = {}) {
      this.isDirty = false;
      const {
        ambient = [1, 1, 1],
        diffuse = [1, 1, 1],
        specular = [1, 1, 1],
        shine = 0.25
      } = config5;
      const onChange = () => this.update();
      this.ambient = new RGBCallback(onChange).fromArray(ambient);
      this.diffuse = new RGBCallback(onChange).fromArray(diffuse);
      this.specular = new RGBCallback(onChange).fromArray(specular);
      this._shine = shine;
    }
    get shine() {
      return this._shine;
    }
    set shine(value) {
      this._shine = Clamp(value, 0, 1);
      this.isDirty = true;
    }
    update() {
      this.isDirty = true;
    }
    setUniforms(shader) {
      shader.setUniform("uMaterialAmbient", this.ambient.toArray());
      shader.setUniform("uMaterialDiffuse", this.diffuse.toArray());
      shader.setUniform("uMaterialSpecular", this.specular.toArray());
      shader.setUniform("uMaterialShine", this._shine * 256);
    }
    destroy() {
      this.ambient.destroy();
      this.diffuse.destroy();
      this.specular.destroy();
    }
  }

  // src/gameobjects3d/mesh/SetFrame.ts
  function SetFrame2(texture, key, ...children) {
    const frame2 = texture.getFrame(key);
    children.forEach((child) => {
      if (!child || frame2 === child.frame) {
        return;
      }
      child.frame = frame2;
      child.hasTexture = true;
    });
    return children;
  }

  // src/gameobjects3d/mesh/SetTexture.ts
  function SetTexture4(key, frame2, ...children) {
    if (!key) {
      children.forEach((child) => {
        child.texture = null;
        child.frame = null;
        child.hasTexture = false;
      });
    } else {
      let texture;
      if (key instanceof Texture5) {
        texture = key;
      } else {
        texture = TextureManagerInstance2.get().get(key);
      }
      if (!texture) {
        console.warn(`Invalid Texture key: ${key}`);
      } else {
        children.forEach((child) => {
          child.texture = texture;
        });
        SetFrame2(texture, frame2, ...children);
      }
    }
    return children;
  }

  // src/gameobjects3d/mesh/Mesh.ts
  class Mesh2 extends GameObject3D {
    constructor(x = 0, y = 0, z = 0, geometry, material = new Material2()) {
      super(x, y, z);
      this.hasTexture = false;
      this.cullFaces = true;
      this.geometry = geometry;
      this.material = material;
      this.setTexture("__WHITE");
    }
    setTexture(key, frame2) {
      SetTexture4(key, frame2, this);
      return this;
    }
    setFrame(key) {
      SetFrame2(this.texture, key, this);
      return this;
    }
    setMaterial(material) {
      this.material = material;
      return this;
    }
    renderGL(renderPass) {
      const shader = renderPass.currentShader.shader;
      shader.setUniform("uModelMatrix", this.transform.local.data);
      shader.setUniform("uNormalMatrix", this.transform.normal.data);
      if (this.hasTexture) {
        const textureIndex = SetTexture2(renderPass, this.texture);
        shader.setUniform("uTexture", textureIndex);
      }
      this.material.setUniforms(shader);
      FlushBuffer(renderPass, this.geometry.buffer);
    }
    destroy(reparentChildren) {
      super.destroy(reparentChildren);
      this.geometry = null;
      this.material = null;
      this.texture = null;
      this.frame = null;
      this.hasTexture = false;
    }
  }

  // src/gameobjects3d/box/Box.ts
  class Box extends Mesh2 {
    constructor(x = 0, y = 0, z = 0, width = 1, height = 1, depth = 1, widthSegments = 1, heightSegments = 1, depthSegments = 1) {
      const data = BoxGeometry2(0, 0, 0, width, height, depth, widthSegments, heightSegments, depthSegments);
      const geometry = new Geometry2(data);
      super(x, y, z, geometry);
    }
  }

  // src/geom3d/CylinderGeometry.ts
  function GenerateCap(top, data, index, halfHeight, radiusTop, radiusBottom, radialSegments, thetaStart, thetaLength) {
    const {
      vertices,
      normals,
      uvs,
      indices
    } = data;
    const uv = new Vec25();
    const vertex = new Vec3();
    const radius = top === true ? radiusTop : radiusBottom;
    const sign = top === true ? 1 : -1;
    const centerIndexStart = index;
    for (let x = 1; x <= radialSegments; x++) {
      vertices.push(0, halfHeight * sign, 0);
      normals.push(0, sign, 0);
      uvs.push(0.5, 0.5);
      index++;
    }
    const centerIndexEnd = index;
    for (let x = 0; x <= radialSegments; x++) {
      const u = x / radialSegments;
      const theta = u * thetaLength + thetaStart;
      const cosTheta = Math.cos(theta);
      const sinTheta = Math.sin(theta);
      vertex.x = radius * sinTheta;
      vertex.y = halfHeight * sign;
      vertex.z = radius * cosTheta;
      vertices.push(vertex.x, vertex.y, vertex.z);
      normals.push(0, sign, 0);
      uv.x = cosTheta * 0.5 + 0.5;
      uv.y = sinTheta * 0.5 * sign + 0.5;
      uvs.push(uv.x, uv.y);
      index++;
    }
    for (let x = 0; x < radialSegments; x++) {
      const c = centerIndexStart + x;
      const i = centerIndexEnd + x;
      if (top) {
        indices.push(i, i + 1, c);
      } else {
        indices.push(i + 1, i, c);
      }
    }
    return index;
  }
  function CylinderGeometry2(radiusTop = 1, radiusBottom = 1, height = 1, radialSegments = 8, heightSegments = 1, openEnded = false, thetaStart = 0, thetaLength = Math.PI * 2) {
    const data = CreateVertexSet();
    const {
      vertices,
      normals,
      uvs,
      indices
    } = data;
    let index = 0;
    const indexArray = [];
    const halfHeight = height / 2;
    const normal = new Vec3();
    const vertex = new Vec3();
    const slope = (radiusBottom - radiusTop) / height;
    for (let y = 0; y <= heightSegments; y++) {
      const indexRow = [];
      const v = y / heightSegments;
      const radius = v * (radiusBottom - radiusTop) + radiusTop;
      for (let x = 0; x <= radialSegments; x++) {
        const u = x / radialSegments;
        const theta = u * thetaLength + thetaStart;
        const sinTheta = Math.sin(theta);
        const cosTheta = Math.cos(theta);
        vertex.x = radius * sinTheta;
        vertex.y = -v * height + halfHeight;
        vertex.z = radius * cosTheta;
        vertices.push(vertex.x, vertex.y, vertex.z);
        normal.set(sinTheta, slope, cosTheta);
        Normalize(normal, normal);
        normals.push(normal.x, normal.y, normal.z);
        uvs.push(u, 1 - v);
        indexRow.push(index++);
      }
      indexArray.push(indexRow);
    }
    for (let x = 0; x < radialSegments; x++) {
      for (let y = 0; y < heightSegments; y++) {
        const a = indexArray[y][x];
        const b = indexArray[y + 1][x];
        const c = indexArray[y + 1][x + 1];
        const d = indexArray[y][x + 1];
        indices.push(a, b, d);
        indices.push(b, c, d);
      }
    }
    if (!openEnded) {
      if (radiusTop > 0) {
        index = GenerateCap(true, data, index, halfHeight, radiusTop, radiusBottom, radialSegments, thetaStart, thetaLength);
      }
      if (radiusBottom > 0) {
        GenerateCap(false, data, index, halfHeight, radiusTop, radiusBottom, radialSegments, thetaStart, thetaLength);
      }
    }
    data.numberOfVertices = vertices.length;
    return data;
  }

  // src/geom3d/ConeGeometry.ts
  function ConeGeometry2(radius = 1, height = 1, radialSegments = 8, heightSegments = 1, openEnded = false, thetaStart = 0, thetaLength = Math.PI * 2) {
    return CylinderGeometry2(0, radius, height, radialSegments, heightSegments, openEnded, thetaStart, thetaLength);
  }

  // src/gameobjects3d/cone/Cone.ts
  class Cone extends Mesh2 {
    constructor(x = 0, y = 0, z = 0, radius = 1, height = 1, radialSegments = 8, heightSegments = 1, openEnded = false, thetaStart = 0, thetaLength = Math.PI * 2) {
      const data = ConeGeometry2(radius, height, radialSegments, heightSegments, openEnded, thetaStart, thetaLength);
      const geometry = new Geometry2(data);
      super(x, y, z, geometry);
    }
  }

  // src/gameobjects3d/light/Light.ts
  class Light2 {
    constructor(config5 = {}) {
      this.isDirty = false;
      const {
        x = 0,
        y = 0,
        z = 0.1,
        ambient = [1, 1, 1],
        diffuse = [1, 1, 1],
        specular = [1, 1, 1]
      } = config5;
      const onChange = () => this.update();
      this.position = new Vec3Callback(onChange, x, y, z);
      this.ambient = new RGBCallback(onChange).fromArray(ambient);
      this.diffuse = new RGBCallback(onChange).fromArray(diffuse);
      this.specular = new RGBCallback(onChange).fromArray(specular);
    }
    setUniforms(shader) {
      shader.setUniform("uLightPosition", this.position.toArray());
      shader.setUniform("uLightAmbient", this.ambient.toArray());
      shader.setUniform("uLightDiffuse", this.diffuse.toArray());
      shader.setUniform("uLightSpecular", this.specular.toArray());
    }
    update() {
      this.isDirty = true;
    }
    destroy() {
      this.position.destroy();
      this.ambient.destroy();
      this.diffuse.destroy();
      this.specular.destroy();
    }
  }

  // src/gameobjects3d/plane/Plane.ts
  class Plane2 extends Mesh2 {
    constructor(x = 0, y = 0, z = 0, width = 1, height = 1, widthSegments = 1, heightSegments = 1) {
      const data = PlaneGeometry2(null, 0, 0, 0, 0, 1, 2, 1, -1, width, height, 1, widthSegments, heightSegments);
      const geometry = new Geometry2(data);
      super(x, y, z, geometry);
    }
  }

  // src/gameobjects3d/renderlayer3d/RenderLayer3D.ts
  class RenderLayer3D2 extends Layer2 {
    constructor() {
      super();
      this.type = "RenderLayer";
      this.willRender = true;
      this.willRenderChildren = true;
      this.willCacheChildren = true;
      this.setDirty(DIRTY_CONST2.CHILD_CACHE);
      const width = GetWidth();
      const height = GetHeight();
      const resolution = GetResolution();
      const texture = new Texture5(null, width * resolution, height * resolution);
      const binding = new GLTextureBinding2(texture);
      texture.binding = binding;
      binding.framebuffer = CreateFramebuffer2(binding.texture);
      binding.depthbuffer = CreateDepthBuffer2(binding.framebuffer, texture.width, texture.height);
      this.texture = texture;
      this.framebuffer = binding.framebuffer;
    }
    renderGL(renderPass) {
      if (this.numChildren > 0) {
        Flush(renderPass);
        if (!this.willCacheChildren || this.isDirty(DIRTY_CONST2.CHILD_CACHE)) {
          SetFramebuffer(renderPass, this.framebuffer, true);
          this.clearDirty(DIRTY_CONST2.CHILD_CACHE);
        } else {
          SetFramebuffer(renderPass, this.framebuffer, false);
          this.postRenderGL(renderPass);
        }
      }
    }
    postRenderGL(renderPass) {
      Flush(renderPass);
      PopFramebuffer(renderPass);
      DrawTexturedQuad2(renderPass, this.texture);
      this.clearDirty(DIRTY_CONST2.TRANSFORM);
    }
  }

  // src/geom3d/SphereGeometry.ts
  function SphereGeometry2(radius = 1, widthSegments = 3, heightSegments = 3, phiStart = 0, phiLength = Math.PI * 2, thetaStart = 0, thetaLength = Math.PI) {
    widthSegments = Math.max(3, Math.floor(widthSegments) || 8);
    heightSegments = Math.max(2, Math.floor(heightSegments) || 6);
    const thetaEnd = Math.min(thetaStart + thetaLength, Math.PI);
    const data = CreateVertexSet();
    const {
      vertices,
      normals,
      uvs,
      indices
    } = data;
    let index = 0;
    const grid = [];
    const vertex = new Vec3();
    const normal = new Vec3();
    for (let iy = 0; iy <= heightSegments; iy++) {
      const verticesRow = [];
      const v = iy / heightSegments;
      let uOffset = 0;
      if (iy === 0 && thetaStart === 0) {
        uOffset = 0.5 / widthSegments;
      } else if (iy === heightSegments && thetaEnd == Math.PI) {
        uOffset = -0.5 / widthSegments;
      }
      for (let ix = 0; ix <= widthSegments; ix++) {
        const u = ix / widthSegments;
        vertex.x = -radius * Math.cos(phiStart + u * phiLength) * Math.sin(thetaStart + v * thetaLength);
        vertex.y = radius * Math.cos(thetaStart + v * thetaLength);
        vertex.z = radius * Math.sin(phiStart + u * phiLength) * Math.sin(thetaStart + v * thetaLength);
        vertices.push(vertex.x, vertex.y, vertex.z);
        Normalize(vertex, normal);
        normals.push(normal.x, normal.y, normal.z);
        uvs.push(u + uOffset, 1 - v);
        verticesRow.push(index++);
      }
      grid.push(verticesRow);
    }
    for (let iy = 0; iy < heightSegments; iy++) {
      for (let ix = 0; ix < widthSegments; ix++) {
        const a = grid[iy][ix + 1];
        const b = grid[iy][ix];
        const c = grid[iy + 1][ix];
        const d = grid[iy + 1][ix + 1];
        if (iy !== 0 || thetaStart > 0) {
          indices.push(a, b, d);
        }
        if (iy !== heightSegments - 1 || thetaEnd < Math.PI) {
          indices.push(b, c, d);
        }
      }
    }
    data.numberOfVertices = vertices.length;
    return data;
  }

  // src/gameobjects3d/sphere/Sphere.ts
  class Sphere2 extends Mesh2 {
    constructor(x = 0, y = 0, z = 0, radius = 1, widthSegments = 3, heightSegments = 3, phiStart = 0, phiLength = Math.PI * 2, thetaStart = 0, thetaLength = Math.PI) {
      const data = SphereGeometry2(radius, widthSegments, heightSegments, phiStart, phiLength, thetaStart, thetaLength);
      const geometry = new Geometry2(data);
      super(x, y, z, geometry);
    }
  }

  // src/gameobjects3d/index.ts
  const gameobjects3d_exports = {};
  __export(gameobjects3d_exports, {
    Box: () => Box,
    Components: () => components_exports,
    Cone: () => Cone,
    GameObject3D: () => GameObject3D,
    Geometry: () => geometry_exports,
    Light: () => Light2,
    Material: () => Material2,
    Mesh: () => Mesh2,
    Plane: () => Plane2,
    RenderLayer3D: () => RenderLayer3D2,
    Sphere: () => Sphere2
  });

  // src/geom/circle/Area.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function Area(circle) {
    return circle.radius > 0 ? Math.PI * circle.radius * circle.radius : 0;
  }

  // src/geom/circle/Contains.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function Contains2(circle, x, y) {
    if (circle.radius > 0 && x >= circle.left && x <= circle.right && y >= circle.top && y <= circle.bottom) {
      const dx = (circle.x - x) * (circle.x - x);
      const dy = (circle.y - y) * (circle.y - y);
      return dx + dy <= circle.radius * circle.radius;
    } else {
      return false;
    }
  }

  // src/geom/circle/Circle.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  class Circle {
    constructor(x = 0, y = 0, radius = 0) {
      this.set(x, y, radius);
    }
    set(x = 0, y = 0, radius = 0) {
      this.x = x;
      this.y = y;
      this.radius = radius;
      return this;
    }
    contains(x, y) {
      return Contains2(this, x, y);
    }
    get radius() {
      return this._radius;
    }
    set radius(value) {
      this._radius = value;
      this._diameter = value * 2;
    }
    get diameter() {
      return this._diameter;
    }
    set diameter(value) {
      this._diameter = value;
      this._radius = value * 0.5;
    }
    get left() {
      return this.x - this._radius;
    }
    set left(value) {
      this.x = value + this._radius;
    }
    get right() {
      return this.x + this._radius;
    }
    set right(value) {
      this.x = value - this._radius;
    }
    get top() {
      return this.y - this._radius;
    }
    set top(value) {
      this.y = value + this._radius;
    }
    get bottom() {
      return this.y + this._radius;
    }
    set bottom(value) {
      this.y = value - this._radius;
    }
  }

  // src/geom/circle/Circumference.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function Circumference(circle) {
    return 2 * (Math.PI * circle.radius);
  }

  // src/geom/circle/CircumferencePoint.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function CircumferencePoint(circle, angle2, out = new Vec25()) {
    return out.set(circle.x + circle.radius * Math.cos(angle2), circle.y + circle.radius * Math.sin(angle2));
  }

  // src/geom/circle/Clone.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function Clone(source) {
    return new Circle(source.x, source.y, source.radius);
  }

  // src/geom/circle/ContainsPoint.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function ContainsPoint(circle, point) {
    return Contains2(circle, point.x, point.y);
  }

  // src/geom/circle/ContainsRect.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function ContainsRect(circle, rect) {
    return Contains2(circle, rect.x, rect.y) && Contains2(circle, rect.right, rect.y) && Contains2(circle, rect.x, rect.bottom) && Contains2(circle, rect.right, rect.bottom);
  }

  // src/geom/circle/CopyFrom.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function CopyFrom3(source, dest) {
    return dest.set(source.x, source.y, source.radius);
  }

  // src/geom/circle/Equals.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function Equals(circle, toCompare) {
    return circle.x === toCompare.x && circle.y === toCompare.y && circle.radius === toCompare.radius;
  }

  // src/geom/circle/GetBounds.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function GetBounds(circle, out = new Rectangle()) {
    return out.set(circle.left, circle.top, circle.diameter, circle.diameter);
  }

  // src/geom/circle/GetPoint.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function GetPoint(circle, position, out = new Vec25()) {
    const angle2 = FromPercent2(position, 0, MATH_CONST.PI2);
    return CircumferencePoint(circle, angle2, out);
  }

  // src/geom/circle/GetPoints.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function GetPoints(circle, step, quantity = 0, out = []) {
    if (!quantity) {
      quantity = Circumference(circle) / step;
    }
    for (let i = 0; i < quantity; i++) {
      const angle2 = FromPercent2(i / quantity, 0, MATH_CONST.PI2);
      out.push(CircumferencePoint(circle, angle2));
    }
    return out;
  }

  // src/geom/circle/Offset.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function Offset(circle, x, y) {
    circle.x += x;
    circle.y += y;
    return circle;
  }

  // src/geom/circle/OffsetPoint.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function OffsetPoint(circle, point) {
    circle.x += point.x;
    circle.y += point.y;
    return circle;
  }

  // src/geom/circle/Random.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function Random(circle, out = new Vec25()) {
    const t = 2 * Math.PI * Math.random();
    const u = Math.random() + Math.random();
    const r = u > 1 ? 2 - u : u;
    const x = r * Math.cos(t);
    const y = r * Math.sin(t);
    return out.set(circle.x + x * circle.radius, circle.y + y * circle.radius);
  }

  // src/geom/circle/index.ts
  const circle_exports = {};
  __export(circle_exports, {
    Area: () => Area,
    Circle: () => Circle,
    Circumference: () => Circumference,
    CircumferencePoint: () => CircumferencePoint,
    Clone: () => Clone,
    Contains: () => Contains2,
    ContainsPoint: () => ContainsPoint,
    ContainsRect: () => ContainsRect,
    CopyFrom: () => CopyFrom3,
    Equals: () => Equals,
    GetBounds: () => GetBounds,
    GetPoint: () => GetPoint,
    GetPoints: () => GetPoints,
    Offset: () => Offset,
    OffsetPoint: () => OffsetPoint,
    Random: () => Random
  });
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */

  // src/geom/ellipse/Area.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function Area3(ellipse) {
    if (ellipse.width <= 0 || ellipse.height <= 0) {
      return 0;
    }
    return ellipse.getMajorRadius() * ellipse.getMinorRadius() * Math.PI;
  }

  // src/geom/ellipse/Circumference.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function Circumference4(ellipse) {
    const rx = ellipse.width / 2;
    const ry = ellipse.height / 2;
    const h = Math.pow(rx - ry, 2) / Math.pow(rx + ry, 2);
    return Math.PI * (rx + ry) * (1 + 3 * h / (10 + Math.sqrt(4 - 3 * h)));
  }

  // src/geom/ellipse/CircumferencePoint.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function CircumferencePoint5(ellipse, angle2, out = new Vec25()) {
    const halfWidth = ellipse.width / 2;
    const halfHeight = ellipse.height / 2;
    return out.set(ellipse.x + halfWidth * Math.cos(angle2), ellipse.y + halfHeight * Math.sin(angle2));
  }

  // src/geom/ellipse/Contains.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function Contains6(ellipse, x, y) {
    if (ellipse.width <= 0 || ellipse.height <= 0) {
      return false;
    }
    let normx = (x - ellipse.x) / ellipse.width;
    let normy = (y - ellipse.y) / ellipse.height;
    normx *= normx;
    normy *= normy;
    return normx + normy < 0.25;
  }

  // src/geom/ellipse/Ellipse.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  class Ellipse2 {
    constructor(x = 0, y = 0, width = 0, height = 0) {
      this.set(x, y, width, height);
    }
    set(x = 0, y = 0, width = 0, height = 0) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      return this;
    }
    contains(x, y) {
      return Contains6(this, x, y);
    }
    getMinorRadius() {
      return Math.min(this.width, this.height) / 2;
    }
    getMajorRadius() {
      return Math.max(this.width, this.height) / 2;
    }
    get left() {
      return this.x - this.width / 2;
    }
    set left(value) {
      this.x = value + this.width / 2;
    }
    get right() {
      return this.x + this.width / 2;
    }
    set right(value) {
      this.x = value - this.width / 2;
    }
    get top() {
      return this.y - this.height / 2;
    }
    set top(value) {
      this.y = value + this.height / 2;
    }
    get bottom() {
      return this.y + this.height / 2;
    }
    set bottom(value) {
      this.y = value - this.height / 2;
    }
  }

  // src/geom/ellipse/Clone.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function Clone3(source) {
    return new Ellipse2(source.x, source.y, source.width, source.height);
  }

  // src/geom/ellipse/ContainsPoint.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function ContainsPoint3(ellipse, point) {
    return Contains6(ellipse, point.x, point.y);
  }

  // src/geom/ellipse/ContainsRect.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function ContainsRect3(ellipse, rect) {
    return Contains6(ellipse, rect.x, rect.y) && Contains6(ellipse, rect.right, rect.y) && Contains6(ellipse, rect.x, rect.bottom) && Contains6(ellipse, rect.right, rect.bottom);
  }

  // src/geom/ellipse/CopyFrom.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function CopyFrom5(source, dest) {
    return dest.set(source.x, source.y, source.width, source.height);
  }

  // src/geom/ellipse/Equals.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function Equals3(ellipse, toCompare) {
    return ellipse.x === toCompare.x && ellipse.y === toCompare.y && ellipse.width === toCompare.width && ellipse.height === toCompare.height;
  }

  // src/geom/ellipse/GetBounds.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function GetBounds3(ellipse, out = new Rectangle()) {
    return out.set(ellipse.left, ellipse.top, ellipse.width, ellipse.height);
  }

  // src/geom/ellipse/GetPoint.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function GetPoint3(ellipse, position, out = new Vec25()) {
    const angle2 = FromPercent2(position, 0, MATH_CONST.PI2);
    return CircumferencePoint5(ellipse, angle2, out);
  }

  // src/geom/ellipse/GetPoints.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function GetPoints3(ellipse, step, quantity = 0, out = []) {
    if (!quantity) {
      quantity = Circumference4(ellipse) / step;
    }
    for (let i = 0; i < quantity; i++) {
      const angle2 = FromPercent2(i / quantity, 0, MATH_CONST.PI2);
      out.push(CircumferencePoint5(ellipse, angle2));
    }
    return out;
  }

  // src/geom/ellipse/Offset.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function Offset3(ellipse, x, y) {
    ellipse.x += x;
    ellipse.y += y;
    return ellipse;
  }

  // src/geom/ellipse/OffsetPoint.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function OffsetPoint3(ellipse, point) {
    ellipse.x += point.x;
    ellipse.y += point.y;
    return ellipse;
  }

  // src/geom/ellipse/Random.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function Random3(ellipse, out = new Vec25()) {
    const p = Math.random() * Math.PI * 2;
    const s = Math.sqrt(Math.random());
    out.x = ellipse.x + s * Math.cos(p) * ellipse.width / 2;
    out.y = ellipse.y + s * Math.sin(p) * ellipse.height / 2;
    return out;
  }

  // src/geom/ellipse/index.ts
  const ellipse_exports = {};
  __export(ellipse_exports, {
    Area: () => Area3,
    Circumference: () => Circumference4,
    CircumferencePoint: () => CircumferencePoint5,
    Clone: () => Clone3,
    Contains: () => Contains6,
    ContainsPoint: () => ContainsPoint3,
    ContainsRect: () => ContainsRect3,
    CopyFrom: () => CopyFrom5,
    Ellipse: () => Ellipse2,
    Equals: () => Equals3,
    GetBounds: () => GetBounds3,
    GetPoint: () => GetPoint3,
    GetPoints: () => GetPoints3,
    Offset: () => Offset3,
    OffsetPoint: () => OffsetPoint3,
    Random: () => Random3
  });
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */

  // src/geom/intersects/CircleToCircle.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function CircleToCircle(circleA, circleB) {
    return Distance2(circleA, circleB) <= circleA.radius + circleB.radius;
  }

  // src/geom/intersects/CircleToRectangle.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function CircleToRectangle(circle, rect) {
    const halfWidth = rect.width / 2;
    const halfHeight = rect.height / 2;
    const cx = Math.abs(circle.x - rect.x - halfWidth);
    const cy = Math.abs(circle.y - rect.y - halfHeight);
    const xDist = halfWidth + circle.radius;
    const yDist = halfHeight + circle.radius;
    if (cx > xDist || cy > yDist) {
      return false;
    } else if (cx <= halfWidth || cy <= halfHeight) {
      return true;
    } else {
      const xCornerDist = cx - halfWidth;
      const yCornerDist = cy - halfHeight;
      const xCornerDistSq = xCornerDist * xCornerDist;
      const yCornerDistSq = yCornerDist * yCornerDist;
      const maxCornerDistSq = circle.radius * circle.radius;
      return xCornerDistSq + yCornerDistSq <= maxCornerDistSq;
    }
  }

  // src/geom/intersects/GetCircleToCircle.ts
  /**
   * @author       Florian Vazelle
   * @author       Geoffrey Glaive
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function GetCircleToCircle(circleA, circleB, out = []) {
    if (CircleToCircle(circleA, circleB)) {
      const x0 = circleA.x;
      const y0 = circleA.y;
      const r0 = circleA.radius;
      const x1 = circleB.x;
      const y1 = circleB.y;
      const r1 = circleB.radius;
      let coefficientA;
      let coefficientB;
      let coefficientC;
      let lambda;
      let x;
      if (y0 === y1) {
        x = (r1 * r1 - r0 * r0 - x1 * x1 + x0 * x0) / (2 * (x0 - x1));
        coefficientA = 1;
        coefficientB = -2 * y1;
        coefficientC = x1 * x1 + x * x - 2 * x1 * x + y1 * y1 - r1 * r1;
        lambda = coefficientB * coefficientB - 4 * coefficientA * coefficientC;
        if (lambda === 0) {
          out.push(new Vec25(x, -coefficientB / (2 * coefficientA)));
        } else if (lambda > 0) {
          out.push(new Vec25(x, (-coefficientB + Math.sqrt(lambda)) / (2 * coefficientA)));
          out.push(new Vec25(x, (-coefficientB - Math.sqrt(lambda)) / (2 * coefficientA)));
        }
      } else {
        const v1 = (x0 - x1) / (y0 - y1);
        const n = (r1 * r1 - r0 * r0 - x1 * x1 + x0 * x0 - y1 * y1 + y0 * y0) / (2 * (y0 - y1));
        coefficientA = v1 * v1 + 1;
        coefficientB = 2 * y0 * v1 - 2 * n * v1 - 2 * x0;
        coefficientC = x0 * x0 + y0 * y0 + n * n - r0 * r0 - 2 * y0 * n;
        lambda = coefficientB * coefficientB - 4 * coefficientA * coefficientC;
        if (lambda === 0) {
          x = -coefficientB / (2 * coefficientA);
          out.push(new Vec25(x, n - x * v1));
        } else if (lambda > 0) {
          x = (-coefficientB + Math.sqrt(lambda)) / (2 * coefficientA);
          out.push(new Vec25(x, n - x * v1));
          x = (-coefficientB - Math.sqrt(lambda)) / (2 * coefficientA);
          out.push(new Vec25(x, n - x * v1));
        }
      }
    }
    return out;
  }

  // src/geom/intersects/LineToCircle.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  const tmp = new Vec25();
  function LineToCircle2(line, circle, nearest) {
    if (!nearest) {
      nearest = tmp;
    }
    const {x1, y1, x2, y2} = line;
    if (Contains2(circle, x1, y1)) {
      nearest.set(x1, y1);
      return true;
    }
    if (Contains2(circle, x2, y2)) {
      nearest.set(x2, y2);
      return true;
    }
    const dx = x2 - x1;
    const dy = y2 - y1;
    const lcx = circle.x - x1;
    const lcy = circle.y - y1;
    const dLen2 = dx * dx + dy * dy;
    let px = dx;
    let py = dy;
    if (dLen2 > 0) {
      const dp = (lcx * dx + lcy * dy) / dLen2;
      px *= dp;
      py *= dp;
    }
    nearest.set(x1 + px, y1 + py);
    const pLen2 = px * px + py * py;
    return pLen2 <= dLen2 && px * dx + py * dy >= 0 && Contains2(circle, nearest.x, nearest.y);
  }

  // src/geom/intersects/GetLineToCircle.ts
  /**
   * @author       Florian Vazelle
   * @author       Geoffrey Glaive
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function GetLineToCircle2(line, circle, out = []) {
    if (LineToCircle2(line, circle)) {
      const {x1, y1, x2, y2} = line;
      const cr = circle.radius;
      const lDirX = x2 - x1;
      const lDirY = y2 - y1;
      const oDirX = x1 - circle.x;
      const oDirY = y1 - circle.y;
      const coefficientA = lDirX * lDirX + lDirY * lDirY;
      const coefficientB = 2 * (lDirX * oDirX + lDirY * oDirY);
      const coefficientC = oDirX * oDirX + oDirY * oDirY - cr * cr;
      const lambda = coefficientB * coefficientB - 4 * coefficientA * coefficientC;
      let x;
      let y;
      if (lambda === 0) {
        const root = -coefficientB / (2 * coefficientA);
        x = x1 + root * lDirX;
        y = y1 + root * lDirY;
        if (root >= 0 && root <= 1) {
          out.push(new Vec25(x, y));
        }
      } else if (lambda > 0) {
        const root1 = (-coefficientB - Math.sqrt(lambda)) / (2 * coefficientA);
        x = x1 + root1 * lDirX;
        y = y1 + root1 * lDirY;
        if (root1 >= 0 && root1 <= 1) {
          out.push(new Vec25(x, y));
        }
        const root2 = (-coefficientB + Math.sqrt(lambda)) / (2 * coefficientA);
        x = x1 + root2 * lDirX;
        y = y1 + root2 * lDirY;
        if (root2 >= 0 && root2 <= 1) {
          out.push(new Vec25(x, y));
        }
      }
    }
    return out;
  }

  // src/geom/intersects/GetCircleToRectangle.ts
  /**
   * @author       Florian Vazelle
   * @author       Geoffrey Glaive
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function GetCircleToRectangle(circle, rect, out = []) {
    if (CircleToRectangle(circle, rect)) {
      const [line1, line2, line3, line4] = GetEdges2(rect);
      GetLineToCircle2(line1, circle, out);
      GetLineToCircle2(line2, circle, out);
      GetLineToCircle2(line3, circle, out);
      GetLineToCircle2(line4, circle, out);
    }
    return out;
  }

  // src/geom/intersects/LineToLine.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function LineToLine2(line1, line2, out) {
    const {x1, y1, x2, y2} = line1;
    const {x1: x3, y1: y3, x2: x4, y2: y4} = line2;
    const numA = (x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3);
    const numB = (x2 - x1) * (y1 - y3) - (y2 - y1) * (x1 - x3);
    const deNom = (y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1);
    if (deNom === 0) {
      return false;
    }
    const uA = numA / deNom;
    const uB = numB / deNom;
    if (uA >= 0 && uA <= 1 && uB >= 0 && uB <= 1) {
      if (out) {
        out.set(x1 + uA * (x2 - x1), y1 + uA * (y2 - y1));
      }
      return true;
    }
    return false;
  }

  // src/geom/intersects/LineToRectangle.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function LineToRectangle2(line, rect) {
    const {x1, y1, x2, y2} = line;
    const {x, y, right, bottom} = rect;
    let t = 0;
    if (x1 >= x && x1 <= right && y1 >= y && y1 <= bottom || x2 >= x && x2 <= right && y2 >= y && y2 <= bottom) {
      return true;
    }
    if (x1 < x && x2 >= x) {
      t = y1 + (y2 - y1) * (x - x1) / (x2 - x1);
      if (t > y && t <= bottom) {
        return true;
      }
    } else if (x1 > right && x2 <= right) {
      t = y1 + (y2 - y1) * (right - x1) / (x2 - x1);
      if (t >= y && t <= bottom) {
        return true;
      }
    }
    if (y1 < y && y2 >= y) {
      t = x1 + (x2 - x1) * (y - y1) / (y2 - y1);
      if (t >= x && t <= right) {
        return true;
      }
    } else if (y1 > bottom && y2 <= bottom) {
      t = x1 + (x2 - x1) * (bottom - y1) / (y2 - y1);
      if (t >= x && t <= right) {
        return true;
      }
    }
    return false;
  }

  // src/geom/intersects/GetLineToRectangle.ts
  /**
   * @author       Florian Vazelle
   * @author       Geoffrey Glaive
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function GetLineToRectangle(line, rect, out = []) {
    if (LineToRectangle2(line, rect)) {
      const [lineA, lineB, lineC, lineD] = GetEdges2(rect);
      const points = [new Vec25(), new Vec25(), new Vec25(), new Vec25()];
      const results = [
        LineToLine2(lineA, line, points[0]),
        LineToLine2(lineB, line, points[1]),
        LineToLine2(lineC, line, points[2]),
        LineToLine2(lineD, line, points[3])
      ];
      for (let i = 0; i < results.length; i++) {
        if (results[i]) {
          out.push(points[i]);
        }
      }
    }
    return out;
  }

  // src/geom/intersects/GetRectangleIntersection.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function GetRectangleIntersection(rectA, rectB, out = new Rectangle()) {
    if (RectangleToRectangle2(rectA, rectB)) {
      const x = Math.max(rectA.x, rectB.x);
      const y = Math.max(rectA.y, rectB.y);
      return out.set(x, y, Math.min(rectA.right, rectB.right) - x, Math.min(rectA.bottom, rectB.bottom) - y);
    }
  }

  // src/geom/intersects/GetRectangleToRectangle.ts
  /**
   * @author       Florian Vazelle
   * @author       Geoffrey Glaive
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function GetRectangleToRectangle(rectA, rectB, out = []) {
    if (RectangleToRectangle2(rectA, rectB)) {
      const [lineA, lineB, lineC, lineD] = GetEdges2(rectA);
      GetLineToRectangle(lineA, rectB, out);
      GetLineToRectangle(lineB, rectB, out);
      GetLineToRectangle(lineC, rectB, out);
      GetLineToRectangle(lineD, rectB, out);
    }
    return out;
  }

  // src/geom/triangle/GetEdges.ts
  function GetEdges6(triangle) {
    const {x1, y1, x2, y2, x3, y3} = triangle;
    const edge1 = new Line2(x1, y1, x2, y2);
    const edge2 = new Line2(x2, y2, x3, y3);
    const edge3 = new Line2(x3, y3, x1, y1);
    return [edge1, edge2, edge3];
  }

  // src/geom/triangle/Contains.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function Contains15(triangle, x, y) {
    const {x1, y1, x2, y2, x3, y3} = triangle;
    const v0x = x3 - x1;
    const v0y = y3 - y1;
    const v1x = x2 - x1;
    const v1y = y2 - y1;
    const v2x = x - x1;
    const v2y = y - y1;
    const dot00 = v0x * v0x + v0y * v0y;
    const dot01 = v0x * v1x + v0y * v1y;
    const dot02 = v0x * v2x + v0y * v2y;
    const dot11 = v1x * v1x + v1y * v1y;
    const dot12 = v1x * v2x + v1y * v2y;
    const b = dot00 * dot11 - dot01 * dot01;
    const inv = b === 0 ? 0 : 1 / b;
    const u = (dot11 * dot02 - dot01 * dot12) * inv;
    const v = (dot00 * dot12 - dot01 * dot02) * inv;
    return u >= 0 && v >= 0 && u + v < 1;
  }

  // src/geom/triangle/ContainsArray.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function ContainsArray2(triangle, points, returnFirst = false, out = []) {
    let skip = false;
    points.forEach((point) => {
      if (skip) {
        return;
      }
      const {x, y} = point;
      if (Contains15(triangle, x, y)) {
        out.push(new Vec25(x, y));
        if (returnFirst) {
          skip = true;
        }
      }
    });
    return out;
  }

  // src/geom/intersects/RectangleToTriangle.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function RectangleToTriangle2(rect, triangle) {
    if (triangle.left > rect.right || triangle.right < rect.x || triangle.top > rect.bottom || triangle.bottom < rect.y) {
      return false;
    }
    const [triA, triB, triC] = GetEdges6(triangle);
    if (Contains13(rect, triA.x1, triA.y1) || Contains13(rect, triA.x2, triA.y2)) {
      return true;
    }
    if (Contains13(rect, triB.x1, triB.y1) || Contains13(rect, triB.x2, triB.y2)) {
      return true;
    }
    if (Contains13(rect, triC.x1, triC.y1) || Contains13(rect, triC.x2, triC.y2)) {
      return true;
    }
    const [rectA, rectB, rectC, rectD] = GetEdges2(rect);
    if (LineToLine2(triA, rectA) || LineToLine2(triA, rectB) || LineToLine2(triA, rectC) || LineToLine2(triA, rectD)) {
      return true;
    }
    if (LineToLine2(triB, rectA) || LineToLine2(triB, rectB) || LineToLine2(triB, rectC) || LineToLine2(triB, rectD)) {
      return true;
    }
    if (LineToLine2(triC, rectA) || LineToLine2(triC, rectB) || LineToLine2(triC, rectC) || LineToLine2(triC, rectD)) {
      return true;
    }
    const within = ContainsArray2(triangle, Decompose2(rect), true);
    return within.length > 0;
  }

  // src/geom/intersects/GetRectangleToTriangle.ts
  /**
   * @author       Florian Vazelle
   * @author       Geoffrey Glaive
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function GetRectangleToTriangle(rect, triangle, out = []) {
    if (RectangleToTriangle2(rect, triangle)) {
      const [lineA, lineB, lineC] = GetEdges6(triangle);
      GetLineToRectangle(lineA, rect, out);
      GetLineToRectangle(lineB, rect, out);
      GetLineToRectangle(lineC, rect, out);
    }
    return out;
  }

  // src/geom/intersects/TriangleToCircle.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function TriangleToCircle2(triangle, circle) {
    if (triangle.left > circle.right || triangle.right < circle.left || triangle.top > circle.bottom || triangle.bottom < circle.top) {
      return false;
    }
    if (Contains15(triangle, circle.x, circle.y)) {
      return true;
    }
    const [line1, line2, line3] = GetEdges6(triangle);
    return LineToCircle2(line1, circle) || LineToCircle2(line2, circle) || LineToCircle2(line3, circle);
  }

  // src/geom/intersects/GetTriangleToCircle.ts
  /**
   * @author       Florian Vazelle
   * @author       Geoffrey Glaive
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function GetTriangleToCircle(triangle, circle, out = []) {
    if (TriangleToCircle2(triangle, circle)) {
      const [lineA, lineB, lineC] = GetEdges6(triangle);
      GetLineToCircle2(lineA, circle, out);
      GetLineToCircle2(lineB, circle, out);
      GetLineToCircle2(lineC, circle, out);
    }
    return out;
  }

  // src/geom/intersects/TriangleToLine.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function TriangleToLine2(triangle, line) {
    const {x1, y1, x2, y2} = line;
    if (Contains15(triangle, x1, y1) || Contains15(triangle, x2, y2)) {
      return true;
    }
    const [line1, line2, line3] = GetEdges6(triangle);
    return LineToLine2(line1, line) || LineToLine2(line2, line) || LineToLine2(line3, line);
  }

  // src/geom/intersects/GetTriangleToLine.ts
  /**
   * @author       Florian Vazelle
   * @author       Geoffrey Glaive
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function GetTriangleToLine(triangle, line, out = []) {
    if (TriangleToLine2(triangle, line)) {
      const [lineA, lineB, lineC] = GetEdges6(triangle);
      const points = [new Vec25(), new Vec25(), new Vec25()];
      const results = [
        LineToLine2(lineA, line, points[0]),
        LineToLine2(lineB, line, points[1]),
        LineToLine2(lineC, line, points[2])
      ];
      for (let i = 0; i < results.length; i++) {
        if (results[i]) {
          out.push(points[i]);
        }
      }
    }
    return out;
  }

  // src/geom/triangle/Decompose.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function Decompose4(triangle, out = []) {
    const {x1, y1, x2, y2, x3, y3} = triangle;
    out.push(new Vec25(x1, y1), new Vec25(x2, y2), new Vec25(x3, y3));
    return out;
  }

  // src/geom/intersects/TriangleToTriangle.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function TriangleToTriangle2(triangleA, triangleB) {
    if (triangleA.left > triangleB.right || triangleA.right < triangleB.left || triangleA.top > triangleB.bottom || triangleA.bottom < triangleB.top) {
      return false;
    }
    const [lineAA, lineAB, lineAC] = GetEdges6(triangleA);
    const [lineBA, lineBB, lineBC] = GetEdges6(triangleB);
    if (LineToLine2(lineAA, lineBA) || LineToLine2(lineAA, lineBB) || LineToLine2(lineAA, lineBC) || LineToLine2(lineAB, lineBA) || LineToLine2(lineAB, lineBB) || LineToLine2(lineAB, lineBC) || LineToLine2(lineAC, lineBA) || LineToLine2(lineAC, lineBB) || LineToLine2(lineAC, lineBC)) {
      return true;
    }
    const withinA = ContainsArray2(triangleB, Decompose4(triangleA), true);
    if (withinA.length > 0) {
      return true;
    }
    const withinB = ContainsArray2(triangleA, Decompose4(triangleB), true);
    return withinB.length > 0;
  }

  // src/geom/intersects/GetTriangleToTriangle.ts
  /**
   * @author       Florian Vazelle
   * @author       Geoffrey Glaive
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function GetTriangleToTriangle(triangleA, triangleB, out = []) {
    if (TriangleToTriangle2(triangleA, triangleB)) {
      const [lineA, lineB, lineC] = GetEdges6(triangleB);
      GetTriangleToLine(triangleA, lineA, out);
      GetTriangleToLine(triangleA, lineB, out);
      GetTriangleToLine(triangleA, lineC, out);
    }
    return out;
  }

  // src/geom/intersects/PointToLine.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @author       Florian Mertens
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function PointToLine(point, line, lineThickness = 1) {
    const {x1, y1, x2, y2} = line;
    const {x: px, y: py} = point;
    const L2 = (x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1);
    if (L2 === 0) {
      return false;
    }
    const r = ((px - x1) * (x2 - x1) + (py - y1) * (y2 - y1)) / L2;
    if (r < 0) {
      return Math.sqrt((x1 - px) * (x1 - px) + (y1 - py) * (y1 - py)) <= lineThickness;
    } else if (r >= 0 && r <= 1) {
      const s = ((y1 - py) * (x2 - x1) - (x1 - px) * (y2 - y1)) / L2;
      return Math.abs(s) * Math.sqrt(L2) <= lineThickness;
    } else {
      return Math.sqrt((x2 - px) * (x2 - px) + (y2 - py) * (y2 - py)) <= lineThickness;
    }
  }

  // src/geom/intersects/PointToLineSegment.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function PointToLineSegment(point, line) {
    if (!PointToLine(point, line)) {
      return false;
    }
    const {x1, y1, x2, y2} = line;
    const {x, y} = point;
    const xMin = Math.min(x1, x2);
    const xMax = Math.max(x1, x2);
    const yMin = Math.min(y1, y2);
    const yMax = Math.max(y1, y2);
    return x >= xMin && x <= xMax && (y >= yMin && y <= yMax);
  }

  // src/geom/intersects/index.ts
  const intersects_exports = {};
  __export(intersects_exports, {
    CircleToCircle: () => CircleToCircle,
    CircleToRectangle: () => CircleToRectangle,
    GetCircleToCircle: () => GetCircleToCircle,
    GetCircleToRectangle: () => GetCircleToRectangle,
    GetLineToCircle: () => GetLineToCircle2,
    GetLineToRectangle: () => GetLineToRectangle,
    GetRectangleIntersection: () => GetRectangleIntersection,
    GetRectangleToRectangle: () => GetRectangleToRectangle,
    GetRectangleToTriangle: () => GetRectangleToTriangle,
    GetTriangleToCircle: () => GetTriangleToCircle,
    GetTriangleToLine: () => GetTriangleToLine,
    GetTriangleToTriangle: () => GetTriangleToTriangle,
    LineToCircle: () => LineToCircle2,
    LineToLine: () => LineToLine2,
    LineToRectangle: () => LineToRectangle2,
    PointToLine: () => PointToLine,
    PointToLineSegment: () => PointToLineSegment,
    RectangleToRectangle: () => RectangleToRectangle2,
    RectangleToTriangle: () => RectangleToTriangle2,
    TriangleToCircle: () => TriangleToCircle2,
    TriangleToLine: () => TriangleToLine2,
    TriangleToTriangle: () => TriangleToTriangle2
  });
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */

  // src/geom/line/Angle.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function Angle(line) {
    return Math.atan2(line.y2 - line.y1, line.x2 - line.x1);
  }

  // src/geom/line/BresenhamPoints.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function BresenhamPoints(line, stepRate = 1, results = []) {
    let x1 = Math.round(line.x1);
    let y1 = Math.round(line.y1);
    const x2 = Math.round(line.x2);
    const y2 = Math.round(line.y2);
    const dx = Math.abs(x2 - x1);
    const dy = Math.abs(y2 - y1);
    const sx = x1 < x2 ? 1 : -1;
    const sy = y1 < y2 ? 1 : -1;
    let err = dx - dy;
    results.push(new Vec25(x1, y1));
    let i = 1;
    while (!(x1 === x2 && y1 === y2)) {
      const e2 = err << 1;
      if (e2 > -dy) {
        err -= dy;
        x1 += sx;
      }
      if (e2 < dx) {
        err += dx;
        y1 += sy;
      }
      if (i % stepRate === 0) {
        results.push(new Vec25(x1, y1));
      }
      i++;
    }
    return results;
  }

  // src/geom/line/CenterOn.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function CenterOn(line, x, y) {
    const tx = x - (line.x1 + line.x2) / 2;
    const ty = y - (line.y1 + line.y2) / 2;
    line.x1 += tx;
    line.y1 += ty;
    line.x2 += tx;
    line.y2 += ty;
    return line;
  }

  // src/geom/line/Clone.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function Clone5(source) {
    return new Line2(source.x1, source.y1, source.x2, source.y2);
  }

  // src/geom/line/CopyFrom.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function CopyFrom7(source, dest) {
    return dest.set(source.x1, source.y1, source.x2, source.y2);
  }

  // src/geom/line/Equals.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function Equals5(line, toCompare) {
    return line.x1 === toCompare.x1 && line.y1 === toCompare.y1 && line.x2 === toCompare.x2 && line.y2 === toCompare.y2;
  }

  // src/geom/line/Length.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function Length2(line) {
    const {x1, y1, x2, y2} = line;
    return Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
  }

  // src/geom/line/Extend.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function Extend(line, left, right = left) {
    const length = Length2(line);
    const slopX = line.x2 - line.x1;
    const slopY = line.y2 - line.y1;
    if (left) {
      line.x1 = line.x1 - slopX / length * left;
      line.y1 = line.y1 - slopY / length * left;
    }
    if (right) {
      line.x2 = line.x2 + slopX / length * right;
      line.y2 = line.y2 + slopY / length * right;
    }
    return line;
  }

  // src/geom/line/GetMidPoint.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function GetMidPoint(line, out = new Vec25()) {
    out.x = (line.x1 + line.x2) / 2;
    out.y = (line.y1 + line.y2) / 2;
    return out;
  }

  // src/geom/line/GetNearestPoint.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @author       Florian Mertens
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function GetNearestPoint(line, point, out = new Vec25()) {
    const {x1, y1, x2, y2} = line;
    const L2 = (x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1);
    if (L2 === 0) {
      return out;
    }
    const r = ((point.x - x1) * (x2 - x1) + (point.y - y1) * (y2 - y1)) / L2;
    out.x = x1 + r * (x2 - x1);
    out.y = y1 + r * (y2 - y1);
    return out;
  }

  // src/geom/line/GetNormal.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function GetNormal(line, out = new Vec25()) {
    const a = Angle(line) - MATH_CONST.HALF_PI;
    out.x = Math.cos(a);
    out.y = Math.sin(a);
    return out;
  }

  // src/geom/line/GetPoint.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function GetPoint5(line, position, out = new Vec25()) {
    out.x = line.x1 + (line.x2 - line.x1) * position;
    out.y = line.y1 + (line.y2 - line.y1) * position;
    return out;
  }

  // src/geom/line/GetPoints.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function GetPoints5(line, quantity, stepRate = 0, out = []) {
    if (!quantity) {
      quantity = Length2(line) / stepRate;
    }
    const {x1, y1, x2, y2} = line;
    for (let i = 0; i < quantity; i++) {
      const position = i / quantity;
      const x = x1 + (x2 - x1) * position;
      const y = y1 + (y2 - y1) * position;
      out.push(new Vec25(x, y));
    }
    return out;
  }

  // src/geom/line/GetShortestDistance.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @author       Florian Mertens
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function GetShortestDistance(line, point) {
    const {x1, y1, x2, y2} = line;
    const L2 = (x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1);
    if (L2 === 0) {
      return 0;
    }
    const s = ((y1 - point.y) * (x2 - x1) - (x1 - point.x) * (y2 - y1)) / L2;
    return Math.abs(s) * Math.sqrt(L2);
  }

  // src/geom/line/Height.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function Height(line) {
    return Math.abs(line.y1 - line.y2);
  }

  // src/geom/line/NormalAngle.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function NormalAngle(line) {
    const angle2 = Angle(line) - MATH_CONST.HALF_PI;
    return Wrap2(angle2, -Math.PI, Math.PI);
  }

  // src/geom/line/NormalX.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function NormalX(line) {
    return Math.cos(Angle(line) - MATH_CONST.HALF_PI);
  }

  // src/geom/line/NormalY.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function NormalY(line) {
    return Math.sin(Angle(line) - MATH_CONST.HALF_PI);
  }

  // src/geom/line/Offset.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function Offset5(line, x, y) {
    line.x1 += x;
    line.y1 += y;
    line.x2 += x;
    line.y2 += y;
    return line;
  }

  // src/geom/line/PerpSlope.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function PerpSlope(line) {
    const {x1, y1, x2, y2} = line;
    return -((x2 - x1) / (y2 - y1));
  }

  // src/geom/line/Random.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function Random5(line, out = new Vec25()) {
    const t = Math.random();
    out.x = line.x1 + t * (line.x2 - line.x1);
    out.y = line.y1 + t * (line.y2 - line.y1);
    return out;
  }

  // src/geom/line/ReflectAngle.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function ReflectAngle(lineA, lineB) {
    return 2 * NormalAngle(lineB) - Math.PI - Angle(lineA);
  }

  // src/geom/line/RotateAroundXY.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function RotateAroundXY2(line, x, y, angle2) {
    const c = Math.cos(angle2);
    const s = Math.sin(angle2);
    let tx = line.x1 - x;
    let ty = line.y1 - y;
    line.x1 = tx * c - ty * s + x;
    line.y1 = tx * s + ty * c + y;
    tx = line.x2 - x;
    ty = line.y2 - y;
    line.x2 = tx * c - ty * s + x;
    line.y2 = tx * s + ty * c + y;
    return line;
  }

  // src/geom/line/Rotate.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function Rotate(line, angle2) {
    const x = (line.x1 + line.x2) / 2;
    const y = (line.y1 + line.y2) / 2;
    return RotateAroundXY2(line, x, y, angle2);
  }

  // src/geom/line/RotateAroundPoint.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function RotateAroundPoint(line, point, angle2) {
    return RotateAroundXY2(line, point.x, point.y, angle2);
  }

  // src/geom/line/SetToAngle.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function SetToAngle(line, x, y, angle2, length) {
    line.x1 = x;
    line.y1 = y;
    line.x2 = x + Math.cos(angle2) * length;
    line.y2 = y + Math.sin(angle2) * length;
    return line;
  }

  // src/geom/line/Slope.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function Slope(line) {
    const {x1, y1, x2, y2} = line;
    return (y2 - y1) / (x2 - x1);
  }

  // src/geom/line/Width.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function Width(line) {
    return Math.abs(line.x1 - line.x2);
  }

  // src/geom/line/index.ts
  const line_exports = {};
  __export(line_exports, {
    Angle: () => Angle,
    BresenhamPoints: () => BresenhamPoints,
    CenterOn: () => CenterOn,
    Clone: () => Clone5,
    CopyFrom: () => CopyFrom7,
    Equals: () => Equals5,
    Extend: () => Extend,
    GetMidPoint: () => GetMidPoint,
    GetNearestPoint: () => GetNearestPoint,
    GetNormal: () => GetNormal,
    GetPoint: () => GetPoint5,
    GetPoints: () => GetPoints5,
    GetShortestDistance: () => GetShortestDistance,
    Height: () => Height,
    Length: () => Length2,
    Line: () => Line2,
    NormalAngle: () => NormalAngle,
    NormalX: () => NormalX,
    NormalY: () => NormalY,
    Offset: () => Offset5,
    PerpSlope: () => PerpSlope,
    Random: () => Random5,
    ReflectAngle: () => ReflectAngle,
    Rotate: () => Rotate,
    RotateAroundPoint: () => RotateAroundPoint,
    RotateAroundXY: () => RotateAroundXY2,
    SetToAngle: () => SetToAngle,
    Slope: () => Slope,
    Width: () => Width
  });
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */

  // src/geom/triangle/Area.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function Area7(triangle) {
    const {x1, y1, x2, y2, x3, y3} = triangle;
    return Math.abs(((x3 - x1) * (y2 - y1) - (x2 - x1) * (y3 - y1)) / 2);
  }

  // src/geom/triangle/Triangle.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  class Triangle2 {
    constructor(x1 = 0, y1 = 0, x2 = 0, y2 = 0, x3 = 0, y3 = 0) {
      this.set(x1, y1, x2, y2, x3, y3);
    }
    set(x1 = 0, y1 = 0, x2 = 0, y2 = 0, x3 = 0, y3 = 0) {
      this.x1 = x1;
      this.y1 = y1;
      this.x2 = x2;
      this.y2 = y2;
      this.x3 = x3;
      this.y3 = y3;
      return this;
    }
    contains(x, y) {
      return Contains15(this, x, y);
    }
    get left() {
      return Math.min(this.x1, this.x2, this.x3);
    }
    set left(value) {
      let diff = 0;
      if (this.x1 <= this.x2 && this.x1 <= this.x3) {
        diff = this.x1 - value;
      } else if (this.x2 <= this.x1 && this.x2 <= this.x3) {
        diff = this.x2 - value;
      } else {
        diff = this.x3 - value;
      }
      this.x1 -= diff;
      this.x2 -= diff;
      this.x3 -= diff;
    }
    get right() {
      return Math.max(this.x1, this.x2, this.x3);
    }
    set right(value) {
      let diff = 0;
      if (this.x1 >= this.x2 && this.x1 >= this.x3) {
        diff = this.x1 - value;
      } else if (this.x2 >= this.x1 && this.x2 >= this.x3) {
        diff = this.x2 - value;
      } else {
        diff = this.x3 - value;
      }
      this.x1 -= diff;
      this.x2 -= diff;
      this.x3 -= diff;
    }
    get top() {
      return Math.min(this.y1, this.y2, this.y3);
    }
    set top(value) {
      let diff = 0;
      if (this.y1 <= this.y2 && this.y1 <= this.y3) {
        diff = this.y1 - value;
      } else if (this.y2 <= this.y1 && this.y2 <= this.y3) {
        diff = this.y2 - value;
      } else {
        diff = this.y3 - value;
      }
      this.y1 -= diff;
      this.y2 -= diff;
      this.y3 -= diff;
    }
    get bottom() {
      return Math.max(this.y1, this.y2, this.y3);
    }
    set bottom(value) {
      let diff = 0;
      if (this.y1 >= this.y2 && this.y1 >= this.y3) {
        diff = this.y1 - value;
      } else if (this.y2 >= this.y1 && this.y2 >= this.y3) {
        diff = this.y2 - value;
      } else {
        diff = this.y3 - value;
      }
      this.y1 -= diff;
      this.y2 -= diff;
      this.y3 -= diff;
    }
  }

  // src/geom/triangle/BuildEquilateral.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function BuildEquilateral(x, y, length) {
    const height = length * (Math.sqrt(3) / 2);
    const x1 = x;
    const y1 = y;
    const x2 = x + length / 2;
    const y2 = y + height;
    const x3 = x - length / 2;
    const y3 = y + height;
    return new Triangle2(x1, y1, x2, y2, x3, y3);
  }

  // src/geom/triangle/BuildRight.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function BuildRight(x, y, width, height = width) {
    const x1 = x;
    const y1 = y;
    const x2 = x;
    const y2 = y - height;
    const x3 = x + width;
    const y3 = y;
    return new Triangle2(x1, y1, x2, y2, x3, y3);
  }

  // src/geom/triangle/Centroid.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function Centroid2(triangle, out = new Vec25()) {
    return out.set((triangle.x1 + triangle.x2 + triangle.x3) / 3, (triangle.y1 + triangle.y2 + triangle.y3) / 3);
  }

  // src/geom/triangle/Offset.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function Offset10(triangle, x, y) {
    triangle.x1 += x;
    triangle.y1 += y;
    triangle.x2 += x;
    triangle.y2 += y;
    triangle.x3 += x;
    triangle.y3 += y;
    return triangle;
  }

  // src/geom/triangle/CenterOn.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function CenterOn6(triangle, x, y, centerFunc = Centroid2) {
    const center = centerFunc(triangle);
    const diffX = x - center.x;
    const diffY = y - center.y;
    return Offset10(triangle, diffX, diffY);
  }

  // src/geom/triangle/CircumCenter.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function Det(m00, m01, m10, m11) {
    return m00 * m11 - m01 * m10;
  }
  function CircumCenter(triangle, out = new Vec25()) {
    const cx = triangle.x3;
    const cy = triangle.y3;
    const ax = triangle.x1 - cx;
    const ay = triangle.y1 - cy;
    const bx = triangle.x2 - cx;
    const by = triangle.y2 - cy;
    const denom = 2 * Det(ax, ay, bx, by);
    const numx = Det(ay, ax * ax + ay * ay, by, bx * bx + by * by);
    const numy = Det(ax, ax * ax + ay * ay, bx, bx * bx + by * by);
    return out.set(cx - numx / denom, cy + numy / denom);
  }

  // src/geom/triangle/CircumCircle.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function CircumCircle(triangle, out = new Circle()) {
    const {x1, y1, x2, y2, x3, y3} = triangle;
    const A = x2 - x1;
    const B = y2 - y1;
    const C = x3 - x1;
    const D = y3 - y1;
    const E = A * (x1 + x2) + B * (y1 + y2);
    const F = C * (x1 + x3) + D * (y1 + y3);
    const G = 2 * (A * (y3 - y2) - B * (x3 - x2));
    if (Math.abs(G) < 1e-6) {
      const minX = Math.min(x1, x2, x3);
      const minY = Math.min(y1, y2, y3);
      const dx = (Math.max(x1, x2, x3) - minX) * 0.5;
      const dy = (Math.max(y1, y2, y3) - minY) * 0.5;
      return out.set(minX + dx, minY + dy, Math.sqrt(dx * dx + dy * dy));
    } else {
      const cx = (D * E - B * F) / G;
      const cy = (A * F - C * E) / G;
      const dx = cx - x1;
      const dy = cy - y1;
      return out.set(cx, cy, Math.sqrt(dx * dx + dy * dy));
    }
  }

  // src/geom/triangle/Clone.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function Clone9(source) {
    const {x1, y1, x2, y2, x3, y3} = source;
    return new Triangle2(x1, y1, x2, y2, x3, y3);
  }

  // src/geom/triangle/ContainsPoint.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function ContainsPoint7(triangle, point) {
    return Contains15(triangle, point.x, point.y);
  }

  // src/geom/triangle/CopyFrom.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function CopyFrom11(source, dest) {
    const {x1, y1, x2, y2, x3, y3} = source;
    return dest.set(x1, y1, x2, y2, x3, y3);
  }

  // src/geom/triangle/Equals.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function Equals9(triangle, toCompare) {
    return triangle.x1 === toCompare.x1 && triangle.y1 === toCompare.y1 && triangle.x2 === toCompare.x2 && triangle.y2 === toCompare.y2 && triangle.x3 === toCompare.x3 && triangle.y3 === toCompare.y3;
  }

  // src/geom/triangle/GetPoint.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function GetPoint10(triangle, position, out = new Vec25()) {
    const [line1, line2, line3] = GetEdges6(triangle);
    if (position <= 0 || position >= 1) {
      return out.set(line1.x1, line1.y1);
    }
    const length1 = Length2(line1);
    const length2 = Length2(line2);
    const length3 = Length2(line3);
    const perimeter = length1 + length2 + length3;
    let p = perimeter * position;
    let localPosition = 0;
    if (p < length1) {
      localPosition = p / length1;
      const {x1, y1, x2, y2} = line1;
      return out.set(x1 + (x2 - x1) * localPosition, y1 + (y2 - y1) * localPosition);
    } else if (p > length1 + length2) {
      p -= length1 + length2;
      localPosition = p / length3;
      const {x1, y1, x2, y2} = line3;
      return out.set(x1 + (x2 - x1) * localPosition, y1 + (y2 - y1) * localPosition);
    } else {
      p -= length1;
      localPosition = p / length2;
      const {x1, y1, x2, y2} = line2;
      return out.set(x1 + (x2 - x1) * localPosition, y1 + (y2 - y1) * localPosition);
    }
  }

  // src/geom/triangle/GetPoints.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function GetPoints9(triangle, quantity, stepRate, out = []) {
    const [line1, line2, line3] = GetEdges6(triangle);
    const length1 = Length2(line1);
    const length2 = Length2(line2);
    const length3 = Length2(line3);
    const perimeter = length1 + length2 + length3;
    if (!quantity) {
      quantity = perimeter / stepRate;
    }
    for (let i = 0; i < quantity; i++) {
      let p = perimeter * (i / quantity);
      let localPosition = 0;
      let point;
      if (p < length1) {
        localPosition = p / length1;
        const {x1, y1, x2, y2} = line1;
        point = new Vec25(x1 + (x2 - x1) * localPosition, y1 + (y2 - y1) * localPosition);
      } else if (p > length1 + length2) {
        p -= length1 + length2;
        localPosition = p / length3;
        const {x1, y1, x2, y2} = line3;
        point = new Vec25(x1 + (x2 - x1) * localPosition, y1 + (y2 - y1) * localPosition);
      } else {
        p -= length1;
        localPosition = p / length2;
        const {x1, y1, x2, y2} = line2;
        point = new Vec25(x1 + (x2 - x1) * localPosition, y1 + (y2 - y1) * localPosition);
      }
      out.push(point);
    }
    return out;
  }

  // src/geom/triangle/InCenter.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function GetLength(x1, y1, x2, y2) {
    const x = x1 - x2;
    const y = y1 - y2;
    const magnitude = x * x + y * y;
    return Math.sqrt(magnitude);
  }
  function InCenter(triangle, out = new Vec25()) {
    const {x1, y1, x2, y2, x3, y3} = triangle;
    const d1 = GetLength(x3, y3, x2, y2);
    const d2 = GetLength(x1, y1, x3, y3);
    const d3 = GetLength(x2, y2, x1, y1);
    const p = d1 + d2 + d3;
    return out.set((x1 * d1 + x2 * d2 + x3 * d3) / p, (y1 * d1 + y2 * d2 + y3 * d3) / p);
  }

  // src/geom/triangle/Perimeter.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function Perimeter6(triangle) {
    const [line1, line2, line3] = GetEdges6(triangle);
    return Length2(line1) + Length2(line2) + Length2(line3);
  }

  // src/geom/triangle/Random.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function Random9(triangle, out = new Vec25()) {
    const {x1, y1, x2, y2, x3, y3} = triangle;
    const ux = x2 - x1;
    const uy = y2 - y1;
    const vx = x3 - x1;
    const vy = y3 - y1;
    let r = Math.random();
    let s = Math.random();
    if (r + s >= 1) {
      r = 1 - r;
      s = 1 - s;
    }
    return out.set(x1 + (ux * r + vx * s), y1 + (uy * r + vy * s));
  }

  // src/geom/triangle/RotateAroundXY.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function RotateAroundXY6(triangle, x, y, angle2) {
    const {x1, y1, x2, y2, x3, y3} = triangle;
    const c = Math.cos(angle2);
    const s = Math.sin(angle2);
    return triangle.set((x1 - x) * c - (y1 - y) * s + x, (x1 - x) * s + (y1 - y) * c + y, (x2 - x) * c - (y2 - y) * s + x, (x2 - x) * s + (y2 - y) * c + y, (x3 - x) * c - (y3 - y) * s + x, (x3 - x) * s + (y3 - y) * c + y);
  }

  // src/geom/triangle/Rotate.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function Rotate3(triangle, angle2) {
    const point = InCenter(triangle);
    return RotateAroundXY6(triangle, point.x, point.y, angle2);
  }

  // src/geom/triangle/RotateAroundPoint.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function RotateAroundPoint3(triangle, point, angle2) {
    return RotateAroundXY6(triangle, point.x, point.y, angle2);
  }

  // src/geom/triangle/index.ts
  const triangle_exports = {};
  __export(triangle_exports, {
    Area: () => Area7,
    BuildEquilateral: () => BuildEquilateral,
    BuildRight: () => BuildRight,
    CenterOn: () => CenterOn6,
    Centroid: () => Centroid2,
    CircumCenter: () => CircumCenter,
    CircumCircle: () => CircumCircle,
    Clone: () => Clone9,
    Contains: () => Contains15,
    ContainsArray: () => ContainsArray2,
    ContainsPoint: () => ContainsPoint7,
    CopyFrom: () => CopyFrom11,
    Decompose: () => Decompose4,
    Equals: () => Equals9,
    GetEdges: () => GetEdges6,
    GetPoint: () => GetPoint10,
    GetPoints: () => GetPoints9,
    InCenter: () => InCenter,
    Offset: () => Offset10,
    Perimeter: () => Perimeter6,
    Random: () => Random9,
    Rotate: () => Rotate3,
    RotateAroundPoint: () => RotateAroundPoint3,
    RotateAroundXY: () => RotateAroundXY6,
    Triangle: () => Triangle2
  });
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */

  // src/geom/index.ts
  const geom_exports = {};
  __export(geom_exports, {
    Circle: () => circle_exports,
    Ellipse: () => ellipse_exports,
    Intersects: () => intersects_exports,
    Line: () => line_exports,
    Rectangle: () => rectangle_exports,
    Triangle: () => triangle_exports
  });

  // src/geom3d/TorusGeometry.ts
  function TorusGeometry(radius = 1, tube = 0.4, radialSegments = 8, tubularSegments = 6, arc = Math.PI * 2) {
    const data = CreateVertexSet();
    const {
      vertices,
      normals,
      uvs,
      indices
    } = data;
    const center = new Vec3();
    const vertex = new Vec3();
    const normal = new Vec3();
    for (let j = 0; j <= radialSegments; j++) {
      for (let i = 0; i <= tubularSegments; i++) {
        const u = i / tubularSegments * arc;
        const v = j / radialSegments * Math.PI * 2;
        vertex.x = (radius + tube * Math.cos(v)) * Math.cos(u);
        vertex.y = (radius + tube * Math.cos(v)) * Math.sin(u);
        vertex.z = tube * Math.sin(v);
        vertices.push(vertex.x, vertex.y, vertex.z);
        center.x = radius * Math.cos(u);
        center.y = radius * Math.sin(u);
        Subtract(vertex, center, normal);
        Normalize(normal, normal);
        normals.push(normal.x, normal.y, normal.z);
        uvs.push(i / tubularSegments);
        uvs.push(j / radialSegments);
      }
    }
    for (let j = 1; j <= radialSegments; j++) {
      for (let i = 1; i <= tubularSegments; i++) {
        const a = (tubularSegments + 1) * j + i - 1;
        const b = (tubularSegments + 1) * (j - 1) + i - 1;
        const c = (tubularSegments + 1) * (j - 1) + i;
        const d = (tubularSegments + 1) * j + i;
        indices.push(a, b, d);
        indices.push(b, c, d);
      }
    }
    data.numberOfVertices = vertices.length;
    return data;
  }

  // src/geom3d/index.ts
  const geom3d_exports = {};
  __export(geom3d_exports, {
    BoxGeometry: () => BoxGeometry2,
    ConeGeometry: () => ConeGeometry2,
    CylinderGeometry: () => CylinderGeometry2,
    PlaneGeometry: () => PlaneGeometry2,
    SphereGeometry: () => SphereGeometry2,
    TorusGeometry: () => TorusGeometry
  });

  // src/input/keyboard/Key.ts
  class Key {
    constructor(value) {
      this.capture = true;
      this.isDown = false;
      this.enabled = true;
      this.repeatRate = 0;
      this.canRepeat = true;
      this.timeDown = 0;
      this.timeUpdated = 0;
      this.timeUp = 0;
      this.value = value;
      this.events = new Map();
    }
    getValue() {
      return this.value;
    }
    down(event) {
      if (!this.enabled) {
        return;
      }
      if (this.capture) {
        event.preventDefault();
      }
      this.shiftKey = event.shiftKey;
      this.ctrlKey = event.ctrlKey;
      this.altKey = event.altKey;
      if (this.isDown && this.canRepeat) {
        this.timeUpdated = event.timeStamp;
        const delay = this.timeUpdated - this.timeDown;
        if (delay >= this.repeatRate) {
          Emit(this, "keydown", this);
          if (this.downCallback) {
            this.downCallback(this);
          }
        }
      } else {
        this.isDown = true;
        this.timeDown = event.timeStamp;
        this.timeUpdated = event.timeStamp;
        Emit(this, "keydown", this);
        if (this.downCallback) {
          this.downCallback(this);
        }
      }
    }
    up(event) {
      if (!this.enabled) {
        return;
      }
      if (this.capture) {
        event.preventDefault();
      }
      this.shiftKey = event.shiftKey;
      this.ctrlKey = event.ctrlKey;
      this.altKey = event.altKey;
      if (this.isDown) {
        this.isDown = false;
        this.timeUp = event.timeStamp;
        this.timeUpdated = event.timeStamp;
        Emit(this, "keyup", this);
        if (this.upCallback) {
          this.upCallback(this);
        }
      }
    }
    reset() {
      this.isDown = false;
      this.timeUpdated = this.timeDown;
      this.timeUp = this.timeDown;
    }
    destroy() {
      this.downCallback = null;
      this.upCallback = null;
      this.events.clear();
    }
  }

  // src/input/keyboard/keys/AKey.ts
  class AKey extends Key {
    constructor() {
      super("a");
    }
  }

  // src/input/keyboard/keys/ArrowKeys.ts
  class ArrowKeys {
    constructor(keyboardManager, config5) {
      const {
        left = true,
        right = true,
        up = true,
        down = true,
        space = true
      } = config5;
      const keys = keyboardManager.keys;
      if (left) {
        this.left = new Key("ArrowLeft");
        keys.set(this.left.value, this.left);
      }
      if (right) {
        this.right = new Key("ArrowRight");
        keys.set(this.right.value, this.right);
      }
      if (up) {
        this.up = new Key("ArrowUp");
        keys.set(this.up.value, this.up);
      }
      if (down) {
        this.down = new Key("ArrowDown");
        keys.set(this.down.value, this.down);
      }
      if (space) {
        this.space = new Key(" ");
        keys.set(this.space.value, this.space);
      }
    }
  }

  // src/input/keyboard/keys/BKey.ts
  class BKey extends Key {
    constructor() {
      super("b");
    }
  }

  // src/input/keyboard/keys/CKey.ts
  class CKey extends Key {
    constructor() {
      super("c");
    }
  }

  // src/input/keyboard/keys/DKey.ts
  class DKey extends Key {
    constructor() {
      super("d");
    }
  }

  // src/input/keyboard/keys/DownKey.ts
  class DownKey extends Key {
    constructor() {
      super("ArrowDown");
    }
  }

  // src/input/keyboard/keys/EKey.ts
  class EKey extends Key {
    constructor() {
      super("e");
    }
  }

  // src/input/keyboard/keys/FKey.ts
  class FKey extends Key {
    constructor() {
      super("f");
    }
  }

  // src/input/keyboard/keys/GKey.ts
  class GKey extends Key {
    constructor() {
      super("g");
    }
  }

  // src/input/keyboard/keys/HKey.ts
  class HKey extends Key {
    constructor() {
      super("h");
    }
  }

  // src/input/keyboard/keys/IKey.ts
  class IKey9 extends Key {
    constructor() {
      super("i");
    }
  }

  // src/input/keyboard/keys/JKey.ts
  class JKey extends Key {
    constructor() {
      super("j");
    }
  }

  // src/input/keyboard/keys/KKey.ts
  class KKey extends Key {
    constructor() {
      super("k");
    }
  }

  // src/input/keyboard/keys/LKey.ts
  class LKey extends Key {
    constructor() {
      super("l");
    }
  }

  // src/input/keyboard/keys/LeftKey.ts
  class LeftKey extends Key {
    constructor() {
      super("ArrowLeft");
    }
  }

  // src/input/keyboard/keys/MKey.ts
  class MKey extends Key {
    constructor() {
      super("m");
    }
  }

  // src/input/keyboard/keys/NKey.ts
  class NKey extends Key {
    constructor() {
      super("n");
    }
  }

  // src/input/keyboard/keys/OKey.ts
  class OKey extends Key {
    constructor() {
      super("o");
    }
  }

  // src/input/keyboard/keys/PKey.ts
  class PKey extends Key {
    constructor() {
      super("p");
    }
  }

  // src/input/keyboard/keys/QKey.ts
  class QKey extends Key {
    constructor() {
      super("q");
    }
  }

  // src/input/keyboard/keys/RKey.ts
  class RKey extends Key {
    constructor() {
      super("r");
    }
  }

  // src/input/keyboard/keys/RightKey.ts
  class RightKey extends Key {
    constructor() {
      super("ArrowRight");
    }
  }

  // src/input/keyboard/keys/SKey.ts
  class SKey extends Key {
    constructor() {
      super("s");
    }
  }

  // src/input/keyboard/keys/SpaceKey.ts
  class SpaceKey extends Key {
    constructor() {
      super(" ");
    }
  }

  // src/input/keyboard/keys/TKey.ts
  class TKey extends Key {
    constructor() {
      super("t");
    }
  }

  // src/input/keyboard/keys/UKey.ts
  class UKey extends Key {
    constructor() {
      super("u");
    }
  }

  // src/input/keyboard/keys/UpKey.ts
  class UpKey extends Key {
    constructor() {
      super("ArrowUp");
    }
  }

  // src/input/keyboard/keys/VKey.ts
  class VKey extends Key {
    constructor() {
      super("v");
    }
  }

  // src/input/keyboard/keys/WASDKeys.ts
  class WASDKeys {
    constructor(keyboardManager, config5) {
      const {
        W = true,
        A = true,
        S = true,
        D = true,
        space = true
      } = config5;
      const keys = keyboardManager.keys;
      if (W) {
        this.W = new Key("w");
        keys.set(this.W.value, this.W);
      }
      if (A) {
        this.A = new Key("a");
        keys.set(this.A.value, this.A);
      }
      if (S) {
        this.S = new Key("s");
        keys.set(this.S.value, this.S);
      }
      if (D) {
        this.D = new Key("d");
        keys.set(this.D.value, this.D);
      }
      if (space) {
        this.space = new Key(" ");
        keys.set(this.space.value, this.space);
      }
    }
  }

  // src/input/keyboard/keys/WKey.ts
  class WKey extends Key {
    constructor() {
      super("w");
    }
  }

  // src/input/keyboard/keys/XKey.ts
  class XKey extends Key {
    constructor() {
      super("x");
    }
  }

  // src/input/keyboard/keys/YKey.ts
  class YKey extends Key {
    constructor() {
      super("y");
    }
  }

  // src/input/keyboard/keys/ZKey.ts
  class ZKey extends Key {
    constructor() {
      super("z");
    }
  }

  // src/input/keyboard/keys/index.ts
  const keys_exports = {};
  __export(keys_exports, {
    AKey: () => AKey,
    ArrowKeys: () => ArrowKeys,
    BKey: () => BKey,
    CKey: () => CKey,
    DKey: () => DKey,
    DownKey: () => DownKey,
    EKey: () => EKey,
    FKey: () => FKey,
    GKey: () => GKey,
    HKey: () => HKey,
    IKey: () => IKey9,
    JKey: () => JKey,
    KKey: () => KKey,
    LKey: () => LKey,
    LeftKey: () => LeftKey,
    MKey: () => MKey,
    NKey: () => NKey,
    OKey: () => OKey,
    PKey: () => PKey,
    QKey: () => QKey,
    RKey: () => RKey,
    RightKey: () => RightKey,
    SKey: () => SKey,
    SpaceKey: () => SpaceKey,
    TKey: () => TKey,
    UKey: () => UKey,
    UpKey: () => UpKey,
    VKey: () => VKey,
    WASDKeys: () => WASDKeys,
    WKey: () => WKey,
    XKey: () => XKey,
    YKey: () => YKey,
    ZKey: () => ZKey
  });

  // src/input/keyboard/GetKeyDownDuration.ts
  function GetKeyDownDuration(key) {
    if (key.isDown) {
      return key.timeUpdated - key.timeDown;
    } else {
      return key.timeUp - key.timeDown;
    }
  }

  // src/input/keyboard/Keyboard.ts
  class Keyboard extends EventEmitter {
    constructor() {
      super();
      this.keyConversion = {
        Up: "ArrowUp",
        Down: "ArrowDown",
        Left: "ArrowLeft",
        Right: "ArrowRight",
        Spacebar: " ",
        Win: "Meta",
        Scroll: "ScrollLock",
        Del: "Delete",
        Apps: "ContextMenu",
        Esc: "Escape",
        Add: "+",
        Subtract: "-",
        Multiply: "*",
        Decimal: ".",
        Divide: "/"
      };
      this.keydownHandler = (event) => this.onKeyDown(event);
      this.keyupHandler = (event) => this.onKeyUp(event);
      this.blurHandler = () => this.onBlur();
      window.addEventListener("keydown", this.keydownHandler);
      window.addEventListener("keyup", this.keyupHandler);
      window.addEventListener("blur", this.blurHandler);
      this.keys = new Map();
    }
    addKeys(...keys) {
      keys.forEach((key) => {
        this.keys.set(key.getValue(), key);
      });
    }
    clearKeys() {
      this.keys.clear();
    }
    onBlur() {
      this.keys.forEach((key) => {
        key.reset();
      });
    }
    getKeyValue(key) {
      if (this.keyConversion.hasOwnProperty(key)) {
        return this.keyConversion[key];
      } else {
        return key;
      }
    }
    onKeyDown(event) {
      const value = this.getKeyValue(event.key);
      if (this.keys.has(value)) {
        const key = this.keys.get(value);
        key.down(event);
      }
      Emit(this, "keydown-" + value, event);
      Emit(this, "keydown", event);
    }
    onKeyUp(event) {
      const value = this.getKeyValue(event.key);
      if (this.keys.has(value)) {
        const key = this.keys.get(value);
        key.up(event);
      }
      Emit(this, "keyup-" + value, event);
      Emit(this, "keyup", event);
    }
    destroy() {
      window.removeEventListener("keydown", this.keydownHandler);
      window.removeEventListener("keyup", this.keyupHandler);
      window.removeEventListener("blur", this.blurHandler);
      Emit(this, "destroy");
    }
  }

  // src/input/keyboard/SetKeyRepeatRate.ts
  function SetKeyRepeatRate(rate, ...keys) {
    keys.forEach((key) => {
      key.repeatRate = rate;
    });
    return keys;
  }

  // src/input/keyboard/index.ts
  const keyboard_exports = {};
  __export(keyboard_exports, {
    GetKeyDownDuration: () => GetKeyDownDuration,
    Key: () => Key,
    Keyboard: () => Keyboard,
    Keys: () => keys_exports,
    SetKeyRepeatRate: () => SetKeyRepeatRate
  });

  // src/input/mouse/Mouse.ts
  class Mouse extends EventEmitter {
    constructor(target) {
      super();
      this.primaryDown = false;
      this.auxDown = false;
      this.secondaryDown = false;
      this.blockContextMenu = true;
      this.resolution = 1;
      this.mousedownHandler = (event) => this.onMouseDown(event);
      this.mouseupHandler = (event) => this.onMouseUp(event);
      this.mousemoveHandler = (event) => this.onMouseMove(event);
      this.mousewheelHandler = (event) => this.onMouseWheel(event);
      this.contextmenuHandler = (event) => this.onContextMenuEvent(event);
      this.blurHandler = () => this.onBlur();
      this.localPoint = new Vec25();
      this.hitPoint = new Vec25();
      this.transPoint = new Vec25();
      if (!target) {
        target = GameInstance2.get().renderer.canvas;
      }
      target.addEventListener("mousedown", this.mousedownHandler);
      target.addEventListener("mouseup", this.mouseupHandler);
      target.addEventListener("wheel", this.mousewheelHandler, {passive: false});
      target.addEventListener("contextmenu", this.contextmenuHandler);
      window.addEventListener("mouseup", this.mouseupHandler);
      window.addEventListener("mousemove", this.mousemoveHandler);
      window.addEventListener("blur", this.blurHandler);
      this.target = target;
    }
    onBlur() {
    }
    onMouseDown(event) {
      this.positionToPoint(event);
      this.primaryDown = event.button === 0;
      this.auxDown = event.button === 1;
      this.secondaryDown = event.button === 2;
      Emit(this, "pointerdown", this.localPoint.x, this.localPoint.y, event.button, event);
    }
    onMouseUp(event) {
      this.positionToPoint(event);
      this.primaryDown = !(event.button === 0);
      this.auxDown = !(event.button === 1);
      this.secondaryDown = !(event.button === 2);
      Emit(this, "pointerup", this.localPoint.x, this.localPoint.y, event.button, event);
    }
    onMouseMove(event) {
      this.positionToPoint(event);
      Emit(this, "pointermove", this.localPoint.x, this.localPoint.y, event);
    }
    onMouseWheel(event) {
      Emit(this, "wheel", event.deltaX, event.deltaY, event.deltaZ, event);
    }
    onContextMenuEvent(event) {
      if (this.blockContextMenu) {
        event.preventDefault();
      }
      Emit(this, "contextmenu", event);
    }
    positionToPoint(event) {
      return this.localPoint.set(event.offsetX, event.offsetY);
    }
    getInteractiveChildren(parent2, results) {
      const children = parent2.children;
      for (let i = 0; i < children.length; i++) {
        const child = children[i];
        if (!child.visible || !child.input.enabled) {
          continue;
        }
        results.push(child);
        if (child.input.enabledChildren && child.numChildren) {
          this.getInteractiveChildren(child, results);
        }
      }
    }
    checkHitArea(entity, px, py) {
      if (entity.input.hitArea) {
        if (entity.input.hitArea.contains(px, py)) {
          return true;
        }
      } else {
        return entity.transform.extent.contains(px, py);
      }
      return false;
    }
    hitTest(...entities) {
      const localX = this.localPoint.x;
      const localY = this.localPoint.y;
      const point = this.transPoint;
      for (let i = 0; i < entities.length; i++) {
        const entity = entities[i];
        if (!entity.world) {
          continue;
        }
        const mat = Append2(entity.world.camera.worldTransform, entity.transform.world);
        GlobalToLocal2(mat, localX, localY, point);
        if (this.checkHitArea(entity, point.x, point.y)) {
          this.hitPoint.set(point.x, point.y);
          return true;
        }
      }
      return false;
    }
    hitTestChildren(parent2, topOnly = true) {
      const output = [];
      if (!parent2.visible) {
        return output;
      }
      const candidates = [];
      const parentInput = parent2.input;
      if (parentInput && parentInput.enabled) {
        candidates.push(parent2);
      }
      if (parentInput.enabledChildren && parent2.numChildren) {
        this.getInteractiveChildren(parent2, candidates);
      }
      for (let i = candidates.length - 1; i >= 0; i--) {
        const entity = candidates[i];
        if (this.hitTest(entity)) {
          output.push(entity);
          if (topOnly) {
            break;
          }
        }
      }
      return output;
    }
    shutdown() {
      const target = this.target;
      target.removeEventListener("mousedown", this.mousedownHandler);
      target.removeEventListener("mouseup", this.mouseupHandler);
      target.removeEventListener("wheel", this.mousewheelHandler);
      target.removeEventListener("contextmenu", this.contextmenuHandler);
      window.removeEventListener("mouseup", this.mouseupHandler);
      window.removeEventListener("mousemove", this.mousemoveHandler);
      window.removeEventListener("blur", this.blurHandler);
    }
  }

  // src/input/mouse/index.ts
  const mouse_exports = {};
  __export(mouse_exports, {
    Mouse: () => Mouse
  });

  // src/input/SetInteractive.ts
  function SetInteractive(...children) {
    children.forEach((child) => {
      child.input.enabled = true;
    });
    return children;
  }

  // src/input/index.ts
  const input_exports2 = {};
  __export(input_exports2, {
    Keyboard: () => keyboard_exports,
    Mouse: () => mouse_exports,
    SetInteractive: () => SetInteractive
  });

  // src/textures/parsers/AtlasParser.ts
  function AtlasParser2(texture, data) {
    let frames;
    if (Array.isArray(data.textures)) {
      frames = data.textures[0].frames;
    } else if (Array.isArray(data.frames)) {
      frames = data.frames;
    } else if (data.hasOwnProperty("frames")) {
      frames = Object.values(data.frames);
    } else {
      console.warn("Invalid Texture Atlas JSON");
    }
    if (frames) {
      let newFrame;
      for (let i = 0; i < frames.length; i++) {
        const src = frames[i];
        newFrame = texture.addFrame(src.filename, src.frame.x, src.frame.y, src.frame.w, src.frame.h);
        if (src.trimmed) {
          newFrame.setTrim(src.sourceSize.w, src.sourceSize.h, src.spriteSourceSize.x, src.spriteSourceSize.y, src.spriteSourceSize.w, src.spriteSourceSize.h);
        } else {
          newFrame.setSourceSize(src.sourceSize.w, src.sourceSize.h);
        }
        if (src.rotated) {
        }
        if (src.anchor) {
          newFrame.setPivot(src.anchor.x, src.anchor.y);
        }
      }
    }
  }

  // src/loader/File.ts
  class File {
    constructor(key, url2, config5) {
      this.responseType = "text";
      this.crossOrigin = void 0;
      this.skipCache = false;
      this.hasLoaded = false;
      this.key = key;
      this.url = url2;
      this.config = config5;
    }
  }

  // src/loader/GetURL.ts
  function GetURL(key, url2, extension, loader) {
    if (!url2) {
      url2 = key + extension;
    }
    if (/^(?:blob:|data:|http:\/\/|https:\/\/|\/\/)/.exec(url2)) {
      return url2;
    } else if (loader) {
      return loader.baseURL + loader.path + url2;
    } else {
      return url2;
    }
  }

  // src/loader/ImageTagLoader.ts
  function ImageTagLoader(file) {
    file.data = new Image();
    if (file.crossOrigin) {
      file.data.crossOrigin = file.crossOrigin;
    }
    return new Promise((resolve, reject) => {
      file.data.onload = () => {
        if (file.data.onload) {
          file.data.onload = null;
          file.data.onerror = null;
          resolve(file);
        }
      };
      file.data.onerror = (event) => {
        if (file.data.onload) {
          file.data.onload = null;
          file.data.onerror = null;
          file.error = event;
          reject(file);
        }
      };
      file.data.src = file.url;
      if (file.data.complete && file.data.width && file.data.height) {
        file.data.onload = null;
        file.data.onerror = null;
        resolve(file);
      }
    });
  }

  // src/loader/files/ImageFile.ts
  function ImageFile2(key, url2, glConfig) {
    const file = new File(key, url2);
    file.load = () => {
      file.url = GetURL(file.key, file.url, ".png", file.loader);
      if (file.loader) {
        file.crossOrigin = file.loader.crossOrigin;
      }
      return new Promise((resolve, reject) => {
        const textureManager = TextureManagerInstance2.get();
        if (textureManager.has(file.key)) {
          resolve(file);
        } else {
          ImageTagLoader(file).then((file2) => {
            textureManager.add(file2.key, file2.data, glConfig);
            resolve(file2);
          }).catch((file2) => {
            reject(file2);
          });
        }
      });
    };
    return file;
  }

  // src/cache/Cache.ts
  const caches = new Map();
  const Cache = {
    get: (type) => {
      if (!caches.has(type)) {
        caches.set(type, new Map());
      }
      return caches.get(type);
    },
    getEntry: (cache, entry) => {
      if (caches.has(cache)) {
        return caches.get(cache).get(entry);
      }
    }
  };

  // src/loader/XHRLoader.ts
  function XHRLoader(file) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", file.url, true);
    xhr.responseType = file.responseType;
    return new Promise((resolve, reject) => {
      xhr.onload = () => {
        file.data = xhr.responseText;
        file.hasLoaded = true;
        resolve(file);
      };
      xhr.onerror = () => {
        file.hasLoaded = true;
        reject(file);
      };
      xhr.send();
    });
  }

  // src/loader/files/JSONFile.ts
  function JSONFile2(key, url2) {
    const file = new File(key, url2);
    file.load = () => {
      file.url = GetURL(file.key, file.url, ".json", file.loader);
      return new Promise((resolve, reject) => {
        const cache = Cache.get("JSON");
        if (!file.skipCache && cache.has(file.key)) {
          resolve(file);
        } else {
          XHRLoader(file).then((file2) => {
            file2.data = JSON.parse(file2.data);
            if (!file2.skipCache) {
              cache.set(file2.key, file2.data);
            }
            resolve(file2);
          }).catch((file2) => {
            reject(file2);
          });
        }
      });
    };
    return file;
  }

  // src/loader/files/AtlasFile.ts
  function AtlasFile(key, textureURL, atlasURL, glConfig) {
    const json = JSONFile2(key, atlasURL);
    const image = ImageFile2(key, textureURL, glConfig);
    const file = new File(key, "");
    file.load = () => {
      json.url = GetURL(json.key, json.url, ".json", file.loader);
      image.url = GetURL(image.key, image.url, ".png", file.loader);
      return new Promise((resolve, reject) => {
        json.skipCache = true;
        json.load().then(() => {
          image.load().then(() => {
            AtlasParser2(TextureManagerInstance2.get().get(key), json.data);
            resolve(file);
          }).catch(() => {
            reject(file);
          });
        }).catch(() => {
          reject(file);
        });
      });
    };
    return file;
  }

  // src/textures/parsers/BitmapTextParser.ts
  function GetValue(node, attribute) {
    return parseInt(node.getAttribute(attribute), 10);
  }
  function BitmapTextParser2(texture, xml, frame2) {
    const xSpacing = 0;
    const ySpacing = 0;
    const info = xml.getElementsByTagName("info")[0];
    const common = xml.getElementsByTagName("common")[0];
    const data = {
      font: info.getAttribute("face"),
      size: GetValue(info, "size"),
      lineHeight: GetValue(common, "lineHeight") + ySpacing,
      chars: {}
    };
    const letters = xml.getElementsByTagName("char");
    for (let i = 0; i < letters.length; i++) {
      const node = letters[i];
      const charCode = GetValue(node, "id");
      const x = GetValue(node, "x");
      const y = GetValue(node, "y");
      const width = GetValue(node, "width");
      const height = GetValue(node, "height");
      data.chars[charCode] = {
        x,
        y,
        width,
        height,
        xOffset: GetValue(node, "xoffset"),
        yOffset: GetValue(node, "yoffset"),
        xAdvance: GetValue(node, "xadvance") + xSpacing,
        kerning: {}
      };
      texture.addFrame(charCode, x, y, width, height);
    }
    const kernings = xml.getElementsByTagName("kerning");
    for (let i = 0; i < kernings.length; i++) {
      const kern = kernings[i];
      const first = GetValue(kern, "first");
      const second = GetValue(kern, "second");
      const amount = GetValue(kern, "amount");
      data.chars[second].kerning[first] = amount;
    }
    return data;
  }

  // src/loader/files/XMLFile.ts
  function XMLFile2(key, url2) {
    const file = new File(key, url2);
    file.load = () => {
      file.url = GetURL(file.key, file.url, ".xml", file.loader);
      return new Promise((resolve, reject) => {
        const cache = Cache.get("XML");
        if (!file.skipCache && cache.has(file.key)) {
          resolve(file);
        } else {
          XHRLoader(file).then((file2) => {
            const xml = ParseXML(file2.data);
            if (xml !== null) {
              file2.data = xml;
              if (!file2.skipCache) {
                cache.set(file2.key, xml);
              }
              resolve(file2);
            } else {
              reject(file2);
            }
          }).catch((file2) => {
            reject(file2);
          });
        }
      });
    };
    return file;
  }

  // src/loader/files/BitmapTextFile.ts
  function BitmapTextFile(key, textureURL, fontDataURL, glConfig) {
    const xml = XMLFile2(key, fontDataURL);
    const image = ImageFile2(key, textureURL, glConfig);
    const file = new File(key, "");
    file.load = () => {
      xml.url = GetURL(xml.key, xml.url, ".xml", file.loader);
      image.url = GetURL(image.key, image.url, ".png", file.loader);
      return new Promise((resolve, reject) => {
        xml.skipCache = true;
        xml.load().then(() => {
          image.load().then(() => {
            const texture = TextureManagerInstance2.get().get(key);
            const fontData = BitmapTextParser2(texture, xml.data);
            texture.data = fontData;
            resolve(file);
          }).catch(() => {
            reject(file);
          });
        }).catch(() => {
          reject(file);
        });
      });
    };
    return file;
  }

  // src/loader/files/CSVFile.ts
  function CSVFile(key, url2) {
    const file = new File(key, url2);
    file.load = () => {
      file.url = GetURL(file.key, file.url, ".csv", file.loader);
      return new Promise((resolve, reject) => {
        const cache = Cache.get("CSV");
        if (!file.skipCache && cache.has(file.key)) {
          resolve(file);
        } else {
          XHRLoader(file).then((file2) => {
            if (!file2.skipCache) {
              cache.set(file2.key, file2.data);
            }
            resolve(file2);
          }).catch((file2) => {
            reject(file2);
          });
        }
      });
    };
    return file;
  }

  // src/loader/files/JSONGeometryFile.ts
  function JSONGeometryFile(key, url2, mappingConfig) {
    const file = new File(key, url2);
    const {
      vertices = "verts",
      normals = "normals",
      uvs = "uvs",
      numberOfVertices = 0
    } = mappingConfig;
    file.load = () => {
      file.url = GetURL(file.key, file.url, ".json", file.loader);
      return new Promise((resolve, reject) => {
        const cache = Cache.get("Geometry");
        if (!file.skipCache && cache.has(file.key)) {
          resolve(file);
        } else {
          XHRLoader(file).then((file2) => {
            const data = JSON.parse(file2.data);
            const geom = new Geometry2({
              vertices: data[vertices],
              normals: data[normals],
              uvs: data[uvs],
              numberOfVertices
            });
            file2.data = geom;
            if (!file2.skipCache) {
              cache.set(file2.key, geom);
            }
            resolve(file2);
          }).catch((file2) => {
            reject(file2);
          });
        }
      });
    };
    return file;
  }

  // src/loader/files/OBJFile.ts
  function OBJFile(key, url2) {
    const file = new File(key, url2);
    file.load = () => {
      file.url = GetURL(file.key, file.url, ".obj", file.loader);
      return new Promise((resolve, reject) => {
        const cache = Cache.get("Obj");
        if (!file.skipCache && cache.has(file.key)) {
          resolve(file);
        } else {
          XHRLoader(file).then((file2) => {
            if (!file2.skipCache) {
              cache.set(file2.key, file2.data);
            }
            resolve(file2);
          }).catch((file2) => {
            reject(file2);
          });
        }
      });
    };
    return file;
  }

  // src/loader/files/OBJGeometryFile.ts
  function OBJGeometryFile(key, url2, flipUVs = true) {
    const file = new File(key, url2);
    file.load = () => {
      file.url = GetURL(file.key, file.url, ".obj", file.loader);
      return new Promise((resolve, reject) => {
        const cache = Cache.get("Geometry");
        if (!file.skipCache && cache.has(file.key)) {
          resolve(file);
        } else {
          XHRLoader(file).then((file2) => {
            const models = GetBufferFromObj(file2.data, flipUVs);
            file2.data = models;
            if (!file2.skipCache) {
              let key2 = file2.key;
              models.forEach((model, index) => {
                if (index > 0) {
                  key2 = file2.key + index.toString();
                }
                const geom = new Geometry2(model.buffer);
                cache.set(key2, geom);
              });
            }
            resolve(file2);
          }).catch((file2) => {
            reject(file2);
          });
        }
      });
    };
    return file;
  }

  // src/textures/parsers/SpriteSheetParser.ts
  function SpriteSheetParser2(texture, x, y, width, height, frameConfig) {
    const {
      frameWidth = null,
      endFrame = -1,
      margin = 0,
      spacing = 0
    } = frameConfig;
    let {
      frameHeight = null,
      startFrame = 0
    } = frameConfig;
    if (!frameHeight) {
      frameHeight = frameWidth;
    }
    if (frameWidth === null) {
      throw new Error("SpriteSheetParser: Invalid frameWidth");
    }
    const row = Math.floor((width - margin + spacing) / (frameWidth + spacing));
    const column = Math.floor((height - margin + spacing) / (frameHeight + spacing));
    let total = row * column;
    if (total === 0) {
      console.warn("SpriteSheetParser: Frame config will result in zero frames");
    }
    if (startFrame > total || startFrame < -total) {
      startFrame = 0;
    }
    if (startFrame < 0) {
      startFrame = total + startFrame;
    }
    if (endFrame !== -1) {
      total = startFrame + (endFrame + 1);
    }
    let fx = margin;
    let fy = margin;
    let ax = 0;
    let ay = 0;
    for (let i = 0; i < total; i++) {
      ax = 0;
      ay = 0;
      const w = fx + frameWidth;
      const h = fy + frameHeight;
      if (w > width) {
        ax = w - width;
      }
      if (h > height) {
        ay = h - height;
      }
      texture.addFrame(i, x + fx, y + fy, frameWidth - ax, frameHeight - ay);
      fx += frameWidth + spacing;
      if (fx + frameWidth > width) {
        fx = margin;
        fy += frameHeight + spacing;
      }
    }
  }

  // src/loader/files/SpriteSheetFile.ts
  function SpriteSheetFile(key, url2, frameConfig, glConfig) {
    const file = new File(key, url2);
    file.load = () => {
      file.url = GetURL(file.key, file.url, ".png", file.loader);
      if (file.loader) {
        file.crossOrigin = file.loader.crossOrigin;
      }
      return new Promise((resolve, reject) => {
        const textureManager = TextureManagerInstance2.get();
        if (textureManager.has(file.key)) {
          resolve(file);
        } else {
          ImageTagLoader(file).then((file2) => {
            const texture = textureManager.add(file2.key, file2.data, glConfig);
            if (texture) {
              SpriteSheetParser2(texture, 0, 0, texture.width, texture.height, frameConfig);
              resolve(file2);
            } else {
              reject(file2);
            }
          }).catch((file2) => {
            reject(file2);
          });
        }
      });
    };
    return file;
  }

  // src/loader/files/index.ts
  const files_exports = {};
  __export(files_exports, {
    AtlasFile: () => AtlasFile,
    BitmapTextFile: () => BitmapTextFile,
    CSVFile: () => CSVFile,
    ImageFile: () => ImageFile2,
    JSONFile: () => JSONFile2,
    JSONGeometryFile: () => JSONGeometryFile,
    OBJFile: () => OBJFile,
    OBJGeometryFile: () => OBJGeometryFile,
    SpriteSheetFile: () => SpriteSheetFile,
    XMLFile: () => XMLFile2
  });

  // src/loader/Loader.ts
  class Loader5 extends EventEmitter {
    constructor() {
      super();
      this.baseURL = "";
      this.path = "";
      this.crossOrigin = "anonymous";
      this.maxParallelDownloads = -1;
      this.isLoading = false;
      this.reset();
    }
    reset() {
      this.isLoading = false;
      this.queue = new Set();
      this.inflight = new Set();
      this.completed = new Set();
      this.progress = 0;
    }
    add(...file) {
      file.forEach((entity) => {
        entity.loader = this;
        this.queue.add(entity);
      });
      return this;
    }
    start() {
      if (this.isLoading) {
        return null;
      }
      return new Promise((resolve, reject) => {
        this.completed.clear();
        this.progress = 0;
        if (this.queue.size > 0) {
          this.isLoading = true;
          this.onComplete = resolve;
          this.onError = reject;
          Emit(this, "start");
          this.nextFile();
        } else {
          this.progress = 1;
          Emit(this, "complete");
          resolve();
        }
      });
    }
    nextFile() {
      let limit = this.queue.size;
      if (this.maxParallelDownloads !== -1) {
        limit = Math.min(limit, this.maxParallelDownloads) - this.inflight.size;
      }
      if (limit) {
        const iterator = this.queue.values();
        while (limit > 0) {
          const file = iterator.next().value;
          this.inflight.add(file);
          this.queue.delete(file);
          file.load().then((file2) => this.fileComplete(file2)).catch((file2) => this.fileError(file2));
          limit--;
        }
      } else if (this.inflight.size === 0) {
        this.stop();
      }
    }
    stop() {
      if (!this.isLoading) {
        return;
      }
      this.isLoading = false;
      Emit(this, "complete", this.completed);
      this.onComplete();
      this.completed.clear();
    }
    updateProgress(file) {
      this.inflight.delete(file);
      this.completed.add(file);
      const totalCompleted = this.completed.size;
      const totalQueued = this.queue.size + this.inflight.size;
      if (totalCompleted > 0) {
        this.progress = totalCompleted / (totalCompleted + totalQueued);
      }
      Emit(this, "progress", this.progress, totalCompleted, totalQueued);
      this.nextFile();
    }
    fileComplete(file) {
      Emit(this, "filecomplete", file);
      this.updateProgress(file);
    }
    fileError(file) {
      Emit(this, "fileerror", file);
      this.updateProgress(file);
    }
    totalFilesToLoad() {
      return this.queue.size + this.inflight.size;
    }
    setBaseURL(url2 = "") {
      if (url2 !== "" && url2.substr(-1) !== "/") {
        url2 = url2.concat("/");
      }
      this.baseURL = url2;
      return this;
    }
    setPath(path = "") {
      if (path !== "" && path.substr(-1) !== "/") {
        path = path.concat("/");
      }
      this.path = path;
      return this;
    }
    setCORS(crossOrigin) {
      this.crossOrigin = crossOrigin;
      return this;
    }
    setMaxParallelDownloads(max) {
      this.maxParallelDownloads = max;
      return this;
    }
  }

  // src/loader/index.ts
  const loader_exports = {};
  __export(loader_exports, {
    File: () => File,
    Files: () => files_exports,
    Loader: () => Loader5
  });

  // src/materials3d/BlackPlastic.ts
  const BlackPlastic = new Material2({
    ambient: [0, 0, 0],
    diffuse: [0.01, 0.01, 0.01],
    specular: [0.5, 0.5, 0.5],
    shine: 0.25
  });

  // src/materials3d/BlackRubber.ts
  const BlackRubber = new Material2({
    ambient: [0.02, 0.02, 0.02],
    diffuse: [0.01, 0.01, 0.01],
    specular: [0.4, 0.4, 0.4],
    shine: 0.078125
  });

  // src/materials3d/Brass.ts
  const Brass = new Material2({
    ambient: [0.329412, 0.223529, 0.027451],
    diffuse: [0.780392, 0.568627, 0.113725],
    specular: [0.992157, 0.941176, 0.807843],
    shine: 0.21794872
  });

  // src/materials3d/Bronze.ts
  const Bronze = new Material2({
    ambient: [0.2125, 0.1275, 0.054],
    diffuse: [0.714, 0.4284, 0.18144],
    specular: [0.393548, 0.271906, 0.166721],
    shine: 0.2
  });

  // src/materials3d/Chrome.ts
  const Chrome = new Material2({
    ambient: [0.25, 0.25, 0.25],
    diffuse: [0.4, 0.4, 0.4],
    specular: [0.774597, 0.774597, 0.774597],
    shine: 0.6
  });

  // src/materials3d/Copper.ts
  const Copper = new Material2({
    ambient: [0.19125, 0.0735, 0.0225],
    diffuse: [0.7038, 0.27048, 0.0828],
    specular: [0.256777, 0.137622, 0.086014],
    shine: 0.1
  });

  // src/materials3d/CyanPlastic.ts
  const CyanPlastic = new Material2({
    ambient: [0, 0.1, 0.06],
    diffuse: [0, 0.50980392, 0.50980392],
    specular: [0.50196078, 0.50196078, 0.50196078],
    shine: 0.25
  });

  // src/materials3d/CyanRubber.ts
  const CyanRubber = new Material2({
    ambient: [0, 0.05, 0.05],
    diffuse: [0.4, 0.5, 0.5],
    specular: [0.04, 0.7, 0.7],
    shine: 0.078125
  });

  // src/materials3d/Emerald.ts
  const Emerald = new Material2({
    ambient: [0.0215, 0.1745, 0.0215],
    diffuse: [0.07568, 0.61424, 0.07568],
    specular: [0.633, 0.727811, 0.633],
    shine: 0.6
  });

  // src/materials3d/Gold.ts
  const Gold = new Material2({
    ambient: [0.24725, 0.1995, 0.0745],
    diffuse: [0.75164, 0.60648, 0.22648],
    specular: [0.628281, 0.555802, 0.366065],
    shine: 0.4
  });

  // src/materials3d/GreenPlastic.ts
  const GreenPlastic = new Material2({
    ambient: [0, 0, 0],
    diffuse: [0.1, 0.35, 0.1],
    specular: [0.45, 0.55, 0.45],
    shine: 0.25
  });

  // src/materials3d/GreenRubber.ts
  const GreenRubber = new Material2({
    ambient: [0, 0.05, 0],
    diffuse: [0.4, 0.5, 0.4],
    specular: [0.04, 0.7, 0.04],
    shine: 0.078125
  });

  // src/materials3d/Jade.ts
  const Jade = new Material2({
    ambient: [0.135, 0.2225, 0.1575],
    diffuse: [0.54, 0.89, 0.63],
    specular: [0.316228, 0.316228, 0.316228],
    shine: 0.1
  });

  // src/materials3d/Obsidian.ts
  const Obsidian = new Material2({
    ambient: [0.05375, 0.05, 0.06625],
    diffuse: [0.18275, 0.17, 0.22525],
    specular: [0.332741, 0.328634, 0.346435],
    shine: 0.3
  });

  // src/materials3d/Pearl.ts
  const Pearl = new Material2({
    ambient: [0.25, 0.20725, 0.20725],
    diffuse: [1, 0.829, 0.829],
    specular: [0.296648, 0.296648, 0.296648],
    shine: 0.088
  });

  // src/materials3d/RedPlastic.ts
  const RedPlastic = new Material2({
    ambient: [0, 0, 0],
    diffuse: [0.5, 0, 0],
    specular: [0.7, 0.6, 0.6],
    shine: 0.25
  });

  // src/materials3d/RedRubber.ts
  const RedRubber = new Material2({
    ambient: [0.05, 0, 0],
    diffuse: [0.5, 0.4, 0.4],
    specular: [0.7, 0.04, 0.04],
    shine: 0.078125
  });

  // src/materials3d/Ruby.ts
  const Ruby = new Material2({
    ambient: [0.1745, 0.01175, 0.01175],
    diffuse: [0.61424, 0.04136, 0.04136],
    specular: [0.727811, 0.626959, 0.626959],
    shine: 0.6
  });

  // src/materials3d/Silver.ts
  const Silver = new Material2({
    ambient: [0.19225, 0.19225, 0.19225],
    diffuse: [0.50754, 0.50754, 0.50754],
    specular: [0.508273, 0.508273, 0.508273],
    shine: 0.4
  });

  // src/materials3d/Turquoise.ts
  const Turquoise = new Material2({
    ambient: [0.1, 0.18725, 0.1745],
    diffuse: [0.396, 0.74151, 0.69102],
    specular: [0.297254, 0.30829, 0.306678],
    shine: 0.1
  });

  // src/materials3d/WhitePlastic.ts
  const WhitePlastic = new Material2({
    ambient: [0, 0, 0],
    diffuse: [0.55, 0.55, 0.55],
    specular: [0.7, 0.7, 0.7],
    shine: 0.25
  });

  // src/materials3d/WhiteRubber.ts
  const WhiteRubber = new Material2({
    ambient: [0.05, 0.05, 0.05],
    diffuse: [0.5, 0.5, 0.5],
    specular: [0.7, 0.7, 0.7],
    shine: 0.078125
  });

  // src/materials3d/YellowPlastic.ts
  const YellowPlastic = new Material2({
    ambient: [0, 0, 0],
    diffuse: [0.5, 0.5, 0],
    specular: [0.6, 0.6, 0.5],
    shine: 0.25
  });

  // src/materials3d/YellowRubber.ts
  const YellowRubber = new Material2({
    ambient: [0.05, 0.05, 0],
    diffuse: [0.5, 0.5, 0.4],
    specular: [0.7, 0.7, 0.04],
    shine: 0.078125
  });

  // src/materials3d/index.ts
  const materials3d_exports = {};
  __export(materials3d_exports, {
    BlackPlastic: () => BlackPlastic,
    BlackRubber: () => BlackRubber,
    Brass: () => Brass,
    Bronze: () => Bronze,
    Chrome: () => Chrome,
    Copper: () => Copper,
    CyanPlastic: () => CyanPlastic,
    CyanRubber: () => CyanRubber,
    Emerald: () => Emerald,
    Gold: () => Gold,
    GreenPlastic: () => GreenPlastic,
    GreenRubber: () => GreenRubber,
    Jade: () => Jade,
    Obsidian: () => Obsidian,
    Pearl: () => Pearl,
    RedPlastic: () => RedPlastic,
    RedRubber: () => RedRubber,
    Ruby: () => Ruby,
    Silver: () => Silver,
    Turquoise: () => Turquoise,
    WhitePlastic: () => WhitePlastic,
    WhiteRubber: () => WhiteRubber,
    YellowPlastic: () => YellowPlastic,
    YellowRubber: () => YellowRubber
  });

  // src/textures/palettes/Arne16.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  const Arne16 = [
    "#000",
    "#9D9D9D",
    "#FFF",
    "#BE2633",
    "#E06F8B",
    "#493C2B",
    "#A46422",
    "#EB8931",
    "#F7E26B",
    "#2F484E",
    "#44891A",
    "#A3CE27",
    "#1B2632",
    "#005784",
    "#31A2F2",
    "#B2DCEF"
  ];

  // src/textures/palettes/C64.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  const C64 = [
    "#000",
    "#fff",
    "#8b4131",
    "#7bbdc5",
    "#8b41ac",
    "#6aac41",
    "#3931a4",
    "#d5de73",
    "#945a20",
    "#5a4100",
    "#bd736a",
    "#525252",
    "#838383",
    "#acee8b",
    "#7b73de",
    "#acacac"
  ];

  // src/textures/palettes/CGA.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  const CGA = [
    "#000",
    "#2234d1",
    "#0c7e45",
    "#44aacc",
    "#8a3622",
    "#5c2e78",
    "#aa5c3d",
    "#b5b5b5",
    "#5e606e",
    "#4c81fb",
    "#6cd947",
    "#7be2f9",
    "#eb8a60",
    "#e23d69",
    "#ffd93f",
    "#fff"
  ];

  // src/textures/palettes/JMP.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  const JMP = [
    "#000",
    "#191028",
    "#46af45",
    "#a1d685",
    "#453e78",
    "#7664fe",
    "#833129",
    "#9ec2e8",
    "#dc534b",
    "#e18d79",
    "#d6b97b",
    "#e9d8a1",
    "#216c4b",
    "#d365c8",
    "#afaab9",
    "#f5f4eb"
  ];

  // src/textures/palettes/MSX.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  const MSX = [
    "#000",
    "#191028",
    "#46af45",
    "#a1d685",
    "#453e78",
    "#7664fe",
    "#833129",
    "#9ec2e8",
    "#dc534b",
    "#e18d79",
    "#d6b97b",
    "#e9d8a1",
    "#216c4b",
    "#d365c8",
    "#afaab9",
    "#fff"
  ];

  // src/textures/palettes/PICO8.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  const PICO8 = [
    "#000",
    "#1D2B53",
    "#7E2553",
    "#008751",
    "#AB5236",
    "#5F574F",
    "#C2C3C7",
    "#FFF1E8",
    "#FF004D",
    "#FFA300",
    "#FFEC27",
    "#00E436",
    "#29ADFF",
    "#83769C",
    "#FF77A8",
    "#FFCCAA"
  ];

  // src/textures/palettes/index.ts
  const palettes_exports = {};
  __export(palettes_exports, {
    Arne16: () => Arne16,
    C64: () => C64,
    CGA: () => CGA,
    JMP: () => JMP,
    MSX: () => MSX,
    PICO8: () => PICO8
  });
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */

  // src/textures/parsers/index.ts
  const parsers_exports = {};
  __export(parsers_exports, {
    AtlasParser: () => AtlasParser2,
    BitmapTextParser: () => BitmapTextParser2,
    SpriteSheetParser: () => SpriteSheetParser2
  });

  // src/textures/types/GridTexture.ts
  function GridTexture(color1, color2, width = 32, height = 32, cols = 2, rows = 2) {
    const ctx = CreateCanvas(width, height);
    const colWidth = width / cols;
    const rowHeight = height / rows;
    ctx.fillStyle = color1;
    ctx.fillRect(0, 0, width, height);
    ctx.fillStyle = color2;
    for (let y = 0; y < rows; y++) {
      for (let x = y % 2; x < cols; x += 2) {
        ctx.fillRect(x * colWidth, y * rowHeight, colWidth, rowHeight);
      }
    }
    return new Texture5(ctx.canvas);
  }

  // src/textures/types/PixelTexture.ts
  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  function PixelTexture(config5) {
    const {
      data = [],
      palette = Arne16,
      pixelWidth = 1,
      pixelHeight = pixelWidth,
      preRender = null,
      postRender = null
    } = config5;
    let {
      canvas = null,
      resizeCanvas = true,
      clearCanvas = true
    } = config5;
    const width = Math.floor(Math.abs(data[0].length * pixelWidth));
    const height = Math.floor(Math.abs(data.length * pixelHeight));
    if (!canvas) {
      canvas = CreateCanvas(width, height).canvas;
      resizeCanvas = false;
      clearCanvas = false;
    }
    if (resizeCanvas) {
      canvas.width = width;
      canvas.height = height;
    }
    const ctx = canvas.getContext("2d");
    if (clearCanvas) {
      ctx.clearRect(0, 0, width, height);
    }
    if (preRender) {
      preRender(canvas, ctx);
    }
    for (let y = 0; y < data.length; y++) {
      const row = data[y];
      for (let x = 0; x < row.length; x++) {
        const d = row[x];
        if (d !== "." && d !== " ") {
          ctx.fillStyle = palette[parseInt("0x" + d.toUpperCase())];
          ctx.fillRect(x * pixelWidth, y * pixelHeight, pixelWidth, pixelHeight);
        }
      }
    }
    if (postRender) {
      postRender(canvas, ctx);
    }
    return new Texture5(canvas);
  }

  // src/textures/types/RenderTexture.ts
  class RenderTexture extends Texture5 {
    constructor(renderer, width = 256, height = width) {
      super(null, width, height);
      this.renderer = renderer;
    }
    cls() {
      return this;
    }
    batchStart() {
      return this;
    }
    batchDraw(sprites) {
      for (let i = 0, len = sprites.length; i < len; i++) {
      }
      return this;
    }
    batchEnd() {
      const renderer = this.renderer;
      renderer.reset();
      return this;
    }
    draw(...sprites) {
      this.batchStart();
      this.batchDraw(sprites);
      this.batchEnd();
      return this;
    }
  }

  // src/textures/types/SolidColorTexture.ts
  function SolidColorTexture(color2 = "rgba(0,0,0,0)", width = 32, height = 32) {
    const ctx = CreateCanvas(width, height);
    ctx.fillStyle = color2;
    ctx.fillRect(0, 0, width, height);
    return new Texture5(ctx.canvas);
  }

  // src/textures/types/index.ts
  const types_exports = {};
  __export(types_exports, {
    CanvasTexture: () => CanvasTexture2,
    GridTexture: () => GridTexture,
    PixelTexture: () => PixelTexture,
    RenderTexture: () => RenderTexture,
    SolidColorTexture: () => SolidColorTexture
  });

  // src/textures/GetFrames.ts
  function GetFrames(texture, frames) {
    const output = [];
    frames.forEach((key) => {
      output.push(texture.getFrame(key));
    });
    return output;
  }

  // src/textures/GetFramesInRange.ts
  function GetFramesInRange(texture, config5) {
    const {
      prefix = "",
      start = 0,
      zeroPad = 0,
      suffix = ""
    } = config5;
    let end = config5.end;
    const output = [];
    const diff = start < end ? 1 : -1;
    end += diff;
    for (let i = start; i !== end; i += diff) {
      const frameKey = prefix + i.toString().padStart(zeroPad, "0") + suffix;
      output.push(texture.getFrame(frameKey));
    }
    return output;
  }

  // src/textures/SetFilter.ts
  function SetFilter(linear, ...textures7) {
    textures7.forEach((texture) => {
      if (texture.binding) {
        texture.binding.setFilter(linear);
      }
    });
    return textures7;
  }

  // src/textures/TextureManager.ts
  class TextureManager2 {
    constructor() {
      this.textures = new Map();
      this.createDefaultTextures();
      TextureManagerInstance2.set(this);
    }
    createDefaultTextures() {
      this.add("__BLANK", new Texture5(CreateCanvas(32, 32).canvas));
      const missing = CreateCanvas(32, 32);
      missing.strokeStyle = "#0f0";
      missing.moveTo(0, 0);
      missing.lineTo(32, 32);
      missing.stroke();
      missing.strokeRect(0.5, 0.5, 31, 31);
      this.add("__MISSING", new Texture5(missing.canvas));
      const white = CreateCanvas(32, 32);
      white.fillStyle = "#fff";
      white.fillRect(0, 0, 32, 32);
      this.add("__WHITE", new Texture5(white.canvas));
    }
    get(key) {
      const textures7 = this.textures;
      if (textures7.has(key)) {
        return textures7.get(key);
      } else {
        return textures7.get("__MISSING");
      }
    }
    has(key) {
      return this.textures.has(key);
    }
    add(key, source, glConfig) {
      let texture;
      const textures7 = this.textures;
      if (!textures7.has(key)) {
        if (source instanceof Texture5) {
          texture = source;
        } else {
          texture = new Texture5(source, 0, 0, glConfig);
        }
        texture.key = key;
        textures7.set(key, texture);
      }
      return texture;
    }
  }

  // src/textures/index.ts
  const textures_exports = {};
  __export(textures_exports, {
    CreateCanvas: () => CreateCanvas,
    Frame: () => Frame16,
    GetFrames: () => GetFrames,
    GetFramesInRange: () => GetFramesInRange,
    Palettes: () => palettes_exports,
    Parsers: () => parsers_exports,
    SetFilter: () => SetFilter,
    Texture: () => Texture5,
    TextureManager: () => TextureManager2,
    Types: () => types_exports
  });

  // src/time/NOOP.ts
  function NOOP6() {
  }

  // src/time/AddTimer.ts
  function AddTimer2(clock, config5) {
    const {
      duration = 0,
      repeat = 0,
      delay = -1,
      onStart = NOOP6,
      onUpdate = NOOP6,
      onRepeat = NOOP6,
      onComplete = NOOP6
    } = config5;
    const timer = {
      elapsed: duration,
      duration,
      repeat,
      delay,
      update: null,
      onStart,
      onUpdate,
      onRepeat,
      onComplete
    };
    timer.update = (delta) => {
      if (timer.delay > 0) {
        timer.delay -= delta;
        if (timer.delay < 0) {
          timer.delay = 0;
        } else {
          return false;
        }
      }
      if (timer.delay === 0) {
        timer.onStart();
        timer.delay = -1;
      }
      if (timer.delay === -1) {
        timer.elapsed -= delta;
        timer.onUpdate(delta, timer.elapsed / timer.duration);
        if (timer.elapsed <= 0) {
          if (timer.repeat > 0) {
            timer.repeat--;
            timer.elapsed = timer.duration;
            timer.onRepeat(timer.repeat);
          } else {
            timer.elapsed = 0;
            timer.onComplete();
          }
        }
      }
      return timer.elapsed === 0;
    };
    clock.events.add(timer);
  }

  // src/time/AddDelayedCall.ts
  function AddDelayedCall(clock, delay, callback) {
    AddTimer2(clock, {
      duration: 0,
      delay,
      onComplete: callback
    });
  }

  // src/time/Clock.ts
  class Clock5 {
    constructor(world) {
      this.world = world;
      this.timeScale = 1;
      this.events = new Set();
    }
    update(delta, time) {
      this.now = time;
      delta *= this.timeScale;
      this.events.forEach((timer) => {
        if (timer.update(delta)) {
          this.events.delete(timer);
        }
      });
    }
  }

  // src/time/index.ts
  const time_exports = {};
  __export(time_exports, {
    AddDelayedCall: () => AddDelayedCall,
    AddTimer: () => AddTimer2,
    Clock: () => Clock5,
    NOOP: () => NOOP6
  });

  // src/world/events/WorldRenderEvent.ts
  const WorldRenderEvent = "worldrender";

  // src/world/events/WorldShutdownEvent.ts
  const WorldShutdownEvent = "worldshutdown";

  // src/world/events/index.ts
  const events_exports4 = {};
  __export(events_exports4, {
    WorldRenderEvent: () => WorldRenderEvent,
    WorldShutdownEvent: () => WorldShutdownEvent
  });

  // src/world/CalculateTotalRenderable.ts
  function CalculateTotalRenderable5(entry, renderData) {
    renderData.numRendered++;
    renderData.numRenderable++;
    if (entry.node.dirtyFrame >= renderData.gameFrame) {
      renderData.dirtyFrame++;
    }
    entry.children.forEach((child) => {
      if (child.children.length > 0) {
        CalculateTotalRenderable5(child, renderData);
      }
    });
  }

  // src/world/HasDirtyChildren.ts
  function HasDirtyChildren4(parent2) {
    if (parent2.node.isDirty(DIRTY_CONST2.CHILD_CACHE)) {
      return true;
    }
    const stack = [parent2];
    while (stack.length > 0) {
      const entry = stack.pop();
      if (entry.node.isDirty(DIRTY_CONST2.TRANSFORM)) {
        return true;
      }
      const numChildren = entry.children.length;
      if (numChildren > 0) {
        for (let i = 0; i < numChildren; i++) {
          stack.push(entry.children[i]);
        }
      }
    }
    stack.length = 0;
    return false;
  }

  // src/world/UpdateCachedLayers.ts
  function UpdateCachedLayers5(cachedLayers, dirtyCamera) {
    cachedLayers.forEach((layer) => {
      if (dirtyCamera || HasDirtyChildren4(layer)) {
        layer.node.setDirty(DIRTY_CONST2.CHILD_CACHE);
      } else {
        layer.children.length = 0;
      }
    });
  }

  // src/world/WorldDepthFirstSearch.ts
  function WorldDepthFirstSearch5(cachedLayers, parent2, output = []) {
    for (let i = 0; i < parent2.numChildren; i++) {
      const node = parent2.children[i];
      if (node.isRenderable()) {
        const children = [];
        const entry = {node, children};
        output.push(entry);
        if (node.willRenderChildren && node.numChildren > 0) {
          if (node.willCacheChildren) {
            cachedLayers.push(entry);
          }
          WorldDepthFirstSearch5(cachedLayers, node, children);
        }
      }
    }
    return output;
  }

  // src/world/BuildRenderList.ts
  function BuildRenderList5(world) {
    const cachedLayers = [];
    const stack = [];
    const entries = WorldDepthFirstSearch5(cachedLayers, world, stack);
    const renderData = world.renderData;
    if (cachedLayers.length > 0) {
      UpdateCachedLayers5(cachedLayers, world.camera.dirtyRender);
    }
    entries.forEach((entry) => {
      if (entry.children.length > 0) {
        CalculateTotalRenderable5(entry, renderData);
      } else {
        renderData.numRendered++;
        renderData.numRenderable++;
        if (entry.node.dirtyFrame >= renderData.gameFrame) {
          renderData.dirtyFrame++;
        }
      }
    });
    world.renderList = entries;
    if (world.forceRefresh) {
      renderData.dirtyFrame++;
      world.forceRefresh = false;
    }
  }

  // src/world/MergeRenderData.ts
  function MergeRenderData5(sceneRenderData, worldRenderData) {
    sceneRenderData.numDirtyFrames += worldRenderData.dirtyFrame;
    sceneRenderData.numTotalFrames += worldRenderData.numRendered;
    if (worldRenderData.camera.dirtyRender) {
      sceneRenderData.numDirtyCameras++;
    }
    sceneRenderData.worldData.push(worldRenderData);
  }

  // src/world/ResetWorldRenderData.ts
  function ResetWorldRenderData2(renderData, gameFrame) {
    renderData.gameFrame = gameFrame;
    renderData.dirtyFrame = 0;
    renderData.numRendered = 0;
    renderData.numRenderable = 0;
  }

  // src/world/BaseWorld.ts
  class BaseWorld extends GameObject {
    constructor(scene) {
      super();
      this.forceRefresh = false;
      this.is3D = false;
      this.type = "BaseWorld";
      this.scene = scene;
      this.world = this;
      this.events = new Map();
      this.renderList = [];
      this._updateListener = On(scene, "update", (delta, time) => this.update(delta, time));
      this._renderListener = On(scene, "render", (renderData) => this.render(renderData));
      this._shutdownListener = On(scene, "shutdown", () => this.shutdown());
      Once(scene, "destroy", () => this.destroy());
    }
    update(delta, time) {
      if (!this.willUpdate) {
        return;
      }
      Emit(this, UpdateEvent, delta, time, this);
      super.update(delta, time);
    }
    postUpdate(delta, time) {
      Emit(this, PostUpdateEvent, delta, time, this);
    }
    render(sceneRenderData) {
      const renderData = this.renderData;
      ResetWorldRenderData2(renderData, sceneRenderData.gameFrame);
      if (!this.willRender || !this.visible) {
        return;
      }
      BuildRenderList5(this);
      Emit(this, WorldRenderEvent, renderData, this);
      MergeRenderData5(sceneRenderData, renderData);
      this.camera.dirtyRender = false;
    }
    renderGL(renderPass) {
      const currentCamera = renderPass.current2DCamera;
      const camera2 = this.camera;
      if (!currentCamera || !ExactEquals(camera2.worldTransform, currentCamera.worldTransform)) {
        Flush(renderPass);
      }
      Begin(renderPass, camera2);
      this.renderList.forEach((entry) => {
        if (entry.children.length > 0) {
          this.renderNode(entry, renderPass);
        } else {
          entry.node.renderGL(renderPass);
        }
      });
    }
    renderNode(entry, renderPass) {
      entry.node.renderGL(renderPass);
      entry.children.forEach((child) => {
        if (child.children.length > 0) {
          this.renderNode(child, renderPass);
        } else {
          child.node.renderGL(renderPass);
        }
      });
      entry.node.postRenderGL(renderPass);
    }
    postRenderGL(renderPass) {
    }
    shutdown() {
      const scene = this.scene;
      Off(scene, "update", this._updateListener);
      Off(scene, "render", this._renderListener);
      Off(scene, "shutdown", this._shutdownListener);
      RemoveChildren(this);
      Emit(this, WorldShutdownEvent, this);
      ResetWorldRenderData2(this.renderData, 0);
      if (this.camera) {
        this.camera.reset();
      }
    }
    destroy(reparentChildren) {
      super.destroy(reparentChildren);
      Emit(this, DestroyEvent, this);
      ResetWorldRenderData2(this.renderData, 0);
      if (this.camera) {
        this.camera.destroy();
      }
      this.events.clear();
      this.camera = null;
      this.renderData = null;
      this.events = null;
    }
  }

  // src/world/CreateWorldRenderData.ts
  function CreateWorldRenderData(world, camera2) {
    return {
      world,
      camera: camera2,
      gameFrame: 0,
      dirtyFrame: 0,
      numRendered: 0,
      numRenderable: 0
    };
  }

  // src/world/StaticWorld.ts
  class StaticWorld extends BaseWorld {
    constructor(scene) {
      super(scene);
      this.type = "StaticWorld";
      this.camera = new StaticCamera();
      this.renderData = CreateWorldRenderData(this, this.camera);
    }
  }

  // src/world/World.ts
  class World extends BaseWorld {
    constructor(scene) {
      super(scene);
      this.enableCameraCull = true;
      this.type = "World";
      this.camera = new Camera();
      this.renderData = CreateWorldRenderData(this, this.camera);
    }
  }

  // src/world/index.ts
  const world_exports = {};
  __export(world_exports, {
    BaseWorld: () => BaseWorld,
    BuildRenderList: () => BuildRenderList5,
    CalculateTotalRenderable: () => CalculateTotalRenderable5,
    CreateWorldRenderData: () => CreateWorldRenderData,
    Events: () => events_exports4,
    HasDirtyChildren: () => HasDirtyChildren4,
    MergeRenderData: () => MergeRenderData5,
    ResetWorldRenderData: () => ResetWorldRenderData2,
    StaticWorld: () => StaticWorld,
    UpdateCachedLayers: () => UpdateCachedLayers5,
    World: () => World,
    WorldDepthFirstSearch: () => WorldDepthFirstSearch5
  });

  // src/world3d/events/World3DRenderEvent.ts
  const World3DRenderEvent = "worldrender";

  // src/world3d/events/World3DShutdownEvent.ts
  const World3DShutdownEvent = "worldshutdown";

  // src/world3d/events/index.ts
  const events_exports3 = {};
  __export(events_exports3, {
    World3DRenderEvent: () => World3DRenderEvent,
    World3DShutdownEvent: () => World3DShutdownEvent
  });

  // src/world3d/CalculateTotalRenderable.ts
  function CalculateTotalRenderable2(entry, renderData) {
    renderData.numRendered++;
    renderData.numRenderable++;
    if (entry.node.dirtyFrame >= renderData.gameFrame) {
      renderData.dirtyFrame++;
    }
    entry.children.forEach((child) => {
      if (child.children.length > 0) {
        CalculateTotalRenderable2(child, renderData);
      }
    });
  }

  // src/world3d/HasDirtyChildren.ts
  function HasDirtyChildren(parent2) {
    if (parent2.node.isDirty(DIRTY_CONST2.CHILD_CACHE)) {
      return true;
    }
    const stack = [parent2];
    while (stack.length > 0) {
      const entry = stack.pop();
      if (entry.node.isDirty(DIRTY_CONST2.TRANSFORM)) {
        return true;
      }
      const numChildren = entry.children.length;
      if (numChildren > 0) {
        for (let i = 0; i < numChildren; i++) {
          stack.push(entry.children[i]);
        }
      }
    }
    stack.length = 0;
    return false;
  }

  // src/world3d/UpdateCachedLayers.ts
  function UpdateCachedLayers2(cachedLayers, dirtyCamera) {
    cachedLayers.forEach((layer) => {
      if (dirtyCamera || HasDirtyChildren(layer)) {
        layer.node.setDirty(DIRTY_CONST2.CHILD_CACHE);
      } else {
        layer.children.length = 0;
      }
    });
  }

  // src/world3d/WorldDepthFirstSearch.ts
  function WorldDepthFirstSearch2(cachedLayers, parent2, output = []) {
    for (let i = 0; i < parent2.numChildren; i++) {
      const node = parent2.children[i];
      if (node.isRenderable()) {
        const children = [];
        const entry = {node, children};
        output.push(entry);
        if (node.willRenderChildren && node.numChildren > 0) {
          if (node.willCacheChildren) {
            cachedLayers.push(entry);
          }
          WorldDepthFirstSearch2(cachedLayers, node, children);
        }
      }
    }
    return output;
  }

  // src/world3d/BuildRenderList.ts
  function BuildRenderList2(world) {
    const cachedLayers = [];
    const stack = [];
    const entries = WorldDepthFirstSearch2(cachedLayers, world, stack);
    const renderData = world.renderData;
    if (cachedLayers.length > 0) {
      UpdateCachedLayers2(cachedLayers, world.camera.dirtyRender);
    }
    entries.forEach((entry) => {
      if (entry.children.length > 0) {
        CalculateTotalRenderable2(entry, renderData);
      } else {
        renderData.numRendered++;
        renderData.numRenderable++;
        if (entry.node.dirtyFrame >= renderData.gameFrame) {
          renderData.dirtyFrame++;
        }
      }
    });
    world.renderList = entries;
    if (world.forceRefresh) {
      renderData.dirtyFrame++;
      world.forceRefresh = false;
    }
  }

  // src/world3d/MergeRenderData.ts
  function MergeRenderData2(sceneRenderData, worldRenderData) {
    sceneRenderData.numDirtyFrames += worldRenderData.dirtyFrame;
    sceneRenderData.numTotalFrames += worldRenderData.numRendered;
    if (worldRenderData.camera.dirtyRender) {
      sceneRenderData.numDirtyCameras++;
    }
    sceneRenderData.worldData.push(worldRenderData);
  }

  // src/world3d/ResetWorld3DRenderData.ts
  function ResetWorld3DRenderData2(renderData, gameFrame) {
    renderData.gameFrame = gameFrame;
    renderData.dirtyFrame = 0;
    renderData.numRendered = 0;
    renderData.numRenderable = 0;
  }

  // src/world3d/BaseWorld3D.ts
  class BaseWorld3D extends GameObject3D {
    constructor(scene) {
      super();
      this.forceRefresh = false;
      this.is3D = true;
      this.type = "BaseWorld";
      this.scene = scene;
      this.world = this;
      this.events = new Map();
      this.renderList = [];
      this._updateListener = On(scene, "update", (delta, time) => this.update(delta, time));
      this._renderListener = On(scene, "render", (renderData) => this.render(renderData));
      this._shutdownListener = On(scene, "shutdown", () => this.shutdown());
      Once(scene, "destroy", () => this.destroy());
    }
    update(delta, time) {
      if (!this.willUpdate) {
        return;
      }
      Emit(this, UpdateEvent, delta, time, this);
      super.update(delta, time);
    }
    postUpdate(delta, time) {
      Emit(this, PostUpdateEvent, delta, time, this);
    }
    render(sceneRenderData) {
      const renderData = this.renderData;
      ResetWorld3DRenderData2(renderData, sceneRenderData.gameFrame);
      if (!this.willRender || !this.visible) {
        return;
      }
      BuildRenderList2(this);
      Emit(this, World3DRenderEvent, renderData, this);
      MergeRenderData2(sceneRenderData, renderData);
    }
    renderNode(entry, renderPass) {
      entry.node.renderGL(renderPass);
      entry.children.forEach((child) => {
        if (child.children.length > 0) {
          this.renderNode(child, renderPass);
        } else {
          child.node.renderGL(renderPass);
        }
      });
      entry.node.postRenderGL(renderPass);
    }
    shutdown() {
      const scene = this.scene;
      Off(scene, "update", this._updateListener);
      Off(scene, "render", this._renderListener);
      Off(scene, "shutdown", this._shutdownListener);
      RemoveChildren3D(this);
      Emit(this, World3DShutdownEvent, this);
      ResetWorld3DRenderData2(this.renderData, 0);
    }
    destroy(reparentChildren) {
      super.destroy(reparentChildren);
      Emit(this, DestroyEvent, this);
      ResetWorld3DRenderData2(this.renderData, 0);
      this.events.clear();
      this.camera = null;
      this.renderData = null;
      this.events = null;
    }
  }

  // src/world3d/CreateWorld3DRenderData.ts
  function CreateWorld3DRenderData(world, camera2) {
    return {
      world,
      camera: camera2,
      gameFrame: 0,
      dirtyFrame: 0,
      numRendered: 0,
      numRenderable: 0
    };
  }

  // src/renderer/webgl1/glsl/AMBIENT_LIGHT_FRAG.ts
  const AMBIENT_LIGHT_FRAG = `#define SHADER_NAME AMBIENT_LIGHT_FRAG\r
\r
precision highp float;\r
\r
uniform vec3 uLightPosition;\r
uniform vec3 uLightAmbient;\r
uniform vec3 uLightDiffuse;\r
uniform vec3 uLightSpecular;\r
\r
uniform vec3 uMaterialAmbient;\r
uniform vec3 uMaterialDiffuse;\r
uniform vec3 uMaterialSpecular;\r
uniform float uMaterialShine;\r
\r
uniform vec3 uCameraPosition;\r
\r
uniform sampler2D uTexture;\r
\r
varying vec2 vTextureCoord;\r
varying vec3 vNormal;\r
varying vec3 vPosition;\r
\r
void main (void)\r
{\r
    vec4 color = texture2D(uTexture, vTextureCoord);\r
\r
    vec3 ambient = uLightAmbient * uMaterialAmbient;\r
\r
    vec3 norm = normalize(vNormal);\r
    vec3 lightDir = normalize(uLightPosition - vPosition);\r
    float diff = max(dot(norm, lightDir), 0.0);\r
    vec3 diffuse = uLightDiffuse * (diff * uMaterialDiffuse);\r
\r
    vec3 viewDir = normalize(uCameraPosition - vPosition);\r
    vec3 reflectDir = reflect(-lightDir, norm);\r
    float spec = pow(max(dot(viewDir, reflectDir), 0.0), uMaterialShine);\r
    vec3 specular = uLightSpecular * (spec * uMaterialSpecular);\r
\r
    vec3 result = (ambient + diffuse + specular) * color.rgb;\r
\r
    gl_FragColor = vec4(result, color.a);\r
}`;

  // src/renderer/webgl1/glsl/AMBIENT_LIGHT_VERT.ts
  const AMBIENT_LIGHT_VERT = `\r
#define SHADER_NAME AMBIENT_LIGHT_VERT\r
\r
precision highp float;\r
\r
attribute vec3 aVertexPosition;\r
attribute vec3 aVertexNormal;\r
attribute vec2 aTextureCoord;\r
\r
uniform mat4 uViewProjectionMatrix;\r
uniform mat4 uModelMatrix;\r
uniform mat4 uNormalMatrix;\r
\r
varying vec2 vTextureCoord;\r
varying vec3 vNormal;\r
varying vec3 vPosition;\r
\r
void main(void)\r
{\r
    vTextureCoord = aTextureCoord;\r
\r
    vPosition = vec3(uModelMatrix * vec4(aVertexPosition, 1.0));\r
\r
    vNormal = vec3(uNormalMatrix * vec4(aVertexNormal, 1.0));\r
\r
    gl_Position = uViewProjectionMatrix * uModelMatrix * vec4(aVertexPosition, 1.0);\r
}\r
`;

  // src/renderer/webgl1/shaders/AmbientLightShader.ts
  class AmbientLightShader extends Shader2 {
    constructor() {
      super();
      const tempMat4 = new Float32Array(16).fill(0);
      const tempVec3 = [0, 0, 0];
      const config5 = {
        fragmentShader: AMBIENT_LIGHT_FRAG,
        vertexShader: AMBIENT_LIGHT_VERT,
        attributes: {
          aVertexPosition: {size: 3, type: FLOAT, normalized: false, offset: 0},
          aVertexNormal: {size: 3, type: FLOAT, normalized: false, offset: 12},
          aTextureCoord: {size: 2, type: FLOAT, normalized: false, offset: 24}
        },
        uniforms: {
          uViewProjectionMatrix: tempMat4,
          uNormalMatrix: tempMat4,
          uModelMatrix: tempMat4,
          uCameraPosition: tempVec3,
          uTexture: 0,
          uLightPosition: tempVec3,
          uLightAmbient: tempVec3,
          uLightDiffuse: tempVec3,
          uLightSpecular: tempVec3,
          uMaterialAmbient: tempVec3,
          uMaterialDiffuse: tempVec3,
          uMaterialSpecular: tempVec3,
          uMaterialShine: 0
        }
      };
      this.fromConfig(config5);
    }
  }

  // src/camera3d/NewCamera3D.ts
  class NewCamera3D {
    constructor(fov = 45, near = 0.1, far = 1e3) {
      this.isOrbit = false;
      this.minDistance = 0;
      this.maxDistance = Infinity;
      this.minPolarAngle = 0;
      this.maxPolarAngle = Math.PI;
      this.minAzimuthAngle = -Infinity;
      this.maxAzimuthAngle = Infinity;
      this.dirtyRender = true;
      this.panRate = 5;
      this.zoomRate = 200;
      this.rotateRate = -3;
      this._yaw = 0;
      this._pitch = 0;
      this._roll = 0;
      this.type = "Camera3D";
      this._fov = fov;
      this._near = near;
      this._far = far;
      this.matrix = new Matrix4();
      this.viewMatrix = new Matrix4();
      this.projectionMatrix = new Matrix4();
      this.viewProjectionMatrix = new Matrix4();
      this.position = new Vec3Callback(() => this.update());
      this.rotation = new Quaternion();
      const game = GameInstance2.get();
      const renderer = game.renderer;
      this.viewport = new Rectangle(0, 0, renderer.width, renderer.height);
      this.renderer = renderer;
      this.forward = Forward();
      this.up = Up();
      this.right = Right();
      this.start = new Vec3();
      this.setAspectRatio();
    }
    update() {
      const matrix2 = this.matrix;
      const view = this.viewMatrix;
      FromRotationXYTranslation(this.rotation, this.position, !this.isOrbit, matrix2);
      TransformMat4Zero(FORWARD, matrix2, this.forward);
      TransformMat4Zero(UP, matrix2, this.up);
      TransformMat4Zero(RIGHT, matrix2, this.right);
      Invert(matrix2, view);
      Multiply(this.projectionMatrix, view, this.viewProjectionMatrix);
      return this;
    }
    panX(amount) {
      const pos = this.position;
      if (!this.isOrbit) {
        ScaleAndAdd(pos, this.right, amount, pos);
      }
      return this;
    }
    panY(amount) {
      const pos = this.position;
      const up = this.up;
      if (this.isOrbit) {
        pos.y += up.y * amount;
      } else {
        ScaleAndAdd(pos, up, amount, pos);
      }
      return this;
    }
    panZ(amount) {
      const pos = this.position;
      if (this.isOrbit) {
        pos.z += amount;
      } else {
        ScaleAndAdd(pos, this.forward, amount, pos);
      }
      return this;
    }
    begin(x, y) {
      this.start.set(x, y);
    }
    pan(x, y) {
      const dx = x - this.start.x;
      const dy = y - this.start.y;
      const viewport = this.viewport;
      this.panX(-dx * (this.panRate / viewport.width));
      this.panY(dy * (this.panRate / viewport.height));
      this.start.set(x, y);
    }
    rotate(x, y) {
      const dx = x - this.start.x;
      const dy = y - this.start.y;
      const viewport = this.viewport;
      this.rotation.x += dy * (this.rotateRate / viewport.height);
      this.rotation.y += dx * (this.rotateRate / viewport.width);
      this.start.set(x, y);
      this.update();
    }
    zoom(delta) {
      this.panZ(Clamp(delta, -1, 1) * (this.zoomRate / this.viewport.height));
    }
    setAspectRatio(value) {
      if (!value) {
        const renderer = this.renderer;
        value = renderer.width / renderer.height;
      }
      this.aspect = value;
      return this.updateProjectionMatrix();
    }
    updateProjectionMatrix() {
      Perspective(DegToRad(this._fov), this.aspect, this._near, this._far, this.projectionMatrix);
      return this;
    }
    get fov() {
      return this._fov;
    }
    set fov(value) {
      this._fov = Clamp(value, 0, 180);
      this.updateProjectionMatrix();
    }
    get near() {
      return this._near;
    }
    set near(value) {
      if (value > 0) {
        this._near = value;
        this.updateProjectionMatrix();
      }
    }
    get far() {
      return this._far;
    }
    set far(value) {
      if (value > 0) {
        this._far = value;
        this.updateProjectionMatrix();
      }
    }
    get yaw() {
      return this._yaw;
    }
    set yaw(value) {
      this._yaw = value;
      RotationYawPitchRoll(value, this._pitch, this._roll, this.rotation);
    }
    get pitch() {
      return this._pitch;
    }
    set pitch(value) {
      this._pitch = value;
      RotationYawPitchRoll(this._yaw, value, this._roll, this.rotation);
    }
    get roll() {
      return this._roll;
    }
    set roll(value) {
      this._roll = value;
      RotationYawPitchRoll(this._yaw, this._pitch, value, this.rotation);
    }
  }

  // src/world3d/World3D.ts
  class World3D extends BaseWorld3D {
    constructor(scene, x = 0, y = 0, z = 0, lightConfig) {
      super(scene);
      this.enableCameraCull = true;
      this.type = "World3D";
      this.camera = new NewCamera3D();
      this.camera.position.set(x, y, z);
      this.light = new Light2(lightConfig);
      this.shader = new AmbientLightShader();
      this.renderData = CreateWorld3DRenderData(this, this.camera);
    }
    renderGL(renderPass) {
      Flush(renderPass);
      const shader = this.shader;
      const camera2 = this.camera;
      const gl3 = renderPass.renderer.gl;
      SetShader(renderPass, shader, 0);
      shader.setUniform("uViewProjectionMatrix", camera2.viewProjectionMatrix.data);
      shader.setUniform("uCameraPosition", camera2.position.toArray());
      this.light.setUniforms(shader);
      gl3.enable(gl3.DEPTH_TEST);
      this.renderList.forEach((entry) => {
        if (entry.children.length > 0) {
          this.renderNode(entry, renderPass);
        } else {
          entry.node.renderGL(renderPass);
        }
      });
    }
    postRenderGL(renderPass) {
      const gl3 = renderPass.renderer.gl;
      gl3.disable(gl3.DEPTH_TEST);
      gl3.disable(gl3.CULL_FACE);
      PopShader(renderPass);
    }
  }

  // src/world3d/index.ts
  const world3d_exports = {};
  __export(world3d_exports, {
    BaseWorld3D: () => BaseWorld3D,
    BuildRenderList: () => BuildRenderList2,
    CalculateTotalRenderable: () => CalculateTotalRenderable2,
    CreateWorld3DRenderData: () => CreateWorld3DRenderData,
    Events: () => events_exports3,
    HasDirtyChildren: () => HasDirtyChildren,
    MergeRenderData: () => MergeRenderData2,
    ResetWorld3DRenderData: () => ResetWorld3DRenderData2,
    UpdateCachedLayers: () => UpdateCachedLayers2,
    World3D: () => World3D,
    WorldDepthFirstSearch: () => WorldDepthFirstSearch2
  });

  // src/scenes/CreateSceneRenderData.ts
  function CreateSceneRenderData() {
    return {
      gameFrame: 0,
      numTotalFrames: 0,
      numDirtyFrames: 0,
      numDirtyCameras: 0,
      worldData: []
    };
  }

  // src/scenes/ResetSceneRenderData.ts
  function ResetSceneRenderData(renderData, gameFrame = 0) {
    renderData.gameFrame = gameFrame;
    renderData.numTotalFrames = 0;
    renderData.numDirtyFrames = 0;
    renderData.numDirtyCameras = 0;
    renderData.worldData.length = 0;
  }

  // src/scenes/SceneManagerInstance.ts
  let instance4;
  const SceneManagerInstance2 = {
    get: () => {
      return instance4;
    },
    set: (manager) => {
      instance4 = manager;
    }
  };

  // src/scenes/SceneManager.ts
  class SceneManager2 {
    constructor() {
      this.scenes = new Map();
      this.sceneIndex = 0;
      this.flush = false;
      this.renderResult = CreateSceneRenderData();
      this.game = GameInstance2.get();
      SceneManagerInstance2.set(this);
      Once(this.game, "boot", () => this.boot());
    }
    boot() {
      GetScenes().forEach((scene) => new scene());
    }
    update(delta, time) {
      for (const scene of this.scenes.values()) {
        Emit(scene, "update", delta, time);
      }
    }
    render(gameFrame) {
      const results = this.renderResult;
      ResetSceneRenderData(results, gameFrame);
      for (const scene of this.scenes.values()) {
        Emit(scene, "render", results);
      }
      if (this.flush) {
        results.numDirtyFrames++;
        this.flush = false;
      }
      return results;
    }
  }

  // src/Game.ts
  class Game extends EventEmitter {
    constructor(...settings) {
      super();
      this.VERSION = "4.0.0-beta1";
      this.isBooted = false;
      this.isPaused = false;
      this.willUpdate = true;
      this.willRender = true;
      this.lastTick = 0;
      this.elapsed = 0;
      this.frame = 0;
      GameInstance2.set(this);
      DOMContentLoaded(() => this.boot(settings));
    }
    boot(settings) {
      settings.forEach((setting) => setting());
      const renderer = GetRenderer();
      this.renderer = new renderer();
      this.textureManager = new TextureManager2();
      this.sceneManager = new SceneManager2();
      const parent2 = GetParent();
      if (parent2) {
        AddToDOM(this.renderer.canvas, parent2);
      }
      this.isBooted = true;
      GetBanner();
      Emit(this, "boot");
      this.lastTick = performance.now();
      this.step(this.lastTick);
    }
    pause() {
      this.isPaused = true;
    }
    resume() {
      this.isPaused = false;
      this.lastTick = performance.now();
    }
    step(time) {
      const delta = time - this.lastTick;
      this.lastTick = time;
      this.elapsed += delta;
      if (!this.isPaused) {
        if (this.willUpdate) {
          this.sceneManager.update(delta, time);
          Emit(this, "update", delta, time);
        }
        if (this.willRender) {
          this.renderer.render(this.sceneManager.render(this.frame));
        }
      }
      this.frame++;
      GameInstance2.setFrame(this.frame);
      GameInstance2.setElapsed(this.elapsed);
      requestAnimationFrame((now) => this.step(now));
    }
    destroy() {
    }
  }

  // src/scenes/GetConfigValue.ts
  function GetConfigValue(config5, property, defaultValue) {
    if (Object.prototype.hasOwnProperty.call(config5, property)) {
      return config5[property];
    } else {
      return defaultValue;
    }
  }

  // src/scenes/Install.ts
  function Install(scene, config5 = {}) {
    const sceneManager = SceneManagerInstance2.get();
    const size = sceneManager.scenes.size;
    const sceneIndex = sceneManager.sceneIndex;
    const firstScene = size === 0;
    if (typeof config5 === "string") {
      scene.key = config5;
    } else if (config5 || !config5 && firstScene) {
      scene.key = GetConfigValue(config5, "key", "scene" + sceneIndex.toString());
    }
    if (sceneManager.scenes.has(scene.key)) {
      console.warn("Scene key already in use: " + scene.key);
    } else {
      sceneManager.scenes.set(scene.key, scene);
      sceneManager.flush = true;
      sceneManager.sceneIndex++;
    }
  }

  // src/scenes/Scene.ts
  class Scene {
    constructor(config5) {
      this.game = GameInstance2.get();
      this.events = new Map();
      Install(this, config5);
    }
  }
  require_src();
})();
//# sourceMappingURL=index.js.map
