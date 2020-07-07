(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = global || self, factory(global.Phaser4 = {}));
}(this, (function (exports) { 'use strict';

    let instance;
    let frame = 0;
    let elapsed = 0;
    const GameInstance = {
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

    function RoundAwayFromZero(value) {
        return (value > 0) ? Math.ceil(value) : Math.floor(value);
    }

    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
    const lookup = new Uint8Array(256);
    for (let i = 0; i < chars.length; i++) {
        lookup[chars.charCodeAt(i)] = i;
    }

    function NOOP() {
    }

    class Matrix4 {
        constructor(src) {
            const data = new Float32Array(16);
            this.data = data;
            this.onChange = NOOP;
            if (src) {
                if (Array.isArray(src)) {
                    this.fromArray(src);
                }
                else {
                    this.fromArray(src.data);
                }
            }
            else {
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
            return '[ mat4=' + this.data.join(', ') + ' ]';
        }
        destroy() {
            this.onChange = NOOP;
            this.data = null;
        }
    }

    function Add(a, b, out = new Matrix4()) {
        const [a00, a01, a02, a03, a10, a11, a12, a13, a20, a21, a22, a23, a30, a31, a32, a33] = a.data;
        const [b00, b01, b02, b03, b10, b11, b12, b13, b20, b21, b22, b23, b30, b31, b32, b33] = b.data;
        return out.set(a00 + b00, a01 + b01, a02 + b02, a03 + b03, a10 + b10, a11 + b11, a12 + b12, a13 + b13, a20 + b20, a21 + b21, a22 + b22, a23 + b23, a30 + b30, a31 + b31, a32 + b32, a33 + b33);
    }

    function AddTranslationFromFloats(matrix, x, y, z) {
        const data = matrix.data;
        data[12] += x;
        data[13] += y;
        data[14] += z;
        matrix.onChange(matrix);
        return matrix;
    }

    function Adjoint(matrix, out = new Matrix4()) {
        const [a00, a01, a02, a03, a10, a11, a12, a13, a20, a21, a22, a23, a30, a31, a32, a33] = matrix.data;
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

    function Clone(src) {
        return new Matrix4(src);
    }

    function CopyFrom(src, dest) {
        return dest.fromArray(src.data);
    }

    function CopyPosition(src, dest) {
        const srcData = src.data;
        const destData = dest.data;
        destData[12] = srcData[12];
        destData[13] = srcData[13];
        destData[14] = srcData[14];
        dest.onChange(dest);
        return dest;
    }

    function Determinant(matrix) {
        const [m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33] = matrix.data;
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

    function Equals(a, b) {
        const [a00, a01, a02, a03, a10, a11, a12, a13, a20, a21, a22, a23, a30, a31, a32, a33] = a.data;
        const [b00, b01, b02, b03, b10, b11, b12, b13, b20, b21, b22, b23, b30, b31, b32, b33] = b.data;
        return (a00 === b00 &&
            a01 === b01 &&
            a02 === b02 &&
            a03 === b03 &&
            a10 === b10 &&
            a11 === b11 &&
            a12 === b12 &&
            a13 === b13 &&
            a20 === b20 &&
            a21 === b21 &&
            a22 === b22 &&
            a23 === b23 &&
            a30 === b30 &&
            a31 === b31 &&
            a32 === b32 &&
            a33 === b33);
    }

    function Frobenius(matrix) {
        const [m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33] = matrix.data;
        return Math.hypot(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33);
    }

    function FromQuat(q, out = new Matrix4()) {
        const { x, y, z, w } = q;
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

    function FromRotation(angle, axis, out = new Matrix4()) {
        let { x, y, z } = axis;
        let len = Math.hypot(x, y, z);
        if (len < 0.00001) {
            return null;
        }
        len = 1 / len;
        x *= len;
        y *= len;
        z *= len;
        const s = Math.sin(angle);
        const c = Math.cos(angle);
        const t = 1 - c;
        return out.set(x * x * t + c, y * x * t + z * s, z * x * t - y * s, 0, x * y * t - z * s, y * y * t + c, z * y * t + x * s, 0, x * z * t + y * s, y * z * t - x * s, z * z * t + c, 0, 0, 0, 0, 1);
    }

    function FromRotationTranslation(q, v, out = new Matrix4()) {
        const { x, y, z, w } = q;
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
        const { x: vx, y: vy, z: vz } = v;
        return out.set(1 - (yy + zz), xy + wz, xz - wy, 0, xy - wz, 1 - (xx + zz), yz + wx, 0, xz + wy, yz - wx, 1 - (xx + yy), 0, vx, vy, vz, 1);
    }

    function FromRotationTranslationScale(q, v, s, out = new Matrix4()) {
        const { x, y, z, w } = q;
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
        const { x: sx, y: sy, z: sz } = s;
        const { x: vx, y: vy, z: vz } = v;
        return out.set((1 - (yy + zz)) * sx, (xy + wz) * sx, (xz - wy) * sx, 0, (xy - wz) * sy, (1 - (xx + zz)) * sy, (yz + wx) * sy, 0, (xz + wy) * sz, (yz - wx) * sz, (1 - (xx + yy)) * sz, 0, vx, vy, vz, 1);
    }

    function FromRotationTranslationScaleOrigin(q, v, s, o, out = new Matrix4()) {
        const { x, y, z, w } = q;
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
        const { x: sx, y: sy, z: sz } = s;
        const { x: ox, y: oy, z: oz } = o;
        const { x: vx, y: vy, z: vz } = v;
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

    function FromRotationXYTranslation(rotation, position, translateFirst = true, out = new Matrix4()) {
        const { x, y, z } = position;
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

    function FromScaling(vec3, out = new Matrix4()) {
        const { x, y, z } = vec3;
        return out.set(x, 0, 0, 0, 0, y, 0, 0, 0, 0, z, 0, 0, 0, 0, 1);
    }

    function FromTranslation(vec3, out = new Matrix4()) {
        const { x, y, z } = vec3;
        return out.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, x, y, z, 1);
    }

    function FromXRotation(angle, out = new Matrix4()) {
        const c = Math.cos(angle);
        const s = Math.sin(angle);
        return out.set(1, 0, 0, 0, 0, c, s, 0, 0, -s, c, 0, 0, 0, 0, 1);
    }

    function FromYRotation(angle, out = new Matrix4()) {
        const c = Math.cos(angle);
        const s = Math.sin(angle);
        return out.set(c, 0, -s, 0, 0, 1, 0, 0, s, 0, c, 0, 0, 0, 0, 1);
    }

    function FromZRotation(angle, out = new Matrix4()) {
        const c = Math.cos(angle);
        const s = Math.sin(angle);
        return out.set(c, s, 0, 0, -s, c, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    }

    function Frustum(left, right, bottom, top, near, far, out = new Matrix4()) {
        const rl = 1 / (right - left);
        const tb = 1 / (top - bottom);
        const nf = 1 / (near - far);
        return out.set(near * 2 * rl, 0, 0, 0, 0, near * 2 * tb, 0, 0, (right + left) * rl, (top + bottom) * tb, (far + near) * nf, -1, 0, 0, far * near * 2 * nf, 0);
    }

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
            const { x, y, z } = this;
            dst[index] = x;
            dst[index + 1] = y;
            dst[index + 2] = z;
            return dst;
        }
        fromArray(src, index = 0) {
            return this.set(src[index], src[index + 1], src[index + 2]);
        }
        toString() {
            const { x, y, z } = this;
            return `{ x=${x}, y=${y}, z=${z} }`;
        }
    }

    function GetScaling(matrix, out = new Vec3()) {
        const [m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22] = matrix.data;
        return out.set(Math.hypot(m00, m01, m02), Math.hypot(m10, m11, m12), Math.hypot(m20, m21, m22));
    }

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

    function GetRotation(matrix, out = new Quaternion()) {
        const scaling = GetScaling(matrix);
        const is1 = 1 / scaling.x;
        const is2 = 1 / scaling.y;
        const is3 = 1 / scaling.z;
        const [m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22] = matrix.data;
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
        }
        else if (sm11 > sm22 && sm11 > sm33) {
            S = Math.sqrt(1.0 + sm11 - sm22 - sm33) * 2;
            return out.set(0.25 * S, (sm12 + sm21) / S, (sm31 + sm13) / S, (sm23 - sm32) / S);
        }
        else if (sm22 > sm33) {
            S = Math.sqrt(1.0 + sm22 - sm11 - sm33) * 2;
            return out.set((sm12 + sm21) / S, 0.25 * S, (sm23 + sm32) / S, (sm31 - sm13) / S);
        }
        else {
            S = Math.sqrt(1.0 + sm33 - sm11 - sm22) * 2;
            return out.set((sm31 + sm13) / S, (sm23 + sm32) / S, 0.25 * S, (sm12 - sm21) / S);
        }
    }

    function GetTranslation(matrix, out = new Vec3()) {
        const data = matrix.data;
        return out.set(data[12], data[13], data[14]);
    }

    function Identity(matrix = new Matrix4()) {
        return matrix.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    }

    function Invert(matrix, out = new Matrix4()) {
        const [m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33] = matrix.data;
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

    function LookAt(eye, center, up, out = new Matrix4()) {
        const { x: eyex, y: eyey, z: eyez } = eye;
        const { x: upx, y: upy, z: upz } = up;
        const { x: centerx, y: centery, z: centerz } = center;
        if (Math.abs(eyex - centerx) < 0.00001 && Math.abs(eyey - centery) < 0.00001 && Math.abs(eyez - centerz) < 0.00001) {
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
        }
        else {
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
        }
        else {
            len = 1 / len;
            y0 *= len;
            y1 *= len;
            y2 *= len;
        }
        return out.set(x0, y0, z0, 0, x1, y1, z1, 0, x2, y2, z2, 0, -(x0 * eyex + x1 * eyey + x2 * eyez), -(y0 * eyex + y1 * eyey + y2 * eyez), -(z0 * eyex + z1 * eyey + z2 * eyez), 1);
    }

    function Multiply(a, b, out = new Matrix4()) {
        const [a00, a01, a02, a03, a10, a11, a12, a13, a20, a21, a22, a23, a30, a31, a32, a33] = a.data;
        const [b00, b01, b02, b03, b10, b11, b12, b13, b20, b21, b22, b23, b30, b31, b32, b33] = b.data;
        return out.set(b00 * a00 + b01 * a10 + b02 * a20 + b03 * a30, b01 * a01 + b01 * a11 + b02 * a21 + b03 * a31, b02 * a02 + b01 * a12 + b02 * a22 + b03 * a32, b03 * a03 + b01 * a13 + b02 * a23 + b03 * a33, b10 * a00 + b11 * a10 + b12 * a20 + b13 * a30, b10 * a01 + b11 * a11 + b12 * a21 + b13 * a31, b10 * a02 + b11 * a12 + b12 * a22 + b13 * a32, b10 * a03 + b11 * a13 + b12 * a23 + b13 * a33, b20 * a00 + b21 * a10 + b22 * a20 + b23 * a30, b20 * a01 + b21 * a11 + b22 * a21 + b23 * a31, b20 * a02 + b21 * a12 + b22 * a22 + b23 * a32, b20 * a03 + b21 * a13 + b22 * a23 + b23 * a33, b30 * a00 + b31 * a10 + b32 * a20 + b33 * a30, b30 * a01 + b31 * a11 + b32 * a21 + b33 * a31, b30 * a02 + b31 * a12 + b32 * a22 + b33 * a32, b30 * a03 + b31 * a13 + b32 * a23 + b33 * a33);
    }

    function MultiplyScalar(matrix, scalar, out = new Matrix4()) {
        const [a00, a01, a02, a03, a10, a11, a12, a13, a20, a21, a22, a23, a30, a31, a32, a33] = matrix.data;
        return out.set(a00 * scalar, a01 * scalar, a02 * scalar, a03 * scalar, a10 * scalar, a11 * scalar, a12 * scalar, a13 * scalar, a20 * scalar, a21 * scalar, a22 * scalar, a23 * scalar, a30 * scalar, a31 * scalar, a32 * scalar, a33 * scalar);
    }

    function MultiplyScalarAndAdd(a, b, scalar, out = new Matrix4()) {
        const [a00, a01, a02, a03, a10, a11, a12, a13, a20, a21, a22, a23, a30, a31, a32, a33] = a.data;
        const [b00, b01, b02, b03, b10, b11, b12, b13, b20, b21, b22, b23, b30, b31, b32, b33] = b.data;
        return out.set(a00 + b00 * scalar, a01 + b01 * scalar, a02 + b02 * scalar, a03 + b03 * scalar, a10 + b10 * scalar, a11 + b11 * scalar, a12 + b12 * scalar, a13 + b13 * scalar, a20 + b20 * scalar, a21 + b21 * scalar, a22 + b22 * scalar, a23 + b23 * scalar, a30 + b30 * scalar, a31 + b31 * scalar, a32 + b32 * scalar, a33 + b33 * scalar);
    }

    function Ortho(left, right, bottom, top, near, far, out = new Matrix4()) {
        const lr = 1 / (left - right);
        const bt = 1 / (bottom - top);
        const nf = 1 / (near - far);
        return out.set(-2 * lr, 0, 0, 0, 0, -2 * bt, 0, 0, 0, 0, 2 * nf, 0, (left + right) * lr, (top + bottom) * bt, (far + near) * nf, 1);
    }

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

    function PerspectiveFromFieldOfView(fov, near, far, out = new Matrix4()) {
        const upTan = Math.tan((fov.upDegrees * Math.PI) / 180);
        const downTan = Math.tan((fov.downDegrees * Math.PI) / 180);
        const leftTan = Math.tan((fov.leftDegrees * Math.PI) / 180);
        const rightTan = Math.tan((fov.rightDegrees * Math.PI) / 180);
        const xScale = 2 / (leftTan + rightTan);
        const yScale = 2 / (upTan + downTan);
        return out.set(xScale, 0, 0, 0, 0, yScale, 0, 0, -((leftTan - rightTan) * xScale * 0.5), (upTan - downTan) * yScale * 0.5, far / (near - far), -1, 0, 0, (far * near) / (near - far), 0);
    }

    function Rotate(matrix, angle, axis, out = new Matrix4()) {
        let { x, y, z } = axis;
        let len = Math.hypot(x, y, z);
        if (len < 0.00001) {
            return null;
        }
        len = 1 / len;
        x *= len;
        y *= len;
        z *= len;
        const s = Math.sin(angle);
        const c = Math.cos(angle);
        const t = 1 - c;
        const [a00, a01, a02, a03, a10, a11, a12, a13, a20, a21, a22, a23, a30, a31, a32, a33] = matrix.data;
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

    function RotateX(matrix, angle, out = new Matrix4()) {
        const s = Math.sin(angle);
        const c = Math.cos(angle);
        const [a00, a01, a02, a03, a10, a11, a12, a13, a20, a21, a22, a23, a30, a31, a32, a33] = matrix.data;
        return out.set(a00, a01, a02, a03, a10 * c + a20 * s, a11 * c + a21 * s, a12 * c + a22 * s, a13 * c + a23 * s, a20 * c - a10 * s, a21 * c - a11 * s, a22 * c - a12 * s, a23 * c - a13 * s, a30, a31, a32, a33);
    }

    function RotateY(matrix, angle, out = new Matrix4()) {
        const s = Math.sin(angle);
        const c = Math.cos(angle);
        const [a00, a01, a02, a03, a10, a11, a12, a13, a20, a21, a22, a23, a30, a31, a32, a33] = matrix.data;
        return out.set(a00 * c - a20 * s, a01 * c - a21 * s, a02 * c - a22 * s, a03 * c - a23 * s, a10, a11, a12, a13, a00 * s + a20 * c, a01 * s + a21 * c, a02 * s + a22 * c, a03 * s + a23 * c, a30, a31, a32, a33);
    }

    function RotateZ(matrix, angle, out = new Matrix4()) {
        const s = Math.sin(angle);
        const c = Math.cos(angle);
        const [a00, a01, a02, a03, a10, a11, a12, a13, a20, a21, a22, a23, a30, a31, a32, a33] = matrix.data;
        return out.set(a00 * c + a10 * s, a01 * c + a11 * s, a02 * c + a12 * s, a03 * c + a13 * s, a10 * c - a00 * s, a11 * c - a01 * s, a12 * c - a02 * s, a13 * c - a03 * s, a20, a21, a22, a23, a30, a31, a32, a33);
    }

    function Scale(matrix, v, out = new Matrix4()) {
        const [m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33] = matrix.data;
        const { x, y, z } = v;
        return out.set(m00 * x, m01 * x, m02 * x, m03 * x, m10 * y, m11 * y, m12 * y, m13 * y, m20 * z, m21 * z, m22 * z, m23 * z, m30, m31, m32, m33);
    }

    function SetTranslation(matrix, vec3) {
        const data = matrix.data;
        const { x, y, z } = vec3;
        data[12] = x;
        data[13] = y;
        data[14] = z;
        matrix.onChange(matrix);
        return matrix;
    }

    function SetTranslationFromFloats(matrix, x, y, z) {
        const data = matrix.data;
        data[12] = x;
        data[13] = y;
        data[14] = z;
        matrix.onChange(matrix);
        return matrix;
    }

    function Subtract(a, b, out = new Matrix4()) {
        const [a00, a01, a02, a03, a10, a11, a12, a13, a20, a21, a22, a23, a30, a31, a32, a33] = a.data;
        const [b00, b01, b02, b03, b10, b11, b12, b13, b20, b21, b22, b23, b30, b31, b32, b33] = b.data;
        return out.set(a00 - b00, a01 - b01, a02 - b02, a03 - b03, a10 - b10, a11 - b11, a12 - b12, a13 - b13, a20 - b20, a21 - b21, a22 - b22, a23 - b23, a30 - b30, a31 - b31, a32 - b32, a33 - b33);
    }

    function TargetTo(eye, target, up, out = new Matrix4()) {
        const { x: eyex, y: eyey, z: eyez } = eye;
        const { x: upx, y: upy, z: upz } = up;
        const { x: targetx, y: targety, z: targetz } = target;
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

    function Translate(matrix, vec3, out = new Matrix4()) {
        const { x, y, z } = vec3;
        const data = matrix.data;
        const [a00, a01, a02, a03, a10, a11, a12, a13, a20, a21, a22, a23, a30, a31, a32, a33] = data;
        if (matrix === out) {
            data[12] = a00 * x + a10 * y + a20 * z + a30;
            data[13] = a01 * x + a11 * y + a21 * z + a31;
            data[14] = a02 * x + a12 * y + a22 * z + a32;
            data[15] = a03 * x + a13 * y + a23 * z + a33;
        }
        else {
            out.set(a00, a01, a02, a03, a10, a11, a12, a13, a20, a21, a22, a23, a00 * x + a10 * y + a20 * z + a30, a01 * x + a11 * y + a21 * z + a31, a02 * x + a12 * y + a22 * z + a32, a03 * x + a13 * y + a23 * z + a33);
        }
        return out;
    }

    function TranslateFromFloats(matrix, x, y, z, out = new Matrix4()) {
        const data = matrix.data;
        const [a00, a01, a02, a03, a10, a11, a12, a13, a20, a21, a22, a23, a30, a31, a32, a33] = data;
        if (matrix === out) {
            data[12] = a00 * x + a10 * y + a20 * z + a30;
            data[13] = a01 * x + a11 * y + a21 * z + a31;
            data[14] = a02 * x + a12 * y + a22 * z + a32;
            data[15] = a03 * x + a13 * y + a23 * z + a33;
        }
        else {
            out.set(a00, a01, a02, a03, a10, a11, a12, a13, a20, a21, a22, a23, a00 * x + a10 * y + a20 * z + a30, a01 * x + a11 * y + a21 * z + a31, a02 * x + a12 * y + a22 * z + a32, a03 * x + a13 * y + a23 * z + a33);
        }
        return out;
    }

    function Transpose(matrix, out = new Matrix4()) {
        const [m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33] = matrix.data;
        return out.set(m00, m10, m20, m30, m01, m11, m21, m31, m02, m12, m22, m32, m03, m13, m23, m33);
    }

    function Zero(matrix) {
        return matrix.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    }

    var index = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Add: Add,
        AddTranslationFromFloats: AddTranslationFromFloats,
        Adjoint: Adjoint,
        Clone: Clone,
        CopyFrom: CopyFrom,
        CopyPosition: CopyPosition,
        Determinant: Determinant,
        Equals: Equals,
        Frobenius: Frobenius,
        FromQuat: FromQuat,
        FromRotation: FromRotation,
        FromRotationTranslation: FromRotationTranslation,
        FromRotationTranslationScale: FromRotationTranslationScale,
        FromRotationTranslationScaleOrigin: FromRotationTranslationScaleOrigin,
        FromRotationXYTranslation: FromRotationXYTranslation,
        FromScaling: FromScaling,
        FromTranslation: FromTranslation,
        FromXRotation: FromXRotation,
        FromYRotation: FromYRotation,
        FromZRotation: FromZRotation,
        Frustum: Frustum,
        GetRotation: GetRotation,
        GetScaling: GetScaling,
        GetTranslation: GetTranslation,
        Identity: Identity,
        Invert: Invert,
        LookAt: LookAt,
        Matrix4: Matrix4,
        Multiply: Multiply,
        MultiplyScalar: MultiplyScalar,
        MultiplyScalarAndAdd: MultiplyScalarAndAdd,
        Ortho: Ortho,
        Perspective: Perspective,
        PerspectiveFromFieldOfView: PerspectiveFromFieldOfView,
        Rotate: Rotate,
        RotateX: RotateX,
        RotateY: RotateY,
        RotateZ: RotateZ,
        Scale: Scale,
        SetTranslation: SetTranslation,
        SetTranslationFromFloats: SetTranslationFromFloats,
        Subtract: Subtract,
        TargetTo: TargetTo,
        Translate: Translate,
        TranslateFromFloats: TranslateFromFloats,
        Transpose: Transpose,
        Zero: Zero
    });

    class Matrix2D {
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
            const { a, b, c, d, tx, ty } = this;
            return [a, b, c, d, tx, ty];
        }
        fromArray(src) {
            return this.set(src[0], src[1], src[2], src[3], src[4], src[5]);
        }
    }

    function Contains(rect, x, y) {
        if (rect.width <= 0 || rect.height <= 0) {
            return false;
        }
        return (rect.x <= x && rect.x + rect.width >= x && rect.y <= y && rect.y + rect.height >= y);
    }

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
            return Contains(this, x, y);
        }
        set right(value) {
            if (value <= this.x) {
                this.width = 0;
            }
            else {
                this.width = value - this.x;
            }
        }
        get right() {
            return this.x + this.width;
        }
        set bottom(value) {
            if (value <= this.y) {
                this.height = 0;
            }
            else {
                this.height = value - this.y;
            }
        }
        get bottom() {
            return this.y + this.height;
        }
    }

    class Vec2 {
        constructor(x = 0, y = 0) {
            this.set(x, y);
        }
        set(x = 0, y = 0) {
            this.x = x;
            this.y = y;
            return this;
        }
        toArray(dst = [], index = 0) {
            const { x, y } = this;
            dst[index] = x;
            dst[index + 1] = y;
            return dst;
        }
        fromArray(src, index = 0) {
            return this.set(src[index], src[index + 1]);
        }
        toString() {
            const { x, y } = this;
            return `{ x=${x}, y=${y} }`;
        }
    }

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

    function AngleBetween(x1, y1, x2, y2) {
        return Math.atan2(y2 - y1, x2 - x1);
    }

    function AngleBetweenY(x1, y1, x2, y2) {
        return Math.atan2(x2 - x1, y2 - y1);
    }

    const MATH_CONST = {
        PI2: Math.PI * 2,
        HALF_PI: Math.PI * 0.5,
        EPSILON: 1.0e-6,
        DEG_TO_RAD: Math.PI / 180,
        RAD_TO_DEG: 180 / Math.PI,
        MIN_SAFE_INTEGER: Number.MIN_SAFE_INTEGER || -9007199254740991,
        MAX_SAFE_INTEGER: Number.MAX_SAFE_INTEGER || 9007199254740991
    };

    function CounterClockwise(angle) {
        if (angle > Math.PI) {
            angle -= MATH_CONST.PI2;
        }
        return Math.abs((((angle + MATH_CONST.HALF_PI) % MATH_CONST.PI2) - MATH_CONST.PI2) % MATH_CONST.PI2);
    }

    function NormalizeAngle(angle) {
        angle = angle % MATH_CONST.PI2;
        if (angle >= 0) {
            return angle;
        }
        else {
            return angle + MATH_CONST.PI2;
        }
    }

    function ReverseAngle(angle) {
        return NormalizeAngle(angle + Math.PI);
    }

    function RotateAngleTo(currentAngle, targetAngle, lerp = 0.05) {
        if (currentAngle === targetAngle) {
            return currentAngle;
        }
        if (Math.abs(targetAngle - currentAngle) <= lerp || Math.abs(targetAngle - currentAngle) >= (MATH_CONST.PI2 - lerp)) {
            currentAngle = targetAngle;
        }
        else {
            if (Math.abs(targetAngle - currentAngle) > Math.PI) {
                if (targetAngle < currentAngle) {
                    targetAngle += MATH_CONST.PI2;
                }
                else {
                    targetAngle -= MATH_CONST.PI2;
                }
            }
            if (targetAngle > currentAngle) {
                currentAngle += lerp;
            }
            else if (targetAngle < currentAngle) {
                currentAngle -= lerp;
            }
        }
        return currentAngle;
    }

    function ShortestAngleBetween(angle1, angle2) {
        const difference = angle2 - angle1;
        if (difference === 0) {
            return 0;
        }
        const times = Math.floor((difference - (-180)) / 360);
        return difference - (times * 360);
    }

    function Wrap(value, min, max) {
        const range = max - min;
        return (min + ((((value - min) % range) + range) % range));
    }

    function WrapAngle(angle) {
        return Wrap(angle, -Math.PI, Math.PI);
    }

    function WrapAngleDegrees(angle) {
        return Wrap(angle, -180, 180);
    }

    var index$1 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        AngleBetween: AngleBetween,
        AngleBetweenY: AngleBetweenY,
        CounterClockwise: CounterClockwise,
        NormalizeAngle: NormalizeAngle,
        ReverseAngle: ReverseAngle,
        RotateAngleTo: RotateAngleTo,
        ShortestAngleBetween: ShortestAngleBetween,
        WrapAngle: WrapAngle,
        WrapAngleDegrees: WrapAngleDegrees
    });

    class Camera {
        constructor() {
            this._rotation = 0;
            this.type = 'Camera';
            this.dirtyRender = true;
            const game = GameInstance.get();
            this.renderer = game.renderer;
            this.matrix = Identity();
            this.bounds = new Rectangle();
            this.worldTransform = new Matrix2D();
            this.position = new Vec2Callback(() => this.updateTransform(), 0, 0);
            this.scale = new Vec2Callback(() => this.updateTransform(), 1, 1);
            this.origin = new Vec2Callback(() => this.updateTransform(), 0.5, 0.5);
            this.reset();
        }
        updateTransform() {
            const matrix = this.matrix.data;
            const px = this.position.x;
            const py = this.position.y;
            const sx = this.scale.x;
            const sy = this.scale.y;
            const ox = -px + (this.width * this.origin.x);
            const oy = -py + (this.height * this.origin.y);
            const z = Math.sin(this.rotation);
            const w = Math.cos(this.rotation);
            const z2 = z + z;
            const zz = z * z2;
            const wz = w * z2;
            const out0 = (1 - zz) * sx;
            const out1 = wz * sx;
            const out4 = -wz * sy;
            const out5 = (1 - zz) * sy;
            matrix[0] = out0;
            matrix[1] = out1;
            matrix[4] = out4;
            matrix[5] = out5;
            matrix[12] = px + ox - (out0 * ox + out4 * oy);
            matrix[13] = py + oy - (out1 * ox + out5 * oy);
            this.worldTransform.set(w * sx, z * sx, -z * sy, w * sy, -px, -py);
            const bw = this.width * (1 / sx);
            const bh = this.height * (1 / sy);
            this.bounds.set(ox - (bw / 2), oy - (bh / 2), bw, bh);
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

    class StaticCamera {
        constructor() {
            this.type = 'StaticCamera';
            this.dirtyRender = true;
            const game = GameInstance.get();
            this.renderer = game.renderer;
            this.matrix = Identity();
            this.bounds = new Rectangle();
            this.worldTransform = new Matrix2D();
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

    var index$2 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Camera: Camera,
        StaticCamera: StaticCamera
    });

    function Backward() {
        return new Vec3(0, 0, -1);
    }

    function Down() {
        return new Vec3(0, -1, 0);
    }

    function Forward() {
        return new Vec3(0, 0, 1);
    }

    function Left() {
        return new Vec3(-1, 0, 0);
    }

    function Right() {
        return new Vec3(1, 0, 0);
    }

    function Up() {
        return new Vec3(0, 1, 0);
    }

    function Zero$1() {
        return new Vec3(0, 0, 0);
    }

    const UP = Up();
    const DOWN = Down();
    const LEFT = Left();
    const RIGHT = Right();
    const FORWARD = Forward();
    const BACKWARD = Backward();
    const ZERO = Zero$1();

    function Abs(a, out = new Vec3()) {
        return out.set(Math.abs(a.x), Math.abs(a.y), Math.abs(a.z));
    }

    function Add$1(a, b, out = new Vec3()) {
        return out.set(a.x + b.x, a.y + b.y, a.z + b.z);
    }

    function AddScalar(a, scalar, out = new Vec3()) {
        return out.set(a.x + scalar, a.y + scalar, a.z + scalar);
    }

    function Dot(a, b) {
        return a.x * b.x + a.y * b.y + a.z * b.z;
    }

    function Angle(a, b) {
        const { x: ax, y: ay, z: az } = a;
        const { x: bx, y: by, z: bz } = b;
        const mag1 = Math.sqrt(ax * ax + ay * ay + az * az);
        const mag2 = Math.sqrt(bx * bx + by * by + bz * bz);
        const mag = mag1 * mag2;
        const c = mag && Dot(a, b) / mag;
        return Math.acos(Math.min(Math.max(c, -1), 1));
    }

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

    function Bezier$1(a, b, c, d, t, out = new Vec3()) {
        return out.set(Bezier(t, a.x, b.x, c.x, d.x), Bezier(t, a.y, b.y, c.y, d.y), Bezier(t, a.z, b.z, c.z, d.z));
    }

    function CatmullRom(t, p0, p1, p2, p3) {
        const v0 = (p2 - p0) * 0.5;
        const v1 = (p3 - p1) * 0.5;
        const t2 = t * t;
        const t3 = t * t2;
        return (2 * p1 - 2 * p2 + v0 + v1) * t3 + (-3 * p1 + 3 * p2 - 2 * v0 - v1) * t2 + v0 * t + p1;
    }

    function CatmullRom$1(p1, p2, p3, p4, t, out = new Vec3()) {
        return out.set(CatmullRom(t, p1.x, p2.x, p3.x, p4.x), CatmullRom(t, p1.y, p2.y, p3.y, p4.y), CatmullRom(t, p1.z, p2.z, p3.z, p4.z));
    }

    function Ceil(a, out = new Vec3()) {
        return out.set(Math.ceil(a.x), Math.ceil(a.y), Math.ceil(a.z));
    }

    function Scale$1(a, scalar, out = new Vec3()) {
        return out.set(a.x * scalar, a.y * scalar, a.z * scalar);
    }

    function Center(a, b, out = new Vec3()) {
        Add$1(a, b, out);
        return Scale$1(out, 0.5, out);
    }

    function Clamp(value, min, max) {
        return Math.max(min, Math.min(max, value));
    }

    function Clamp$1(a, min, max, out = new Vec3()) {
        return out.set(Clamp(a.x, min.x, max.x), Clamp(a.y, min.y, max.y), Clamp(a.z, min.z, max.z));
    }

    function DivideScalar(a, scalar, out = new Vec3()) {
        const { x, y, z } = a;
        return out.set(x / scalar, y / scalar, z / scalar);
    }

    function Length(a) {
        const { x, y, z } = a;
        return Math.sqrt(x * x + y * y + z * z);
    }

    function ClampLength(a, min, max, out = new Vec3()) {
        const length = Length(a);
        DivideScalar(a, length || 1, out);
        return Scale$1(out, Clamp(min, max, length), out);
    }

    function ClampScalar(a, min, max, out = new Vec3()) {
        return out.set(Clamp(a.x, min, max), Clamp(a.y, min, max), Clamp(a.z, min, max));
    }

    function Clone$1(source) {
        const { x, y, z } = source;
        return new Vec3(x, y, z);
    }

    function CopyFrom$1(source, dest) {
        const { x, y, z } = source;
        return dest.set(x, y, z);
    }

    function Cross(a, b, out = new Vec3()) {
        const { x: ax, y: ay, z: az } = a;
        const { x: bx, y: by, z: bz } = b;
        return out.set(ay * bz - az * by, az * bx - ax * bz, ax * by - ay * bx);
    }

    function CrossNormalize(a, b, out = new Vec3()) {
        const { x: ax, y: ay, z: az } = a;
        const { x: bx, y: by, z: bz } = b;
        const x = ay * bz - az * by;
        const y = az * bx - ax * bz;
        const z = ax * by - ay * bx;
        let len = x * x + y * y + z * z;
        if (len > 0) {
            len = 1 / Math.sqrt(len);
        }
        return out.set(x * len, y * len, z * len);
    }

    function DistanceSquared(a, b) {
        const x = a.x - b.x;
        const y = a.y - b.y;
        const z = a.z - b.z;
        return (x * x) + (y * y) + (z * z);
    }

    function Distance(a, b) {
        return Math.sqrt(DistanceSquared(a, b));
    }

    function Divide(a, b, out = new Vec3()) {
        return out.set(a.x / b.x, a.y / b.y, a.z / b.z);
    }

    function Equals$1(a, b) {
        return a.x === b.x && a.y === b.y && a.z === b.z;
    }

    function Floor(a, out = new Vec3()) {
        return out.set(Math.floor(a.x), Math.floor(a.y), Math.floor(a.z));
    }

    function Fract(a, out = new Vec3()) {
        return out.set(a.x - Math.floor(a.x), a.y - Math.floor(a.y), a.z - Math.floor(a.z));
    }

    function FuzzyEqual(a, b, epsilon = 0.0001) {
        return Math.abs(a - b) < epsilon;
    }

    function FuzzyEquals(a, b, epsilon = 0.0001) {
        return FuzzyEqual(a.x, b.x, epsilon) && FuzzyEqual(a.y, b.y, epsilon) && FuzzyEqual(a.z, b.z, epsilon);
    }

    function Hermite(a, b, c, d, t) {
        const squared = t * t;
        const factor1 = squared * (2 * t - 3) + 1;
        const factor2 = squared * (t - 2) + t;
        const factor3 = squared * (t - 1);
        const factor4 = squared * (3 - 2 * t);
        return a * factor1 + b * factor2 + c * factor3 + d * factor4;
    }

    function Hermite$1(a, b, c, d, t, out = new Vec3()) {
        return out.set(Hermite(t, a.x, b.x, c.x, d.x), Hermite(t, a.y, b.y, c.y, d.y), Hermite(t, a.z, b.z, c.z, d.z));
    }

    function Inverse(a, out = new Vec3()) {
        return out.set(1 / a.x, 1 / a.y, 1 / a.z);
    }

    function IsNonUniform(a) {
        const absX = Math.abs(a.x);
        const absY = Math.abs(a.y);
        const absZ = Math.abs(a.z);
        return (absX !== absY || absX !== absZ || absY !== absZ);
    }

    function LengthSquared(a) {
        const { x, y, z } = a;
        return x * x + y * y + z * z;
    }

    function Lerp(a, b, t, out = new Vec3()) {
        const { x, y, z } = a;
        return out.set(x + t * (b.x - x), y + t * (b.y - y), z + t * (b.z - z));
    }

    function ManhattanDistance(a, b) {
        return Math.abs(a.x - b.x) + Math.abs(a.y - b.y) + Math.abs(a.z - b.z);
    }

    function ManhattanLength(a) {
        return Math.abs(a.x) + Math.abs(a.y) + Math.abs(a.z);
    }

    function Max(a, b, out = new Vec3()) {
        const { x: ax, y: ay, z: az } = a;
        const { x: bx, y: by, z: bz } = b;
        return out.set(Math.max(ax, bx), Math.max(ay, by), Math.max(az, bz));
    }

    function Min(a, b, out = new Vec3()) {
        const { x: ax, y: ay, z: az } = a;
        const { x: bx, y: by, z: bz } = b;
        return out.set(Math.min(ax, bx), Math.min(ay, by), Math.min(az, bz));
    }

    function Multiply$1(a, b, out = new Vec3()) {
        return out.set(a.x * b.x, a.y * b.y, a.z * b.z);
    }

    function MultiplyByFloats(a, x, y, z, out = new Vec3()) {
        return out.set(a.x * x, a.y * y, a.z * z);
    }

    function Negate(a, out = new Vec3()) {
        return out.set(-a.x, -a.y, -a.z);
    }

    function Normalize(a, out = new Vec3()) {
        const { x, y, z } = a;
        let len = x * x + y * y + z * z;
        if (len > 0) {
            len = 1 / Math.sqrt(len);
        }
        return out.set(x * len, y * len, z * len);
    }

    function One() {
        return new Vec3(1, 1, 1);
    }

    function TransformMat4(a, m, out = new Vec3()) {
        const [m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33] = m.data;
        const { x, y, z } = a;
        let w = m03 * x + m13 * y + m23 * z + m33;
        w = w || 1;
        return out.set((m00 * x + m10 * y + m20 * z + m30) / w, (m01 * x + m11 * y + m21 * z + m31) / w, (m02 * x + m12 * y + m22 * z + m32) / w);
    }

    const tempMatrix1 = new Matrix4();
    const tempMatrix2 = new Matrix4();
    function Project(v, world, transform, viewport, out = new Vec3()) {
        const { x, y, width, height } = viewport;
        tempMatrix1.set(width / 2, 0, 0, 0, 0, -height / 2, 0, 0, 0, 0, 0.5, 0, x + width / 2, height / 2 + y, 0.5, 1);
        Multiply(world, transform, tempMatrix2);
        Multiply(tempMatrix2, tempMatrix1, tempMatrix2);
        return TransformMat4(v, tempMatrix2, out);
    }

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

    function Random(a, scale = 1, out = new Vec3()) {
        const r = Math.random() * 2 * Math.PI;
        const z = Math.random() * 2 - 1;
        const zScale = Math.sqrt(1 - z * z) * scale;
        return out.set(Math.cos(r) * zScale, Math.sin(r) * zScale, z * scale);
    }

    function Subtract$1(a, b, out = new Vec3()) {
        return out.set(a.x - b.x, a.y - b.y, a.z - b.z);
    }

    function Reflect(a, normal, out = new Vec3()) {
        Scale$1(normal, 2 * Dot(a, normal), out);
        return Subtract$1(a, out, out);
    }

    function RotateX$1(a, origin, angle, out = new Vec3()) {
        const { x: ax, y: ay, z: az } = a;
        const { x: bx, y: by, z: bz } = origin;
        const px = ax - bx;
        const py = ay - by;
        const pz = az - bz;
        const rx = px;
        const ry = py * Math.cos(angle) - pz * Math.sin(angle);
        const rz = py * Math.sin(angle) + pz * Math.cos(angle);
        return out.set(rx + bx, ry + by, rz + bz);
    }

    function RotateY$1(a, origin, angle, out = new Vec3()) {
        const { x: ax, y: ay, z: az } = a;
        const { x: bx, y: by, z: bz } = origin;
        const px = ax - bx;
        const py = ay - by;
        const pz = az - bz;
        const rx = pz * Math.sin(angle) + px * Math.cos(angle);
        const ry = py;
        const rz = pz * Math.cos(angle) - px * Math.sin(angle);
        return out.set(rx + bx, ry + by, rz + bz);
    }

    function RotateZ$1(a, origin, angle, out = new Vec3()) {
        const { x: ax, y: ay, z: az } = a;
        const { x: bx, y: by, z: bz } = origin;
        const px = ax - bx;
        const py = ay - by;
        const pz = az - bz;
        const rx = px * Math.cos(angle) - py * Math.sin(angle);
        const ry = px * Math.sin(angle) + py * Math.cos(angle);
        const rz = pz;
        return out.set(rx + bx, ry + by, rz + bz);
    }

    function Round(a, out = new Vec3()) {
        return out.set(Math.round(a.x), Math.round(a.y), Math.round(a.z));
    }

    function RoundToZero(a, out = new Vec3()) {
        return out.set((a.x < 0) ? Math.ceil(a.x) : Math.floor(a.x), (a.y < 0) ? Math.ceil(a.y) : Math.floor(a.y), (a.z < 0) ? Math.ceil(a.z) : Math.floor(a.z));
    }

    function ScaleAndAdd(a, b, scalar, out = new Vec3()) {
        return out.set(a.x + b.x * scalar, a.y + b.y * scalar, a.z + b.z * scalar);
    }

    function SetFromCylindricalCoords(radius, theta, y, out = new Vec3()) {
        return out.set(radius * Math.sin(theta), y, radius * Math.cos(theta));
    }

    function SetFromSphericalCoords(radius, phi, theta, out = new Vec3()) {
        const sinPhiRadius = Math.sin(phi) * radius;
        return out.set(sinPhiRadius * Math.sin(theta), Math.cos(phi) * radius, sinPhiRadius * Math.cos(theta));
    }

    function SetLength(a, length, out = new Vec3()) {
        Normalize(a, out);
        return Scale$1(out, length, out);
    }

    function SubtractScalar(a, scalar, out = new Vec3()) {
        return out.set(a.x - scalar, a.y - scalar, a.z - scalar);
    }

    function TransformMat4Zero(a, m, out = new Vec3()) {
        const [m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22] = m.data;
        const { x, y, z } = a;
        return out.set(m00 * x + m10 * y + m20 * z, m01 * x + m11 * y + m21 * z, m02 * x + m12 * y + m22 * z);
    }

    function TransformQuat(a, q, out = new Vec3()) {
        const { x: qx, y: qy, z: qz, w: qw } = q;
        const { x, y, z } = a;
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

    const matrix = new Matrix4();
    const screenSource = new Vec3();
    function Unproject(v, viewportWidth, viewportHeight, world, view, projection, out = new Vec3()) {
        Multiply(world, view, matrix);
        Multiply(matrix, projection, matrix);
        Invert(matrix, matrix);
        const { x, y, z } = v;
        screenSource.set(x / viewportWidth * 2 - 1, -(y / viewportHeight * 2 - 1), 2 * z - 1);
        TransformMat4(screenSource, matrix, out);
        const data = matrix.data;
        const num = screenSource.x * data[3] + screenSource.y * data[7] + screenSource.z * data[11] + data[15];
        return Scale$1(out, 1 / num, out);
    }

    var index$3 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Abs: Abs,
        Add: Add$1,
        AddScalar: AddScalar,
        Angle: Angle,
        Backward: Backward,
        Bezier: Bezier$1,
        CatmullRom: CatmullRom$1,
        Ceil: Ceil,
        Center: Center,
        Clamp: Clamp$1,
        ClampLength: ClampLength,
        ClampScalar: ClampScalar,
        Clone: Clone$1,
        CopyFrom: CopyFrom$1,
        Cross: Cross,
        CrossNormalize: CrossNormalize,
        Distance: Distance,
        DistanceSquared: DistanceSquared,
        Divide: Divide,
        DivideScalar: DivideScalar,
        Dot: Dot,
        Down: Down,
        Equals: Equals$1,
        Floor: Floor,
        Forward: Forward,
        Fract: Fract,
        FuzzyEquals: FuzzyEquals,
        Hermite: Hermite$1,
        Inverse: Inverse,
        IsNonUniform: IsNonUniform,
        Left: Left,
        Length: Length,
        LengthSquared: LengthSquared,
        Lerp: Lerp,
        ManhattanDistance: ManhattanDistance,
        ManhattanLength: ManhattanLength,
        Max: Max,
        Min: Min,
        Multiply: Multiply$1,
        MultiplyByFloats: MultiplyByFloats,
        Negate: Negate,
        Normalize: Normalize,
        One: One,
        Project: Project,
        Random: Random,
        Reflect: Reflect,
        RGBCallback: RGBCallback,
        Right: Right,
        RotateX: RotateX$1,
        RotateY: RotateY$1,
        RotateZ: RotateZ$1,
        Round: Round,
        RoundToZero: RoundToZero,
        Scale: Scale$1,
        ScaleAndAdd: ScaleAndAdd,
        SetFromCylindricalCoords: SetFromCylindricalCoords,
        SetFromSphericalCoords: SetFromSphericalCoords,
        SetLength: SetLength,
        Subtract: Subtract$1,
        SubtractScalar: SubtractScalar,
        TransformMat4: TransformMat4,
        TransformMat4Zero: TransformMat4Zero,
        TransformQuat: TransformQuat,
        Unproject: Unproject,
        Up: Up,
        Vec3: Vec3,
        Vec3Callback: Vec3Callback,
        Zero: Zero$1,
        BACKWARD: BACKWARD,
        DOWN: DOWN,
        FORWARD: FORWARD,
        LEFT: LEFT,
        RIGHT: RIGHT,
        UP: UP,
        ZERO: ZERO
    });

    function Add$2(a, b, out = new Quaternion()) {
        return out.set(a.x + b.x, a.y + b.y, a.z + b.z, a.w + b.w);
    }

    function AddScalar$1(a, scalar, out = new Quaternion()) {
        return out.set(a.x + scalar, a.y + scalar, a.z + scalar, a.w + scalar);
    }

    function Dot$1(a, b) {
        return (a.x * b.x) + (a.y * b.y) + (a.z * b.z) + (a.w * b.w);
    }

    function AngleTo(a, b) {
        return 2 * Math.acos(Math.abs(Clamp(Dot$1(a, b), -1, 1)));
    }

    function AreClose(a, b) {
        return (Dot$1(a, b) >= 0);
    }

    function Clone$2(source) {
        const { x, y, z, w } = source;
        return new Quaternion(x, y, z, w);
    }

    function Conjugate(a, out = new Quaternion()) {
        const { x, y, z, w } = a;
        return out.set(x * -1, y * -1, z * -1, w);
    }

    function CopyFrom$2(source, dest) {
        const { x, y, z, w } = source;
        return dest.set(x, y, z, w);
    }

    function Equals$2(a, b) {
        return a.x === b.x && a.y === b.y && a.z === b.z && a.w === b.w;
    }

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
        return out.set((cosYaw * sinPitch * cosRoll) + (sinYaw * cosPitch * sinRoll), (sinYaw * cosPitch * cosRoll) - (cosYaw * sinPitch * sinRoll), (cosYaw * cosPitch * sinRoll) - (sinYaw * sinPitch * cosRoll), (cosYaw * cosPitch * cosRoll) + (sinYaw * sinPitch * sinRoll));
    }

    function FromEulerAngles(x, y, z, out = new Quaternion()) {
        return RotationYawPitchRoll(y, x, z, out);
    }

    function FromEulerVector(v, out = new Quaternion()) {
        return RotationYawPitchRoll(v.y, v.x, v.z, out);
    }

    function FromRotationAxis(axis, angle, out = new Quaternion()) {
        const sin = Math.sin(angle / 2);
        Normalize(axis, axis);
        const { x, y, z } = axis;
        return out.set(x * sin, y * sin, z * sin, Math.cos(angle / 2));
    }

    function FromRotationMatrix(matrix, out = new Quaternion()) {
        const [m11, m21, m31, m41, m12, m22, m32, m42, m13, m23, m33] = matrix.data;
        const trace = m11 + m22 + m33;
        let s;
        if (trace > 0) {
            s = 0.5 / Math.sqrt(trace + 1);
            return out.set((m32 - m23) * s, (m13 - m31) * s, (m21 - m12) * s, 0.25 / s);
        }
        else if (m11 > m22 && m11 > m33) {
            s = 2 * Math.sqrt(1 + m11 - m22 - m33);
            return out.set(0.25 * s, (m12 + m21) / s, (m13 + m31) / s, (m32 - m23) / s);
        }
        else if (m22 > m33) {
            s = 2 * Math.sqrt(1 + m22 - m11 - m33);
            return out.set((m12 + m21) / s, 0.25 * s, (m23 + m32) / s, (m13 - m31) / s);
        }
        else {
            s = 2 * Math.sqrt(1 + m33 - m11 - m22);
            return out.set((m13 + m31) / s, (m23 + m32) / s, 0.25 * s, (m21 - m12) / s);
        }
    }

    function FuzzyEquals$1(a, b, epsilon = 0.0001) {
        return (FuzzyEqual(a.x, b.x, epsilon) &&
            FuzzyEqual(a.y, b.y, epsilon) &&
            FuzzyEqual(a.z, b.z, epsilon) &&
            FuzzyEqual(a.w, b.w, epsilon));
    }

    function GetAngle(a, b) {
        const dot = Dot$1(a, b);
        return Math.acos(2 * dot * dot - 1);
    }

    function GetAxisAngle(a, out = new Quaternion()) {
        const rad = Math.acos(a.w) * 2;
        const s = Math.sin(rad / 2);
        const epsilon = 0.000001;
        if (s > epsilon) {
            out.set(a.x / s, a.y / s, a.z / s);
        }
        else {
            out.set(1, 0, 0);
        }
        return rad;
    }

    function Hermite$2(a, b, c, d, t, out = new Quaternion()) {
        return out.set(Hermite(t, a.x, b.x, c.x, d.x), Hermite(t, a.y, b.y, c.y, d.y), Hermite(t, a.z, b.z, c.z, d.z), Hermite(t, a.w, b.w, c.w, d.w));
    }

    function Invert$1(a, out = new Quaternion()) {
        const { x, y, z, w } = a;
        const dot = x * x + y * y + z * z + w * w;
        const invDot = dot ? 1 / dot : 0;
        return out.set(-x * invDot, -y * invDot, -z * invDot, w * invDot);
    }

    function Length$1(a) {
        const { x, y, z, w } = a;
        return Math.sqrt(x * x + y * y + z * z + w * w);
    }

    function LengthSquared$1(a) {
        const { x, y, z, w } = a;
        return x * x + y * y + z * z + w * w;
    }

    function Multiply$2(a, b, out = new Quaternion()) {
        const { x: ax, y: ay, z: az, w: aw } = a;
        const { x: bx, y: by, z: bz, w: bw } = b;
        return out.set(ax * bw + aw * bx + ay * bz - az * by, ay * bw + aw * by + az * bx - ax * bz, az * bw + aw * bz + ax * by - ay * bx, aw * bw - ax * bx - ay * by - az * bz);
    }

    function MultiplyByFloats$1(a, x, y, z, w, out = new Quaternion()) {
        return out.set(a.x * x, a.y * y, a.z * z, a.w * w);
    }

    function Scale$2(a, scalar, out = new Quaternion()) {
        const { x, y, z, w } = a;
        return out.set(x * scalar, y * scalar, z * scalar, w * scalar);
    }

    function Normalize$1(a, out = new Quaternion()) {
        const length = Length$1(a);
        if (length === 0) {
            return out.set(0, 0, 0, 1);
        }
        else {
            return Scale$2(a, length, out);
        }
    }

    function Slerp(a, b, t, out = new Quaternion()) {
        if (t === 0) {
            return CopyFrom$2(a, out);
        }
        else if (t === 1) {
            return CopyFrom$2(b, out);
        }
        const { x, y, z, w } = a;
        const { x: bx, y: by, z: bz, w: bw } = b;
        let cosHalfTheta = w * bw + x * bx + y * by + z * bz;
        if (cosHalfTheta < 0) {
            out.set(-bx, -by, -bz, -bw);
            cosHalfTheta = -cosHalfTheta;
        }
        else {
            CopyFrom$2(b, out);
        }
        if (cosHalfTheta >= 1) {
            return out.set(x, y, z, w);
        }
        const sqrSinHalfTheta = 1 - cosHalfTheta * cosHalfTheta;
        if (sqrSinHalfTheta <= Number.EPSILON) {
            const s = 1 - t;
            out.set(s * x + t * out.x, s * y + t * out.y, s * z + t * out.z, s * w + t * out.w);
            return Normalize$1(out, out);
        }
        const sinHalfTheta = Math.sqrt(sqrSinHalfTheta);
        const halfTheta = Math.atan2(sinHalfTheta, cosHalfTheta);
        const ratioA = Math.sin((1 - t) * halfTheta) / sinHalfTheta;
        const ratioB = Math.sin(t * halfTheta) / sinHalfTheta;
        return out.set((x * ratioA + out.x * ratioB), (y * ratioA + out.y * ratioB), (z * ratioA + out.z * ratioB), (w * ratioA + out.w * ratioB));
    }

    function RotateTowards(a, b, step, out = new Quaternion()) {
        const angle = GetAngle(a, b);
        if (angle === 0) {
            return CopyFrom$2(a, out);
        }
        const t = Math.min(1, step / angle);
        return Slerp(a, b, t, out);
    }

    function RotateX$2(a, angle, out = new Quaternion()) {
        angle *= 0.5;
        const { x, y, z, w } = a;
        const bx = Math.sin(angle);
        const bw = Math.cos(angle);
        return out.set(x * bw + w * bx, y * bw + z * bx, z * bw - y * bx, w * bw - x * bx);
    }

    function RotateY$2(a, angle, out = new Quaternion()) {
        angle *= 0.5;
        const { x, y, z, w } = a;
        const by = Math.sin(angle);
        const bw = Math.cos(angle);
        return out.set(x * bw - z * by, y * bw + w * by, z * bw + x * by, w * bw - y * by);
    }

    function RotateZ$2(a, angle, out = new Quaternion()) {
        angle *= 0.5;
        const { x, y, z, w } = a;
        const bz = Math.sin(angle);
        const bw = Math.cos(angle);
        return out.set(x * bw + y * bz, y * bw - x * bz, z * bw + w * bz, w * bw - z * bz);
    }

    function RotationAlphaBetaGamma(alpha, beta, gamma, out = new Quaternion()) {
        const halfGammaPlusAlpha = (gamma + alpha) * 0.5;
        const halfGammaMinusAlpha = (gamma - alpha) * 0.5;
        const halfBeta = beta * 0.5;
        return out.set(Math.cos(halfGammaMinusAlpha) * Math.sin(halfBeta), Math.sin(halfGammaMinusAlpha) * Math.sin(halfBeta), Math.sin(halfGammaPlusAlpha) * Math.cos(halfBeta), Math.cos(halfGammaPlusAlpha) * Math.cos(halfBeta));
    }

    function ScaleAndAdd$1(a, b, scalar, out = new Quaternion()) {
        return out.set(a.x + b.x * scalar, a.y + b.y * scalar, a.z + b.z * scalar, a.w + b.w * scalar);
    }

    function SetAxisAngle(axis, angle, out = new Quaternion()) {
        const { x, y, z } = axis;
        angle *= 0.5;
        const s = Math.sin(angle);
        return out.set(x * s, y * s, z * s, Math.cos(angle));
    }

    function SetFromUnitVectors(a, from, to, out = new Quaternion()) {
        const { x: fx, y: fy, z: fz } = from;
        const { x: tx, y: ty, z: tz } = to;
        const epsilon = 0.000001;
        let r = Dot(from, to) + 1;
        if (r < epsilon) {
            r = 0;
            if (Math.abs(fx) > Math.abs(fz)) {
                return out.set(-fy, fx, 0, r);
            }
            else {
                return out.set(0, -fz, fy, r);
            }
        }
        else {
            return out.set(fy * tz - fz * ty, fz * tx - fx * tz, fx * ty - fy * tx, r);
        }
    }

    function Subtract$2(a, b, out = new Quaternion()) {
        return out.set(a.x - b.x, a.y - b.y, a.z - b.z, a.w - b.w);
    }

    function SubtractScalar$1(a, scalar, out = new Quaternion()) {
        const { x, y, z, w } = a;
        return out.set(x - scalar, y - scalar, z - scalar, w - scalar);
    }

    function ToEulerAngles(q, out = new Vec3()) {
        const { x, y, z, w } = q;
        const sqw = w * w;
        const sqz = z * z;
        const sqx = x * x;
        const sqy = y * y;
        const zAxisY = y * z - x * w;
        const limit = 0.4999999;
        if (zAxisY < -limit) {
            return out.set(Math.PI / 2, 2 * Math.atan2(y, w), 0);
        }
        else if (zAxisY > limit) {
            return out.set(-Math.PI / 2, 2 * Math.atan2(y, w), 0);
        }
        else {
            return out.set(Math.asin(-2.0 * (z * y - x * w)), Math.atan2(2.0 * (z * x + y * w), (sqz - sqx - sqy + sqw)), Math.atan2(2.0 * (x * y + z * w), (-sqz - sqx + sqy + sqw)));
        }
    }

    function Zero$2() {
        return new Quaternion(0, 0, 0, 0);
    }

    var index$4 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Add: Add$2,
        AddScalar: AddScalar$1,
        AngleTo: AngleTo,
        AreClose: AreClose,
        Clone: Clone$2,
        Conjugate: Conjugate,
        CopyFrom: CopyFrom$2,
        Dot: Dot$1,
        Equals: Equals$2,
        FromEulerAngles: FromEulerAngles,
        FromEulerVector: FromEulerVector,
        FromRotationAxis: FromRotationAxis,
        FromRotationMatrix: FromRotationMatrix,
        FuzzyEquals: FuzzyEquals$1,
        GetAngle: GetAngle,
        GetAxisAngle: GetAxisAngle,
        Hermite: Hermite$2,
        Invert: Invert$1,
        Length: Length$1,
        LengthSquared: LengthSquared$1,
        Multiply: Multiply$2,
        MultiplyByFloats: MultiplyByFloats$1,
        Normalize: Normalize$1,
        Quaternion: Quaternion,
        RotateTowards: RotateTowards,
        RotateX: RotateX$2,
        RotateY: RotateY$2,
        RotateZ: RotateZ$2,
        RotationAlphaBetaGamma: RotationAlphaBetaGamma,
        RotationYawPitchRoll: RotationYawPitchRoll,
        Scale: Scale$2,
        ScaleAndAdd: ScaleAndAdd$1,
        SetAxisAngle: SetAxisAngle,
        SetFromUnitVectors: SetFromUnitVectors,
        Slerp: Slerp,
        Subtract: Subtract$2,
        SubtractScalar: SubtractScalar$1,
        ToEulerAngles: ToEulerAngles,
        Zero: Zero$2
    });

    function In(v, overshoot = 1.70158) {
        return v * v * ((overshoot + 1) * v - overshoot);
    }

    function InOut(v, overshoot = 1.70158) {
        const s = overshoot * 1.525;
        if ((v *= 2) < 1) {
            return 0.5 * (v * v * ((s + 1) * v - s));
        }
        else {
            return 0.5 * ((v -= 2) * v * ((s + 1) * v + s) + 2);
        }
    }

    function Out(v, overshoot = 1.70158) {
        return --v * v * ((overshoot + 1) * v + overshoot) + 1;
    }

    var index$5 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        In: In,
        InOut: InOut,
        Out: Out
    });

    function In$1(v) {
        v = 1 - v;
        if (v < 1 / 2.75) {
            return 1 - (7.5625 * v * v);
        }
        else if (v < 2 / 2.75) {
            return 1 - (7.5625 * (v -= 1.5 / 2.75) * v + 0.75);
        }
        else if (v < 2.5 / 2.75) {
            return 1 - (7.5625 * (v -= 2.25 / 2.75) * v + 0.9375);
        }
        else {
            return 1 - (7.5625 * (v -= 2.625 / 2.75) * v + 0.984375);
        }
    }

    function InOut$1(v) {
        let reverse = false;
        if (v < 0.5) {
            v = 1 - (v * 2);
            reverse = true;
        }
        else {
            v = (v * 2) - 1;
        }
        if (v < 1 / 2.75) {
            v = 7.5625 * v * v;
        }
        else if (v < 2 / 2.75) {
            v = 7.5625 * (v -= 1.5 / 2.75) * v + 0.75;
        }
        else if (v < 2.5 / 2.75) {
            v = 7.5625 * (v -= 2.25 / 2.75) * v + 0.9375;
        }
        else {
            v = 7.5625 * (v -= 2.625 / 2.75) * v + 0.984375;
        }
        if (reverse) {
            return (1 - v) * 0.5;
        }
        else {
            return v * 0.5 + 0.5;
        }
    }

    function Out$1(v) {
        if (v < 1 / 2.75) {
            return 7.5625 * v * v;
        }
        else if (v < 2 / 2.75) {
            return 7.5625 * (v -= 1.5 / 2.75) * v + 0.75;
        }
        else if (v < 2.5 / 2.75) {
            return 7.5625 * (v -= 2.25 / 2.75) * v + 0.9375;
        }
        else {
            return 7.5625 * (v -= 2.625 / 2.75) * v + 0.984375;
        }
    }

    var index$6 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        In: In$1,
        InOut: InOut$1,
        Out: Out$1
    });

    function In$2(v) {
        return 1 - Math.sqrt(1 - v * v);
    }

    function InOut$2(v) {
        if ((v *= 2) < 1) {
            return -0.5 * (Math.sqrt(1 - v * v) - 1);
        }
        else {
            return 0.5 * (Math.sqrt(1 - (v -= 2) * v) + 1);
        }
    }

    function Out$2(v) {
        return Math.sqrt(1 - (--v * v));
    }

    var index$7 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        In: In$2,
        InOut: InOut$2,
        Out: Out$2
    });

    function In$3(v) {
        return v * v * v;
    }

    function InOut$3(v) {
        if ((v *= 2) < 1) {
            return 0.5 * v * v * v;
        }
        else {
            return 0.5 * ((v -= 2) * v * v + 2);
        }
    }

    function Out$3(v) {
        return --v * v * v + 1;
    }

    var index$8 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        In: In$3,
        InOut: InOut$3,
        Out: Out$3
    });

    function In$4(v, amplitude = 0.1, period = 0.1) {
        if (v === 0) {
            return 0;
        }
        else if (v === 1) {
            return 1;
        }
        else {
            let s = period / 4;
            if (amplitude < 1) {
                amplitude = 1;
            }
            else {
                s = period * Math.asin(1 / amplitude) / (2 * Math.PI);
            }
            return -(amplitude * Math.pow(2, 10 * (v -= 1)) * Math.sin((v - s) * (2 * Math.PI) / period));
        }
    }

    function InOut$4(v, amplitude = 0.1, period = 0.1) {
        if (v === 0) {
            return 0;
        }
        else if (v === 1) {
            return 1;
        }
        else {
            let s = period / 4;
            if (amplitude < 1) {
                amplitude = 1;
            }
            else {
                s = period * Math.asin(1 / amplitude) / (2 * Math.PI);
            }
            if ((v *= 2) < 1) {
                return -0.5 * (amplitude * Math.pow(2, 10 * (v -= 1)) * Math.sin((v - s) * (2 * Math.PI) / period));
            }
            else {
                return amplitude * Math.pow(2, -10 * (v -= 1)) * Math.sin((v - s) * (2 * Math.PI) / period) * 0.5 + 1;
            }
        }
    }

    function Out$4(v, amplitude = 0.1, period = 0.1) {
        if (v === 0) {
            return 0;
        }
        else if (v === 1) {
            return 1;
        }
        else {
            let s = period / 4;
            if (amplitude < 1) {
                amplitude = 1;
            }
            else {
                s = period * Math.asin(1 / amplitude) / (2 * Math.PI);
            }
            return (amplitude * Math.pow(2, -10 * v) * Math.sin((v - s) * (2 * Math.PI) / period) + 1);
        }
    }

    var index$9 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        In: In$4,
        InOut: InOut$4,
        Out: Out$4
    });

    function In$5(v) {
        return Math.pow(2, 10 * (v - 1)) - 0.001;
    }

    function InOut$5(v) {
        if (v == 0) {
            return 0;
        }
        if (v == 1) {
            return 1;
        }
        if ((v *= 2) < 1) {
            return 0.5 * Math.pow(2, 10 * (v - 1));
        }
        else {
            return 0.5 * (2 - Math.pow(2, -10 * (v - 1)));
        }
    }

    function Out$5(v) {
        return 1 - Math.pow(2, -10 * v);
    }

    var index$a = /*#__PURE__*/Object.freeze({
        __proto__: null,
        In: In$5,
        InOut: InOut$5,
        Out: Out$5
    });

    function In$6(v) {
        return v * v;
    }

    function InOut$6(v) {
        if ((v *= 2) < 1) {
            return 0.5 * v * v;
        }
        else {
            return -0.5 * (--v * (v - 2) - 1);
        }
    }

    function Out$6(v) {
        return v * (2 - v);
    }

    var index$b = /*#__PURE__*/Object.freeze({
        __proto__: null,
        In: In$6,
        InOut: InOut$6,
        Out: Out$6
    });

    function In$7(v) {
        return v * v * v * v;
    }

    function InOut$7(v) {
        if ((v *= 2) < 1) {
            return 0.5 * v * v * v * v;
        }
        else {
            return -0.5 * ((v -= 2) * v * v * v - 2);
        }
    }

    function Out$7(v) {
        return -(--v * v * v * v - 1);
    }

    var index$c = /*#__PURE__*/Object.freeze({
        __proto__: null,
        In: In$7,
        InOut: InOut$7,
        Out: Out$7
    });

    function In$8(v) {
        return v * v * v * v * v;
    }

    function InOut$8(v) {
        if ((v *= 2) < 1) {
            return 0.5 * v * v * v * v * v;
        }
        else {
            return 0.5 * ((v -= 2) * v * v * v * v + 2);
        }
    }

    function Out$8(v) {
        return (v = v - 1) * v * v * v * v + 1;
    }

    var index$d = /*#__PURE__*/Object.freeze({
        __proto__: null,
        In: In$8,
        InOut: InOut$8,
        Out: Out$8
    });

    function In$9(v) {
        if (v === 0) {
            return 0;
        }
        else if (v === 1) {
            return 1;
        }
        else {
            return 1 - Math.cos(v * Math.PI / 2);
        }
    }

    function InOut$9(v) {
        if (v === 0) {
            return 0;
        }
        else if (v === 1) {
            return 1;
        }
        else {
            return 0.5 * (1 - Math.cos(Math.PI * v));
        }
    }

    function Out$9(v) {
        if (v === 0) {
            return 0;
        }
        else if (v === 1) {
            return 1;
        }
        else {
            return Math.sin(v * Math.PI / 2);
        }
    }

    var index$e = /*#__PURE__*/Object.freeze({
        __proto__: null,
        In: In$9,
        InOut: InOut$9,
        Out: Out$9
    });

    function Linear(v) {
        return v;
    }

    var Linear$1 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Linear: Linear
    });

    function Stepped(v, steps = 1) {
        if (v <= 0) {
            return 0;
        }
        else if (v >= 1) {
            return 1;
        }
        else {
            return (((steps * v) | 0) + 1) * (1 / steps);
        }
    }

    var Stepped$1 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Stepped: Stepped
    });

    const EaseMap = new Map([
        ['power0', Linear],
        ['power1', Out$6],
        ['power2', Out$3],
        ['power3', Out$7],
        ['power4', Out$8],
        ['linear', Linear],
        ['quad', Out$6],
        ['cubic', Out$3],
        ['quart', Out$7],
        ['quint', Out$8],
        ['sine', Out$9],
        ['expo', Out$5],
        ['circ', Out$2],
        ['elastic', Out$4],
        ['back', Out],
        ['bounce', Out$1],
        ['stepped', Stepped],
        ['quad.in', In$6],
        ['cubic.in', In$3],
        ['quart.in', In$7],
        ['quint.in', In$8],
        ['sine.in', In$9],
        ['expo.in', In$5],
        ['circ.in', In$2],
        ['elastic.in', In$4],
        ['back.in', In],
        ['bounce.in', In$1],
        ['quad.out', Out$6],
        ['cubic.out', Out$3],
        ['quart.out', Out$7],
        ['quint.out', Out$8],
        ['sine.out', Out$9],
        ['expo.out', Out$5],
        ['circ.out', Out$2],
        ['elastic.out', Out$4],
        ['back.out', Out],
        ['bounce.out', Out$1],
        ['quad.inout', InOut$6],
        ['cubic.inout', InOut$3],
        ['quart.inout', InOut$7],
        ['quint.inout', InOut$8],
        ['sine.inout', InOut$9],
        ['expo.inout', InOut$5],
        ['circ.inout', InOut$2],
        ['elastic.inout', InOut$4],
        ['back.inout', InOut],
        ['bounce.inout', InOut$1]
    ]);
    function GetEase(name) {
        name = name.toLowerCase();
        name = name.replace('ease', '');
        if (EaseMap.has(name)) {
            return EaseMap.get(name);
        }
        else {
            return Linear;
        }
    }

    var GetEase$1 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        GetEase: GetEase
    });

    var index$f = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Back: index$5,
        Bounce: index$6,
        Circular: index$7,
        Cubic: index$8,
        Elastic: index$9,
        Expo: index$a,
        GetEase: GetEase$1,
        Linear: Linear$1,
        Quadratic: index$b,
        Quartic: index$c,
        Quintic: index$d,
        Sine: index$e,
        Stepped: Stepped$1
    });

    function FuzzyCeil(value, epsilon = 0.0001) {
        return Math.ceil(value - epsilon);
    }

    function FuzzyFloor(value, epsilon = 0.0001) {
        return Math.floor(value + epsilon);
    }

    function FuzzyGreaterThan(a, b, epsilon = 0.0001) {
        return a > b - epsilon;
    }

    function FuzzyLessThan(a, b, epsilon = 0.0001) {
        return a < b + epsilon;
    }

    var index$g = /*#__PURE__*/Object.freeze({
        __proto__: null,
        FuzzyCeil: FuzzyCeil,
        FuzzyEqual: FuzzyEqual,
        FuzzyFloor: FuzzyFloor,
        FuzzyGreaterThan: FuzzyGreaterThan,
        FuzzyLessThan: FuzzyLessThan
    });

    function Factorial(value) {
        if (value === 0) {
            return 1;
        }
        let res = value;
        while (--value) {
            res *= value;
        }
        return res;
    }

    function Bernstein(n, i) {
        return Factorial(n) / Factorial(i) / Factorial(n - i);
    }

    function BezierInterpolation(v, k) {
        let b = 0;
        const n = v.length - 1;
        for (let i = 0; i <= n; i++) {
            b += Math.pow(1 - k, n - i) * Math.pow(k, i) * v[i] * Bernstein(n, i);
        }
        return b;
    }

    function CatmullRomInterpolation(v, k) {
        const m = v.length - 1;
        let f = m * k;
        let i = Math.floor(f);
        if (v[0] === v[m]) {
            if (k < 0) {
                i = Math.floor(f = m * (1 + k));
            }
            return CatmullRom(f - i, v[(i - 1 + m) % m], v[i], v[(i + 1) % m], v[(i + 2) % m]);
        }
        else {
            if (k < 0) {
                return v[0] - (CatmullRom(-f, v[0], v[0], v[1], v[1]) - v[0]);
            }
            if (k > 1) {
                return v[m] - (CatmullRom(f - m, v[m], v[m], v[m - 1], v[m - 1]) - v[m]);
            }
            return CatmullRom(f - i, v[i ? i - 1 : 0], v[i], v[m < i + 1 ? m : i + 1], v[m < i + 2 ? m : i + 2]);
        }
    }

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

    function Linear$2(p0, p1, t) {
        return (p1 - p0) * t + p0;
    }

    function LinearInterpolation(v, k) {
        const m = v.length - 1;
        const f = m * k;
        const i = Math.floor(f);
        if (k < 0) {
            return Linear$2(v[0], v[1], f);
        }
        else if (k > 1) {
            return Linear$2(v[m], v[m - 1], m - f);
        }
        else {
            return Linear$2(v[i], v[(i + 1 > m) ? m : i + 1], f - i);
        }
    }

    function P0$1(t, p) {
        const k = 1 - t;
        return k * k * p;
    }
    function P1$1(t, p) {
        return 2 * (1 - t) * t * p;
    }
    function P2$1(t, p) {
        return t * t * p;
    }
    function QuadraticBezierInterpolation(t, p0, p1, p2) {
        return P0$1(t, p0) + P1$1(t, p1) + P2$1(t, p2);
    }

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

    function SmoothStepInterpolation(t, min, max) {
        return min + (max - min) * SmoothStep(t, 0, 1);
    }

    function SmootherStep(x, min, max) {
        x = Math.max(0, Math.min(1, (x - min) / (max - min)));
        return x * x * x * (x * (x * 6 - 15) + 10);
    }

    function SmootherStepInterpolation(t, min, max) {
        return min + (max - min) * SmootherStep(t, 0, 1);
    }

    var index$h = /*#__PURE__*/Object.freeze({
        __proto__: null,
        BezierInterpolation: BezierInterpolation,
        CatmullRomInterpolation: CatmullRomInterpolation,
        CubicBezierInterpolation: CubicBezierInterpolation,
        LinearInterpolation: LinearInterpolation,
        QuadraticBezierInterpolation: QuadraticBezierInterpolation,
        SmoothStepInterpolation: SmoothStepInterpolation,
        SmootherStepInterpolation: SmootherStepInterpolation
    });

    function Add$3(a, b, out = new Matrix2D()) {
        return out.set(a.a + b.a, a.b + b.b, a.c + b.c, a.d + b.d, a.tx + b.tx, a.ty + b.ty);
    }

    function Append(mat1, mat2, out = new Matrix2D()) {
        const { a: a1, b: b1, c: c1, d: d1, tx: tx1, ty: ty1 } = mat1;
        const { a: a2, b: b2, c: c2, d: d2, tx: tx2, ty: ty2 } = mat2;
        return out.set((a2 * a1) + (b2 * c1), (a2 * b1) + (b2 * d1), (c2 * a1) + (d2 * c1), (c2 * b1) + (d2 * d1), (tx2 * a1) + (ty2 * c1) + tx1, (tx2 * b1) + (ty2 * d1) + ty1);
    }

    function Clone$3(src) {
        return new Matrix2D(src.a, src.b, src.c, src.d, src.tx, src.ty);
    }

    function CopyFrom$3(src, target) {
        const { a, b, c, d, tx, ty } = src;
        return target.set(a, b, c, d, tx, ty);
    }

    function CopyToContext(src, context) {
        const { a, b, c, d, tx, ty } = src;
        context.transform(a, b, c, d, tx, ty);
        return context;
    }

    function Determinant$1(src) {
        const { a, b, c, d } = src;
        return (a * d) - (b * c);
    }

    function Equals$3(a, b, epsilon = 0.000001) {
        const { a: a0, b: b0, c: c0, d: d0, tx: tx0, ty: ty0 } = a;
        const { a: a1, b: b1, c: c1, d: d1, tx: tx1, ty: ty1 } = b;
        return (Math.abs(a0 - a1) <= epsilon * Math.max(1, Math.abs(a0), Math.abs(a1)) &&
            Math.abs(b0 - b1) <= epsilon * Math.max(1, Math.abs(b0), Math.abs(b1)) &&
            Math.abs(c0 - c1) <= epsilon * Math.max(1, Math.abs(c0), Math.abs(c1)) &&
            Math.abs(d0 - d1) <= epsilon * Math.max(1, Math.abs(d0), Math.abs(d1)) &&
            Math.abs(tx0 - tx1) <= epsilon * Math.max(1, Math.abs(tx0), Math.abs(tx1)) &&
            Math.abs(ty0 - ty1) <= epsilon * Math.max(1, Math.abs(ty0), Math.abs(ty1)));
    }

    function ExactEquals(a, b) {
        return (a.a === b.a &&
            a.b === b.b &&
            a.c === b.c &&
            a.d === b.d &&
            a.tx === b.tx &&
            a.ty === b.ty);
    }

    function Frobenius$1(src) {
        return (Math.hypot(src.a, src.b, src.c, src.d, src.tx, src.ty, 1));
    }

    function Rotate$1(target, angle, out = new Matrix2D()) {
        const { a, b, c, d, tx, ty } = target;
        const sin = Math.sin(angle);
        const cos = Math.cos(angle);
        return out.set((a * cos) + (c * sin), (b * cos) + (d * sin), (a * -sin) + (c * cos), (b * -sin) + (d * cos), tx, ty);
    }

    function FromRotation$1(angle) {
        const target = new Matrix2D();
        return Rotate$1(target, angle, target);
    }

    function Scale$3(target, scaleX, scaleY, out = new Matrix2D()) {
        const { a, b, c, d, tx, ty } = target;
        return out.set(a * scaleX, b * scaleX, c * scaleY, d * scaleY, tx, ty);
    }

    function FromScaling$1(scaleX, scaleY = scaleX) {
        const target = new Matrix2D();
        return Scale$3(target, scaleX, scaleY, target);
    }

    function Translate$1(target, x, y, out = new Matrix2D()) {
        const { a, b, c, d, tx, ty } = target;
        out.tx = (a * x) + (c * y) + tx;
        out.ty = (b * x) + (d * y) + ty;
        return out;
    }

    function FromTranslation$1(x, y) {
        const target = new Matrix2D();
        return Translate$1(target, x, y, target);
    }

    function GlobalToLocal(mat, x, y, out = new Vec2()) {
        const { a, b, c, d, tx, ty } = mat;
        const id = 1 / ((a * d) + (c * -b));
        return out.set((d * id * x) + (-c * id * y) + (((ty * c) - (tx * d)) * id), (a * id * y) + (-b * id * x) + (((-ty * a) + (tx * b)) * id));
    }

    function ITRS(target, x, y, angle, scaleX, scaleY) {
        if (angle === 0) {
            return target.set(1, 0, 0, 1, x, y);
        }
        else {
            const sin = Math.sin(angle);
            const cos = Math.cos(angle);
            return target.set(cos * scaleX, sin * scaleX, -sin * scaleY, cos * scaleY, x, y);
        }
    }

    function ITRSS(target, x, y, angle = 0, scaleX = 1, scaleY = 1, skewX = 0, skewY = 0) {
        if (angle === 0) {
            return target.set(1, 0, 0, 1, x, y);
        }
        else {
            return target.set(Math.cos(angle + skewY) * scaleX, Math.sin(angle + skewY) * scaleX, -Math.sin(angle - skewX) * scaleY, Math.cos(angle - skewX) * scaleY, x, y);
        }
    }

    function Identity$1() {
        return new Matrix2D();
    }

    function Invert$2(target, out = new Matrix2D()) {
        const { a, b, c, d, tx, ty } = target;
        let determinant = a * d - b * c;
        if (determinant) {
            determinant = 1 / determinant;
            out.set(d * determinant, -b * determinant, -c * determinant, a * determinant, (c * ty - d * tx) * determinant, (b * tx - a * ty) * determinant);
        }
        return out;
    }

    function LocalToGlobal(mat, x, y, out = new Vec2()) {
        const { a, b, c, d, tx, ty } = mat;
        return out.set((a * x) + (c * y) + tx, (b * x) + (d * y) + ty);
    }

    function Multiply$3(target, src, out = new Matrix2D()) {
        const { a: a0, b: b0, c: c0, d: d0, tx: tx0, ty: ty0 } = target;
        const { a: a1, b: b1, c: c1, d: d1, tx: tx1, ty: ty1 } = src;
        return out.set(a0 * a1 + c0 * b1, b0 * a1 + d0 * b1, a0 * c1 + c0 * d1, b0 * c1 + d0 * d1, a0 * tx1 + c0 * ty1 + tx0, b0 * tx1 + d0 * ty1 + ty0);
    }

    function MultiplyScalar$1(target, scalar, out = new Matrix2D()) {
        const { a, b, c, d, tx, ty } = target;
        return out.set(a * scalar, b * scalar, c * scalar, d * scalar, tx * scalar, ty * scalar);
    }

    function MultiplyScalarAndAdd$1(target, src, scalar, out = new Matrix2D()) {
        const { a, b, c, d, tx, ty } = src;
        const { a: ta, b: tb, c: tc, d: td, tx: ttx, ty: tty } = target;
        return out.set(ta + (a * scalar), tb + (b * scalar), tc + (c * scalar), td + (d * scalar), ttx + (tx * scalar), tty + (ty * scalar));
    }

    function SetToContext(src, context) {
        const { a, b, c, d, tx, ty } = src;
        context.setTransform(a, b, c, d, tx, ty);
        return context;
    }

    function Skew(target, angleX, angleY, out = new Matrix2D()) {
        const { a, b, c, d, tx, ty } = target;
        return out.set(a, b + Math.tan(angleX), c + Math.tan(angleY), d, tx, ty);
    }

    function Subtract$3(a, b, out = new Matrix2D()) {
        return out.set(a.a - b.a, a.b - b.b, a.c - b.c, a.d - b.d, a.tx - b.tx, a.ty - b.ty);
    }

    function Zero$3(target) {
        return target.set(0, 0, 0, 0, 0, 0);
    }

    var index$i = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Add: Add$3,
        Append: Append,
        Clone: Clone$3,
        CopyFrom: CopyFrom$3,
        CopyToContext: CopyToContext,
        Determinant: Determinant$1,
        Equals: Equals$3,
        ExactEquals: ExactEquals,
        Frobenius: Frobenius$1,
        FromRotation: FromRotation$1,
        FromScaling: FromScaling$1,
        FromTranslation: FromTranslation$1,
        GlobalToLocal: GlobalToLocal,
        Identity: Identity$1,
        Invert: Invert$2,
        ITRS: ITRS,
        ITRSS: ITRSS,
        LocalToGlobal: LocalToGlobal,
        Matrix2D: Matrix2D,
        Multiply: Multiply$3,
        MultiplyScalar: MultiplyScalar$1,
        MultiplyScalarAndAdd: MultiplyScalarAndAdd$1,
        Rotate: Rotate$1,
        Scale: Scale$3,
        SetToContext: SetToContext,
        Skew: Skew,
        Subtract: Subtract$3,
        Translate: Translate$1,
        Zero: Zero$3
    });

    function GetPowerOfTwo(value) {
        const index = Math.log(value) / 0.6931471805599453;
        return (1 << Math.ceil(index));
    }

    function IsSizePowerOfTwo(width, height) {
        if (width < 1 || height < 1) {
            return false;
        }
        return ((width & (width - 1)) === 0) && ((height & (height - 1)) === 0);
    }

    function IsValuePowerOfTwo(value) {
        return (value > 0 && (value & (value - 1)) === 0);
    }

    var index$j = /*#__PURE__*/Object.freeze({
        __proto__: null,
        GetPowerOfTwo: GetPowerOfTwo,
        IsSizePowerOfTwo: IsSizePowerOfTwo,
        IsValuePowerOfTwo: IsValuePowerOfTwo
    });

    function SnapCeil(value, gap, start = 0, divide = false) {
        if (gap === 0) {
            return value;
        }
        value -= start;
        value = gap * Math.ceil(value / gap);
        return (divide) ? (start + value) / gap : start + value;
    }

    function SnapFloor(value, gap, start = 0, divide = false) {
        if (gap === 0) {
            return value;
        }
        value -= start;
        value = gap * Math.floor(value / gap);
        return (divide) ? (start + value) / gap : start + value;
    }

    function SnapTo(value, gap, start = 0, divide = false) {
        if (gap === 0) {
            return value;
        }
        value -= start;
        value = gap * Math.round(value / gap);
        return (divide) ? (start + value) / gap : start + value;
    }

    var index$k = /*#__PURE__*/Object.freeze({
        __proto__: null,
        SnapCeil: SnapCeil,
        SnapFloor: SnapFloor,
        SnapTo: SnapTo
    });

    function Abs$1(a, out = new Vec2()) {
        return out.set(Math.abs(a.x), Math.abs(a.y));
    }

    function Add$4(a, b, out = new Vec2()) {
        return out.set(a.x + b.x, a.y + b.y);
    }

    function AddScalar$2(a, scalar, out = new Vec2()) {
        return out.set(a.x + scalar, a.y + scalar);
    }

    function Angle$1(a, b) {
        return Math.atan2(b.y - a.y, b.x - a.x);
    }

    function AngleY(a, b) {
        return Math.atan2(b.x - a.x, b.y - a.y);
    }

    function Bezier$2(a, b, c, d, t, out = new Vec2()) {
        return out.set(Bezier(t, a.x, b.x, c.x, d.x), Bezier(t, a.y, b.y, c.y, d.y));
    }

    function CatmullRom$2(p1, p2, p3, p4, t, out = new Vec2()) {
        return out.set(CatmullRom(t, p1.x, p2.x, p3.x, p4.x), CatmullRom(t, p1.y, p2.y, p3.y, p4.y));
    }

    function Ceil$1(a, out = new Vec2()) {
        return out.set(Math.ceil(a.x), Math.ceil(a.y));
    }

    function Scale$4(a, scalar, out = new Vec2()) {
        return out.set(a.x * scalar, a.y * scalar);
    }

    function Center$1(a, b, out = new Vec2()) {
        Add$4(a, b, out);
        return Scale$4(out, 0.5, out);
    }

    function ChebyshevDistance(a, b) {
        return Math.max(Math.abs(a.x - b.x), Math.abs(a.y - b.y));
    }

    function Clamp$2(a, min, max, out = new Vec2()) {
        return out.set(Clamp(a.x, min.x, max.x), Clamp(a.y, min.y, max.y));
    }

    function ClampScalar$1(a, min, max, out = new Vec2()) {
        return out.set(Clamp(a.x, min, max), Clamp(a.y, min, max));
    }

    function Clone$4(source) {
        return new Vec2(source.x, source.y);
    }

    function CopyFrom$4(source, dest) {
        return dest.set(source.x, source.y);
    }

    function Cross$1(a, b) {
        return a.x * b.y - a.y * b.x;
    }

    function DistanceSquared$1(a, b) {
        const x = a.x - b.x;
        const y = a.y - b.y;
        return (x * x) + (y * y);
    }

    function Distance$1(a, b) {
        return Math.sqrt(DistanceSquared$1(a, b));
    }

    function Dot$2(a, b) {
        return a.x * b.x + a.y * b.y;
    }

    function MultiplyByFloats$2(a, x, y, out = new Vec2()) {
        return out.set(a.x * x, a.y * y);
    }

    function Subtract$4(a, b, out = new Vec2()) {
        return out.set(a.x - b.x, a.y - b.y);
    }

    function DistanceFromSegment(p, a, b) {
        const d = DistanceSquared$1(a, b);
        if (d === 0) {
            return Distance$1(p, a);
        }
        const v = Subtract$4(b, a);
        Subtract$4(p, a, p);
        const t = Math.max(0, Math.min(1, Dot$2(p, v) / 12));
        const proj = Add$4(a, MultiplyByFloats$2(v, t, t, v));
        return Distance$1(p, proj);
    }

    function DistancePower(a, b, pow = 2) {
        return Math.sqrt(Math.pow(b.x - a.x, pow) + Math.pow(b.y - a.y, pow));
    }

    function Divide$1(a, b, out = new Vec2()) {
        return out.set(a.x / b.x, a.y / b.y);
    }

    function DivideScalar$1(a, scalar, out = new Vec2()) {
        return out.set(a.x / scalar, a.y / scalar);
    }

    function Equals$4(a, b) {
        return a.x === b.x && a.y === b.y;
    }

    function Floor$1(a, out = new Vec2()) {
        return out.set(Math.floor(a.x), Math.floor(a.y));
    }

    function Fract$1(a, out = new Vec2()) {
        return out.set(a.x - Math.floor(a.x), a.y - Math.floor(a.y));
    }

    function FromGridIndex(index, width, height, out = new Vec2()) {
        let x = 0;
        let y = 0;
        const total = width * height;
        if (index > 0 && index <= total) {
            if (index > width - 1) {
                y = Math.floor(index / width);
                x = index - (y * width);
            }
            else {
                x = index;
            }
            out.set(x, y);
        }
        return out;
    }

    function FromTransform(x, y, positionX, positionY, rotation, scaleX, scaleY, out = new Vec2()) {
        const sin = Math.sin(rotation);
        const cos = Math.cos(rotation);
        const a = cos * scaleX;
        const b = sin * scaleX;
        const c = -sin * scaleY;
        const d = cos * scaleY;
        const id = 1 / ((a * d) + (c * -b));
        return out.set((d * id * x) + (-c * id * y) + (((positionY * c) - (positionX * d)) * id), (a * id * y) + (-b * id * x) + (((-positionY * a) + (positionX * b)) * id));
    }

    function FuzzyEquals$2(a, b, epsilon = 0.0001) {
        return FuzzyEqual(a.x, b.x, epsilon) && FuzzyEqual(a.y, b.y, epsilon);
    }

    function Hermite$3(a, b, c, d, t, out = new Vec2()) {
        return out.set(Hermite(t, a.x, b.x, c.x, d.x), Hermite(t, a.y, b.y, c.y, d.y));
    }

    function Inverse$1(a, out = new Vec2()) {
        return out.set(1 / a.x, 1 / a.y);
    }

    function Length$2(a) {
        return Math.sqrt(a.x * a.x + a.y * a.y);
    }

    function LengthSquared$2(a) {
        return (a.x * a.x + a.y * a.y);
    }

    function Lerp$1(a, b, t, out = new Vec2()) {
        const x = a.x;
        const y = a.y;
        return out.set(x + t * (b.x - x), y + t * (b.y - y));
    }

    function ManhattanDistance$1(a, b) {
        return Math.abs(a.x - b.x) + Math.abs(a.y - b.y);
    }

    function ManhattanLength$1(a) {
        return Math.abs(a.x) + Math.abs(a.y);
    }

    function Max$1(a, b, out = new Vec2()) {
        const { x: ax, y: ay } = a;
        const { x: bx, y: by } = b;
        return out.set(Math.max(ax, bx), Math.max(ay, by));
    }

    function Min$1(a, b, out = new Vec2()) {
        const { x: ax, y: ay } = a;
        const { x: bx, y: by } = b;
        return out.set(Math.min(ax, bx), Math.min(ay, by));
    }

    function Multiply$4(a, b, out = new Vec2()) {
        return out.set(a.x * b.x, a.y * b.y);
    }

    function Negate$1(a, out = new Vec2()) {
        return out.set(-a.x, -a.y);
    }

    function Normalize$2(a, out = new Vec2()) {
        return DivideScalar$1(a, Length$2(a) || 1, out);
    }

    function One$1() {
        return new Vec2(1, 1);
    }

    function PerpDot(a, b) {
        return (a.x * b.y) - (a.y * b.x);
    }

    function Random$1(a, scale = 1, out = new Vec2()) {
        const r = Math.random() * 2 * Math.PI;
        return out.set(Math.cos(r) * scale, Math.sin(r) * scale);
    }

    function Rotate$2(a, origin, angle, out = new Vec2()) {
        const s = Math.sin(angle);
        const c = Math.cos(angle);
        const x = a.x - origin.x;
        const y = a.y - origin.y;
        return out.set(x * c - y * s + origin.x, x * s + y * c + origin.y);
    }

    function Round$1(a, out = new Vec2()) {
        return out.set(Math.round(a.x), Math.round(a.y));
    }

    function RoundToZero$1(a, out = new Vec2()) {
        return out.set((a.x < 0) ? Math.ceil(a.x) : Math.floor(a.x), (a.y < 0) ? Math.ceil(a.y) : Math.floor(a.y));
    }

    function ScaleAndAdd$2(a, b, scalar, out = new Vec2()) {
        return out.set(a.x + b.x * scalar, a.y + b.y * scalar);
    }

    function SetLength$1(a, length, out = new Vec2()) {
        Normalize$2(a, out);
        return Scale$4(out, length, out);
    }

    function SubtractScalar$2(a, scalar, out = new Vec2()) {
        return out.set(a.x - scalar, a.y - scalar);
    }

    function Transform(v, positionX, positionY, rotation, scaleX, scaleY, out = new Vec2()) {
        return FromTransform(v.x, v.y, positionX, positionY, rotation, scaleX, scaleY, out);
    }

    function TransformMat2d(v, m, out = new Vec2()) {
        const { a, b, c, d, tx, ty } = m;
        return out.set(a * v.x + c * v.y + tx, b * v.x + d * v.y + ty);
    }

    function TransformMat4$1(v, m, out = new Vec2()) {
        const data = m.data;
        return out.set(data[0] * v.x + data[4] * v.y + data[12], data[1] * v.x + data[5] * v.y + data[13]);
    }

    function Zero$4() {
        return new Vec2(0, 0);
    }

    var index$l = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Abs: Abs$1,
        Add: Add$4,
        AddScalar: AddScalar$2,
        Angle: Angle$1,
        AngleY: AngleY,
        Bezier: Bezier$2,
        CatmullRom: CatmullRom$2,
        Ceil: Ceil$1,
        Center: Center$1,
        ChebyshevDistance: ChebyshevDistance,
        Clamp: Clamp$2,
        ClampScalar: ClampScalar$1,
        Clone: Clone$4,
        CopyFrom: CopyFrom$4,
        Cross: Cross$1,
        Distance: Distance$1,
        DistanceFromSegment: DistanceFromSegment,
        DistancePower: DistancePower,
        DistanceSquared: DistanceSquared$1,
        Divide: Divide$1,
        DivideScalar: DivideScalar$1,
        Dot: Dot$2,
        Equals: Equals$4,
        Floor: Floor$1,
        Fract: Fract$1,
        FromGridIndex: FromGridIndex,
        FromTransform: FromTransform,
        FuzzyEquals: FuzzyEquals$2,
        Hermite: Hermite$3,
        Inverse: Inverse$1,
        Length: Length$2,
        LengthSquared: LengthSquared$2,
        Lerp: Lerp$1,
        ManhattanDistance: ManhattanDistance$1,
        ManhattanLength: ManhattanLength$1,
        Max: Max$1,
        Min: Min$1,
        Multiply: Multiply$4,
        MultiplyByFloats: MultiplyByFloats$2,
        Negate: Negate$1,
        Normalize: Normalize$2,
        One: One$1,
        PerpDot: PerpDot,
        Random: Random$1,
        Rotate: Rotate$2,
        Round: Round$1,
        RoundToZero: RoundToZero$1,
        Scale: Scale$4,
        ScaleAndAdd: ScaleAndAdd$2,
        SetLength: SetLength$1,
        Subtract: Subtract$4,
        SubtractScalar: SubtractScalar$2,
        Transform: Transform,
        TransformMat2d: TransformMat2d,
        TransformMat4: TransformMat4$1,
        Vec2: Vec2,
        Vec2Callback: Vec2Callback,
        Zero: Zero$4
    });

    class Vec4 {
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
        toString() {
            const { x, y, z, w } = this;
            return `{ x=${x}, y=${y}, z=${z}, w=${w} }`;
        }
    }

    function Abs$2(a, out = new Vec4()) {
        return out.set(Math.abs(a.x), Math.abs(a.y), Math.abs(a.z), Math.abs(a.w));
    }

    function Add$5(a, b, out = new Vec4()) {
        return out.set(a.x + b.x, a.y + b.y, a.z + b.z, a.w + b.w);
    }

    function AddScalar$3(a, scalar, out = new Vec4()) {
        return out.set(a.x + scalar, a.y + scalar, a.z + scalar, a.w + scalar);
    }

    function Bezier$3(a, b, c, d, t, out = new Vec4()) {
        return out.set(Bezier(t, a.x, b.x, c.x, d.x), Bezier(t, a.y, b.y, c.y, d.y), Bezier(t, a.z, b.z, c.z, d.z), Bezier(t, a.w, b.w, c.w, d.w));
    }

    function CatmullRom$3(p1, p2, p3, p4, t, out = new Vec4()) {
        return out.set(CatmullRom(t, p1.x, p2.x, p3.x, p4.x), CatmullRom(t, p1.y, p2.y, p3.y, p4.y), CatmullRom(t, p1.z, p2.z, p3.z, p4.z), CatmullRom(t, p1.w, p2.w, p3.w, p4.w));
    }

    function Ceil$2(a, out = new Vec4()) {
        const { x, y, z, w } = a;
        return out.set(Math.ceil(x), Math.ceil(y), Math.ceil(z), Math.ceil(w));
    }

    function Scale$5(a, scalar, out = new Vec4()) {
        const { x, y, z, w } = a;
        return out.set(x * scalar, y * scalar, z * scalar, w * scalar);
    }

    function Center$2(a, b, out = new Vec4()) {
        Add$5(a, b, out);
        return Scale$5(out, 0.5, out);
    }

    function Clamp$3(a, min, max, out = new Vec4()) {
        return out.set(Clamp(a.x, min.x, max.x), Clamp(a.y, min.y, max.y), Clamp(a.z, min.z, max.z), Clamp(a.w, min.w, max.w));
    }

    function DivideScalar$2(a, scalar, out = new Vec4()) {
        const { x, y, z, w } = a;
        return out.set(x / scalar, y / scalar, z / scalar, w / scalar);
    }

    function Length$3(a) {
        const { x, y, z, w } = a;
        return Math.sqrt(x * x + y * y + z * z + w * w);
    }

    function ClampLength$1(a, min, max, out = new Vec4()) {
        const length = Length$3(a);
        DivideScalar$2(a, length || 1, out);
        return Scale$5(out, Clamp(min, max, length), out);
    }

    function ClampScalar$2(a, min, max, out = new Vec4()) {
        return out.set(Clamp(a.x, min, max), Clamp(a.y, min, max), Clamp(a.z, min, max), Clamp(a.w, min, max));
    }

    function Clone$5(source) {
        const { x, y, z, w } = source;
        return new Vec4(x, y, z, w);
    }

    function CopyFrom$5(source, dest) {
        const { x, y, z, w } = source;
        return dest.set(x, y, z, w);
    }

    function Cross$2(u, v, w, out = new Vec4()) {
        const { x: ux, y: uy, z: uz, w: uw } = u;
        const { x: vx, y: vy, z: vz, w: vw } = v;
        const { x: wx, y: wy, z: wz, w: ww } = w;
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

    function DistanceSquared$2(a, b) {
        const x = a.x - b.x;
        const y = a.y - b.y;
        const z = a.z - b.z;
        const w = a.w - b.w;
        return (x * x) + (y * y) + (z * z) + (w * w);
    }

    function Distance$2(a, b) {
        return Math.sqrt(DistanceSquared$2(a, b));
    }

    function Divide$2(a, b, out = new Vec4()) {
        return out.set(a.x / b.x, a.y / b.y, a.z / b.z, a.w / b.w);
    }

    function Dot$3(a, b) {
        return a.x * b.x + a.y * b.y + a.z * b.z + a.w * b.w;
    }

    function Equals$5(a, b) {
        return a.x === b.x && a.y === b.y && a.z === b.z && a.w === b.w;
    }

    function Floor$2(a, out = new Vec4()) {
        const { x, y, z, w } = a;
        return out.set(Math.floor(x), Math.floor(y), Math.floor(z), Math.floor(w));
    }

    function Fract$2(a, out = new Vec4()) {
        return out.set(a.x - Math.floor(a.x), a.y - Math.floor(a.y), a.z - Math.floor(a.z), a.w - Math.floor(a.w));
    }

    function FuzzyEquals$3(a, b, epsilon = 0.0001) {
        return (FuzzyEqual(a.x, b.x, epsilon) &&
            FuzzyEqual(a.y, b.y, epsilon) &&
            FuzzyEqual(a.z, b.z, epsilon) &&
            FuzzyEqual(a.w, b.w, epsilon));
    }

    function Hermite$4(a, b, c, d, t, out = new Vec4()) {
        return out.set(Hermite(t, a.x, b.x, c.x, d.x), Hermite(t, a.y, b.y, c.y, d.y), Hermite(t, a.z, b.z, c.z, d.z), Hermite(t, a.w, b.w, c.w, d.w));
    }

    function LengthSquared$3(a) {
        const { x, y, z, w } = a;
        return x * x + y * y + z * z + w * w;
    }

    function Lerp$2(a, b, t, out = new Vec4()) {
        const { x, y, z, w } = a;
        return out.set(x + t * (b.x - x), y + t * (b.y - y), z + t * (b.z - z), w + t * (b.w - w));
    }

    function ManhattanDistance$2(a, b) {
        return Math.abs(a.x - b.x) + Math.abs(a.y - b.y) + Math.abs(a.z - b.z) + Math.abs(a.w - b.w);
    }

    function ManhattanLength$2(a) {
        const { x, y, z, w } = a;
        return Math.abs(x) + Math.abs(y) + Math.abs(z) + Math.abs(w);
    }

    function Max$2(a, b, out = new Vec4()) {
        const { x: ax, y: ay, z: az, w: aw } = a;
        const { x: bx, y: by, z: bz, w: bw } = b;
        return out.set(Math.max(ax, bx), Math.max(ay, by), Math.max(az, bz), Math.max(aw, bw));
    }

    function Min$2(a, b, out = new Vec4()) {
        const { x: ax, y: ay, z: az, w: aw } = a;
        const { x: bx, y: by, z: bz, w: bw } = b;
        return out.set(Math.min(ax, bx), Math.min(ay, by), Math.min(az, bz), Math.min(aw, bw));
    }

    function Multiply$5(a, b, out = new Vec4()) {
        return out.set(a.x * b.x, a.y * b.y, a.z * b.z, a.w * b.w);
    }

    function MultiplyByFloats$3(a, x, y, z, w, out = new Vec4()) {
        return out.set(a.x * x, a.y * y, a.z * z, a.w * w);
    }

    function Negate$2(a, out = new Vec4()) {
        return out.set(-a.x, -a.y, -a.z, -a.w);
    }

    function Normalize$3(a, out = new Vec4()) {
        return DivideScalar$2(a, Length$3(a) || 1, out);
    }

    function One$2() {
        return new Vec4(1, 1, 1, 1);
    }

    class Vec4Callback extends Vec4 {
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

    class RGBACallback extends Vec4Callback {
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
            const { x, y, z, w } = this;
            return `[ r=${x}, g=${y}, b=${z}, a=${w} ]`;
        }
    }

    function Random$2(a, scale = 1, out = new Vec4()) {
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

    function Round$2(a, out = new Vec4()) {
        const { x, y, z, w } = a;
        return out.set(Math.round(x), Math.round(y), Math.round(z), Math.round(w));
    }

    function RoundToZero$2(a, out = new Vec4()) {
        const { x, y, z, w } = a;
        return out.set((x < 0) ? Math.ceil(x) : Math.floor(x), (y < 0) ? Math.ceil(y) : Math.floor(y), (z < 0) ? Math.ceil(z) : Math.floor(z), (w < 0) ? Math.ceil(w) : Math.floor(w));
    }

    function ScaleAndAdd$3(a, b, scalar, out = new Vec4()) {
        return out.set(a.x + b.x * scalar, a.y + b.y * scalar, a.z + b.z * scalar, a.w + b.w * scalar);
    }

    function SetLength$2(a, length, out = new Vec4()) {
        Normalize$3(a, out);
        return Scale$5(out, length, out);
    }

    function Subtract$5(a, b, out = new Vec4()) {
        return out.set(a.x - b.x, a.y - b.y, a.z - b.z, a.w - b.w);
    }

    function SubtractScalar$3(a, scalar, out = new Vec4()) {
        const { x, y, z, w } = a;
        return out.set(x - scalar, y - scalar, z - scalar, w - scalar);
    }

    function TransformMat4$2(a, m, out = new Vec4()) {
        const [m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33] = m.data;
        const { x, y, z, w } = a;
        return out.set(m00 * x + m10 * y + m20 * z + m30 * w, m01 * x + m11 * y + m21 * z + m31 * w, m02 * x + m12 * y + m22 * z + m32 * w, m03 * x + m13 * y + m23 * z + m33 * w);
    }

    function Zero$5() {
        return new Vec4(0, 0, 0, 0);
    }

    var index$m = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Abs: Abs$2,
        Add: Add$5,
        AddScalar: AddScalar$3,
        Bezier: Bezier$3,
        CatmullRom: CatmullRom$3,
        Ceil: Ceil$2,
        Center: Center$2,
        Clamp: Clamp$3,
        ClampLength: ClampLength$1,
        ClampScalar: ClampScalar$2,
        Clone: Clone$5,
        CopyFrom: CopyFrom$5,
        Cross: Cross$2,
        Distance: Distance$2,
        DistanceSquared: DistanceSquared$2,
        Divide: Divide$2,
        DivideScalar: DivideScalar$2,
        Dot: Dot$3,
        Equals: Equals$5,
        Floor: Floor$2,
        Fract: Fract$2,
        FuzzyEquals: FuzzyEquals$3,
        Hermite: Hermite$4,
        Length: Length$3,
        LengthSquared: LengthSquared$3,
        Lerp: Lerp$2,
        ManhattanDistance: ManhattanDistance$2,
        ManhattanLength: ManhattanLength$2,
        Max: Max$2,
        Min: Min$2,
        Multiply: Multiply$5,
        MultiplyByFloats: MultiplyByFloats$3,
        Negate: Negate$2,
        Normalize: Normalize$3,
        One: One$2,
        RGBACallback: RGBACallback,
        Random: Random$2,
        Round: Round$2,
        RoundToZero: RoundToZero$2,
        Scale: Scale$5,
        ScaleAndAdd: ScaleAndAdd$3,
        SetLength: SetLength$2,
        Subtract: Subtract$5,
        SubtractScalar: SubtractScalar$3,
        TransformMat4: TransformMat4$2,
        Vec4: Vec4,
        Vec4Callback: Vec4Callback,
        Zero: Zero$5
    });

    function Average(values) {
        let sum = 0;
        for (let i = 0; i < values.length; i++) {
            sum += (+values[i]);
        }
        return sum / values.length;
    }

    function Between(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    function CeilTo(value, place = 0, base = 10) {
        const p = Math.pow(base, -place);
        return Math.ceil(value * p) / p;
    }

    function DegToRad(degrees) {
        return degrees * MATH_CONST.DEG_TO_RAD;
    }

    function Difference(a, b) {
        return Math.abs(a - b);
    }

    function FloatBetween(min, max) {
        return Math.random() * (max - min) + min;
    }

    function FloorTo(value, place = 0, base = 10) {
        const p = Math.pow(base, -place);
        return Math.floor(value * p) / p;
    }

    function FromPercent(percent, min, max) {
        percent = Clamp(percent, 0, 1);
        return (max - min) * percent;
    }

    function GetSpeed(distance, time) {
        return (distance / time) / 1000;
    }

    function MaxAdd(value, amount, max) {
        return Math.min(value + amount, max);
    }

    function MinSub(value, amount, min) {
        return Math.max(value - amount, min);
    }

    function Percent(value, min, max, upperMax) {
        if (max === undefined) {
            max = min + 1;
        }
        let percentage = (value - min) / (max - min);
        if (percentage > 1) {
            if (upperMax !== undefined) {
                percentage = ((upperMax - value)) / (upperMax - max);
                if (percentage < 0) {
                    percentage = 0;
                }
            }
            else {
                percentage = 1;
            }
        }
        else if (percentage < 0) {
            percentage = 0;
        }
        return percentage;
    }

    function RadToDeg(radians) {
        return radians * MATH_CONST.RAD_TO_DEG;
    }

    function RoundTo(value, place = 0, base = 10) {
        const p = Math.pow(base, -place);
        return Math.round(value * p) / p;
    }

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

    function Within(a, b, tolerance) {
        return (Math.abs(a - b) <= tolerance);
    }

    var index$n = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Angle: index$1,
        Easing: index$f,
        Average: Average,
        Bernstein: Bernstein,
        Between: Between,
        Bezier: Bezier,
        CatmullRom: CatmullRom,
        CeilTo: CeilTo,
        Clamp: Clamp,
        DegToRad: DegToRad,
        Difference: Difference,
        Factorial: Factorial,
        FloatBetween: FloatBetween,
        FloorTo: FloorTo,
        FromPercent: FromPercent,
        Fuzzy: index$g,
        GetSpeed: GetSpeed,
        Hermite: Hermite,
        Interpolation: index$h,
        Linear: Linear$2,
        MATH_CONST: MATH_CONST,
        Matrix2D: index$i,
        Matrix4: index,
        MaxAdd: MaxAdd,
        MinSub: MinSub,
        Percent: Percent,
        Pow2: index$j,
        Quaternion: index$4,
        RadToDeg: RadToDeg,
        RoundAwayFromZero: RoundAwayFromZero,
        RoundTo: RoundTo,
        SinCosTableGenerator: SinCosTableGenerator,
        SmootherStep: SmootherStep,
        SmoothStep: SmoothStep,
        Snap: index$k,
        Vec2: index$l,
        Vec3: index$3,
        Vec4: index$m,
        Within: Within,
        Wrap: Wrap
    });

    class Camera3D {
        constructor(x = 0, y = 0, z = 0, fov = 45, near = 0.1, far = 1000) {
            this.dirtyRender = true;
            this.type = 'Camera3D';
            const game = GameInstance.get();
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
            Subtract$1(point, pos, dir);
            Normalize(dir, dir);
            CrossNormalize(UP, dir, left);
            CrossNormalize(dir, left, this.up);
            return this.update();
        }
        rotateOnAxis(axisVec, angle) {
            const dir = this.direction;
            const left = this.left;
            const up = this.up;
            const q = SetAxisAngle(axisVec, angle, this._axis);
            TransformQuat(dir, q, dir);
            TransformQuat(left, q, left);
            TransformQuat(up, q, up);
            Normalize(up, up);
            Normalize(left, left);
            Normalize(dir, dir);
            return this.update();
        }
        yaw(angle) {
            return this.rotateOnAxis(this.up, angle);
        }
        pitch(angle) {
            return this.rotateOnAxis(this.left, angle);
        }
        roll(angle) {
            return this.rotateOnAxis(this.direction, angle);
        }
        forward(s) {
            const pos = this.position;
            const { x: px, y: py, z: pz } = pos;
            const { x: dx, y: dy, z: dz } = this.direction;
            pos.set(px - s * dx, py - s * dy, pz - s * dz);
            return this.update();
        }
        update() {
            const lookPosition = this._lookAtPosition;
            const lookView = this._lookAtView;
            const pos = this.position;
            Add$1(pos, this.direction, lookPosition);
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

    var index$o = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Camera3D: Camera3D
    });

    function GetElement(target) {
        let element;
        if (target) {
            if (typeof target === 'string') {
                element = document.getElementById(target);
            }
            else if (typeof target === 'object' && target.nodeType === 1) {
                element = target;
            }
        }
        if (!element) {
            element = document.body;
        }
        return element;
    }

    function AddToDOM(element, parent) {
        const target = GetElement(parent);
        target.appendChild(element);
        return element;
    }

    function DOMContentLoaded(callback) {
        const readyState = document.readyState;
        if (readyState === 'complete' || readyState === 'interactive') {
            callback();
            return;
        }
        const check = () => {
            document.removeEventListener('deviceready', check, true);
            document.removeEventListener('DOMContentLoaded', check, true);
            window.removeEventListener('load', check, true);
            callback();
        };
        if (!document.body) {
            window.setTimeout(check, 20);
        }
        else if (window.hasOwnProperty('cordova')) {
            document.addEventListener('deviceready', check, true);
        }
        else {
            document.addEventListener('DOMContentLoaded', check, true);
            window.addEventListener('load', check, true);
        }
    }

    function ParseXML(data) {
        let xml;
        try {
            const parser = new DOMParser();
            xml = parser.parseFromString(data, 'text/xml');
            if (!xml || !xml.documentElement || xml.getElementsByTagName('parsererror').length) {
                return null;
            }
            else {
                return xml;
            }
        }
        catch (error) {
            return null;
        }
    }

    function RemoveFromDOM(element) {
        if (element.parentNode) {
            element.parentNode.removeChild(element);
        }
    }

    var index$p = /*#__PURE__*/Object.freeze({
        __proto__: null,
        AddToDOM: AddToDOM,
        DOMContentLoaded: DOMContentLoaded,
        GetElement: GetElement,
        ParseXML: ParseXML,
        RemoveFromDOM: RemoveFromDOM
    });

    let _audioElement;
    function CanPlayAudioType(type, audioElement) {
        if (!audioElement) {
            if (!_audioElement) {
                _audioElement = document.createElement('audio');
            }
            audioElement = _audioElement;
        }
        return (audioElement && audioElement.canPlayType(type) !== '');
    }

    function CanPlayM4A(audioElement) {
        return (CanPlayAudioType('audio/x-m4a', audioElement) ||
            CanPlayAudioType('audio/aac', audioElement));
    }

    function CanPlayMP3(audioElement) {
        return CanPlayAudioType('audio/mpeg; codecs="mp3"', audioElement);
    }

    function CanPlayOGG(audioElement) {
        return CanPlayAudioType('audio/ogg; codecs="vorbis"', audioElement);
    }

    function CanPlayOpus(audioElement) {
        return (CanPlayAudioType('audio/ogg; codecs="opus"', audioElement) ||
            CanPlayAudioType('audio/webm; codecs="opus"', audioElement));
    }

    function CanPlayWAV(audioElement) {
        return CanPlayAudioType('audio/wav; codecs="1"', audioElement);
    }

    function CanPlayWebM(audioElement) {
        return CanPlayAudioType('audio/webm; codecs="vorbis"', audioElement);
    }

    function HasAudio() {
        return (window && window.hasOwnProperty('Audio'));
    }

    function HasWebAudio() {
        return (window &&
            (window.hasOwnProperty('AudioContext') || window.hasOwnProperty('webkitAudioContext')));
    }

    function GetAudio() {
        const result = {
            audioData: HasAudio(),
            m4a: false,
            mp3: false,
            ogg: false,
            opus: false,
            wav: false,
            webAudio: HasWebAudio(),
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

    var index$q = /*#__PURE__*/Object.freeze({
        __proto__: null,
        CanPlayAudioType: CanPlayAudioType,
        CanPlayM4A: CanPlayM4A,
        CanPlayMP3: CanPlayMP3,
        CanPlayOGG: CanPlayOGG,
        CanPlayOpus: CanPlayOpus,
        CanPlayWAV: CanPlayWAV,
        CanPlayWebM: CanPlayWebM,
        GetAudio: GetAudio,
        HasAudio: HasAudio,
        HasWebAudio: HasWebAudio
    });

    function IsChrome() {
        const chrome = (/Chrome\/(\d+)/).test(navigator.userAgent);
        const chromeVersion = (chrome) ? parseInt(RegExp.$1, 10) : 0;
        return {
            chrome,
            chromeVersion
        };
    }

    function IsEdge() {
        const edge = (/Edge\/\d+/).test(navigator.userAgent);
        return {
            edge
        };
    }

    function IsFirefox() {
        const firefox = (/Firefox\D+(\d+)/).test(navigator.userAgent);
        const firefoxVersion = (firefox) ? parseInt(RegExp.$1, 10) : 0;
        return {
            firefox,
            firefoxVersion
        };
    }

    function IsMSIE() {
        const ie = (/MSIE (\d+\.\d+);/).test(navigator.userAgent);
        const ieVersion = (ie) ? parseInt(RegExp.$1, 10) : 0;
        return {
            ie,
            ieVersion
        };
    }

    function IsiOS() {
        const ua = navigator.userAgent;
        const result = {
            iOS: false,
            iOSVersion: 0,
            iPhone: false,
            iPad: false
        };
        if ((/iP[ao]d|iPhone/i).test(ua)) {
            const match = (/OS (\d+)/).exec(navigator.appVersion);
            result.iOS = true;
            result.iOSVersion = parseInt(match[0], 10);
            result.iPhone = (ua.toLowerCase().includes('iphone'));
            result.iPad = (ua.toLowerCase().includes('ipad'));
        }
        return result;
    }

    function IsMobileSafari() {
        const { iOS } = IsiOS();
        const mobileSafari = (navigator.userAgent.includes('AppleWebKit') && iOS);
        return {
            mobileSafari
        };
    }

    function IsOpera() {
        const opera = navigator.userAgent.includes('Opera');
        return {
            opera
        };
    }

    function IsWindowsPhone() {
        const ua = navigator.userAgent;
        return ((/Windows Phone/i).test(ua) || (/IEMobile/i).test(ua));
    }

    function IsSafari() {
        const ua = navigator.userAgent;
        const safari = (ua.includes('Safari') && !IsWindowsPhone());
        const safariVersion = ((/Version\/(\d+)\./).test(ua)) ? parseInt(RegExp.$1, 10) : 0;
        return {
            safari,
            safariVersion
        };
    }

    function IsSilk() {
        const silk = navigator.userAgent.includes('Silk');
        return {
            silk
        };
    }

    function IsTrident() {
        const trident = (/Trident\/(\d+\.\d+)(.*)rv:(\d+\.\d+)/).test(navigator.userAgent);
        const tridentVersion = (trident) ? parseInt(RegExp.$1, 10) : 0;
        const tridentIEVersion = (trident) ? parseInt(RegExp.$3, 10) : 0;
        return {
            trident,
            tridentVersion,
            tridentIEVersion
        };
    }

    function GetBrowser() {
        const { chrome, chromeVersion } = IsChrome();
        const { edge } = IsEdge();
        const { firefox, firefoxVersion } = IsFirefox();
        let { ie, ieVersion } = IsMSIE();
        const { mobileSafari } = IsMobileSafari();
        const { opera } = IsOpera();
        const { safari, safariVersion } = IsSafari();
        const { silk } = IsSilk();
        const { trident, tridentVersion, tridentIEVersion } = IsTrident();
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

    var index$r = /*#__PURE__*/Object.freeze({
        __proto__: null,
        GetBrowser: GetBrowser,
        IsChrome: IsChrome,
        IsEdge: IsEdge,
        IsFirefox: IsFirefox,
        IsMobileSafari: IsMobileSafari,
        IsMSIE: IsMSIE,
        IsOpera: IsOpera,
        IsSafari: IsSafari,
        IsSilk: IsSilk,
        IsTrident: IsTrident
    });

    function IsAndroid() {
        return (navigator.userAgent.includes('Android'));
    }

    function IsChromeOS() {
        return (navigator.userAgent.includes('CrOS'));
    }

    function IsCordova() {
        return (window.hasOwnProperty('cordova'));
    }

    function IsCrosswalk() {
        return (navigator.userAgent.includes('Crosswalk'));
    }

    function IsEjecta() {
        return (window.hasOwnProperty('ejecta'));
    }

    function IsKindle() {
        const ua = navigator.userAgent;
        return ((ua.includes('Kindle') || (/\bKF[A-Z][A-Z]+/).test(ua) || (/Silk.*Mobile Safari/).test(ua)));
    }

    function IsLinux() {
        return (navigator.userAgent.includes('Linux'));
    }

    function IsMacOS() {
        const ua = navigator.userAgent;
        return (ua.includes('Mac OS') && !(ua.includes('like Mac OS')));
    }

    function IsNode() {
        return (typeof process !== 'undefined' && typeof process.versions === 'object' && process.versions.hasOwnProperty('node'));
    }

    function IsNodeWebkit() {
        return (IsNode() && !!process.versions.hasOwnProperty('node-webkit'));
    }

    function IsWebApp() {
        return (navigator.hasOwnProperty('standalone'));
    }

    function IsWindows() {
        return (navigator.userAgent.includes('Windows'));
    }

    function GetOS() {
        const ua = navigator.userAgent;
        const { iOS, iOSVersion, iPad, iPhone } = IsiOS();
        const result = {
            android: IsAndroid(),
            chromeOS: IsChromeOS(),
            cordova: IsCordova(),
            crosswalk: IsCrosswalk(),
            desktop: false,
            ejecta: IsEjecta(),
            iOS,
            iOSVersion,
            iPad,
            iPhone,
            kindle: IsKindle(),
            linux: IsLinux(),
            macOS: IsMacOS(),
            node: IsNode(),
            nodeWebkit: IsNodeWebkit(),
            pixelRatio: 1,
            webApp: IsWebApp(),
            windows: IsWindows(),
            windowsPhone: IsWindowsPhone()
        };
        if (result.windowsPhone) {
            result.android = false;
            result.iOS = false;
            result.macOS = false;
            result.windows = true;
        }
        const silk = ua.includes('Silk');
        if (result.windows || result.macOS || (result.linux && !silk) || result.chromeOS) {
            result.desktop = true;
        }
        if (result.windowsPhone || (((/Windows NT/i).test(ua)) && ((/Touch/i).test(ua)))) {
            result.desktop = false;
        }
        return result;
    }

    var index$s = /*#__PURE__*/Object.freeze({
        __proto__: null,
        GetOS: GetOS,
        IsAndroid: IsAndroid,
        IsChromeOS: IsChromeOS,
        IsCordova: IsCordova,
        IsCrosswalk: IsCrosswalk,
        IsEjecta: IsEjecta,
        IsiOS: IsiOS,
        IsKindle: IsKindle,
        IsLinux: IsLinux,
        IsMacOS: IsMacOS,
        IsNode: IsNode,
        IsNodeWebkit: IsNodeWebkit,
        IsWebApp: IsWebApp,
        IsWindows: IsWindows,
        IsWindowsPhone: IsWindowsPhone
    });

    let _videoElement;
    function CanPlayVideoType(type, videoElement) {
        if (!videoElement) {
            if (!_videoElement) {
                _videoElement = document.createElement('video');
            }
            videoElement = _videoElement;
        }
        return (videoElement && videoElement.canPlayType(type) !== '');
    }

    function CanPlayH264Video(videoElement) {
        return CanPlayVideoType('video/mp4; codecs="avc1.42E01E"', videoElement);
    }

    function CanPlayHLSVideo(videoElement) {
        return CanPlayVideoType('application/x-mpegURL; codecs="avc1.42E01E"', videoElement);
    }

    function CanPlayOGGVideo(videoElement) {
        return CanPlayVideoType('video/ogg; codecs="theora"', videoElement);
    }

    function CanPlayVP9Video(videoElement) {
        return CanPlayVideoType('video/webm; codecs="vp9"', videoElement);
    }

    function CanPlayWebMVideo(videoElement) {
        return CanPlayVideoType('video/webm; codecs="vp8, vorbis"', videoElement);
    }

    function GetVideo() {
        return {
            h264Video: CanPlayH264Video(),
            hlsVideo: CanPlayHLSVideo(),
            oggVideo: CanPlayOGGVideo(),
            vp9Video: CanPlayVP9Video(),
            webmVideo: CanPlayWebMVideo()
        };
    }

    var index$t = /*#__PURE__*/Object.freeze({
        __proto__: null,
        CanPlayH264Video: CanPlayH264Video,
        CanPlayHLSVideo: CanPlayHLSVideo,
        CanPlayOGGVideo: CanPlayOGGVideo,
        CanPlayVP9Video: CanPlayVP9Video,
        CanPlayVideoType: CanPlayVideoType,
        CanPlayWebMVideo: CanPlayWebMVideo,
        GetVideo: GetVideo
    });

    var index$u = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Audio: index$q,
        Browser: index$r,
        OS: index$s,
        Video: index$t,
        CanPlayAudioType: CanPlayAudioType,
        CanPlayM4A: CanPlayM4A,
        CanPlayMP3: CanPlayMP3,
        CanPlayOGG: CanPlayOGG,
        CanPlayOpus: CanPlayOpus,
        CanPlayWAV: CanPlayWAV,
        CanPlayWebM: CanPlayWebM,
        GetAudio: GetAudio,
        HasAudio: HasAudio,
        HasWebAudio: HasWebAudio,
        GetBrowser: GetBrowser,
        IsChrome: IsChrome,
        IsEdge: IsEdge,
        IsFirefox: IsFirefox,
        IsMobileSafari: IsMobileSafari,
        IsMSIE: IsMSIE,
        IsOpera: IsOpera,
        IsSafari: IsSafari,
        IsSilk: IsSilk,
        IsTrident: IsTrident,
        GetOS: GetOS,
        IsAndroid: IsAndroid,
        IsChromeOS: IsChromeOS,
        IsCordova: IsCordova,
        IsCrosswalk: IsCrosswalk,
        IsEjecta: IsEjecta,
        IsiOS: IsiOS,
        IsKindle: IsKindle,
        IsLinux: IsLinux,
        IsMacOS: IsMacOS,
        IsNode: IsNode,
        IsNodeWebkit: IsNodeWebkit,
        IsWebApp: IsWebApp,
        IsWindows: IsWindows,
        IsWindowsPhone: IsWindowsPhone,
        CanPlayH264Video: CanPlayH264Video,
        CanPlayHLSVideo: CanPlayHLSVideo,
        CanPlayOGGVideo: CanPlayOGGVideo,
        CanPlayVP9Video: CanPlayVP9Video,
        CanPlayVideoType: CanPlayVideoType,
        CanPlayWebMVideo: CanPlayWebMVideo,
        GetVideo: GetVideo
    });

    function DepthFirstSearch(parent) {
        const stack = [parent];
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

    function GetChildIndex(parent, child) {
        return parent.children.indexOf(child);
    }

    function RemoveChildAt(parent, index) {
        const children = parent.children;
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

    function RemoveChild(parent, child) {
        const currentIndex = GetChildIndex(parent, child);
        if (currentIndex > -1) {
            RemoveChildAt(parent, currentIndex);
        }
        return child;
    }

    const AddedToWorldEvent = 'addedtoworld';

    const DestroyEvent = 'destroy';

    const PostUpdateEvent = 'postupdate';

    const RemovedFromWorldEvent = 'removedfromworld';

    const UpdateEvent = 'update';

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

    function SetWorld(world, ...children) {
        children.forEach(child => {
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

    function SetParent(parent, ...children) {
        children.forEach(child => {
            if (child.parent) {
                RemoveChild(child.parent, child);
            }
            child.parent = parent;
        });
        const parentWorld = parent.world;
        if (parentWorld) {
            SetWorld(parentWorld, ...DepthFirstSearch(parent));
        }
        return children;
    }

    function AddChild(parent, child) {
        parent.children.push(child);
        SetParent(parent, child);
        child.transform.updateWorld();
        return child;
    }

    function AddChildAt(parent, index, child) {
        const children = parent.children;
        if (index >= 0 && index <= children.length) {
            SetParent(parent, child);
            children.splice(index, 0, child);
            child.transform.updateWorld();
        }
        return child;
    }

    function AddChildren(parent, ...children) {
        children.forEach(child => {
            AddChild(parent, child);
        });
        return children;
    }

    function AddChildrenAt(parent, index, ...children) {
        const parentChildren = parent.children;
        if (index >= 0 && index <= parentChildren.length) {
            children.reverse().forEach(child => {
                children.splice(index, 0, child);
                SetParent(parent, child);
                child.transform.updateWorld();
            });
        }
        return children;
    }

    function AddPosition(x, y, ...children) {
        children.forEach(child => {
            child.x += x;
            child.y += y;
        });
        return children;
    }

    function AddRotation(rotation, ...children) {
        children.forEach(child => {
            child.rotation += rotation;
        });
        return children;
    }

    function AddScale(scaleX, scaleY, ...children) {
        children.forEach(child => {
            child.scaleX += scaleX;
            child.scaleY += scaleY;
        });
        return children;
    }

    function AddSkew(skewX, skewY, ...children) {
        children.forEach(child => {
            child.skewX += skewX;
            child.skewY += skewY;
        });
        return children;
    }

    const DIRTY_CONST = {
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

    function BringChildToTop(parent, child) {
        const parentChildren = parent.children;
        const currentIndex = GetChildIndex(parent, child);
        if (currentIndex !== -1 && currentIndex < parentChildren.length) {
            parentChildren.splice(currentIndex, 1);
            parentChildren.push(child);
            child.setDirty(DIRTY_CONST.TRANSFORM);
        }
        return child;
    }

    function DepthFirstSearchRecursiveNested(parent, output = []) {
        for (let i = 0; i < parent.numChildren; i++) {
            const node = parent.children[i];
            const children = [];
            output.push({ node, children });
            if (node.numChildren > 0) {
                DepthFirstSearchRecursiveNested(node, children);
            }
        }
        return output;
    }

    function GetInfo(entry) {
        const legend = (entry.numChildren > 0) ? 'Parent' : 'Child';
        return `${legend} [ type=${entry.type}, name=${entry.name} ]`;
    }
    function LogChildren(entry) {
        console.group(GetInfo(entry.node));
        entry.children.forEach(child => {
            if (child.children.length > 0) {
                LogChildren(child);
            }
            else {
                console.log(GetInfo(child.node));
            }
        });
        console.groupEnd();
    }
    function ConsoleTreeChildren(parent) {
        const entries = DepthFirstSearchRecursiveNested(parent);
        if (parent.world === parent) {
            console.group('World');
        }
        else {
            console.group(GetInfo(parent));
        }
        entries.forEach(entry => {
            if (entry.children.length) {
                LogChildren(entry);
            }
            else {
                console.log(GetInfo(entry.node));
            }
        });
        console.groupEnd();
    }

    function CountMatchingChildren(parent, property, value) {
        const children = parent.children;
        let total = 0;
        children.forEach(child => {
            const descriptor = Object.getOwnPropertyDescriptor(child, property);
            if (descriptor && (value === undefined || value === descriptor.value)) {
                total++;
            }
        });
        return total;
    }

    function DepthFirstSearchRecursive(parent, output = []) {
        for (let i = 0; i < parent.numChildren; i++) {
            const child = parent.children[i];
            output.push(child);
            if (child.numChildren > 0) {
                DepthFirstSearchRecursive(child, output);
            }
        }
        return output;
    }

    function RemoveChildrenBetween(parent, beginIndex = 0, endIndex) {
        const children = parent.children;
        if (endIndex === undefined) {
            endIndex = children.length;
        }
        const range = endIndex - beginIndex;
        if (range > 0 && range <= endIndex) {
            const removed = children.splice(beginIndex, range);
            removed.forEach(child => {
                child.parent = null;
            });
            return removed;
        }
        else {
            return [];
        }
    }

    function DestroyChildren(parent, beginIndex = 0, endIndex) {
        const removed = RemoveChildrenBetween(parent, beginIndex, endIndex);
        removed.forEach(child => {
            child.destroy();
        });
    }

    function FindChildByName(parent, searchString) {
        const children = DepthFirstSearch(parent);
        const regex = RegExp(searchString);
        for (let i = 0; i < children.length; i++) {
            const child = children[i];
            if (regex.test(child.name)) {
                return child;
            }
        }
    }

    function FindChildrenByName(parent, searchString) {
        const children = DepthFirstSearch(parent);
        const regex = RegExp(searchString);
        const results = [];
        children.forEach(child => {
            if (regex.test(child.name)) {
                results.push(child);
            }
        });
        return results;
    }

    function GetAllChildren(parent, property, value) {
        const children = DepthFirstSearch(parent);
        if (!property) {
            return children;
        }
        const results = [];
        children.forEach(child => {
            const descriptor = Object.getOwnPropertyDescriptor(child, property);
            if (descriptor && (value === undefined || value === descriptor.value)) {
                results.push(child);
            }
        });
        return results;
    }

    function GetChildAt(parent, index) {
        const children = parent.children;
        if (index < 0 || index > children.length) {
            throw new Error(`Index out of bounds: ${index}`);
        }
        return children[index];
    }

    function GetChildren(parent, property, value) {
        const children = parent.children;
        if (!property) {
            return [...children];
        }
        const results = [];
        children.forEach(child => {
            const descriptor = Object.getOwnPropertyDescriptor(child, property);
            if (descriptor && (value === undefined || value === descriptor.value)) {
                results.push(child);
            }
        });
        return results;
    }

    function GetClosestChild(parent, point) {
        const children = parent.children;
        let closest = null;
        let distance = 0;
        children.forEach(child => {
            const childDistance = Distance$1(point, child.transform.position);
            if (!closest || childDistance < distance) {
                closest = child;
                distance = childDistance;
            }
        });
        return closest;
    }

    function GetFirstChild(parent, property, value) {
        const children = parent.children;
        for (let i = 0; i < children.length; i++) {
            const child = children[i];
            const descriptor = Object.getOwnPropertyDescriptor(child, property);
            if (descriptor && (value === undefined || value === descriptor.value)) {
                return child;
            }
        }
    }

    function GetFurthestChild(parent, point) {
        const children = parent.children;
        let furthest = null;
        let distance = 0;
        children.forEach(child => {
            const childDistance = Distance$1(point, child.transform.position);
            if (!furthest || childDistance > distance) {
                furthest = child;
                distance = childDistance;
            }
        });
        return furthest;
    }

    function GetLastChild(parent, property, value) {
        const children = parent.children;
        for (let i = children.length - 1; i >= 0; i--) {
            const child = children[i];
            const descriptor = Object.getOwnPropertyDescriptor(child, property);
            if (descriptor && (value === undefined || value === descriptor.value)) {
                return child;
            }
        }
    }

    function GetParents(child) {
        const parents = [];
        while (child.parent) {
            parents.push(child.parent);
            child = child.parent;
        }
        return parents;
    }

    function GetRandomChild(parent, startIndex = 0, length) {
        const children = parent.children;
        if (!length) {
            length = children.length;
        }
        const randomIndex = startIndex + Math.floor(Math.random() * length);
        return children[randomIndex];
    }

    function MoveChildDown(parent, child) {
        const parentChildren = parent.children;
        const currentIndex = GetChildIndex(parent, child);
        if (currentIndex > 0) {
            const child2 = parentChildren[currentIndex - 1];
            const index2 = parentChildren.indexOf(child2);
            parentChildren[currentIndex] = child2;
            parentChildren[index2] = child;
            child.setDirty(DIRTY_CONST.TRANSFORM);
            child2.setDirty(DIRTY_CONST.TRANSFORM);
        }
        return child;
    }

    function MoveChildTo(parent, child, index) {
        const parentChildren = parent.children;
        const currentIndex = GetChildIndex(parent, child);
        if (currentIndex === -1 || index < 0 || index >= parentChildren.length) {
            throw new Error('Index out of bounds');
        }
        if (currentIndex !== index) {
            parentChildren.splice(currentIndex, 1);
            parentChildren.splice(index, 0, child);
            child.setDirty(DIRTY_CONST.TRANSFORM);
        }
        return child;
    }

    function MoveChildUp(parent, child) {
        const parentChildren = parent.children;
        const currentIndex = GetChildIndex(parent, child);
        if (currentIndex !== -1 && currentIndex > 0) {
            const child2 = parentChildren[currentIndex + 1];
            const index2 = parentChildren.indexOf(child2);
            parentChildren[currentIndex] = child2;
            parentChildren[index2] = child;
            child.setDirty(DIRTY_CONST.TRANSFORM);
            child2.setDirty(DIRTY_CONST.TRANSFORM);
        }
        return child;
    }

    function RectangleToRectangle(rectA, rectB) {
        if (rectA.width <= 0 || rectA.height <= 0 || rectB.width <= 0 || rectB.height <= 0) {
            return false;
        }
        return !(rectA.right < rectB.x || rectA.bottom < rectB.y || rectA.x > rectB.right || rectA.y > rectB.bottom);
    }

    function Overlap(source, ...targets) {
        const sourceBounds = source.bounds.get();
        for (let i = 0; i < targets.length; i++) {
            const target = targets[i];
            const targetBounds = target.bounds.get();
            if (RectangleToRectangle(sourceBounds, targetBounds)) {
                return true;
            }
        }
        return false;
    }

    function RemoveChildren(parent, ...children) {
        children.forEach(child => {
            RemoveChild(parent, child);
        });
        return children;
    }

    function RemoveChildrenAt(parent, ...index) {
        const removed = [];
        index.sort((a, b) => a - b);
        index.reverse().forEach(i => {
            const child = RemoveChildAt(parent, i);
            if (child) {
                removed.push(child);
            }
        });
        return removed;
    }

    function ReparentChildren(parent, newParent, beginIndex = 0, endIndex) {
        const moved = RemoveChildrenBetween(parent, beginIndex, endIndex);
        SetParent(newParent, ...moved);
        moved.forEach(child => {
            child.transform.updateWorld();
        });
        return moved;
    }

    function RotateChildrenLeft(parent, total = 1) {
        const parentChildren = parent.children;
        let child = null;
        for (let i = 0; i < total; i++) {
            child = parentChildren.shift();
            parentChildren.push(child);
            child.setDirty(DIRTY_CONST.TRANSFORM);
        }
        return child;
    }

    function RotateChildrenRight(parent, total = 1) {
        const parentChildren = parent.children;
        let child = null;
        for (let i = 0; i < total; i++) {
            child = parentChildren.pop();
            parentChildren.unshift(child);
            child.setDirty(DIRTY_CONST.TRANSFORM);
        }
        return child;
    }

    function SendChildToBack(parent, child) {
        const parentChildren = parent.children;
        const currentIndex = GetChildIndex(parent, child);
        if (currentIndex !== -1 && currentIndex > 0) {
            parentChildren.splice(currentIndex, 1);
            parentChildren.unshift(child);
            child.setDirty(DIRTY_CONST.TRANSFORM);
        }
        return child;
    }

    function SetBounds(x, y, width, height, ...children) {
        children.forEach(child => {
            child.bounds.set(x, y, width, height);
        });
        return children;
    }

    function SetChildrenValue(parent, property, value) {
        const children = DepthFirstSearch(parent);
        children.forEach(child => {
            const descriptor = Object.getOwnPropertyDescriptor(child, property);
            if (descriptor) {
                descriptor.set(value);
            }
        });
        return children;
    }

    function SetName(name, ...children) {
        children.forEach(child => {
            child.name = name;
        });
        return children;
    }

    function SetOrigin(originX, originY, ...children) {
        children.forEach(child => {
            child.setOrigin(originX, originY);
        });
        return children;
    }

    function SetPosition(x, y, ...children) {
        children.forEach(child => {
            child.setPosition(x, y);
        });
        return children;
    }

    function SetRotation(rotation, ...children) {
        children.forEach(child => {
            child.rotation = rotation;
        });
        return children;
    }

    function SetScale(scaleX, scaleY, ...children) {
        children.forEach(child => {
            child.setScale(scaleX, scaleY);
        });
        return children;
    }

    function SetSize(width, height, ...children) {
        children.forEach(child => {
            child.setSize(width, height);
        });
        return children;
    }

    function SetSkew(skewX, skewY, ...children) {
        children.forEach(child => {
            child.setSkew(skewX, skewY);
        });
        return children;
    }

    function SetType(type, ...children) {
        children.forEach(child => {
            child.type = type;
        });
        return children;
    }

    function SetValue(property, value, ...children) {
        children.forEach(child => {
            const descriptor = Object.getOwnPropertyDescriptor(child, property);
            if (descriptor) {
                descriptor.set(value);
            }
        });
        return children;
    }

    function SetVisible(visible, ...children) {
        children.forEach(child => {
            child.visible = visible;
        });
        return children;
    }

    function ShuffleChildren(parent) {
        const children = parent.children;
        for (let i = children.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = children[i];
            children[i] = children[j];
            children[j] = temp;
            temp.setDirty(DIRTY_CONST.TRANSFORM);
        }
        return children;
    }

    function SwapChildren(child1, child2) {
        if (child1.parent === child2.parent) {
            const children = child1.parent.children;
            const index1 = GetChildIndex(child1.parent, child1);
            const index2 = GetChildIndex(child2.parent, child2);
            if (index1 !== index2) {
                children[index1] = child2;
                children[index2] = child1;
            }
        }
    }

    var index$v = /*#__PURE__*/Object.freeze({
        __proto__: null,
        AddChild: AddChild,
        AddChildAt: AddChildAt,
        AddChildren: AddChildren,
        AddChildrenAt: AddChildrenAt,
        AddPosition: AddPosition,
        AddRotation: AddRotation,
        AddScale: AddScale,
        AddSkew: AddSkew,
        BringChildToTop: BringChildToTop,
        ConsoleTreeChildren: ConsoleTreeChildren,
        CountMatchingChildren: CountMatchingChildren,
        DepthFirstSearch: DepthFirstSearch,
        DepthFirstSearchRecursive: DepthFirstSearchRecursive,
        DepthFirstSearchRecursiveNested: DepthFirstSearchRecursiveNested,
        DestroyChildren: DestroyChildren,
        FindChildByName: FindChildByName,
        FindChildrenByName: FindChildrenByName,
        GetAllChildren: GetAllChildren,
        GetChildAt: GetChildAt,
        GetChildIndex: GetChildIndex,
        GetChildren: GetChildren,
        GetClosestChild: GetClosestChild,
        GetFirstChild: GetFirstChild,
        GetFurthestChild: GetFurthestChild,
        GetLastChild: GetLastChild,
        GetParents: GetParents,
        GetRandomChild: GetRandomChild,
        MoveChildDown: MoveChildDown,
        MoveChildTo: MoveChildTo,
        MoveChildUp: MoveChildUp,
        Overlap: Overlap,
        RemoveChild: RemoveChild,
        RemoveChildAt: RemoveChildAt,
        RemoveChildren: RemoveChildren,
        RemoveChildrenAt: RemoveChildrenAt,
        RemoveChildrenBetween: RemoveChildrenBetween,
        ReparentChildren: ReparentChildren,
        RotateChildrenLeft: RotateChildrenLeft,
        RotateChildrenRight: RotateChildrenRight,
        SendChildToBack: SendChildToBack,
        SetBounds: SetBounds,
        SetChildrenValue: SetChildrenValue,
        SetName: SetName,
        SetOrigin: SetOrigin,
        SetParent: SetParent,
        SetPosition: SetPosition,
        SetRotation: SetRotation,
        SetScale: SetScale,
        SetSize: SetSize,
        SetSkew: SetSkew,
        SetType: SetType,
        SetValue: SetValue,
        SetVisible: SetVisible,
        SetWorld: SetWorld,
        ShuffleChildren: ShuffleChildren,
        SwapChildren: SwapChildren
    });

    function DepthFirstSearch3D(parent) {
        const stack = [parent];
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

    function GetChild3DIndex(parent, child) {
        return parent.children.indexOf(child);
    }

    function RemoveChild3DAt(parent, index) {
        const children = parent.children;
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

    function RemoveChild3D(parent, child) {
        const currentIndex = GetChild3DIndex(parent, child);
        if (currentIndex > -1) {
            RemoveChild3DAt(parent, currentIndex);
        }
        return child;
    }

    function SetWorld3D(world, ...children) {
        children.forEach(child => {
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

    function SetParent3D(parent, ...children) {
        children.forEach(child => {
            if (child.parent) {
                RemoveChild3D(child.parent, child);
            }
            child.parent = parent;
        });
        const parentWorld = parent.world;
        if (parentWorld) {
            SetWorld3D(parentWorld, ...DepthFirstSearch3D(parent));
        }
        return children;
    }

    function AddChild3D(parent, child) {
        parent.children.push(child);
        SetParent3D(parent, child);
        return child;
    }

    function AddChild3DAt(parent, index, child) {
        const children = parent.children;
        if (index >= 0 && index <= children.length) {
            SetParent3D(parent, child);
            children.splice(index, 0, child);
        }
        return child;
    }

    function AddChildren3D(parent, ...children) {
        children.forEach(child => {
            AddChild3D(parent, child);
        });
        return children;
    }

    function AddChildren3DAt(parent, index, ...children) {
        const parentChildren = parent.children;
        if (index >= 0 && index <= parentChildren.length) {
            children.reverse().forEach(child => {
                children.splice(index, 0, child);
                SetParent3D(parent, child);
            });
        }
        return children;
    }

    function DepthFirstSearchRecursiveNested3D(parent, output = []) {
        for (let i = 0; i < parent.numChildren; i++) {
            const node = parent.children[i];
            const children = [];
            output.push({ node, children });
            if (node.numChildren > 0) {
                DepthFirstSearchRecursiveNested3D(node, children);
            }
        }
        return output;
    }

    function GetInfo$1(entry) {
        const legend = (entry.numChildren > 0) ? 'Parent' : 'Child';
        return `${legend} [ type=${entry.type}, name=${entry.name} ]`;
    }
    function LogChildren$1(entry) {
        console.group(GetInfo$1(entry.node));
        entry.children.forEach(child => {
            if (child.children.length > 0) {
                LogChildren$1(child);
            }
            else {
                console.log(GetInfo$1(child.node));
            }
        });
        console.groupEnd();
    }
    function ConsoleTreeChildren3D(parent) {
        const entries = DepthFirstSearchRecursiveNested3D(parent);
        if (parent.world === parent) {
            console.group('World');
        }
        else {
            console.group(GetInfo$1(parent));
        }
        entries.forEach(entry => {
            if (entry.children.length) {
                LogChildren$1(entry);
            }
            else {
                console.log(GetInfo$1(entry.node));
            }
        });
        console.groupEnd();
    }

    function CountMatchingChildren3D(parent, property, value) {
        const children = parent.children;
        let total = 0;
        children.forEach(child => {
            const descriptor = Object.getOwnPropertyDescriptor(child, property);
            if (descriptor && (value === undefined || value === descriptor.value)) {
                total++;
            }
        });
        return total;
    }

    function DepthFirstSearchRecursive3D(parent, output = []) {
        for (let i = 0; i < parent.numChildren; i++) {
            const child = parent.children[i];
            output.push(child);
            if (child.numChildren > 0) {
                DepthFirstSearchRecursive3D(child, output);
            }
        }
        return output;
    }

    function RemoveChildren3DBetween(parent, beginIndex = 0, endIndex) {
        const children = parent.children;
        if (endIndex === undefined) {
            endIndex = children.length;
        }
        const range = endIndex - beginIndex;
        if (range > 0 && range <= endIndex) {
            const removed = children.splice(beginIndex, range);
            removed.forEach(child => {
                child.parent = null;
            });
            return removed;
        }
        else {
            return [];
        }
    }

    function DestroyChildren3D(parent, beginIndex = 0, endIndex) {
        const removed = RemoveChildren3DBetween(parent, beginIndex, endIndex);
        removed.forEach(child => {
            child.destroy();
        });
    }

    function FindChild3DByName(parent, searchString) {
        const children = DepthFirstSearch3D(parent);
        const regex = RegExp(searchString);
        for (let i = 0; i < children.length; i++) {
            const child = children[i];
            if (regex.test(child.name)) {
                return child;
            }
        }
    }

    function FindChildren3DByName(parent, searchString) {
        const children = DepthFirstSearch3D(parent);
        const regex = RegExp(searchString);
        const results = [];
        children.forEach(child => {
            if (regex.test(child.name)) {
                results.push(child);
            }
        });
        return results;
    }

    function GetAllChildren3D(parent, property, value) {
        const children = DepthFirstSearch3D(parent);
        if (!property) {
            return children;
        }
        const results = [];
        children.forEach(child => {
            const descriptor = Object.getOwnPropertyDescriptor(child, property);
            if (descriptor && (value === undefined || value === descriptor.value)) {
                results.push(child);
            }
        });
        return results;
    }

    function GetChild3DAt(parent, index) {
        const children = parent.children;
        if (index < 0 || index > children.length) {
            throw new Error(`Index out of bounds: ${index}`);
        }
        return children[index];
    }

    function GetChildren3D(parent, property, value) {
        const children = parent.children;
        if (!property) {
            return [...children];
        }
        const results = [];
        children.forEach(child => {
            const descriptor = Object.getOwnPropertyDescriptor(child, property);
            if (descriptor && (value === undefined || value === descriptor.value)) {
                results.push(child);
            }
        });
        return results;
    }

    function GetFirstChild3D(parent, property, value) {
        const children = parent.children;
        for (let i = 0; i < children.length; i++) {
            const child = children[i];
            const descriptor = Object.getOwnPropertyDescriptor(child, property);
            if (descriptor && (value === undefined || value === descriptor.value)) {
                return child;
            }
        }
    }

    function GetLastChild3D(parent, property, value) {
        const children = parent.children;
        for (let i = children.length - 1; i >= 0; i--) {
            const child = children[i];
            const descriptor = Object.getOwnPropertyDescriptor(child, property);
            if (descriptor && (value === undefined || value === descriptor.value)) {
                return child;
            }
        }
    }

    function GetParents3D(child) {
        const parents = [];
        while (child.parent) {
            parents.push(child.parent);
            child = child.parent;
        }
        return parents;
    }

    function GetRandomChild3D(parent, startIndex = 0, length) {
        const children = parent.children;
        if (!length) {
            length = children.length;
        }
        const randomIndex = startIndex + Math.floor(Math.random() * length);
        return children[randomIndex];
    }

    function MoveChild3DTo(parent, child, index) {
        const parentChildren = parent.children;
        const currentIndex = GetChild3DIndex(parent, child);
        if (currentIndex === -1 || index < 0 || index >= parentChildren.length) {
            throw new Error('Index out of bounds');
        }
        if (currentIndex !== index) {
            parentChildren.splice(currentIndex, 1);
            parentChildren.splice(index, 0, child);
            child.setDirty(DIRTY_CONST.TRANSFORM);
        }
        return child;
    }

    function RemoveChildren3D(parent, ...children) {
        children.forEach(child => {
            RemoveChild3D(parent, child);
        });
        return children;
    }

    function RemoveChildren3DAt(parent, ...index) {
        const removed = [];
        index.sort((a, b) => a - b);
        index.reverse().forEach(i => {
            const child = RemoveChild3DAt(parent, i);
            if (child) {
                removed.push(child);
            }
        });
        return removed;
    }

    function ReparentChildren3D(parent, newParent, beginIndex = 0, endIndex) {
        const moved = RemoveChildren3DBetween(parent, beginIndex, endIndex);
        SetParent3D(newParent, ...moved);
        moved.forEach(child => {
        });
        return moved;
    }

    function ReplaceChild3D(target, source) {
        const targetParent = target.parent;
        const sourceParent = source.parent;
        const targetIndex = GetChild3DIndex(targetParent, target);
        if (targetParent === sourceParent) {
            MoveChild3DTo(targetParent, source, targetIndex);
            RemoveChild3D(targetParent, target);
        }
        else {
            RemoveChild3D(targetParent, target);
            RemoveChild3D(sourceParent, source);
            AddChild3DAt(targetParent, targetIndex, source);
        }
        return target;
    }

    function SetChildren3DValue(parent, property, value) {
        const children = DepthFirstSearch3D(parent);
        children.forEach(child => {
            const descriptor = Object.getOwnPropertyDescriptor(child, property);
            if (descriptor) {
                descriptor.set(value);
            }
        });
        return children;
    }

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

    var index$w = /*#__PURE__*/Object.freeze({
        __proto__: null,
        AddChild3D: AddChild3D,
        AddChild3DAt: AddChild3DAt,
        AddChildren3D: AddChildren3D,
        AddChildren3DAt: AddChildren3DAt,
        ConsoleTreeChildren3D: ConsoleTreeChildren3D,
        CountMatchingChildren3D: CountMatchingChildren3D,
        DepthFirstSearch3D: DepthFirstSearch3D,
        DepthFirstSearchRecursive3D: DepthFirstSearchRecursive3D,
        DepthFirstSearchRecursiveNested3D: DepthFirstSearchRecursiveNested3D,
        DestroyChildren3D: DestroyChildren3D,
        FindChild3DByName: FindChild3DByName,
        FindChildren3DByName: FindChildren3DByName,
        GetAllChildren3D: GetAllChildren3D,
        GetChild3DAt: GetChild3DAt,
        GetChild3DIndex: GetChild3DIndex,
        GetChildren3D: GetChildren3D,
        GetFirstChild3D: GetFirstChild3D,
        GetLastChild3D: GetLastChild3D,
        GetParents3D: GetParents3D,
        GetRandomChild3D: GetRandomChild3D,
        MoveChild3DTo: MoveChild3DTo,
        RemoveChild3D: RemoveChild3D,
        RemoveChild3DAt: RemoveChild3DAt,
        RemoveChildren3D: RemoveChildren3D,
        RemoveChildren3DAt: RemoveChildren3DAt,
        RemoveChildren3DBetween: RemoveChildren3DBetween,
        ReparentChildren3D: ReparentChildren3D,
        ReplaceChild3D: ReplaceChild3D,
        SetChildren3DValue: SetChildren3DValue,
        SetParent3D: SetParent3D,
        SetWorld3D: SetWorld3D,
        SwapChildren3D: SwapChildren3D
    });

    function ClearEvent(emitter, event) {
        emitter.events.delete(event);
        return emitter;
    }

    class EventEmitter {
        constructor() {
            this.events = new Map();
        }
    }

    class EventInstance {
        constructor(callback, context, once = false) {
            this.callback = callback;
            this.context = context;
            this.once = once;
        }
    }

    function GetEventNames(emitter) {
        return [...emitter.events.keys()];
    }

    function GetListenerCount(emitter, event) {
        const listeners = emitter.events.get(event);
        return (listeners) ? listeners.size : 0;
    }

    function GetListeners(emitter, event) {
        const out = [];
        const listeners = emitter.events.get(event);
        listeners.forEach(listener => {
            out.push(listener.callback);
        });
        return out;
    }

    function Off(emitter, event, callback, context, once) {
        const events = emitter.events;
        const listeners = events.get(event);
        if (!callback) {
            events.delete(event);
        }
        else if (callback instanceof EventInstance) {
            listeners.delete(callback);
        }
        else {
            const hasContext = !context;
            const hasOnce = (once !== undefined);
            for (const listener of listeners) {
                if ((listener.callback === callback) &&
                    (hasContext && listener.context === context) &&
                    (hasOnce && listener.once === once)) {
                    listeners.delete(listener);
                }
            }
        }
        if (listeners.size === 0) {
            events.delete(event);
        }
        return emitter;
    }

    function On(emitter, event, callback, context = emitter, once = false) {
        if (typeof callback !== 'function') {
            throw new TypeError('Listener not a function');
        }
        const listener = new EventInstance(callback, context, once);
        const listeners = emitter.events.get(event);
        if (!listeners) {
            emitter.events.set(event, new Set([listener]));
        }
        else {
            listeners.add(listener);
        }
        return listener;
    }

    function Once(emitter, event, callback, context = emitter) {
        return On(emitter, event, callback, context, true);
    }

    function RemoveAllListeners(emitter, event) {
        if (!event) {
            emitter.events.clear();
        }
        else {
            emitter.events.delete(event);
        }
    }

    var index$x = /*#__PURE__*/Object.freeze({
        __proto__: null,
        ClearEvent: ClearEvent,
        Emit: Emit,
        EventEmitter: EventEmitter,
        EventInstance: EventInstance,
        GetEventNames: GetEventNames,
        GetListenerCount: GetListenerCount,
        GetListeners: GetListeners,
        Off: Off,
        On: On,
        Once: Once,
        RemoveAllListeners: RemoveAllListeners
    });

    function GetVertices(transform) {
        const { a, b, c, d, tx, ty } = transform.world;
        const { x, y, right, bottom } = transform.extent;
        const x0 = (x * a) + (y * c) + tx;
        const y0 = (x * b) + (y * d) + ty;
        const x1 = (x * a) + (bottom * c) + tx;
        const y1 = (x * b) + (bottom * d) + ty;
        const x2 = (right * a) + (bottom * c) + tx;
        const y2 = (right * b) + (bottom * d) + ty;
        const x3 = (right * a) + (y * c) + tx;
        const y3 = (right * b) + (y * d) + ty;
        return { x0, y0, x1, y1, x2, y2, x3, y3 };
    }

    class BoundsComponent {
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
            if (this.entity.isDirty(DIRTY_CONST.BOUNDS) && !this.fixed) {
                this.update();
            }
            return this.area;
        }
        updateLocal() {
            const { x0, y0, x1, y1, x2, y2, x3, y3 } = GetVertices(this.entity.transform);
            const x = Math.min(x0, x1, x2, x3);
            const y = Math.min(y0, y1, y2, y3);
            const right = Math.max(x0, x1, x2, x3);
            const bottom = Math.max(y0, y1, y2, y3);
            return this.area.set(x, y, right - x, bottom - y);
        }
        update() {
            const bounds = this.updateLocal();
            this.entity.clearDirty(DIRTY_CONST.BOUNDS);
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
                if (!child || (visibleOnly && !child.visible)) {
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

    var index$y = /*#__PURE__*/Object.freeze({
        __proto__: null,
        BoundsComponent: BoundsComponent
    });

    class InputComponent {
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

    var index$z = /*#__PURE__*/Object.freeze({
        __proto__: null,
        InputComponent: InputComponent
    });

    let originX = 0.5;
    let originY = 0.5;

    function Area(rect) {
        return rect.width * rect.height;
    }

    function Ceil$3(rect) {
        rect.x = Math.ceil(rect.x);
        rect.y = Math.ceil(rect.y);
        return rect;
    }

    function CeilAll(rect) {
        rect.x = Math.ceil(rect.x);
        rect.y = Math.ceil(rect.y);
        rect.width = Math.ceil(rect.width);
        rect.height = Math.ceil(rect.height);
        return rect;
    }

    function CenterOn(rect, x, y) {
        rect.x = x - (rect.width / 2);
        rect.y = y - (rect.height / 2);
        return rect;
    }

    function CenterX(rect) {
        return rect.x + (rect.width / 2);
    }

    function CenterY(rect) {
        return rect.y + (rect.height / 2);
    }

    function Clone$6(source) {
        return new Rectangle(source.x, source.y, source.width, source.height);
    }

    function ContainsPoint(rect, point) {
        return Contains(rect, point.x, point.y);
    }

    function ContainsRect(rectA, rectB) {
        if ((rectB.width * rectB.height) > (rectA.width * rectA.height)) {
            return false;
        }
        return ((rectB.x > rectA.x && rectB.x < rectA.right) &&
            (rectB.right > rectA.x && rectB.right < rectA.right) &&
            (rectB.y > rectA.y && rectB.y < rectA.bottom) &&
            (rectB.bottom > rectA.y && rectB.bottom < rectA.bottom));
    }

    function CopyFrom$6(source, dest) {
        return dest.set(source.x, source.y, source.width, source.height);
    }

    function Decompose(rect, out = []) {
        out.push(new Vec2(rect.x, rect.y), new Vec2(rect.right, rect.y), new Vec2(rect.right, rect.bottom), new Vec2(rect.x, rect.bottom));
        return out;
    }

    function Equals$6(rect, toCompare) {
        return (rect.x === toCompare.x &&
            rect.y === toCompare.y &&
            rect.width === toCompare.width &&
            rect.height === toCompare.height);
    }

    function GetAspectRatio(rect) {
        return (rect.height === 0) ? NaN : rect.width / rect.height;
    }

    function FitInside(target, source) {
        const ratio = GetAspectRatio(target);
        let width = source.width;
        let height = source.height;
        if (ratio < GetAspectRatio(source)) {
            width = source.height * ratio;
        }
        else {
            height = source.width / ratio;
        }
        return target.set(CenterX(source) - (target.width / 2), CenterY(source) - (target.height / 2), width, height);
    }

    function FitOutside(target, source) {
        const ratio = GetAspectRatio(target);
        let width = source.width;
        let height = source.height;
        if (ratio > GetAspectRatio(source)) {
            width = source.height * ratio;
        }
        else {
            height = source.width / ratio;
        }
        return target.set(CenterX(source) - target.width / 2, CenterY(source) - target.height / 2, width, height);
    }

    function Floor$3(rect) {
        rect.x = Math.floor(rect.x);
        rect.y = Math.floor(rect.y);
        return rect;
    }

    function FloorAll(rect) {
        rect.x = Math.floor(rect.x);
        rect.y = Math.floor(rect.y);
        rect.width = Math.floor(rect.width);
        rect.height = Math.floor(rect.height);
        return rect;
    }

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

    function GetCenter(rect, out = new Vec2()) {
        return out.set(CenterX(rect), CenterY(rect));
    }

    class Line {
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
            }
            else {
                this.x2 = value;
            }
        }
        get right() {
            return Math.max(this.x1, this.x2);
        }
        set right(value) {
            if (this.x1 > this.x2) {
                this.x1 = value;
            }
            else {
                this.x2 = value;
            }
        }
        get top() {
            return Math.min(this.y1, this.y2);
        }
        set top(value) {
            if (this.y1 <= this.y2) {
                this.y1 = value;
            }
            else {
                this.y2 = value;
            }
        }
        get bottom() {
            return Math.max(this.y1, this.y2);
        }
        set bottom(value) {
            if (this.y1 > this.y2) {
                this.y1 = value;
            }
            else {
                this.y2 = value;
            }
        }
    }

    function GetEdges(rectangle) {
        const { x, y, right, bottom } = rectangle;
        const line1 = new Line(x, y, right, y);
        const line2 = new Line(right, y, right, bottom);
        const line3 = new Line(right, bottom, x, bottom);
        const line4 = new Line(x, bottom, x, y);
        return [line1, line2, line3, line4];
    }

    function Perimeter(rect) {
        return 2 * (rect.width + rect.height);
    }

    function GetPoint(rectangle, position, out = new Vec2()) {
        if (position <= 0 || position >= 1) {
            return out.set(rectangle.x, rectangle.y);
        }
        let p = Perimeter(rectangle) * position;
        if (position > 0.5) {
            p -= (rectangle.width + rectangle.height);
            if (p <= rectangle.width) {
                return out.set(rectangle.right - p, rectangle.bottom);
            }
            else {
                return out.set(rectangle.x, rectangle.bottom - (p - rectangle.width));
            }
        }
        else if (p <= rectangle.width) {
            return out.set(rectangle.x + p, rectangle.y);
        }
        else {
            return out.set(rectangle.right, rectangle.y + (p - rectangle.width));
        }
    }

    function GetPoints(rectangle, step, quantity = 0, out = []) {
        if (!quantity) {
            quantity = Perimeter(rectangle) / step;
        }
        for (let i = 0; i < quantity; i++) {
            out.push(GetPoint(rectangle, i / quantity));
        }
        return out;
    }

    function GetSize(rect, out = new Vec2()) {
        return out.set(rect.width, rect.height);
    }

    function Inflate(rect, x, y) {
        const cx = CenterX(rect);
        const cy = CenterY(rect);
        rect.width = rect.width + (x * 2);
        rect.height = rect.height + (y * 2);
        return CenterOn(rect, cx, cy);
    }

    function Intersection(rectA, rectB, out = new Rectangle()) {
        if (RectangleToRectangle(rectA, rectB)) {
            out.set(Math.max(rectA.x, rectB.x), Math.max(rectA.y, rectB.y), Math.min(rectA.right, rectB.right) - out.x, Math.min(rectA.bottom, rectB.bottom) - out.y);
        }
        else {
            out.set();
        }
        return out;
    }

    function MarchingAnts(rect, step, quantity, out = []) {
        if (!step && !quantity) {
            return out;
        }
        if (!step) {
            step = Perimeter(rect) / quantity;
        }
        else {
            quantity = Math.round(Perimeter(rect) / step);
        }
        let x = rect.x;
        let y = rect.y;
        let face = 0;
        for (let i = 0; i < quantity; i++) {
            out.push(new Vec2(x, y));
            switch (face) {
                case 0:
                    x += step;
                    if (x >= rect.right) {
                        face = 1;
                        y += (x - rect.right);
                        x = rect.right;
                    }
                    break;
                case 1:
                    y += step;
                    if (y >= rect.bottom) {
                        face = 2;
                        x -= (y - rect.bottom);
                        y = rect.bottom;
                    }
                    break;
                case 2:
                    x -= step;
                    if (x <= rect.x) {
                        face = 3;
                        y -= (rect.x - x);
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

    function MergeRect(target, source) {
        const minX = Math.min(target.x, source.x);
        const maxX = Math.max(target.right, source.right);
        const minY = Math.min(target.y, source.y);
        const maxY = Math.max(target.bottom, source.bottom);
        return target.set(minX, minY, maxX - minX, maxY - minY);
    }

    function MergeXY(target, x, y) {
        const minX = Math.min(target.x, x);
        const maxX = Math.max(target.right, x);
        const minY = Math.min(target.y, y);
        const maxY = Math.max(target.bottom, y);
        return target.set(minX, minY, maxX - minX, maxY - minY);
    }

    function Offset(rect, x, y) {
        rect.x += x;
        rect.y += y;
        return rect;
    }

    function OffsetPoint(rect, point) {
        rect.x += point.x;
        rect.y += point.y;
        return rect;
    }

    function Overlaps(rectA, rectB) {
        return (rectA.x < rectB.right &&
            rectA.right > rectB.x &&
            rectA.y < rectB.bottom &&
            rectA.bottom > rectB.y);
    }

    function PerimeterPoint(rectangle, angle, out = new Vec2()) {
        angle = DegToRad(angle);
        const s = Math.sin(angle);
        const c = Math.cos(angle);
        let dx = (c > 0) ? rectangle.width / 2 : rectangle.width / -2;
        let dy = (s > 0) ? rectangle.height / 2 : rectangle.height / -2;
        if (Math.abs(dx * s) < Math.abs(dy * c)) {
            dy = (dx * s) / c;
        }
        else {
            dx = (dy * c) / s;
        }
        return out.set(dx + CenterX(rectangle), dy + CenterY(rectangle));
    }

    function Random$3(rect, out = new Vec2()) {
        return out.set(rect.x + (Math.random() * rect.width), rect.y + (Math.random() * rect.height));
    }

    function RandomOutside(outer, inner, out = new Vec2()) {
        if (ContainsRect(outer, inner)) {
            switch (Between(0, 3)) {
                case 0:
                    out.x = outer.x + (Math.random() * (inner.right - outer.x));
                    out.y = outer.y + (Math.random() * (inner.y - outer.y));
                    break;
                case 1:
                    out.x = inner.x + (Math.random() * (outer.right - inner.x));
                    out.y = inner.bottom + (Math.random() * (outer.bottom - inner.bottom));
                    break;
                case 2:
                    out.x = outer.x + (Math.random() * (inner.x - outer.x));
                    out.y = inner.y + (Math.random() * (outer.bottom - inner.y));
                    break;
                case 3:
                    out.x = inner.right + (Math.random() * (outer.right - inner.right));
                    out.y = outer.y + (Math.random() * (inner.bottom - outer.y));
                    break;
            }
        }
        return out;
    }

    function SameDimensions(rect, toCompare) {
        return (rect.width === toCompare.width && rect.height === toCompare.height);
    }

    function Scale$6(rect, x, y = x) {
        rect.width *= x;
        rect.height *= y;
        return rect;
    }

    function Union(rectA, rectB, out = new Rectangle()) {
        const x = Math.min(rectA.x, rectB.x);
        const y = Math.min(rectA.y, rectB.y);
        const w = Math.max(rectA.right, rectB.right) - x;
        const h = Math.max(rectA.bottom, rectB.bottom) - y;
        return out.set(x, y, w, h);
    }

    var index$A = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Area: Area,
        Ceil: Ceil$3,
        CeilAll: CeilAll,
        CenterOn: CenterOn,
        CenterX: CenterX,
        CenterY: CenterY,
        Clone: Clone$6,
        Contains: Contains,
        ContainsPoint: ContainsPoint,
        ContainsRect: ContainsRect,
        CopyFrom: CopyFrom$6,
        Decompose: Decompose,
        Equals: Equals$6,
        FitInside: FitInside,
        FitOutside: FitOutside,
        Floor: Floor$3,
        FloorAll: FloorAll,
        FromPoints: FromPoints,
        GetAspectRatio: GetAspectRatio,
        GetCenter: GetCenter,
        GetEdges: GetEdges,
        GetPoint: GetPoint,
        GetPoints: GetPoints,
        GetSize: GetSize,
        Inflate: Inflate,
        Intersection: Intersection,
        MarchingAnts: MarchingAnts,
        MergePoints: MergePoints,
        MergeRect: MergeRect,
        MergeXY: MergeXY,
        Offset: Offset,
        OffsetPoint: OffsetPoint,
        Overlaps: Overlaps,
        Perimeter: Perimeter,
        PerimeterPoint: PerimeterPoint,
        Random: Random$3,
        RandomOutside: RandomOutside,
        Rectangle: Rectangle,
        SameDimensions: SameDimensions,
        Scale: Scale$6,
        Union: Union
    });

    function UpdateLocalTransform(transform) {
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

    function UpdateWorldTransform(gameObject) {
        const parent = gameObject.parent;
        const transform = gameObject.transform;
        const lt = transform.local;
        const wt = transform.world;
        if (!parent) {
            CopyFrom$3(lt, wt);
        }
        else if (transform.passthru) {
            CopyFrom$3(parent.transform.world, wt);
        }
        else {
            const { a, b, c, d, tx, ty } = lt;
            const { a: pa, b: pb, c: pc, d: pd, tx: ptx, ty: pty } = parent.transform.world;
            wt.set(a * pa + b * pc, a * pb + b * pd, c * pa + d * pc, c * pb + d * pd, tx * pa + ty * pc + ptx, tx * pb + ty * pd + pty);
        }
    }

    class TransformComponent {
        constructor(entity, x = 0, y = 0) {
            this.passthru = false;
            this._rotation = 0;
            this.entity = entity;
            this.local = new Matrix2D();
            this.world = new Matrix2D();
            this.position = new Vec2Callback(() => this.update(), x, y);
            this.scale = new Vec2Callback(() => this.update(), 1, 1);
            this.skew = new Vec2Callback(() => this.update());
            this.origin = new Vec2Callback(() => this.updateExtent(), originX, originY);
            this.extent = new Rectangle();
        }
        update() {
            this.updateLocal();
            this.updateWorld();
        }
        updateLocal() {
            this.entity.setDirty(DIRTY_CONST.TRANSFORM, DIRTY_CONST.BOUNDS);
            UpdateLocalTransform(this);
        }
        updateWorld() {
            const entity = this.entity;
            entity.setDirty(DIRTY_CONST.TRANSFORM, DIRTY_CONST.BOUNDS);
            UpdateWorldTransform(entity);
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
        globalToLocal(x, y, out = new Vec2()) {
            const { a, b, c, d, tx, ty } = this.world;
            const id = 1 / ((a * d) + (c * -b));
            out.x = (d * id * x) + (-c * id * y) + (((ty * c) - (tx * d)) * id);
            out.y = (a * id * y) + (-b * id * x) + (((-ty * a) + (tx * b)) * id);
            return out;
        }
        localToGlobal(x, y, out = new Vec2()) {
            const { a, b, c, d, tx, ty } = this.world;
            out.x = (a * x) + (c * y) + tx;
            out.y = (b * x) + (d * y) + ty;
            return out;
        }
        setExtent(x, y, width, height) {
            this.extent.set(x, y, width, height);
            this.entity.setDirty(DIRTY_CONST.TRANSFORM, DIRTY_CONST.BOUNDS);
        }
        updateExtent(width, height) {
            const extent = this.extent;
            const entity = this.entity;
            if (width !== undefined) {
                extent.width = width;
            }
            if (height !== undefined) {
                extent.height = height;
            }
            extent.x = -(this.origin.x) * extent.width;
            extent.y = -(this.origin.y) * extent.height;
            entity.setDirty(DIRTY_CONST.TRANSFORM, DIRTY_CONST.BOUNDS);
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

    var index$B = /*#__PURE__*/Object.freeze({
        __proto__: null,
        GetVertices: GetVertices,
        TransformComponent: TransformComponent,
        UpdateLocalTransform: UpdateLocalTransform,
        UpdateWorldTransform: UpdateWorldTransform
    });

    function PackColor(rgb, alpha) {
        const ua = ((alpha * 255) | 0) & 0xFF;
        return ((ua << 24) | rgb) >>> 0;
    }

    class Vertex {
        constructor(x = 0, y = 0, z = 0) {
            this.x = 0;
            this.y = 0;
            this.z = 0;
            this.u = 0;
            this.v = 0;
            this.texture = 0;
            this.tint = 0xffffff;
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
        setColor(color, alpha = 1) {
            this.tint = color;
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

    var index$C = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Bounds: index$y,
        Input: index$z,
        Transform: index$B,
        Vertex: Vertex
    });

    function AddViewport(renderPass, x = 0, y = 0, width = 0, height = 0) {
        const viewport = new Rectangle(x, y, width, height);
        renderPass.viewportStack.push(viewport);
        return viewport;
    }

    let gl;
    const GL = {
        get: () => {
            return gl;
        },
        set: (context) => {
            gl = context;
        }
    };

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

    function SetViewport(renderPass, x = 0, y = 0, width = 0, height = 0) {
        const entry = AddViewport(renderPass, x, y, width, height);
        BindViewport(renderPass, entry);
        renderPass.currentViewport = entry;
    }

    function BindFramebuffer(renderPass, clear = true, entry) {
        if (!entry) {
            entry = renderPass.currentFramebuffer;
        }
        const { framebuffer, viewport } = entry;
        gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer);
        if (clear) {
            gl.clearColor(0, 0, 0, 0);
            gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        }
        if (viewport) {
            SetViewport(renderPass, viewport.x, viewport.y, viewport.width, viewport.height);
        }
    }

    function PopViewport(renderPass) {
        const stack = renderPass.viewportStack;
        if (stack.length > 1) {
            stack.pop();
        }
        renderPass.currentViewport = stack[stack.length - 1];
        BindViewport(renderPass);
    }

    function PopFramebuffer(renderPass) {
        const stack = renderPass.framebufferStack;
        if (stack.length > 1) {
            if (renderPass.currentFramebuffer.viewport) {
                PopViewport(renderPass);
            }
            stack.pop();
        }
        renderPass.currentFramebuffer = stack[stack.length - 1];
        BindFramebuffer(renderPass, false);
    }

    function AddFramebuffer(renderPass, framebuffer, viewport) {
        const entry = { framebuffer, viewport };
        renderPass.framebufferStack.push(entry);
        return entry;
    }

    function SetFramebuffer(renderPass, framebuffer, clear = true, viewport) {
        const entry = AddFramebuffer(renderPass, framebuffer, viewport);
        BindFramebuffer(renderPass, clear, entry);
        renderPass.currentFramebuffer = entry;
    }

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
            const type = (currentBuffer.isDynamic) ? gl.DYNAMIC_DRAW : gl.STATIC_DRAW;
            gl.bufferData(gl.ARRAY_BUFFER, currentBuffer.data, type);
        }
        else {
            const subsize = (currentBuffer.indexed) ? count * currentBuffer.entryElementSize : count * currentBuffer.vertexElementSize;
            const view = currentBuffer.vertexViewF32.subarray(0, subsize);
            gl.bufferSubData(gl.ARRAY_BUFFER, 0, view);
        }
        if (currentBuffer.indexed) {
            gl.drawElements(gl.TRIANGLES, count * currentBuffer.entryIndexSize, gl.UNSIGNED_SHORT, 0);
        }
        else {
            gl.drawArrays(gl.TRIANGLES, 0, count);
        }
        if (renderToFramebuffer) {
            PopFramebuffer(renderPass);
        }
    }

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

    function GetVertexBufferEntry(renderPass, addToCount = 0) {
        const buffer = renderPass.currentVertexBuffer;
        if (renderPass.count + addToCount >= buffer.batchSize) {
            Flush(renderPass);
        }
        const offset = (buffer.indexed) ? renderPass.count * buffer.entryElementSize : renderPass.count * buffer.vertexElementSize;
        renderPass.count += addToCount;
        return {
            buffer,
            F32: buffer.vertexViewF32,
            U32: buffer.vertexViewU32,
            offset
        };
    }

    function SetTexture(renderPass, texture) {
        const binding = texture.binding;
        const currentActiveTexture = renderPass.currentActiveTexture;
        if (binding.indexCounter < renderPass.startActiveTexture) {
            binding.indexCounter = renderPass.startActiveTexture;
            if (currentActiveTexture < renderPass.maxTextures) {
                binding.setIndex(currentActiveTexture);
                gl.activeTexture(gl.TEXTURE0 + currentActiveTexture);
                gl.bindTexture(gl.TEXTURE_2D, binding.texture);
                renderPass.currentActiveTexture++;
            }
            else {
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

    function BatchTexturedQuad(sprite, renderPass) {
        const { F32, U32, offset } = GetVertexBufferEntry(renderPass, 1);
        const textureIndex = SetTexture(renderPass, sprite.texture);
        let vertOffset = offset;
        sprite.vertices.forEach(vertex => {
            F32[vertOffset + 0] = vertex.x;
            F32[vertOffset + 1] = vertex.y;
            F32[vertOffset + 2] = vertex.u;
            F32[vertOffset + 3] = vertex.v;
            F32[vertOffset + 4] = textureIndex;
            U32[vertOffset + 5] = vertex.color;
            vertOffset += 6;
        });
    }

    class GameObject {
        constructor(x = 0, y = 0) {
            this.type = 'GameObject';
            this.name = '';
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
            this.transform = new TransformComponent(this, x, y);
            this.bounds = new BoundsComponent(this);
            this.input = new InputComponent(this);
            this.dirty = DIRTY_CONST.DEFAULT;
            this.transform.update();
        }
        isRenderable() {
            return (this.visible && this.willRender);
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
                this.dirtyFrame = GameInstance.getFrame();
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
            }
            else {
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

    class Container extends GameObject {
        constructor(x = 0, y = 0) {
            super(x, y);
            this._alpha = 1;
            this.type = 'Container';
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
            this.transform.updateExtent(undefined, value);
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
                this.setDirty(DIRTY_CONST.TRANSFORM);
            }
        }
    }

    function DrawTexturedQuad(sprite, renderer) {
        const frame = sprite.frame;
        if (!frame) {
            return;
        }
        const ctx = renderer.ctx;
        const transform = sprite.transform;
        const { a, b, c, d, tx, ty } = transform.world;
        const { x, y } = transform.extent;
        ctx.save();
        ctx.setTransform(a, b, c, d, tx, ty);
        ctx.globalAlpha = sprite.alpha;
        ctx.drawImage(frame.texture.image, frame.x, frame.y, frame.width, frame.height, x, y, frame.width, frame.height);
        ctx.restore();
    }

    function PackColors(sprite) {
        sprite.vertices.forEach(vertex => {
            vertex.packColor();
        });
        return sprite;
    }

    function SetFrame(texture, key, ...children) {
        const frame = texture.getFrame(key);
        const { u0, u1, v0, v1, pivot } = frame;
        children.forEach(child => {
            if (!child || frame === child.frame) {
                return;
            }
            child.frame = frame;
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

    const queue = [];
    const BindingQueue = {
        add: (texture, glConfig) => {
            queue.push({ texture, glConfig });
        },
        get: () => {
            return queue;
        },
        clear: () => {
            queue.length = 0;
        }
    };

    class Frame {
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
            this.pivot = { x, y };
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
        getExtent(originX, originY) {
            const sourceSizeWidth = this.sourceSizeWidth;
            const sourceSizeHeight = this.sourceSizeHeight;
            let left;
            let right;
            let top;
            let bottom;
            if (this.trimmed) {
                left = this.spriteSourceSizeX - (originX * sourceSizeWidth);
                right = left + this.spriteSourceSizeWidth;
                top = this.spriteSourceSizeY - (originY * sourceSizeHeight);
                bottom = top + this.spriteSourceSizeHeight;
            }
            else {
                left = -originX * sourceSizeWidth;
                right = left + sourceSizeWidth;
                top = -originY * sourceSizeHeight;
                bottom = top + sourceSizeHeight;
            }
            return { left, right, top, bottom };
        }
        setExtent(child) {
            const transform = child.transform;
            const originX = transform.origin.x;
            const originY = transform.origin.y;
            const sourceSizeWidth = this.sourceSizeWidth;
            const sourceSizeHeight = this.sourceSizeHeight;
            let x;
            let y;
            let width;
            let height;
            if (this.trimmed) {
                x = this.spriteSourceSizeX - (originX * sourceSizeWidth);
                y = this.spriteSourceSizeY - (originY * sourceSizeHeight);
                width = this.spriteSourceSizeWidth;
                height = this.spriteSourceSizeHeight;
            }
            else {
                x = -originX * sourceSizeWidth;
                y = -originY * sourceSizeHeight;
                width = sourceSizeWidth;
                height = sourceSizeHeight;
            }
            transform.setExtent(x, y, width, height);
        }
        updateUVs() {
            const { x, y, width, height } = this;
            const baseTextureWidth = this.texture.width;
            const baseTextureHeight = this.texture.height;
            this.u0 = x / baseTextureWidth;
            this.v0 = y / baseTextureHeight;
            this.u1 = (x + width) / baseTextureWidth;
            this.v1 = (y + height) / baseTextureHeight;
        }
    }

    class Texture {
        constructor(image, width, height, glConfig) {
            this.key = '';
            if (image) {
                width = image.width;
                height = image.height;
            }
            this.image = image;
            this.width = width;
            this.height = height;
            this.frames = new Map();
            this.data = {};
            this.addFrame('__BASE', 0, 0, width, height);
            BindingQueue.add(this, glConfig);
        }
        addFrame(key, x, y, width, height) {
            if (this.frames.has(key)) {
                return null;
            }
            const frame = new Frame(this, key, x, y, width, height);
            this.frames.set(key, frame);
            if (!this.firstFrame || this.firstFrame.key === '__BASE') {
                this.firstFrame = frame;
            }
            return frame;
        }
        getFrame(key) {
            if (!key) {
                return this.firstFrame;
            }
            if (key instanceof Frame) {
                key = key.key;
            }
            let frame = this.frames.get(key);
            if (!frame) {
                console.warn(`Frame missing: ${key}`);
                frame = this.firstFrame;
            }
            return frame;
        }
        setSize(width, height) {
            this.width = width;
            this.height = height;
            const frame = this.frames.get('__BASE');
            frame.setSize(width, height);
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

    let instance$1;
    const TextureManagerInstance = {
        get: () => {
            return instance$1;
        },
        set: (manager) => {
            instance$1 = manager;
        }
    };

    function SetTexture$1(key, frame, ...children) {
        if (!key) {
            children.forEach(child => {
                child.texture = null;
                child.frame = null;
                child.hasTexture = false;
            });
        }
        else {
            let texture;
            if (key instanceof Texture) {
                texture = key;
            }
            else {
                texture = TextureManagerInstance.get().get(key);
            }
            if (!texture) {
                console.warn(`Invalid Texture key: ${key}`);
            }
            else {
                children.forEach(child => {
                    child.texture = texture;
                });
                SetFrame(texture, frame, ...children);
            }
        }
        return children;
    }

    function UpdateVertices(sprite) {
        const vertices = sprite.vertices;
        const { x0, y0, x1, y1, x2, y2, x3, y3 } = GetVertices(sprite.transform);
        vertices[0].setPosition(x0, y0);
        vertices[1].setPosition(x1, y1);
        vertices[2].setPosition(x2, y2);
        vertices[3].setPosition(x3, y3);
        return sprite;
    }

    class Sprite extends Container {
        constructor(x, y, texture, frame) {
            super(x, y);
            this.hasTexture = false;
            this._tint = 0xffffff;
            this.type = 'Sprite';
            this.vertices = [new Vertex(), new Vertex(), new Vertex(), new Vertex()];
            this.setTexture(texture, frame);
        }
        setTexture(key, frame) {
            SetTexture$1(key, frame, this);
            return this;
        }
        setFrame(key) {
            SetFrame(this.texture, key, this);
            return this;
        }
        isRenderable() {
            return (this.visible && this.willRender && this.hasTexture && this.alpha > 0);
        }
        preRender() {
            if (this.isDirty(DIRTY_CONST.COLORS)) {
                PackColors(this);
                this.clearDirty(DIRTY_CONST.COLORS);
            }
            if (this.isDirty(DIRTY_CONST.TRANSFORM)) {
                UpdateVertices(this);
                this.clearDirty(DIRTY_CONST.TRANSFORM);
            }
        }
        renderGL(renderPass) {
            this.preRender();
            BatchTexturedQuad(this, renderPass);
        }
        renderCanvas(renderer) {
            this.preRender();
            DrawTexturedQuad(this, renderer);
        }
        get alpha() {
            return this._alpha;
        }
        set alpha(value) {
            if (value !== this._alpha) {
                this._alpha = value;
                this.vertices.forEach(vertex => {
                    vertex.setAlpha(value);
                });
                this.setDirty(DIRTY_CONST.COLORS);
            }
        }
        get tint() {
            return this._tint;
        }
        set tint(value) {
            if (value !== this._tint) {
                this._tint = value;
                this.vertices.forEach(vertex => {
                    vertex.setTint(value);
                });
                this.setDirty(DIRTY_CONST.COLORS);
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

    class AnimatedSprite extends Sprite {
        constructor(x, y, texture, frame) {
            super(x, y, texture, frame);
            this.type = 'AnimatedSprite';
            this.anims = new Map();
            this.animData = {
                currentAnim: '',
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
            data.currentAnim = '';
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
                }
                else if (data.repeatCount === -1 || data.repeatCount > 0) {
                    data.frameIndex = 0;
                    if (data.repeatCount !== -1) {
                        data.repeatCount--;
                    }
                    if (data.onRepeat) {
                        data.onRepeat(this, data.currentAnim);
                    }
                    data.nextFrameTime += data.repeatDelay;
                }
                else {
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
                }
                else {
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
            data.nextFrameTime -= delta * 1000;
            data.nextFrameTime = Math.max(data.nextFrameTime, 0);
            if (data.nextFrameTime === 0) {
                if (data.pendingStart) {
                    if (data.onStart) {
                        data.onStart(this, data.currentAnim);
                    }
                    data.pendingStart = false;
                    data.nextFrameTime = data.animSpeed;
                }
                else if (data.playingForward) {
                    this.nextFrame();
                }
                else {
                    this.prevFrame();
                }
            }
        }
        get isPlaying() {
            return this.animData.isPlaying;
        }
        get isPlayingForward() {
            return (this.animData.isPlaying && this.animData.playingForward);
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

    function AddShader(renderPass, shader, textureID) {
        const stackEntry = { shader, textureID };
        renderPass.shaderStack.push(stackEntry);
        return stackEntry;
    }

    function AddVertexBuffer(renderPass, buffer) {
        renderPass.vertexBufferStack.push(buffer);
        return buffer;
    }

    function BindShader(renderPass, entry) {
        if (!entry) {
            entry = renderPass.currentShader;
        }
        const success = entry.shader.bind(renderPass, entry.textureID);
        if (success) {
            entry.shader.setAttributes(renderPass);
        }
    }

    function Begin(renderPass, camera2D) {
        renderPass.current2DCamera = camera2D;
        renderPass.cameraMatrix = camera2D.matrix;
        BindShader(renderPass);
    }

    function BindBlendMode(renderPass, entry) {
        if (!entry) {
            entry = renderPass.currentBlendMode;
        }
        if (entry.enable) {
            gl.enable(gl.BLEND);
            gl.blendFunc(entry.sfactor, entry.dfactor);
        }
        else {
            gl.disable(gl.BLEND);
        }
    }

    function BindTexture(texture, index = 0) {
        const binding = texture.binding;
        binding.setIndex(index);
        gl.activeTexture(gl.TEXTURE0 + index);
        gl.bindTexture(gl.TEXTURE_2D, binding.texture);
    }

    function BindVertexBuffer(renderPass, buffer) {
        if (!buffer) {
            buffer = renderPass.currentVertexBuffer;
        }
        const indexBuffer = (buffer.indexed) ? buffer.indexBuffer : null;
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer.vertexBuffer);
    }

    let maxTextures = 0;
    function SetMaxTextures(max) {
        maxTextures = max;
    }
    function GetMaxTextures() {
        return maxTextures;
    }

    const fragTemplate = [
        'precision mediump float;',
        'void main(void){',
        'float test = 0.1;',
        '%forloop%',
        'gl_FragColor = vec4(0.0);',
        '}'
    ].join('\n');
    function GenerateSrc(maxIfs) {
        let src = '';
        for (let i = 0; i < maxIfs; ++i) {
            if (i > 0) {
                src += '\nelse ';
            }
            if (i < maxIfs - 1) {
                src += `if(test == ${i}.0){}`;
            }
        }
        return src;
    }
    function CheckShaderMaxIfStatements(maxIfs) {
        const shader = gl.createShader(gl.FRAGMENT_SHADER);
        while (true) {
            const fragmentSrc = fragTemplate.replace(/%forloop%/gi, GenerateSrc(maxIfs));
            gl.shaderSource(shader, fragmentSrc);
            gl.compileShader(shader);
            if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
                maxIfs = (maxIfs / 2) | 0;
            }
            else {
                break;
            }
        }
        return maxIfs;
    }

    function CreateTempTextures(renderPass) {
        let maxGPUTextures = CheckShaderMaxIfStatements(gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS));
        const maxConfigTextures = GetMaxTextures();
        if (maxConfigTextures === 0 || (maxConfigTextures > 0 && maxConfigTextures > maxGPUTextures)) {
            SetMaxTextures(maxGPUTextures);
        }
        else if (maxConfigTextures > 0 && maxConfigTextures < maxGPUTextures) {
            maxGPUTextures = Math.max(8, maxConfigTextures);
        }
        const tempTextures = renderPass.tempTextures;
        if (tempTextures.length) {
            tempTextures.forEach(texture => {
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

    function End(renderPass) {
        Flush(renderPass);
    }

    function PopVertexBuffer(renderPass) {
        const stack = renderPass.vertexBufferStack;
        if (stack.length > 1) {
            stack.pop();
        }
        renderPass.currentVertexBuffer = stack[stack.length - 1];
        BindVertexBuffer(renderPass);
    }

    function SetVertexBuffer(renderPass, buffer) {
        const entry = AddVertexBuffer(renderPass, buffer);
        BindVertexBuffer(renderPass, entry);
        renderPass.currentVertexBuffer = entry;
    }

    function FlushBuffer(renderPass, buffer) {
        SetVertexBuffer(renderPass, buffer);
        renderPass.currentShader.shader.setAttributes(renderPass);
        const result = Flush(renderPass, buffer.count);
        PopVertexBuffer(renderPass);
        return result;
    }

    function PopShader(renderPass) {
        const stack = renderPass.shaderStack;
        if (stack.length > 1) {
            stack.pop();
        }
        renderPass.currentShader = stack[stack.length - 1];
        BindShader(renderPass);
    }

    function CreateGLTexture(binding) {
        const { parent, flipY, unpackPremultiplyAlpha, minFilter, magFilter, wrapS, wrapT, generateMipmap, isPOT } = binding;
        const source = parent.image;
        let width = parent.width;
        let height = parent.height;
        const glTexture = gl.createTexture();
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, glTexture);
        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, flipY);
        gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, unpackPremultiplyAlpha);
        if (source) {
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, source);
            width = source.width;
            height = source.height;
        }
        else {
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

    function DeleteFramebuffer(framebuffer) {
        if (gl && gl.isFramebuffer(framebuffer)) {
            gl.deleteFramebuffer(framebuffer);
        }
    }

    function DeleteGLTexture(texture) {
        if (gl.isTexture(texture)) {
            gl.deleteTexture(texture);
        }
    }

    function SetGLTextureFilterMode(texture, linear = true) {
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, texture);
        const mode = (linear) ? gl.LINEAR : gl.NEAREST;
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, mode);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, mode);
    }

    function UpdateGLTexture(binding) {
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

    class GLTextureBinding {
        constructor(parent, config = {}) {
            this.index = 0;
            this.indexCounter = -1;
            this.dirtyIndex = true;
            this.unpackPremultiplyAlpha = true;
            this.flipY = false;
            this.isPOT = false;
            this.generateMipmap = false;
            this.parent = parent;
            this.isPOT = IsSizePowerOfTwo(parent.width, parent.height);
            const { texture = null, framebuffer = null, depthbuffer = null, unpackPremultiplyAlpha = true, minFilter = (this.isPOT) ? gl.LINEAR_MIPMAP_LINEAR : gl.LINEAR, magFilter = gl.LINEAR, wrapS = gl.CLAMP_TO_EDGE, wrapT = gl.CLAMP_TO_EDGE, generateMipmap = this.isPOT, flipY = false } = config;
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
            }
            else {
                CreateGLTexture(this);
            }
        }
        setFilter(linear) {
            if (this.texture) {
                SetGLTextureFilterMode(this.texture, linear);
            }
        }
        create() {
            const texture = this.texture;
            if (texture) {
                DeleteGLTexture(texture);
            }
            return CreateGLTexture(this);
        }
        update() {
            const texture = this.texture;
            if (!texture) {
                return CreateGLTexture(this);
            }
            else {
                return UpdateGLTexture(this);
            }
        }
        setIndex(index) {
            this.dirtyIndex = (index !== this.index);
            this.index = index;
        }
        destroy() {
            DeleteGLTexture(this.texture);
            DeleteFramebuffer(this.framebuffer);
            this.parent = null;
            this.texture = null;
            this.framebuffer = null;
        }
    }

    function ProcessBindingQueue() {
        const queue = BindingQueue.get();
        queue.forEach(entry => {
            const { texture, glConfig } = entry;
            if (!texture.binding) {
                texture.binding = new GLTextureBinding(texture, glConfig);
            }
        });
        BindingQueue.clear();
    }

    function DeleteGLBuffer(buffer) {
        if (gl.isBuffer(buffer)) {
            gl.deleteBuffer(buffer);
        }
    }

    class VertexBuffer {
        constructor(config = {}) {
            this.indexed = false;
            this.isDynamic = false;
            this.count = 0;
            this.offset = 0;
            const { batchSize = 1, dataSize = 4, isDynamic = true, elementsPerEntry = 4, vertexElementSize = 6 } = config;
            this.batchSize = batchSize;
            this.dataSize = dataSize;
            this.vertexElementSize = vertexElementSize;
            this.isDynamic = isDynamic;
            this.elementsPerEntry = elementsPerEntry;
            this.vertexByteSize = vertexElementSize * dataSize;
            this.entryByteSize = this.vertexByteSize * elementsPerEntry;
            this.bufferByteSize = batchSize * this.entryByteSize;
            this.create();
        }
        resize(batchSize) {
            this.batchSize = batchSize;
            this.bufferByteSize = batchSize * this.entryByteSize;
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
            const type = (this.isDynamic) ? gl.DYNAMIC_DRAW : gl.STATIC_DRAW;
            gl.bufferData(gl.ARRAY_BUFFER, data, type);
            gl.bindBuffer(gl.ARRAY_BUFFER, null);
        }
        add(count) {
            this.count += count;
            this.offset += (this.vertexElementSize * count);
        }
        reset() {
            this.count = 0;
            this.offset = 0;
        }
        canContain(count) {
            return ((this.count + count) <= this.batchSize);
        }
        free() {
            return Math.max(0, 1 - (this.count / this.batchSize));
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

    class IndexedVertexBuffer extends VertexBuffer {
        constructor(config = {}) {
            super(config);
            const { indexSize = 4, entryIndexSize = 6, indexLayout = null } = config;
            this.indexed = true;
            this.indexSize = indexSize;
            this.entryIndexSize = entryIndexSize;
            this.entryElementSize = this.vertexElementSize * this.elementsPerEntry;
            const seededIndexBuffer = [];
            if (indexLayout) {
                this.indexLayout = indexLayout;
                for (let i = 0; i < (this.batchSize * indexSize); i += indexSize) {
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

    function CreateAttributes(program, config) {
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
            const setting = config.hasOwnProperty(name) ? config[name] : {};
            const { size = defaultSettings.size, type = defaultSettings.type, normalized = defaultSettings.normalized, stride = defaultSettings.stride, offset = defaultSettings.offset } = setting;
            attributes.set(name, { index, size, type, normalized, stride, offset });
        }
        return attributes;
    }

    function DeleteShaders(...shaders) {
        shaders.forEach(shader => {
            gl.deleteShader(shader);
        });
    }

    function CreateProgram(...shaders) {
        const program = gl.createProgram();
        shaders.forEach(shader => {
            gl.attachShader(program, shader);
        });
        gl.linkProgram(program);
        const status = gl.getProgramParameter(program, gl.LINK_STATUS);
        if (!status) {
            const info = gl.getProgramInfoLog(program);
            console.error(`Error linking program: ${info}`);
            gl.deleteProgram(program);
            DeleteShaders(...shaders);
            return null;
        }
        return program;
    }

    function CreateShader(source, type) {
        const shader = gl.createShader(type);
        gl.shaderSource(shader, source);
        gl.compileShader(shader);
        const status = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
        if (!status) {
            const info = gl.getShaderInfoLog(shader);
            const sourceLines = source.split('\n').map((line, index) => {
                return `${index}: ${line}`;
            });
            console.error(`Error compiling shader: ${info}`, sourceLines.join('\n'));
            gl.deleteShader(shader);
            return null;
        }
        return shader;
    }

    function CreateUniformSetter(uniform, location, isArray = false) {
        switch (uniform.type) {
            case gl.INT:
            case gl.BOOL:
                {
                    if (isArray) {
                        return (v) => {
                            gl.uniform1iv(location, v);
                        };
                    }
                    else {
                        return (v) => {
                            gl.uniform1i(location, v);
                        };
                    }
                }
            case gl.INT_VEC2:
            case gl.BOOL_VEC2:
                {
                    return (v) => {
                        gl.uniform2iv(location, v);
                    };
                }
            case gl.INT_VEC3:
            case gl.BOOL_VEC3:
                {
                    return (v) => {
                        gl.uniform3iv(location, v);
                    };
                }
            case gl.INT_VEC4:
            case gl.BOOL_VEC4:
                {
                    return (v) => {
                        gl.uniform4iv(location, v);
                    };
                }
            case gl.FLOAT:
                {
                    if (isArray) {
                        return (v) => {
                            gl.uniform1fv(location, v);
                        };
                    }
                    else {
                        return (v) => {
                            gl.uniform1f(location, v);
                        };
                    }
                }
            case gl.FLOAT_VEC2:
                {
                    return (v) => {
                        gl.uniform2fv(location, v);
                    };
                }
            case gl.FLOAT_VEC3:
                {
                    return (v) => {
                        gl.uniform3fv(location, v);
                    };
                }
            case gl.FLOAT_VEC4:
                {
                    return (v) => {
                        gl.uniform4fv(location, v);
                    };
                }
            case gl.FLOAT_MAT2:
                {
                    return (v) => {
                        gl.uniformMatrix2fv(location, false, v);
                    };
                }
            case gl.FLOAT_MAT3:
                {
                    return (v) => {
                        gl.uniformMatrix3fv(location, false, v);
                    };
                }
            case gl.FLOAT_MAT4:
                {
                    return (v) => {
                        gl.uniformMatrix4fv(location, false, v);
                    };
                }
            case gl.SAMPLER_2D:
            case gl.SAMPLER_CUBE:
                {
                    if (uniform.size > 1) {
                        return (v) => {
                            gl.uniform1iv(location, v);
                        };
                    }
                    else {
                        return (v) => {
                            gl.uniform1i(location, v);
                        };
                    }
                }
        }
    }

    function CreateUniforms(program) {
        const uniforms = new Map();
        const total = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);
        for (let i = 0; i < total; i++) {
            const uniform = gl.getActiveUniform(program, i);
            let name = uniform.name;
            if (name.startsWith('gl_') || name.startsWith('webgl_')) {
                continue;
            }
            const location = gl.getUniformLocation(program, uniform.name);
            if (location) {
                let isArray = false;
                if (name.substr(-3) === '[0]') {
                    name = name.substr(0, name.length - 3);
                    isArray = (uniform.size > 1);
                }
                uniforms.set(name, CreateUniformSetter(uniform, location, isArray));
            }
        }
        return uniforms;
    }

    const UNSIGNED_BYTE = 0x1401;
    const FLOAT = 0x1406;

    const DefaultQuadAttributes = {
        aVertexPosition: { size: 2, type: FLOAT, normalized: false, offset: 0 },
        aTextureCoord: { size: 2, type: FLOAT, normalized: false, offset: 8 },
        aTextureId: { size: 1, type: FLOAT, normalized: false, offset: 16 },
        aTintColor: { size: 4, type: UNSIGNED_BYTE, normalized: true, offset: 20 }
    };

    const DefaultQuadUniforms = {
        uProjectionMatrix: new Float32Array(),
        uCameraMatrix: new Float32Array(),
        uTexture: 0
    };

    let _width = 800;
    let _height = 600;
    let _resolution = 1;
    function GetWidth() {
        return _width;
    }
    function GetHeight() {
        return _height;
    }
    function GetResolution() {
        return _resolution;
    }

    function CreateDepthBuffer(framebuffer, textureWidth, textureHeight) {
        gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer);
        const depthBuffer = gl.createRenderbuffer();
        gl.bindRenderbuffer(gl.RENDERBUFFER, depthBuffer);
        gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, textureWidth, textureHeight);
        gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, depthBuffer);
        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
        return depthBuffer;
    }

    function CreateFramebuffer(texture, attachment) {
        if (!attachment) {
            attachment = gl.COLOR_ATTACHMENT0;
        }
        const framebuffer = gl.createFramebuffer();
        gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer);
        gl.framebufferTexture2D(gl.FRAMEBUFFER, attachment, gl.TEXTURE_2D, texture, 0);
        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
        return framebuffer;
    }

    const SINGLE_QUAD_FRAG = `#define SHADER_NAME SINGLE_QUAD_FRAG

precision highp float;

varying vec2 vTextureCoord;
varying float vTextureId;
varying vec4 vTintColor;

uniform sampler2D uTexture;

void main (void)
{
    vec4 color = texture2D(uTexture, vTextureCoord);

    gl_FragColor = color * vec4(vTintColor.bgr * vTintColor.a, vTintColor.a);
}`;

    const SINGLE_QUAD_VERT = `#define SHADER_NAME SINGLE_QUAD_VERT

precision highp float;

attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;
attribute float aTextureId;
attribute vec4 aTintColor;

uniform mat4 uProjectionMatrix;
uniform mat4 uCameraMatrix;

varying vec2 vTextureCoord;
varying float vTextureId;
varying vec4 vTintColor;

void main (void)
{
    vTextureCoord = aTextureCoord;
    vTextureId = aTextureId;
    vTintColor = aTintColor;

    gl_Position = uProjectionMatrix * uCameraMatrix * vec4(aVertexPosition, 0.0, 1.0);
}`;

    class Shader {
        constructor(config) {
            this.renderToFramebuffer = false;
            this.renderToDepthbuffer = false;
            if (config) {
                this.fromConfig(config);
            }
        }
        fromConfig(config) {
            const { attributes = DefaultQuadAttributes, fragmentShader = SINGLE_QUAD_FRAG, height = GetHeight(), renderToFramebuffer = false, renderToDepthbuffer = false, resolution = GetResolution(), vertexShader = SINGLE_QUAD_VERT, width = GetWidth(), uniforms = DefaultQuadUniforms } = config;
            this.create(fragmentShader, vertexShader, uniforms, attributes);
            if (renderToFramebuffer) {
                this.renderToFramebuffer = true;
                const texture = new Texture(null, width * resolution, height * resolution);
                const binding = new GLTextureBinding(texture);
                texture.binding = binding;
                binding.framebuffer = CreateFramebuffer(binding.texture);
                if (renderToDepthbuffer) {
                    this.renderToDepthbuffer = true;
                    binding.depthbuffer = CreateDepthBuffer(binding.framebuffer, texture.width, texture.height);
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
                this.attributes.forEach(attrib => {
                    gl.vertexAttribPointer(attrib.index, attrib.size, attrib.type, attrib.normalized, stride, attrib.offset);
                });
            }
        }
        destroy() {
            DeleteShaders(this.program);
            DeleteGLTexture(this.texture);
            DeleteFramebuffer(this.framebuffer);
            this.uniforms.clear();
            this.uniformSetters.clear();
            this.attributes.clear();
            this.program = null;
            this.texture = null;
            this.framebuffer = null;
        }
    }

    class QuadShader extends Shader {
        constructor(config = {}) {
            const shaderConfig = config;
            shaderConfig.attributes = (!shaderConfig.attributes) ? DefaultQuadAttributes : shaderConfig.attributes;
            super(shaderConfig);
        }
        bind(renderPass) {
            const uniforms = this.uniforms;
            uniforms.set('uProjectionMatrix', renderPass.projectionMatrix.data);
            uniforms.set('uCameraMatrix', renderPass.cameraMatrix.data);
            return super.bind(renderPass);
        }
    }

    const MULTI_QUAD_FRAG = `#define SHADER_NAME MULTI_QUAD_FRAG

precision highp float;

varying vec2 vTextureCoord;
varying float vTextureId;
varying vec4 vTintColor;

uniform sampler2D uTexture[%count%];

void main (void)
{
    vec4 color;

    %forloop%

    gl_FragColor = color * vec4(vTintColor.bgr * vTintColor.a, vTintColor.a);
}`;

    class MultiTextureQuadShader extends QuadShader {
        constructor(config = {}) {
            if (!config.fragmentShader) {
                config.fragmentShader = MULTI_QUAD_FRAG;
            }
            super(config);
        }
        create(fragmentShaderSource, vertexShaderSource, uniforms, attribs) {
            const maxTextures = GetMaxTextures();
            let src = '';
            for (let i = 1; i < maxTextures; i++) {
                if (i > 1) {
                    src += '\n\telse ';
                }
                if (i < maxTextures - 1) {
                    src += `if (vTextureId < ${i}.5)`;
                }
                src += '\n\t{';
                src += `\n\t\tcolor = texture2D(uTexture[${i}], vTextureCoord);`;
                src += '\n\t}';
            }
            fragmentShaderSource = fragmentShaderSource.replace(/%count%/gi, `${maxTextures}`);
            fragmentShaderSource = fragmentShaderSource.replace(/%forloop%/gi, src);
            super.create(fragmentShaderSource, vertexShaderSource, uniforms, attribs);
        }
        bind(renderPass) {
            this.uniforms.set('uTexture', renderPass.textureIndex);
            return super.bind(renderPass);
        }
    }

    function SetDefaultBlendMode(renderPass, enable, sfactor, dfactor) {
        const entry = { enable, sfactor, dfactor };
        renderPass.blendModeStack[0] = entry;
        renderPass.currentBlendMode = entry;
        renderPass.defaultBlendMode = entry;
    }

    function SetDefaultFramebuffer(renderPass, framebuffer = null, viewport) {
        const entry = { framebuffer, viewport };
        renderPass.framebufferStack[0] = entry;
        renderPass.currentFramebuffer = entry;
        renderPass.defaultFramebuffer = entry;
    }

    function SetDefaultShader(renderPass, shader, textureID) {
        const entry = { shader, textureID };
        renderPass.shaderStack[0] = entry;
        renderPass.currentShader = entry;
        renderPass.defaultShader = entry;
    }

    function SetDefaultVertexBuffer(renderPass, buffer) {
        renderPass.vertexBufferStack[0] = buffer;
        renderPass.currentVertexBuffer = buffer;
        renderPass.defaultVertexBuffer = buffer;
    }

    function SetDefaultViewport(renderPass, x = 0, y = 0, width = 0, height = 0) {
        const entry = new Rectangle(x, y, width, height);
        renderPass.viewportStack[0] = entry;
        renderPass.currentViewport = entry;
        renderPass.defaultViewport = entry;
    }

    let batchSize = 4096;

    class RenderPass {
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
            const gl = this.renderer.gl;
            const indexLayout = [0, 1, 2, 2, 3, 0];
            this.quadShader = new QuadShader();
            this.quadBuffer = new IndexedVertexBuffer({ isDynamic: false, indexLayout });
            this.quadCamera = new StaticCamera();
            CreateTempTextures(this);
            SetDefaultFramebuffer(this);
            SetDefaultBlendMode(this, true, gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
            SetDefaultVertexBuffer(this, new IndexedVertexBuffer({ batchSize, indexLayout }));
            SetDefaultShader(this, new MultiTextureQuadShader());
        }
        resize(width, height) {
            Ortho(0, width, height, 0, -1000, 1000, this.projectionMatrix);
            this.quadCamera.reset();
            SetDefaultViewport(this, 0, 0, width, height);
        }
    }

    function SetShader(renderPass, shader, textureID) {
        const entry = AddShader(renderPass, shader, textureID);
        BindShader(renderPass, entry);
        renderPass.currentShader = entry;
    }

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

    function UnbindTexture(renderPass, index = 0) {
        gl.activeTexture(gl.TEXTURE0 + index);
        gl.bindTexture(gl.TEXTURE_2D, renderPass.tempTextures[index]);
        if (index > 0) {
            renderPass.startActiveTexture++;
        }
    }

    function BatchSingleQuad(renderPass, x, y, width, height, u0, v0, u1, v1, textureIndex = 0, packedColor = 4294967295) {
        const { F32, U32, offset } = GetVertexBufferEntry(renderPass, 1);
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

    function DrawTexturedQuad$1(renderPass, texture, shader) {
        if (!shader) {
            shader = renderPass.quadShader;
        }
        const { u0, v0, u1, v1 } = texture.firstFrame;
        BindTexture(texture, 0);
        SetVertexBuffer(renderPass, renderPass.quadBuffer);
        SetShader(renderPass, shader, 0);
        BatchSingleQuad(renderPass, 0, 0, texture.width, texture.height, u0, v0, u1, v1, 0);
        Flush(renderPass);
        PopVertexBuffer(renderPass);
        PopShader(renderPass);
        UnbindTexture(renderPass);
    }

    let bgColor = 0;
    function GetBackgroundColor() {
        return bgColor;
    }

    let title = 'Phaser';
    let url = 'https://phaser4.io';
    let color = '#fff';
    let background = 'linear-gradient(#3e0081 40%, #00bcc3)';
    function GetBanner() {
        {
            const game = GameInstance.get();
            const version =  ' v' + game.VERSION ;
            console.log(`%c${title}${version}%c ${url}`, `padding: 4px 16px; color: ${color}; background: ${background}`, '');
        }
    }

    let instance$2;
    function GetRenderer() {
        return instance$2;
    }

    let _scenes = [];
    function GetScenes() {
        return _scenes;
    }

    let _contextAttributes = {
        alpha: false,
        antialias: false,
        depth: true,
        premultipliedAlpha: false
    };
    function GetWebGLContext() {
        return _contextAttributes;
    }

    function GetRGBArray(color, output = []) {
        const r = color >> 16 & 0xFF;
        const g = color >> 8 & 0xFF;
        const b = color & 0xFF;
        const a = (color > 16777215) ? color >>> 24 : 255;
        output[0] = r / 255;
        output[1] = g / 255;
        output[2] = b / 255;
        output[3] = a / 255;
        return output;
    }

    let instance$3;
    const WebGLRendererInstance = {
        get: () => {
            return instance$3;
        },
        set: (renderer) => {
            instance$3 = renderer;
        }
    };

    class WebGLRenderer {
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
            const canvas = document.createElement('canvas');
            canvas.addEventListener('webglcontextlost', (event) => this.onContextLost(event), false);
            canvas.addEventListener('webglcontextrestored', () => this.onContextRestored(), false);
            this.canvas = canvas;
            this.initContext();
            WebGLRendererInstance.set(this);
            this.renderPass = new RenderPass(this);
            this.resize(this.width, this.height, this.resolution);
        }
        initContext() {
            const gl = this.canvas.getContext('webgl', GetWebGLContext());
            GL.set(gl);
            this.gl = gl;
            gl.disable(gl.DEPTH_TEST);
            gl.disable(gl.CULL_FACE);
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
                canvas.style.width = width.toString() + 'px';
                canvas.style.height = height.toString() + 'px';
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
        setBackgroundColor(color) {
            GetRGBArray(color, this.clearColor);
            return this;
        }
        reset() {
        }
        render(renderData) {
            if (this.contextLost) {
                return;
            }
            const gl = this.gl;
            const renderPass = this.renderPass;
            ProcessBindingQueue();
            if (this.optimizeRedraw && renderData.numDirtyFrames === 0 && renderData.numDirtyCameras === 0) {
                return;
            }
            if (this.clearBeforeRender) {
                const cls = this.clearColor;
                gl.clearColor(cls[0], cls[1], cls[2], cls[3]);
                gl.clear(gl.COLOR_BUFFER_BIT);
            }
            const worlds = renderData.worldData;
            Start(renderPass);
            for (let i = 0; i < worlds.length; i++) {
                const { world } = worlds[i];
                world.renderGL(renderPass);
                world.postRenderGL(renderPass);
            }
            End(renderPass);
        }
        destroy() {
            WebGLRendererInstance.set(undefined);
        }
    }

    class Layer extends GameObject {
        constructor() {
            super();
            this.type = 'Layer';
            this.transform.passthru = true;
            this.willRender = false;
        }
    }

    class RenderLayer extends Layer {
        constructor() {
            super();
            this.type = 'RenderLayer';
            this.willRender = true;
            this.willRenderChildren = true;
            this.willCacheChildren = true;
            this.setDirty(DIRTY_CONST.CHILD_CACHE);
            const width = GetWidth();
            const height = GetHeight();
            const resolution = GetResolution();
            const texture = new Texture(null, width * resolution, height * resolution);
            const binding = new GLTextureBinding(texture);
            texture.binding = binding;
            binding.framebuffer = CreateFramebuffer(binding.texture);
            this.texture = texture;
            this.framebuffer = binding.framebuffer;
        }
        renderGL(renderPass) {
            if (this.numChildren > 0) {
                Flush(renderPass);
                if (!this.willCacheChildren || this.isDirty(DIRTY_CONST.CHILD_CACHE)) {
                    SetFramebuffer(renderPass, this.framebuffer, true);
                    this.clearDirty(DIRTY_CONST.CHILD_CACHE);
                }
                else {
                    SetFramebuffer(renderPass, this.framebuffer, false);
                    this.postRenderGL(renderPass);
                }
            }
        }
        postRenderGL(renderPass) {
            Flush(renderPass);
            PopFramebuffer(renderPass);
            DrawTexturedQuad$1(renderPass, this.texture);
            this.clearDirty(DIRTY_CONST.TRANSFORM);
        }
    }

    class EffectLayer extends RenderLayer {
        constructor(...shaders) {
            super();
            this.shaders = [];
            this.type = 'EffectLayer';
            if (Array.isArray(shaders)) {
                this.shaders = shaders;
            }
        }
        postRenderGL(renderPass) {
            const shaders = this.shaders;
            const texture = this.texture;
            Flush(renderPass);
            PopFramebuffer(renderPass);
            if (shaders.length === 0) {
                DrawTexturedQuad$1(renderPass, texture);
            }
            else {
                let prevTexture = texture;
                for (let i = 0; i < shaders.length; i++) {
                    const shader = shaders[i];
                    DrawTexturedQuad$1(renderPass, prevTexture, shader);
                    prevTexture = shader.texture;
                }
                DrawTexturedQuad$1(renderPass, prevTexture);
            }
            this.clearDirty(DIRTY_CONST.TRANSFORM);
        }
    }

    function GetVerticesFromValues(left, right, top, bottom, x, y, rotation = 0, scaleX = 1, scaleY = 1, skewX = 0, skewY = 0) {
        const a = Math.cos(rotation + skewY) * scaleX;
        const b = Math.sin(rotation + skewY) * scaleX;
        const c = -Math.sin(rotation - skewX) * scaleY;
        const d = Math.cos(rotation - skewX) * scaleY;
        const x0 = (left * a) + (top * c) + x;
        const y0 = (left * b) + (top * d) + y;
        const x1 = (left * a) + (bottom * c) + x;
        const y1 = (left * b) + (bottom * d) + y;
        const x2 = (right * a) + (bottom * c) + x;
        const y2 = (right * b) + (bottom * d) + y;
        const x3 = (right * a) + (top * c) + x;
        const y3 = (right * b) + (top * d) + y;
        return { x0, y0, x1, y1, x2, y2, x3, y3 };
    }

    class SpriteBatch extends Layer {
        constructor(maxSize, texture) {
            super();
            this.glTextureIndex = 0;
            this.hasTexture = false;
            this.type = 'SpriteBatch';
            this.willRender = true;
            this.setTexture(texture);
            this.setMaxSize(maxSize);
        }
        resetBuffers() {
            let ibo = [];
            for (let i = 0; i < (this.maxSize * 4); i += 4) {
                ibo.push(i + 0, i + 1, i + 2, i + 2, i + 3, i + 0);
            }
            this.data = new ArrayBuffer(this.maxSize * 96);
            this.index = new Uint16Array(ibo);
            this.vertexViewF32 = new Float32Array(this.data);
            this.vertexViewU32 = new Uint32Array(this.data);
            if (gl) {
                DeleteFramebuffer(this.vertexBuffer);
                DeleteFramebuffer(this.indexBuffer);
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
            if (key instanceof Texture) {
                texture = key;
            }
            else {
                texture = TextureManagerInstance.get().get(key);
            }
            if (!texture) {
                console.warn(`Invalid Texture key: ${key}`);
            }
            else {
                this.texture = texture;
                this.hasTexture = true;
                this.glTextureIndex = -1;
            }
            return this;
        }
        isRenderable() {
            return (this.visible && this.willRender && this.hasTexture && this.count > 0);
        }
        clear() {
            this.count = 0;
            return this;
        }
        addToBatch(frame, color, x0, y0, x1, y1, x2, y2, x3, y3) {
            if (this.count >= this.maxSize) {
                console.warn('SpriteBatch full');
                return this;
            }
            const { u0, u1, v0, v1 } = frame;
            const F32 = this.vertexViewF32;
            const U32 = this.vertexViewU32;
            const offset = this.count * 24;
            const textureIndex = (this.texture.binding) ? this.texture.binding.index : 0;
            F32[offset + 0] = x0;
            F32[offset + 1] = y0;
            F32[offset + 2] = u0;
            F32[offset + 3] = v0;
            F32[offset + 4] = textureIndex;
            U32[offset + 5] = color;
            F32[offset + 6] = x1;
            F32[offset + 7] = y1;
            F32[offset + 8] = u0;
            F32[offset + 9] = v1;
            F32[offset + 10] = textureIndex;
            U32[offset + 11] = color;
            F32[offset + 12] = x2;
            F32[offset + 13] = y2;
            F32[offset + 14] = u1;
            F32[offset + 15] = v1;
            F32[offset + 16] = textureIndex;
            U32[offset + 17] = color;
            F32[offset + 18] = x3;
            F32[offset + 19] = y3;
            F32[offset + 20] = u1;
            F32[offset + 21] = v0;
            F32[offset + 22] = textureIndex;
            U32[offset + 23] = color;
            this.setDirty(DIRTY_CONST.TRANSFORM);
            this.count++;
            return this;
        }
        add(config) {
            const { frame = null, x = 0, y = 0, rotation = 0, scaleX = 1, scaleY = 1, skewX = 0, skewY = 0, originX = 0, originY = 0, alpha = 1, tint = 0xffffff } = config;
            const textureFrame = this.texture.getFrame(frame);
            const { left, right, top, bottom } = textureFrame.getExtent(originX, originY);
            const { x0, y0, x1, y1, x2, y2, x3, y3 } = GetVerticesFromValues(left, right, top, bottom, x, y, rotation, scaleX, scaleY, skewX, skewY);
            const packedColor = PackColor(tint, alpha);
            return this.addToBatch(textureFrame, packedColor, x0, y0, x1, y1, x2, y2, x3, y3);
        }
        addXY(x, y, frame) {
            const textureFrame = this.texture.getFrame(frame);
            const { left, right, top, bottom } = textureFrame.getExtent(0, 0);
            const { x0, y0, x1, y1, x2, y2, x3, y3 } = GetVerticesFromValues(left, right, top, bottom, x, y);
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
                F32[(i * 24) + 4] = textureIndex;
                F32[(i * 24) + 10] = textureIndex;
                F32[(i * 24) + 16] = textureIndex;
                F32[(i * 24) + 22] = textureIndex;
            }
        }
        renderGL(renderPass) {
        }
        destroy() {
            super.destroy();
            DeleteFramebuffer(this.vertexBuffer);
            DeleteFramebuffer(this.indexBuffer);
            this.data = null;
            this.vertexViewF32 = null;
            this.vertexViewU32 = null;
            this.index = null;
            this.texture = null;
            this.hasTexture = false;
        }
    }

    function CreateCanvas(width, height) {
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        return canvas.getContext('2d');
    }

    function CanvasTexture(width = 32, height = 32) {
        const ctx = CreateCanvas(width, height);
        return new Texture(ctx.canvas);
    }

    class Text extends Sprite {
        constructor(x, y, text = '', font, fillStyle) {
            super(x, y, CanvasTexture());
            this.splitRegExp = /(?:\r\n|\r|\n)/;
            this.padding = { left: 0, right: 0, top: 0, bottom: 0 };
            this.verticalAlign = 'ascent';
            this.lineSpacing = 0;
            this.font = '16px monospace';
            this.fillStyle = '#fff';
            this.strokeStyle = '';
            this.backgroundStyle = '';
            this.cornerRadius = 0;
            this.textAlign = 'left';
            this.textBaseline = 'alphabetic';
            this.lineWidth = 0;
            this.lineDash = [];
            this.antialias = false;
            this.type = 'Text';
            const game = GameInstance.get();
            this.resolution = game.renderer.resolution;
            this.canvas = this.texture.image;
            this.context = this.canvas.getContext('2d');
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
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';
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
            const strokeWidthHalf = (strokeWidth > 0) ? strokeWidth / 2 : 0;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            this.syncContext(canvas, ctx);
            ctx.textAlign = 'start';
            let maxWidth = 0;
            let maxHeight = 0;
            let y = 0;
            const lineMetrics = [];
            const vAlignAscent = (this.verticalAlign === 'ascent');
            const metrics = ctx.measureText('|MÉq');
            const averageLineHeight = Math.ceil(Math.abs(metrics.actualBoundingBoxAscent) + Math.abs(metrics.actualBoundingBoxDescent)) + strokeWidth;
            for (let i = 0; i < lines.length; i++) {
                const metrics = ctx.measureText(lines[i]);
                const left = metrics.actualBoundingBoxLeft;
                const right = metrics.actualBoundingBoxRight;
                let ascent = metrics.actualBoundingBoxAscent;
                let descent = metrics.actualBoundingBoxDescent;
                if ((!ascent && !descent) || lines[i] === '') {
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
                }
                else {
                    y = maxHeight + ((lineHeight - descent) - strokeWidthHalf);
                    maxHeight += lineHeight;
                    if (i < lines.length - 1) {
                        maxHeight += lineSpacing;
                    }
                }
                maxWidth = Math.max(maxWidth, lineWidth);
                lineMetrics.push({ lineWidth, lineHeight, ascent, descent, left, right, y });
            }
            maxWidth += padding.left + padding.right;
            maxHeight += padding.top + padding.bottom;
            const displayWidth = (this.fixedWidth) ? this.fixedWidth : maxWidth;
            const displayHeight = (this.fixedHeight) ? this.fixedHeight : maxHeight;
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
                const halfRadius = (cornerRadius > 0) ? cornerRadius / 2 : 0;
                if (cornerRadius) {
                    ctx.lineWidth = cornerRadius;
                    ctx.strokeRect(halfRadius, halfRadius, displayWidth - cornerRadius, displayHeight - cornerRadius);
                }
                ctx.fillRect(halfRadius, halfRadius, displayWidth - cornerRadius, displayHeight - cornerRadius);
                ctx.restore();
            }
            const textAlign = this.textAlign;
            const isCenter = (textAlign === 'center');
            const isRight = (textAlign === 'right' || textAlign === 'end');
            const yOffset = ((displayHeight - maxHeight) / 2) + padding.top;
            for (let i = 0; i < lines.length; i++) {
                const line = lines[i];
                const metrics = lineMetrics[i];
                let tx = padding.left + metrics.left + strokeWidthHalf;
                const ty = yOffset + metrics.y;
                if (isCenter) {
                    tx = displayWidth / 2;
                }
                else if (isRight) {
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
            this.setDirty(DIRTY_CONST.TEXTURE);
            return this;
        }
        get text() {
            return this._text;
        }
        set text(value) {
            this.setText(value);
        }
        setText(value = '') {
            if (Array.isArray(value)) {
                value = value.join('\n');
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

    var index$D = /*#__PURE__*/Object.freeze({
        __proto__: null,
        AnimatedSprite: AnimatedSprite,
        Components: index$C,
        Container: Container,
        EffectLayer: EffectLayer,
        Layer: Layer,
        RenderLayer: RenderLayer,
        GameObject: GameObject,
        Sprite: Sprite,
        SpriteBatch: SpriteBatch,
        Text: Text
    });

    class Transform3DComponent {
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
        rotateX(angle) {
            RotateX$2(this.rotation, angle, this.rotation);
        }
        rotateY(angle) {
            RotateY$2(this.rotation, angle, this.rotation);
        }
        rotateZ(angle) {
            RotateZ$2(this.rotation, angle, this.rotation);
        }
        update() {
            const model = this.local;
            const normal = this.normal;
            FromRotationTranslationScale(this.rotation, this.position, this.scale, model);
            Invert(model, normal);
            Transpose(normal, normal);
        }
        updateLocal() {
            this.entity.setDirty(DIRTY_CONST.TRANSFORM, DIRTY_CONST.BOUNDS);
        }
        updateWorld() {
            const entity = this.entity;
            entity.setDirty(DIRTY_CONST.TRANSFORM, DIRTY_CONST.BOUNDS);
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

    var index$E = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Transform3DComponent: Transform3DComponent
    });

    function CreateVertexSet() {
        return {
            vertices: [],
            normals: [],
            uvs: [],
            indices: [],
            numberOfVertices: 0
        };
    }

    var index$F = /*#__PURE__*/Object.freeze({
        __proto__: null,
        CreateFramebuffer: CreateFramebuffer,
        CreateGLTexture: CreateGLTexture,
        DeleteFramebuffer: DeleteFramebuffer,
        DeleteGLBuffer: DeleteGLBuffer,
        DeleteGLTexture: DeleteGLTexture,
        GL: GL,
        PackColor: PackColor,
        PackColors: PackColors,
        SetGLTextureFilterMode: SetGLTextureFilterMode,
        UpdateGLTexture: UpdateGLTexture,
        WebGLRenderer: WebGLRenderer
    });

    class FaceUVNormalTexture {
        constructor(v1, v2, v3, n1, n2, n3, uv1, uv2, uv3, scale = 1) {
            this.color = 0xffffff;
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
        setColor(color, alpha = 1) {
            this.color = color;
            this.alpha = alpha;
            this._packedColor = PackColor(color, alpha);
        }
        addToBuffer(F32, U32, textureID, offset) {
            const v1 = this.vertex1;
            const v2 = this.vertex2;
            const v3 = this.vertex3;
            const n1 = this.normal1;
            const n2 = this.normal2;
            const n3 = this.normal3;
            const color = this._packedColor;
            F32[offset++] = v1.x;
            F32[offset++] = v1.y;
            F32[offset++] = v1.z;
            F32[offset++] = n1.x;
            F32[offset++] = n1.y;
            F32[offset++] = n1.z;
            F32[offset++] = v1.u;
            F32[offset++] = v1.v;
            F32[offset++] = textureID;
            U32[offset++] = color;
            F32[offset++] = v2.x;
            F32[offset++] = v2.y;
            F32[offset++] = v2.z;
            F32[offset++] = n2.x;
            F32[offset++] = n2.y;
            F32[offset++] = n2.z;
            F32[offset++] = v2.u;
            F32[offset++] = v2.v;
            F32[offset++] = textureID;
            U32[offset++] = color;
            F32[offset++] = v3.x;
            F32[offset++] = v3.y;
            F32[offset++] = v3.z;
            F32[offset++] = n3.x;
            F32[offset++] = n3.y;
            F32[offset++] = n3.z;
            F32[offset++] = v3.u;
            F32[offset++] = v3.v;
            F32[offset++] = textureID;
            U32[offset++] = color;
            return offset;
        }
    }

    function GetVec3(data, index) {
        const x = data[(index * 3) + 0];
        const y = data[(index * 3) + 1];
        const z = data[(index * 3) + 2];
        return [x, y, z];
    }
    function GetVec2(data, index) {
        const x = data[(index * 2) + 0];
        const y = data[(index * 2) + 1];
        return [x, y];
    }
    function CreateNonIndexedVertexBuffer(data) {
        const { vertices, normals, uvs } = data;
        const total = vertices.length;
        const count = total / 3;
        const batchSize = count / 3;
        const buffer = new VertexBuffer({ batchSize, isDynamic: false, vertexElementSize: 8, elementsPerEntry: 3 });
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
        const { vertices, normals, uvs, indices } = data;
        const buffer = new VertexBuffer({ batchSize: indices.length / 3, isDynamic: false, vertexElementSize: 8, elementsPerEntry: 3 });
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
    function GetBufferFromVertexSet(data) {
        if (data.indices && data.indices.length > 0) {
            return CreateVertexBuffer(data);
        }
        else {
            return CreateNonIndexedVertexBuffer(data);
        }
    }

    class Geometry {
        constructor(data) {
            if (data) {
                if (data.hasOwnProperty('vertices')) {
                    this.buffer = GetBufferFromVertexSet(data);
                }
                else {
                    this.buffer = data;
                }
            }
        }
        destroy() {
            this.buffer.destroy();
        }
    }

    class ParseObj {
        constructor(fileContents, flipUVs = true, defaultModelName = 'untitled') {
            this.currentMaterial = '';
            this.currentGroup = '';
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
                }
                catch (theError) {
                    reject(theError);
                }
            });
        }
        parse() {
            const stripComments = (line) => {
                const commentIndex = line.indexOf('#');
                if (commentIndex > -1) {
                    return line.substring(0, commentIndex);
                }
                return line;
            };
            const lines = this.fileContents.split('\n');
            for (const line of lines) {
                const strippedline = stripComments(line);
                const lineItems = strippedline
                    .replace(/\s\s+/g, ' ')
                    .trim()
                    .split(' ');
                switch (lineItems[0].toLowerCase()) {
                    case 'o':
                        this.parseObject(lineItems);
                        break;
                    case 'g':
                        this.parseGroup(lineItems);
                        break;
                    case 'v':
                        this.parseVertexCoords(lineItems);
                        break;
                    case 'vt':
                        this.parseTextureCoords(lineItems);
                        break;
                    case 'vn':
                        this.parseVertexNormal(lineItems);
                        break;
                    case 's':
                        this.parseSmoothShadingStatement(lineItems);
                        break;
                    case 'f':
                        this.parsePolygon(lineItems);
                        break;
                    case 'mtllib':
                        this.parseMtlLib(lineItems);
                        break;
                    case 'usemtl':
                        this.parseUseMtl(lineItems);
                        break;
                }
            }
            this.fileContents = '';
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
                this.currentGroup = '';
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
            this.currentGroup = '';
            this.smoothingGroup = 0;
        }
        parseGroup(lineItems) {
            if (lineItems.length !== 2) {
                throw 'Group statements must have exactly 1 argument (eg. g group_1)';
            }
            this.currentGroup = lineItems[1];
        }
        parseVertexCoords(lineItems) {
            const len = lineItems.length;
            const x = (len >= 2) ? parseFloat(lineItems[1]) : 0;
            const y = (len >= 3) ? parseFloat(lineItems[2]) : 0;
            const z = (len >= 4) ? parseFloat(lineItems[3]) : 0;
            this.currentModel().vertices.push({ x, y, z });
        }
        parseTextureCoords(lineItems) {
            const len = lineItems.length;
            let u = (len >= 2) ? parseFloat(lineItems[1]) : 0;
            let v = (len >= 3) ? parseFloat(lineItems[2]) : 0;
            let w = (len >= 4) ? parseFloat(lineItems[3]) : 0;
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
            this.currentModel().textureCoords.push({ u, v, w });
        }
        parseVertexNormal(lineItems) {
            const len = lineItems.length;
            const x = (len >= 2) ? parseFloat(lineItems[1]) : 0;
            const y = (len >= 3) ? parseFloat(lineItems[2]) : 0;
            const z = (len >= 4) ? parseFloat(lineItems[3]) : 0;
            this.currentModel().vertexNormals.push({ x, y, z });
        }
        parsePolygon(lineItems) {
            const totalVertices = lineItems.length - 1;
            if (totalVertices < 3) {
                throw 'Face < 3 vertices';
            }
            const face = {
                group: this.currentGroup,
                material: this.currentMaterial,
                smoothingGroup: this.smoothingGroup,
                vertices: []
            };
            for (let i = 0; i < totalVertices; i++) {
                const vertexString = lineItems[i + 1];
                const vertexValues = vertexString.split('/');
                const vvLen = vertexValues.length;
                if (vvLen < 1 || vvLen > 3) {
                    throw 'Too many / values for single vertex';
                }
                let vertexIndex = 0;
                let textureCoordsIndex = 0;
                let vertexNormalIndex = 0;
                vertexIndex = parseInt(vertexValues[0], 10);
                if (vvLen > 1 && vertexValues[1] !== '') {
                    textureCoordsIndex = parseInt(vertexValues[1], 10);
                }
                if (vvLen > 2) {
                    vertexNormalIndex = parseInt(vertexValues[2], 10);
                }
                if (vertexIndex === 0) {
                    throw 'Faces uses invalid vertex index of 0';
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
                throw 'Smoothing group statements must have exactly 1 argument (eg. s <number|off>)';
            }
            const groupNumber = lineItems[1].toLowerCase() === 'off' ? 0 : parseInt(lineItems[1], 10);
            this.smoothingGroup = groupNumber;
        }
    }

    function GetBufferFromObj(data, flipUVs = true) {
        const parser = new ParseObj(data, flipUVs);
        const result = parser.parse();
        const output = [];
        result.models.forEach(model => {
            const { faces, textureCoords, vertexNormals, vertices } = model;
            const buffer = new VertexBuffer({ batchSize: faces.length, isDynamic: false, vertexElementSize: 8, elementsPerEntry: 3 });
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
            }
            buffer.count = faces.length * 3;
            output.push({ name: model.name, buffer });
        });
        return output;
    }

    function GetVec3$1(data, index) {
        const x = data[(index * 3) + 0];
        const y = data[(index * 3) + 1];
        const z = data[(index * 3) + 2];
        return [x, y, z];
    }
    function GetVec2$1(data, index) {
        const x = data[(index * 2) + 0];
        const y = data[(index * 2) + 1];
        return [x, y];
    }
    function GetFacesFromVertexSet(data) {
        const { vertices, normals, uvs, indices } = data;
        const faces = [];
        for (let i = 0; i < indices.length; i += 3) {
            const i1 = indices[i + 0];
            const i2 = indices[i + 1];
            const i3 = indices[i + 2];
            const v1 = GetVec3$1(vertices, i1);
            const v2 = GetVec3$1(vertices, i2);
            const v3 = GetVec3$1(vertices, i3);
            const n1 = GetVec3$1(normals, i1);
            const n2 = GetVec3$1(normals, i2);
            const n3 = GetVec3$1(normals, i3);
            const uv1 = GetVec2$1(uvs, i1);
            const uv2 = GetVec2$1(uvs, i2);
            const uv3 = GetVec2$1(uvs, i3);
            const f = new FaceUVNormalTexture({ x: v1[0], y: v1[1], z: v1[2] }, { x: v2[0], y: v2[1], z: v2[2] }, { x: v3[0], y: v3[1], z: v3[2] }, { x: n1[0], y: n1[1], z: n1[2] }, { x: n2[0], y: n2[1], z: n2[2] }, { x: n3[0], y: n3[1], z: n3[2] }, { x: uv1[0], y: uv1[1] }, { x: uv2[0], y: uv2[1] }, { x: uv3[0], y: uv3[1] }, 1);
            faces.push(f);
        }
        return faces;
    }

    var index$G = /*#__PURE__*/Object.freeze({
        __proto__: null,
        CreateVertexSet: CreateVertexSet,
        FaceUVNormalTexture: FaceUVNormalTexture,
        Geometry: Geometry,
        GetBufferFromObj: GetBufferFromObj,
        GetBufferFromVertexSet: GetBufferFromVertexSet,
        GetFacesFromVertexSet: GetFacesFromVertexSet,
        ParseObj: ParseObj
    });

    function PlaneGeometry(data, x = 0, y = 0, z = 0, u = 0, v = 1, w = 2, udir = 1, vdir = -1, width = 1, height = 1, depth = 1, gridX = 1, gridY = 1) {
        if (!data) {
            data = CreateVertexSet();
        }
        const { vertices, normals, uvs, indices, numberOfVertices } = data;
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
                uvs.push(1 - (iy / gridY));
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

    function BoxGeometry(x = 0, y = 0, z = 0, width = 1, height = 1, depth = 1, widthSegments = 1, heightSegments = 1, depthSegments = 1) {
        const data = CreateVertexSet();
        PlaneGeometry(data, x, y, z, 2, 1, 0, -1, -1, depth, height, width, depthSegments, heightSegments);
        PlaneGeometry(data, x, y, z, 2, 1, 0, 1, -1, depth, height, -width, depthSegments, heightSegments);
        PlaneGeometry(data, x, y, z, 0, 2, 1, 1, 1, width, depth, height, widthSegments, depthSegments);
        PlaneGeometry(data, x, y, z, 0, 2, 1, 1, -1, width, depth, -height, widthSegments, depthSegments);
        PlaneGeometry(data, x, y, z, 0, 1, 2, 1, -1, width, height, depth, widthSegments, heightSegments);
        PlaneGeometry(data, x, y, z, 0, 1, 2, -1, -1, width, height, -depth, widthSegments, heightSegments);
        return data;
    }

    class GameObject3D {
        constructor(x = 0, y = 0, z = 0) {
            this.type = 'GameObject3D';
            this.name = '';
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
            this.transform = new Transform3DComponent(this, x, y, z);
            this.dirty = DIRTY_CONST.DEFAULT;
        }
        isRenderable() {
            return (this.visible && this.willRender);
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
                this.dirtyFrame = GameInstance.getFrame();
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
            Emit(this, DestroyEvent, this);
            this.transform.destroy();
            this.events.clear();
            this.world = null;
            this.parent = null;
            this.children = null;
        }
    }

    class Material {
        constructor(config = {}) {
            this.isDirty = false;
            const { ambient = [1, 1, 1], diffuse = [1, 1, 1], specular = [1, 1, 1], shine = 0.25 } = config;
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
            shader.setUniform('uMaterialAmbient', this.ambient.toArray());
            shader.setUniform('uMaterialDiffuse', this.diffuse.toArray());
            shader.setUniform('uMaterialSpecular', this.specular.toArray());
            shader.setUniform('uMaterialShine', this._shine * 256);
        }
        destroy() {
            this.ambient.destroy();
            this.diffuse.destroy();
            this.specular.destroy();
        }
    }

    function SetFrame$1(texture, key, ...children) {
        const frame = texture.getFrame(key);
        children.forEach(child => {
            if (!child || frame === child.frame) {
                return;
            }
            child.frame = frame;
            child.hasTexture = true;
        });
        return children;
    }

    function SetTexture$2(key, frame, ...children) {
        if (!key) {
            children.forEach(child => {
                child.texture = null;
                child.frame = null;
                child.hasTexture = false;
            });
        }
        else {
            let texture;
            if (key instanceof Texture) {
                texture = key;
            }
            else {
                texture = TextureManagerInstance.get().get(key);
            }
            if (!texture) {
                console.warn(`Invalid Texture key: ${key}`);
            }
            else {
                children.forEach(child => {
                    child.texture = texture;
                });
                SetFrame$1(texture, frame, ...children);
            }
        }
        return children;
    }

    class Mesh extends GameObject3D {
        constructor(x = 0, y = 0, z = 0, geometry, material = new Material()) {
            super(x, y, z);
            this.hasTexture = false;
            this.cullFaces = true;
            this.geometry = geometry;
            this.material = material;
            this.setTexture('__WHITE');
        }
        setTexture(key, frame) {
            SetTexture$2(key, frame, this);
            return this;
        }
        setFrame(key) {
            SetFrame$1(this.texture, key, this);
            return this;
        }
        setMaterial(material) {
            this.material = material;
            return this;
        }
        renderGL(renderPass) {
            const shader = renderPass.currentShader.shader;
            shader.setUniform('uModelMatrix', this.transform.local.data);
            shader.setUniform('uNormalMatrix', this.transform.normal.data);
            if (this.hasTexture) {
                const textureIndex = SetTexture(renderPass, this.texture);
                shader.setUniform('uTexture', textureIndex);
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

    class Box extends Mesh {
        constructor(x = 0, y = 0, z = 0, width = 1, height = 1, depth = 1, widthSegments = 1, heightSegments = 1, depthSegments = 1) {
            const data = BoxGeometry(0, 0, 0, width, height, depth, widthSegments, heightSegments, depthSegments);
            const geometry = new Geometry(data);
            super(x, y, z, geometry);
        }
    }

    function GenerateCap(top, data, index, halfHeight, radiusTop, radiusBottom, radialSegments, thetaStart, thetaLength) {
        const { vertices, normals, uvs, indices } = data;
        const uv = new Vec2();
        const vertex = new Vec3();
        const radius = (top === true) ? radiusTop : radiusBottom;
        const sign = (top === true) ? 1 : -1;
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
            uv.x = (cosTheta * 0.5) + 0.5;
            uv.y = (sinTheta * 0.5 * sign) + 0.5;
            uvs.push(uv.x, uv.y);
            index++;
        }
        for (let x = 0; x < radialSegments; x++) {
            const c = centerIndexStart + x;
            const i = centerIndexEnd + x;
            if (top) {
                indices.push(i, i + 1, c);
            }
            else {
                indices.push(i + 1, i, c);
            }
        }
        return index;
    }
    function CylinderGeometry(radiusTop = 1, radiusBottom = 1, height = 1, radialSegments = 8, heightSegments = 1, openEnded = false, thetaStart = 0, thetaLength = Math.PI * 2) {
        const data = CreateVertexSet();
        const { vertices, normals, uvs, indices } = data;
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

    function ConeGeometry(radius = 1, height = 1, radialSegments = 8, heightSegments = 1, openEnded = false, thetaStart = 0, thetaLength = Math.PI * 2) {
        return CylinderGeometry(0, radius, height, radialSegments, heightSegments, openEnded, thetaStart, thetaLength);
    }

    class Cone extends Mesh {
        constructor(x = 0, y = 0, z = 0, radius = 1, height = 1, radialSegments = 8, heightSegments = 1, openEnded = false, thetaStart = 0, thetaLength = Math.PI * 2) {
            const data = ConeGeometry(radius, height, radialSegments, heightSegments, openEnded, thetaStart, thetaLength);
            const geometry = new Geometry(data);
            super(x, y, z, geometry);
        }
    }

    class Light {
        constructor(config = {}) {
            this.isDirty = false;
            const { x = 0, y = 0, z = 0.1, ambient = [1, 1, 1], diffuse = [1, 1, 1], specular = [1, 1, 1] } = config;
            const onChange = () => this.update();
            this.position = new Vec3Callback(onChange, x, y, z);
            this.ambient = new RGBCallback(onChange).fromArray(ambient);
            this.diffuse = new RGBCallback(onChange).fromArray(diffuse);
            this.specular = new RGBCallback(onChange).fromArray(specular);
        }
        setUniforms(shader) {
            shader.setUniform('uLightPosition', this.position.toArray());
            shader.setUniform('uLightAmbient', this.ambient.toArray());
            shader.setUniform('uLightDiffuse', this.diffuse.toArray());
            shader.setUniform('uLightSpecular', this.specular.toArray());
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

    class Plane extends Mesh {
        constructor(x = 0, y = 0, z = 0, width = 1, height = 1, widthSegments = 1, heightSegments = 1) {
            const data = PlaneGeometry(null, 0, 0, 0, 0, 1, 2, 1, -1, width, height, 1, widthSegments, heightSegments);
            const geometry = new Geometry(data);
            super(x, y, z, geometry);
        }
    }

    class RenderLayer3D extends Layer {
        constructor() {
            super();
            this.type = 'RenderLayer';
            this.willRender = true;
            this.willRenderChildren = true;
            this.willCacheChildren = true;
            this.setDirty(DIRTY_CONST.CHILD_CACHE);
            const width = GetWidth();
            const height = GetHeight();
            const resolution = GetResolution();
            const texture = new Texture(null, width * resolution, height * resolution);
            const binding = new GLTextureBinding(texture);
            texture.binding = binding;
            binding.framebuffer = CreateFramebuffer(binding.texture);
            binding.depthbuffer = CreateDepthBuffer(binding.framebuffer, texture.width, texture.height);
            this.texture = texture;
            this.framebuffer = binding.framebuffer;
        }
        renderGL(renderPass) {
            if (this.numChildren > 0) {
                Flush(renderPass);
                if (!this.willCacheChildren || this.isDirty(DIRTY_CONST.CHILD_CACHE)) {
                    SetFramebuffer(renderPass, this.framebuffer, true);
                    this.clearDirty(DIRTY_CONST.CHILD_CACHE);
                }
                else {
                    SetFramebuffer(renderPass, this.framebuffer, false);
                    this.postRenderGL(renderPass);
                }
            }
        }
        postRenderGL(renderPass) {
            Flush(renderPass);
            PopFramebuffer(renderPass);
            DrawTexturedQuad$1(renderPass, this.texture);
            this.clearDirty(DIRTY_CONST.TRANSFORM);
        }
    }

    function SphereGeometry(radius = 1, widthSegments = 3, heightSegments = 3, phiStart = 0, phiLength = Math.PI * 2, thetaStart = 0, thetaLength = Math.PI) {
        widthSegments = Math.max(3, Math.floor(widthSegments) || 8);
        heightSegments = Math.max(2, Math.floor(heightSegments) || 6);
        const thetaEnd = Math.min(thetaStart + thetaLength, Math.PI);
        const data = CreateVertexSet();
        const { vertices, normals, uvs, indices } = data;
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
            }
            else if (iy === heightSegments && thetaEnd == Math.PI) {
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

    class Sphere extends Mesh {
        constructor(x = 0, y = 0, z = 0, radius = 1, widthSegments = 3, heightSegments = 3, phiStart = 0, phiLength = Math.PI * 2, thetaStart = 0, thetaLength = Math.PI) {
            const data = SphereGeometry(radius, widthSegments, heightSegments, phiStart, phiLength, thetaStart, thetaLength);
            const geometry = new Geometry(data);
            super(x, y, z, geometry);
        }
    }

    var index$H = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Components: index$E,
        Geometry: index$G,
        Box: Box,
        Cone: Cone,
        Light: Light,
        Material: Material,
        Mesh: Mesh,
        Plane: Plane,
        RenderLayer3D: RenderLayer3D,
        Sphere: Sphere,
        GameObject3D: GameObject3D
    });

    function Area$1(circle) {
        return (circle.radius > 0) ? Math.PI * circle.radius * circle.radius : 0;
    }

    function Contains$1(circle, x, y) {
        if (circle.radius > 0 && x >= circle.left && x <= circle.right && y >= circle.top && y <= circle.bottom) {
            const dx = (circle.x - x) * (circle.x - x);
            const dy = (circle.y - y) * (circle.y - y);
            return (dx + dy) <= (circle.radius * circle.radius);
        }
        else {
            return false;
        }
    }

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
            return Contains$1(this, x, y);
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

    function Circumference(circle) {
        return 2 * (Math.PI * circle.radius);
    }

    function CircumferencePoint(circle, angle, out = new Vec2()) {
        return out.set(circle.x + (circle.radius * Math.cos(angle)), circle.y + (circle.radius * Math.sin(angle)));
    }

    function Clone$7(source) {
        return new Circle(source.x, source.y, source.radius);
    }

    function ContainsPoint$1(circle, point) {
        return Contains$1(circle, point.x, point.y);
    }

    function ContainsRect$1(circle, rect) {
        return (Contains$1(circle, rect.x, rect.y) &&
            Contains$1(circle, rect.right, rect.y) &&
            Contains$1(circle, rect.x, rect.bottom) &&
            Contains$1(circle, rect.right, rect.bottom));
    }

    function CopyFrom$7(source, dest) {
        return dest.set(source.x, source.y, source.radius);
    }

    function Equals$7(circle, toCompare) {
        return (circle.x === toCompare.x &&
            circle.y === toCompare.y &&
            circle.radius === toCompare.radius);
    }

    function GetBounds(circle, out = new Rectangle()) {
        return out.set(circle.left, circle.top, circle.diameter, circle.diameter);
    }

    function GetPoint$1(circle, position, out = new Vec2()) {
        const angle = FromPercent(position, 0, MATH_CONST.PI2);
        return CircumferencePoint(circle, angle, out);
    }

    function GetPoints$1(circle, step, quantity = 0, out = []) {
        if (!quantity) {
            quantity = Circumference(circle) / step;
        }
        for (let i = 0; i < quantity; i++) {
            const angle = FromPercent(i / quantity, 0, MATH_CONST.PI2);
            out.push(CircumferencePoint(circle, angle));
        }
        return out;
    }

    function Offset$1(circle, x, y) {
        circle.x += x;
        circle.y += y;
        return circle;
    }

    function OffsetPoint$1(circle, point) {
        circle.x += point.x;
        circle.y += point.y;
        return circle;
    }

    function Random$4(circle, out = new Vec2()) {
        const t = 2 * Math.PI * Math.random();
        const u = Math.random() + Math.random();
        const r = (u > 1) ? 2 - u : u;
        const x = r * Math.cos(t);
        const y = r * Math.sin(t);
        return out.set(circle.x + (x * circle.radius), circle.y + (y * circle.radius));
    }

    var index$I = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Area: Area$1,
        Circle: Circle,
        Circumference: Circumference,
        CircumferencePoint: CircumferencePoint,
        Clone: Clone$7,
        Contains: Contains$1,
        ContainsPoint: ContainsPoint$1,
        ContainsRect: ContainsRect$1,
        CopyFrom: CopyFrom$7,
        Equals: Equals$7,
        GetBounds: GetBounds,
        GetPoint: GetPoint$1,
        GetPoints: GetPoints$1,
        Offset: Offset$1,
        OffsetPoint: OffsetPoint$1,
        Random: Random$4
    });

    function Area$2(ellipse) {
        if ((ellipse.width <= 0 || ellipse.height <= 0)) {
            return 0;
        }
        return (ellipse.getMajorRadius() * ellipse.getMinorRadius() * Math.PI);
    }

    function Circumference$1(ellipse) {
        const rx = ellipse.width / 2;
        const ry = ellipse.height / 2;
        const h = Math.pow((rx - ry), 2) / Math.pow((rx + ry), 2);
        return (Math.PI * (rx + ry)) * (1 + ((3 * h) / (10 + Math.sqrt(4 - (3 * h)))));
    }

    function CircumferencePoint$1(ellipse, angle, out = new Vec2()) {
        const halfWidth = ellipse.width / 2;
        const halfHeight = ellipse.height / 2;
        return out.set(ellipse.x + halfWidth * Math.cos(angle), ellipse.y + halfHeight * Math.sin(angle));
    }

    function Contains$2(ellipse, x, y) {
        if (ellipse.width <= 0 || ellipse.height <= 0) {
            return false;
        }
        let normx = ((x - ellipse.x) / ellipse.width);
        let normy = ((y - ellipse.y) / ellipse.height);
        normx *= normx;
        normy *= normy;
        return (normx + normy < 0.25);
    }

    class Ellipse {
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
            return Contains$2(this, x, y);
        }
        getMinorRadius() {
            return Math.min(this.width, this.height) / 2;
        }
        getMajorRadius() {
            return Math.max(this.width, this.height) / 2;
        }
        get left() {
            return this.x - (this.width / 2);
        }
        set left(value) {
            this.x = value + (this.width / 2);
        }
        get right() {
            return this.x + (this.width / 2);
        }
        set right(value) {
            this.x = value - (this.width / 2);
        }
        get top() {
            return this.y - (this.height / 2);
        }
        set top(value) {
            this.y = value + (this.height / 2);
        }
        get bottom() {
            return this.y + (this.height / 2);
        }
        set bottom(value) {
            this.y = value - (this.height / 2);
        }
    }

    function Clone$8(source) {
        return new Ellipse(source.x, source.y, source.width, source.height);
    }

    function ContainsPoint$2(ellipse, point) {
        return Contains$2(ellipse, point.x, point.y);
    }

    function ContainsRect$2(ellipse, rect) {
        return (Contains$2(ellipse, rect.x, rect.y) &&
            Contains$2(ellipse, rect.right, rect.y) &&
            Contains$2(ellipse, rect.x, rect.bottom) &&
            Contains$2(ellipse, rect.right, rect.bottom));
    }

    function CopyFrom$8(source, dest) {
        return dest.set(source.x, source.y, source.width, source.height);
    }

    function Equals$8(ellipse, toCompare) {
        return (ellipse.x === toCompare.x &&
            ellipse.y === toCompare.y &&
            ellipse.width === toCompare.width &&
            ellipse.height === toCompare.height);
    }

    function GetBounds$1(ellipse, out = new Rectangle()) {
        return out.set(ellipse.left, ellipse.top, ellipse.width, ellipse.height);
    }

    function GetPoint$2(ellipse, position, out = new Vec2()) {
        const angle = FromPercent(position, 0, MATH_CONST.PI2);
        return CircumferencePoint$1(ellipse, angle, out);
    }

    function GetPoints$2(ellipse, step, quantity = 0, out = []) {
        if (!quantity) {
            quantity = Circumference$1(ellipse) / step;
        }
        for (let i = 0; i < quantity; i++) {
            const angle = FromPercent(i / quantity, 0, MATH_CONST.PI2);
            out.push(CircumferencePoint$1(ellipse, angle));
        }
        return out;
    }

    function Offset$2(ellipse, x, y) {
        ellipse.x += x;
        ellipse.y += y;
        return ellipse;
    }

    function OffsetPoint$2(ellipse, point) {
        ellipse.x += point.x;
        ellipse.y += point.y;
        return ellipse;
    }

    function Random$5(ellipse, out = new Vec2()) {
        const p = Math.random() * Math.PI * 2;
        const s = Math.sqrt(Math.random());
        out.x = ellipse.x + ((s * Math.cos(p)) * ellipse.width / 2);
        out.y = ellipse.y + ((s * Math.sin(p)) * ellipse.height / 2);
        return out;
    }

    var index$J = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Area: Area$2,
        Circumference: Circumference$1,
        CircumferencePoint: CircumferencePoint$1,
        Clone: Clone$8,
        Contains: Contains$2,
        ContainsPoint: ContainsPoint$2,
        ContainsRect: ContainsRect$2,
        CopyFrom: CopyFrom$8,
        Ellipse: Ellipse,
        Equals: Equals$8,
        GetBounds: GetBounds$1,
        GetPoint: GetPoint$2,
        GetPoints: GetPoints$2,
        Offset: Offset$2,
        OffsetPoint: OffsetPoint$2,
        Random: Random$5
    });

    function CircleToCircle(circleA, circleB) {
        return (Distance$1(circleA, circleB) <= (circleA.radius + circleB.radius));
    }

    function CircleToRectangle(circle, rect) {
        const halfWidth = rect.width / 2;
        const halfHeight = rect.height / 2;
        const cx = Math.abs(circle.x - rect.x - halfWidth);
        const cy = Math.abs(circle.y - rect.y - halfHeight);
        const xDist = halfWidth + circle.radius;
        const yDist = halfHeight + circle.radius;
        if (cx > xDist || cy > yDist) {
            return false;
        }
        else if (cx <= halfWidth || cy <= halfHeight) {
            return true;
        }
        else {
            const xCornerDist = cx - halfWidth;
            const yCornerDist = cy - halfHeight;
            const xCornerDistSq = xCornerDist * xCornerDist;
            const yCornerDistSq = yCornerDist * yCornerDist;
            const maxCornerDistSq = circle.radius * circle.radius;
            return (xCornerDistSq + yCornerDistSq <= maxCornerDistSq);
        }
    }

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
                x = ((r1 * r1) - (r0 * r0) - (x1 * x1) + (x0 * x0)) / (2 * (x0 - x1));
                coefficientA = 1;
                coefficientB = -2 * y1;
                coefficientC = (x1 * x1) + (x * x) - (2 * x1 * x) + (y1 * y1) - (r1 * r1);
                lambda = (coefficientB * coefficientB) - (4 * coefficientA * coefficientC);
                if (lambda === 0) {
                    out.push(new Vec2(x, (-coefficientB / (2 * coefficientA))));
                }
                else if (lambda > 0) {
                    out.push(new Vec2(x, (-coefficientB + Math.sqrt(lambda)) / (2 * coefficientA)));
                    out.push(new Vec2(x, (-coefficientB - Math.sqrt(lambda)) / (2 * coefficientA)));
                }
            }
            else {
                const v1 = (x0 - x1) / (y0 - y1);
                const n = (r1 * r1 - r0 * r0 - x1 * x1 + x0 * x0 - y1 * y1 + y0 * y0) / (2 * (y0 - y1));
                coefficientA = (v1 * v1) + 1;
                coefficientB = (2 * y0 * v1) - (2 * n * v1) - (2 * x0);
                coefficientC = (x0 * x0) + (y0 * y0) + (n * n) - (r0 * r0) - (2 * y0 * n);
                lambda = (coefficientB * coefficientB) - (4 * coefficientA * coefficientC);
                if (lambda === 0) {
                    x = (-coefficientB / (2 * coefficientA));
                    out.push(new Vec2(x, (n - (x * v1))));
                }
                else if (lambda > 0) {
                    x = (-coefficientB + Math.sqrt(lambda)) / (2 * coefficientA);
                    out.push(new Vec2(x, (n - (x * v1))));
                    x = (-coefficientB - Math.sqrt(lambda)) / (2 * coefficientA);
                    out.push(new Vec2(x, (n - (x * v1))));
                }
            }
        }
        return out;
    }

    const tmp = new Vec2();
    function LineToCircle(line, circle, nearest) {
        if (!nearest) {
            nearest = tmp;
        }
        const { x1, y1, x2, y2 } = line;
        if (Contains$1(circle, x1, y1)) {
            nearest.set(x1, y1);
            return true;
        }
        if (Contains$1(circle, x2, y2)) {
            nearest.set(x2, y2);
            return true;
        }
        const dx = x2 - x1;
        const dy = y2 - y1;
        const lcx = circle.x - x1;
        const lcy = circle.y - y1;
        const dLen2 = (dx * dx) + (dy * dy);
        let px = dx;
        let py = dy;
        if (dLen2 > 0) {
            const dp = ((lcx * dx) + (lcy * dy)) / dLen2;
            px *= dp;
            py *= dp;
        }
        nearest.set(x1 + px, y1 + py);
        const pLen2 = (px * px) + (py * py);
        return (pLen2 <= dLen2 &&
            ((px * dx) + (py * dy)) >= 0 &&
            Contains$1(circle, nearest.x, nearest.y));
    }

    function GetLineToCircle(line, circle, out = []) {
        if (LineToCircle(line, circle)) {
            const { x1, y1, x2, y2 } = line;
            const cr = circle.radius;
            const lDirX = x2 - x1;
            const lDirY = y2 - y1;
            const oDirX = x1 - circle.x;
            const oDirY = y1 - circle.y;
            const coefficientA = lDirX * lDirX + lDirY * lDirY;
            const coefficientB = 2 * (lDirX * oDirX + lDirY * oDirY);
            const coefficientC = oDirX * oDirX + oDirY * oDirY - cr * cr;
            const lambda = (coefficientB * coefficientB) - (4 * coefficientA * coefficientC);
            let x;
            let y;
            if (lambda === 0) {
                const root = -coefficientB / (2 * coefficientA);
                x = x1 + root * lDirX;
                y = y1 + root * lDirY;
                if (root >= 0 && root <= 1) {
                    out.push(new Vec2(x, y));
                }
            }
            else if (lambda > 0) {
                const root1 = (-coefficientB - Math.sqrt(lambda)) / (2 * coefficientA);
                x = x1 + root1 * lDirX;
                y = y1 + root1 * lDirY;
                if (root1 >= 0 && root1 <= 1) {
                    out.push(new Vec2(x, y));
                }
                const root2 = (-coefficientB + Math.sqrt(lambda)) / (2 * coefficientA);
                x = x1 + root2 * lDirX;
                y = y1 + root2 * lDirY;
                if (root2 >= 0 && root2 <= 1) {
                    out.push(new Vec2(x, y));
                }
            }
        }
        return out;
    }

    function GetCircleToRectangle(circle, rect, out = []) {
        if (CircleToRectangle(circle, rect)) {
            const [line1, line2, line3, line4] = GetEdges(rect);
            GetLineToCircle(line1, circle, out);
            GetLineToCircle(line2, circle, out);
            GetLineToCircle(line3, circle, out);
            GetLineToCircle(line4, circle, out);
        }
        return out;
    }

    function LineToLine(line1, line2, out) {
        const { x1, y1, x2, y2 } = line1;
        const { x1: x3, y1: y3, x2: x4, y2: y4 } = line2;
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
                out.set(x1 + (uA * (x2 - x1)), y1 + (uA * (y2 - y1)));
            }
            return true;
        }
        return false;
    }

    function LineToRectangle(line, rect) {
        const { x1, y1, x2, y2 } = line;
        const { x, y, right, bottom } = rect;
        let t = 0;
        if ((x1 >= x && x1 <= right && y1 >= y && y1 <= bottom) ||
            (x2 >= x && x2 <= right && y2 >= y && y2 <= bottom)) {
            return true;
        }
        if (x1 < x && x2 >= x) {
            t = y1 + (y2 - y1) * (x - x1) / (x2 - x1);
            if (t > y && t <= bottom) {
                return true;
            }
        }
        else if (x1 > right && x2 <= right) {
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
        }
        else if (y1 > bottom && y2 <= bottom) {
            t = x1 + (x2 - x1) * (bottom - y1) / (y2 - y1);
            if (t >= x && t <= right) {
                return true;
            }
        }
        return false;
    }

    function GetLineToRectangle(line, rect, out = []) {
        if (LineToRectangle(line, rect)) {
            const [lineA, lineB, lineC, lineD] = GetEdges(rect);
            const points = [new Vec2(), new Vec2(), new Vec2(), new Vec2()];
            const results = [
                LineToLine(lineA, line, points[0]),
                LineToLine(lineB, line, points[1]),
                LineToLine(lineC, line, points[2]),
                LineToLine(lineD, line, points[3])
            ];
            for (let i = 0; i < results.length; i++) {
                if (results[i]) {
                    out.push(points[i]);
                }
            }
        }
        return out;
    }

    function GetRectangleIntersection(rectA, rectB, out = new Rectangle()) {
        if (RectangleToRectangle(rectA, rectB)) {
            const x = Math.max(rectA.x, rectB.x);
            const y = Math.max(rectA.y, rectB.y);
            return out.set(x, y, Math.min(rectA.right, rectB.right) - x, Math.min(rectA.bottom, rectB.bottom) - y);
        }
    }

    function GetRectangleToRectangle(rectA, rectB, out = []) {
        if (RectangleToRectangle(rectA, rectB)) {
            const [lineA, lineB, lineC, lineD] = GetEdges(rectA);
            GetLineToRectangle(lineA, rectB, out);
            GetLineToRectangle(lineB, rectB, out);
            GetLineToRectangle(lineC, rectB, out);
            GetLineToRectangle(lineD, rectB, out);
        }
        return out;
    }

    function GetEdges$1(triangle) {
        const { x1, y1, x2, y2, x3, y3 } = triangle;
        const edge1 = new Line(x1, y1, x2, y2);
        const edge2 = new Line(x2, y2, x3, y3);
        const edge3 = new Line(x3, y3, x1, y1);
        return [edge1, edge2, edge3];
    }

    function Contains$3(triangle, x, y) {
        const { x1, y1, x2, y2, x3, y3 } = triangle;
        const v0x = x3 - x1;
        const v0y = y3 - y1;
        const v1x = x2 - x1;
        const v1y = y2 - y1;
        const v2x = x - x1;
        const v2y = y - y1;
        const dot00 = (v0x * v0x) + (v0y * v0y);
        const dot01 = (v0x * v1x) + (v0y * v1y);
        const dot02 = (v0x * v2x) + (v0y * v2y);
        const dot11 = (v1x * v1x) + (v1y * v1y);
        const dot12 = (v1x * v2x) + (v1y * v2y);
        const b = ((dot00 * dot11) - (dot01 * dot01));
        const inv = (b === 0) ? 0 : (1 / b);
        const u = ((dot11 * dot02) - (dot01 * dot12)) * inv;
        const v = ((dot00 * dot12) - (dot01 * dot02)) * inv;
        return (u >= 0 && v >= 0 && (u + v < 1));
    }

    function ContainsArray(triangle, points, returnFirst = false, out = []) {
        let skip = false;
        points.forEach(point => {
            if (skip) {
                return;
            }
            const { x, y } = point;
            if (Contains$3(triangle, x, y)) {
                out.push(new Vec2(x, y));
                if (returnFirst) {
                    skip = true;
                }
            }
        });
        return out;
    }

    function RectangleToTriangle(rect, triangle) {
        if (triangle.left > rect.right ||
            triangle.right < rect.x ||
            triangle.top > rect.bottom ||
            triangle.bottom < rect.y) {
            return false;
        }
        const [triA, triB, triC] = GetEdges$1(triangle);
        if (Contains(rect, triA.x1, triA.y1) || Contains(rect, triA.x2, triA.y2)) {
            return true;
        }
        if (Contains(rect, triB.x1, triB.y1) || Contains(rect, triB.x2, triB.y2)) {
            return true;
        }
        if (Contains(rect, triC.x1, triC.y1) || Contains(rect, triC.x2, triC.y2)) {
            return true;
        }
        const [rectA, rectB, rectC, rectD] = GetEdges(rect);
        if (LineToLine(triA, rectA) || LineToLine(triA, rectB) || LineToLine(triA, rectC) || LineToLine(triA, rectD)) {
            return true;
        }
        if (LineToLine(triB, rectA) || LineToLine(triB, rectB) || LineToLine(triB, rectC) || LineToLine(triB, rectD)) {
            return true;
        }
        if (LineToLine(triC, rectA) || LineToLine(triC, rectB) || LineToLine(triC, rectC) || LineToLine(triC, rectD)) {
            return true;
        }
        const within = ContainsArray(triangle, Decompose(rect), true);
        return (within.length > 0);
    }

    function GetRectangleToTriangle(rect, triangle, out = []) {
        if (RectangleToTriangle(rect, triangle)) {
            const [lineA, lineB, lineC] = GetEdges$1(triangle);
            GetLineToRectangle(lineA, rect, out);
            GetLineToRectangle(lineB, rect, out);
            GetLineToRectangle(lineC, rect, out);
        }
        return out;
    }

    function TriangleToCircle(triangle, circle) {
        if (triangle.left > circle.right ||
            triangle.right < circle.left ||
            triangle.top > circle.bottom ||
            triangle.bottom < circle.top) {
            return false;
        }
        if (Contains$3(triangle, circle.x, circle.y)) {
            return true;
        }
        const [line1, line2, line3] = GetEdges$1(triangle);
        return (LineToCircle(line1, circle) ||
            LineToCircle(line2, circle) ||
            LineToCircle(line3, circle));
    }

    function GetTriangleToCircle(triangle, circle, out = []) {
        if (TriangleToCircle(triangle, circle)) {
            const [lineA, lineB, lineC] = GetEdges$1(triangle);
            GetLineToCircle(lineA, circle, out);
            GetLineToCircle(lineB, circle, out);
            GetLineToCircle(lineC, circle, out);
        }
        return out;
    }

    function TriangleToLine(triangle, line) {
        const { x1, y1, x2, y2 } = line;
        if (Contains$3(triangle, x1, y1) || Contains$3(triangle, x2, y2)) {
            return true;
        }
        const [line1, line2, line3] = GetEdges$1(triangle);
        return (LineToLine(line1, line) ||
            LineToLine(line2, line) ||
            LineToLine(line3, line));
    }

    function GetTriangleToLine(triangle, line, out = []) {
        if (TriangleToLine(triangle, line)) {
            const [lineA, lineB, lineC] = GetEdges$1(triangle);
            const points = [new Vec2(), new Vec2(), new Vec2()];
            const results = [
                LineToLine(lineA, line, points[0]),
                LineToLine(lineB, line, points[1]),
                LineToLine(lineC, line, points[2])
            ];
            for (let i = 0; i < results.length; i++) {
                if (results[i]) {
                    out.push(points[i]);
                }
            }
        }
        return out;
    }

    function Decompose$1(triangle, out = []) {
        const { x1, y1, x2, y2, x3, y3 } = triangle;
        out.push(new Vec2(x1, y1), new Vec2(x2, y2), new Vec2(x3, y3));
        return out;
    }

    function TriangleToTriangle(triangleA, triangleB) {
        if (triangleA.left > triangleB.right ||
            triangleA.right < triangleB.left ||
            triangleA.top > triangleB.bottom ||
            triangleA.bottom < triangleB.top) {
            return false;
        }
        const [lineAA, lineAB, lineAC] = GetEdges$1(triangleA);
        const [lineBA, lineBB, lineBC] = GetEdges$1(triangleB);
        if (LineToLine(lineAA, lineBA) ||
            LineToLine(lineAA, lineBB) ||
            LineToLine(lineAA, lineBC) ||
            LineToLine(lineAB, lineBA) ||
            LineToLine(lineAB, lineBB) ||
            LineToLine(lineAB, lineBC) ||
            LineToLine(lineAC, lineBA) ||
            LineToLine(lineAC, lineBB) ||
            LineToLine(lineAC, lineBC)) {
            return true;
        }
        const withinA = ContainsArray(triangleB, Decompose$1(triangleA), true);
        if (withinA.length > 0) {
            return true;
        }
        const withinB = ContainsArray(triangleA, Decompose$1(triangleB), true);
        return (withinB.length > 0);
    }

    function GetTriangleToTriangle(triangleA, triangleB, out = []) {
        if (TriangleToTriangle(triangleA, triangleB)) {
            const [lineA, lineB, lineC] = GetEdges$1(triangleB);
            GetTriangleToLine(triangleA, lineA, out);
            GetTriangleToLine(triangleA, lineB, out);
            GetTriangleToLine(triangleA, lineC, out);
        }
        return out;
    }

    function PointToLine(point, line, lineThickness = 1) {
        const { x1, y1, x2, y2 } = line;
        const { x: px, y: py } = point;
        const L2 = (((x2 - x1) * (x2 - x1)) + ((y2 - y1) * (y2 - y1)));
        if (L2 === 0) {
            return false;
        }
        const r = (((px - x1) * (x2 - x1)) + ((py - y1) * (y2 - y1))) / L2;
        if (r < 0) {
            return (Math.sqrt(((x1 - px) * (x1 - px)) + ((y1 - py) * (y1 - py))) <= lineThickness);
        }
        else if ((r >= 0) && (r <= 1)) {
            const s = (((y1 - py) * (x2 - x1)) - ((x1 - px) * (y2 - y1))) / L2;
            return (Math.abs(s) * Math.sqrt(L2) <= lineThickness);
        }
        else {
            return (Math.sqrt(((x2 - px) * (x2 - px)) + ((y2 - py) * (y2 - py))) <= lineThickness);
        }
    }

    function PointToLineSegment(point, line) {
        if (!PointToLine(point, line)) {
            return false;
        }
        const { x1, y1, x2, y2 } = line;
        const { x, y } = point;
        const xMin = Math.min(x1, x2);
        const xMax = Math.max(x1, x2);
        const yMin = Math.min(y1, y2);
        const yMax = Math.max(y1, y2);
        return ((x >= xMin && x <= xMax) && (y >= yMin && y <= yMax));
    }

    var index$K = /*#__PURE__*/Object.freeze({
        __proto__: null,
        CircleToCircle: CircleToCircle,
        CircleToRectangle: CircleToRectangle,
        GetCircleToCircle: GetCircleToCircle,
        GetCircleToRectangle: GetCircleToRectangle,
        GetLineToCircle: GetLineToCircle,
        GetLineToRectangle: GetLineToRectangle,
        GetRectangleIntersection: GetRectangleIntersection,
        GetRectangleToRectangle: GetRectangleToRectangle,
        GetRectangleToTriangle: GetRectangleToTriangle,
        GetTriangleToCircle: GetTriangleToCircle,
        GetTriangleToLine: GetTriangleToLine,
        GetTriangleToTriangle: GetTriangleToTriangle,
        LineToCircle: LineToCircle,
        LineToLine: LineToLine,
        LineToRectangle: LineToRectangle,
        PointToLine: PointToLine,
        PointToLineSegment: PointToLineSegment,
        RectangleToRectangle: RectangleToRectangle,
        RectangleToTriangle: RectangleToTriangle,
        TriangleToCircle: TriangleToCircle,
        TriangleToLine: TriangleToLine,
        TriangleToTriangle: TriangleToTriangle
    });

    function Angle$2(line) {
        return Math.atan2(line.y2 - line.y1, line.x2 - line.x1);
    }

    function BresenhamPoints(line, stepRate = 1, results = []) {
        let x1 = Math.round(line.x1);
        let y1 = Math.round(line.y1);
        const x2 = Math.round(line.x2);
        const y2 = Math.round(line.y2);
        const dx = Math.abs(x2 - x1);
        const dy = Math.abs(y2 - y1);
        const sx = (x1 < x2) ? 1 : -1;
        const sy = (y1 < y2) ? 1 : -1;
        let err = dx - dy;
        results.push(new Vec2(x1, y1));
        let i = 1;
        while (!((x1 === x2) && (y1 === y2))) {
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
                results.push(new Vec2(x1, y1));
            }
            i++;
        }
        return results;
    }

    function CenterOn$1(line, x, y) {
        const tx = x - ((line.x1 + line.x2) / 2);
        const ty = y - ((line.y1 + line.y2) / 2);
        line.x1 += tx;
        line.y1 += ty;
        line.x2 += tx;
        line.y2 += ty;
        return line;
    }

    function Clone$9(source) {
        return new Line(source.x1, source.y1, source.x2, source.y2);
    }

    function CopyFrom$9(source, dest) {
        return dest.set(source.x1, source.y1, source.x2, source.y2);
    }

    function Equals$9(line, toCompare) {
        return (line.x1 === toCompare.x1 &&
            line.y1 === toCompare.y1 &&
            line.x2 === toCompare.x2 &&
            line.y2 === toCompare.y2);
    }

    function Length$4(line) {
        const { x1, y1, x2, y2 } = line;
        return Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
    }

    function Extend(line, left, right = left) {
        const length = Length$4(line);
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

    function GetMidPoint(line, out = new Vec2()) {
        out.x = (line.x1 + line.x2) / 2;
        out.y = (line.y1 + line.y2) / 2;
        return out;
    }

    function GetNearestPoint(line, point, out = new Vec2()) {
        const { x1, y1, x2, y2 } = line;
        const L2 = (((x2 - x1) * (x2 - x1)) + ((y2 - y1) * (y2 - y1)));
        if (L2 === 0) {
            return out;
        }
        const r = (((point.x - x1) * (x2 - x1)) + ((point.y - y1) * (y2 - y1))) / L2;
        out.x = x1 + (r * (x2 - x1));
        out.y = y1 + (r * (y2 - y1));
        return out;
    }

    function GetNormal(line, out = new Vec2()) {
        const a = Angle$2(line) - MATH_CONST.HALF_PI;
        out.x = Math.cos(a);
        out.y = Math.sin(a);
        return out;
    }

    function GetPoint$3(line, position, out = new Vec2()) {
        out.x = line.x1 + (line.x2 - line.x1) * position;
        out.y = line.y1 + (line.y2 - line.y1) * position;
        return out;
    }

    function GetPoints$3(line, quantity, stepRate = 0, out = []) {
        if (!quantity) {
            quantity = Length$4(line) / stepRate;
        }
        const { x1, y1, x2, y2 } = line;
        for (let i = 0; i < quantity; i++) {
            const position = i / quantity;
            const x = x1 + (x2 - x1) * position;
            const y = y1 + (y2 - y1) * position;
            out.push(new Vec2(x, y));
        }
        return out;
    }

    function GetShortestDistance(line, point) {
        const { x1, y1, x2, y2 } = line;
        const L2 = (((x2 - x1) * (x2 - x1)) + ((y2 - y1) * (y2 - y1)));
        if (L2 === 0) {
            return 0;
        }
        const s = (((y1 - point.y) * (x2 - x1)) - ((x1 - point.x) * (y2 - y1))) / L2;
        return Math.abs(s) * Math.sqrt(L2);
    }

    function Height(line) {
        return Math.abs(line.y1 - line.y2);
    }

    function NormalAngle(line) {
        const angle = Angle$2(line) - MATH_CONST.HALF_PI;
        return Wrap(angle, -Math.PI, Math.PI);
    }

    function NormalX(line) {
        return Math.cos(Angle$2(line) - MATH_CONST.HALF_PI);
    }

    function NormalY(line) {
        return Math.sin(Angle$2(line) - MATH_CONST.HALF_PI);
    }

    function Offset$3(line, x, y) {
        line.x1 += x;
        line.y1 += y;
        line.x2 += x;
        line.y2 += y;
        return line;
    }

    function PerpSlope(line) {
        const { x1, y1, x2, y2 } = line;
        return -((x2 - x1) / (y2 - y1));
    }

    function Random$6(line, out = new Vec2()) {
        const t = Math.random();
        out.x = line.x1 + t * (line.x2 - line.x1);
        out.y = line.y1 + t * (line.y2 - line.y1);
        return out;
    }

    function ReflectAngle(lineA, lineB) {
        return (2 * NormalAngle(lineB) - Math.PI - Angle$2(lineA));
    }

    function RotateAroundXY(line, x, y, angle) {
        const c = Math.cos(angle);
        const s = Math.sin(angle);
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

    function Rotate$3(line, angle) {
        const x = (line.x1 + line.x2) / 2;
        const y = (line.y1 + line.y2) / 2;
        return RotateAroundXY(line, x, y, angle);
    }

    function RotateAroundPoint(line, point, angle) {
        return RotateAroundXY(line, point.x, point.y, angle);
    }

    function SetToAngle(line, x, y, angle, length) {
        line.x1 = x;
        line.y1 = y;
        line.x2 = x + (Math.cos(angle) * length);
        line.y2 = y + (Math.sin(angle) * length);
        return line;
    }

    function Slope(line) {
        const { x1, y1, x2, y2 } = line;
        return (y2 - y1) / (x2 - x1);
    }

    function Width(line) {
        return Math.abs(line.x1 - line.x2);
    }

    var index$L = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Angle: Angle$2,
        BresenhamPoints: BresenhamPoints,
        CenterOn: CenterOn$1,
        Clone: Clone$9,
        CopyFrom: CopyFrom$9,
        Equals: Equals$9,
        Extend: Extend,
        GetMidPoint: GetMidPoint,
        GetNearestPoint: GetNearestPoint,
        GetNormal: GetNormal,
        GetPoint: GetPoint$3,
        GetPoints: GetPoints$3,
        GetShortestDistance: GetShortestDistance,
        Height: Height,
        Length: Length$4,
        Line: Line,
        NormalAngle: NormalAngle,
        NormalX: NormalX,
        NormalY: NormalY,
        Offset: Offset$3,
        PerpSlope: PerpSlope,
        Random: Random$6,
        ReflectAngle: ReflectAngle,
        Rotate: Rotate$3,
        RotateAroundPoint: RotateAroundPoint,
        RotateAroundXY: RotateAroundXY,
        SetToAngle: SetToAngle,
        Slope: Slope,
        Width: Width
    });

    function Area$3(triangle) {
        const { x1, y1, x2, y2, x3, y3 } = triangle;
        return Math.abs(((x3 - x1) * (y2 - y1) - (x2 - x1) * (y3 - y1)) / 2);
    }

    class Triangle {
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
            return Contains$3(this, x, y);
        }
        get left() {
            return Math.min(this.x1, this.x2, this.x3);
        }
        set left(value) {
            let diff = 0;
            if (this.x1 <= this.x2 && this.x1 <= this.x3) {
                diff = this.x1 - value;
            }
            else if (this.x2 <= this.x1 && this.x2 <= this.x3) {
                diff = this.x2 - value;
            }
            else {
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
            }
            else if (this.x2 >= this.x1 && this.x2 >= this.x3) {
                diff = this.x2 - value;
            }
            else {
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
            }
            else if (this.y2 <= this.y1 && this.y2 <= this.y3) {
                diff = this.y2 - value;
            }
            else {
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
            }
            else if (this.y2 >= this.y1 && this.y2 >= this.y3) {
                diff = this.y2 - value;
            }
            else {
                diff = this.y3 - value;
            }
            this.y1 -= diff;
            this.y2 -= diff;
            this.y3 -= diff;
        }
    }

    function BuildEquilateral(x, y, length) {
        const height = length * (Math.sqrt(3) / 2);
        const x1 = x;
        const y1 = y;
        const x2 = x + (length / 2);
        const y2 = y + height;
        const x3 = x - (length / 2);
        const y3 = y + height;
        return new Triangle(x1, y1, x2, y2, x3, y3);
    }

    function BuildRight(x, y, width, height = width) {
        const x1 = x;
        const y1 = y;
        const x2 = x;
        const y2 = y - height;
        const x3 = x + width;
        const y3 = y;
        return new Triangle(x1, y1, x2, y2, x3, y3);
    }

    function Centroid(triangle, out = new Vec2()) {
        return out.set((triangle.x1 + triangle.x2 + triangle.x3) / 3, (triangle.y1 + triangle.y2 + triangle.y3) / 3);
    }

    function Offset$4(triangle, x, y) {
        triangle.x1 += x;
        triangle.y1 += y;
        triangle.x2 += x;
        triangle.y2 += y;
        triangle.x3 += x;
        triangle.y3 += y;
        return triangle;
    }

    function CenterOn$2(triangle, x, y, centerFunc = Centroid) {
        const center = centerFunc(triangle);
        const diffX = x - center.x;
        const diffY = y - center.y;
        return Offset$4(triangle, diffX, diffY);
    }

    function Det(m00, m01, m10, m11) {
        return (m00 * m11) - (m01 * m10);
    }
    function CircumCenter(triangle, out = new Vec2()) {
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

    function Contains$4(circle, x, y) {
        if (circle.radius > 0 && x >= circle.left && x <= circle.right && y >= circle.top && y <= circle.bottom) {
            const dx = (circle.x - x) * (circle.x - x);
            const dy = (circle.y - y) * (circle.y - y);
            return (dx + dy) <= (circle.radius * circle.radius);
        }
        else {
            return false;
        }
    }

    class Circle$1 {
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
            return Contains$4(this, x, y);
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

    function CircumCircle(triangle, out = new Circle$1()) {
        const { x1, y1, x2, y2, x3, y3 } = triangle;
        const A = x2 - x1;
        const B = y2 - y1;
        const C = x3 - x1;
        const D = y3 - y1;
        const E = A * (x1 + x2) + B * (y1 + y2);
        const F = C * (x1 + x3) + D * (y1 + y3);
        const G = 2 * (A * (y3 - y2) - B * (x3 - x2));
        if (Math.abs(G) < 0.000001) {
            const minX = Math.min(x1, x2, x3);
            const minY = Math.min(y1, y2, y3);
            const dx = (Math.max(x1, x2, x3) - minX) * 0.5;
            const dy = (Math.max(y1, y2, y3) - minY) * 0.5;
            return out.set(minX + dx, minY + dy, Math.sqrt(dx * dx + dy * dy));
        }
        else {
            const cx = (D * E - B * F) / G;
            const cy = (A * F - C * E) / G;
            const dx = cx - x1;
            const dy = cy - y1;
            return out.set(cx, cy, Math.sqrt(dx * dx + dy * dy));
        }
    }

    function Clone$a(source) {
        const { x1, y1, x2, y2, x3, y3 } = source;
        return new Triangle(x1, y1, x2, y2, x3, y3);
    }

    function ContainsPoint$3(triangle, point) {
        return Contains$3(triangle, point.x, point.y);
    }

    function CopyFrom$a(source, dest) {
        const { x1, y1, x2, y2, x3, y3 } = source;
        return dest.set(x1, y1, x2, y2, x3, y3);
    }

    function Equals$a(triangle, toCompare) {
        return (triangle.x1 === toCompare.x1 &&
            triangle.y1 === toCompare.y1 &&
            triangle.x2 === toCompare.x2 &&
            triangle.y2 === toCompare.y2 &&
            triangle.x3 === toCompare.x3 &&
            triangle.y3 === toCompare.y3);
    }

    function GetPoint$4(triangle, position, out = new Vec2()) {
        const [line1, line2, line3] = GetEdges$1(triangle);
        if (position <= 0 || position >= 1) {
            return out.set(line1.x1, line1.y1);
        }
        const length1 = Length$4(line1);
        const length2 = Length$4(line2);
        const length3 = Length$4(line3);
        const perimeter = length1 + length2 + length3;
        let p = perimeter * position;
        let localPosition = 0;
        if (p < length1) {
            localPosition = p / length1;
            const { x1, y1, x2, y2 } = line1;
            return out.set(x1 + (x2 - x1) * localPosition, y1 + (y2 - y1) * localPosition);
        }
        else if (p > length1 + length2) {
            p -= length1 + length2;
            localPosition = p / length3;
            const { x1, y1, x2, y2 } = line3;
            return out.set(x1 + (x2 - x1) * localPosition, y1 + (y2 - y1) * localPosition);
        }
        else {
            p -= length1;
            localPosition = p / length2;
            const { x1, y1, x2, y2 } = line2;
            return out.set(x1 + (x2 - x1) * localPosition, y1 + (y2 - y1) * localPosition);
        }
    }

    function GetPoints$4(triangle, quantity, stepRate, out = []) {
        const [line1, line2, line3] = GetEdges$1(triangle);
        const length1 = Length$4(line1);
        const length2 = Length$4(line2);
        const length3 = Length$4(line3);
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
                const { x1, y1, x2, y2 } = line1;
                point = new Vec2(x1 + (x2 - x1) * localPosition, y1 + (y2 - y1) * localPosition);
            }
            else if (p > length1 + length2) {
                p -= length1 + length2;
                localPosition = p / length3;
                const { x1, y1, x2, y2 } = line3;
                point = new Vec2(x1 + (x2 - x1) * localPosition, y1 + (y2 - y1) * localPosition);
            }
            else {
                p -= length1;
                localPosition = p / length2;
                const { x1, y1, x2, y2 } = line2;
                point = new Vec2(x1 + (x2 - x1) * localPosition, y1 + (y2 - y1) * localPosition);
            }
            out.push(point);
        }
        return out;
    }

    function GetLength(x1, y1, x2, y2) {
        const x = x1 - x2;
        const y = y1 - y2;
        const magnitude = (x * x) + (y * y);
        return Math.sqrt(magnitude);
    }
    function InCenter(triangle, out = new Vec2()) {
        const { x1, y1, x2, y2, x3, y3 } = triangle;
        const d1 = GetLength(x3, y3, x2, y2);
        const d2 = GetLength(x1, y1, x3, y3);
        const d3 = GetLength(x2, y2, x1, y1);
        const p = d1 + d2 + d3;
        return out.set((x1 * d1 + x2 * d2 + x3 * d3) / p, (y1 * d1 + y2 * d2 + y3 * d3) / p);
    }

    function Perimeter$1(triangle) {
        const [line1, line2, line3] = GetEdges$1(triangle);
        return (Length$4(line1) + Length$4(line2) + Length$4(line3));
    }

    function Random$7(triangle, out = new Vec2()) {
        const { x1, y1, x2, y2, x3, y3 } = triangle;
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
        return out.set(x1 + ((ux * r) + (vx * s)), y1 + ((uy * r) + (vy * s)));
    }

    function RotateAroundXY$1(triangle, x, y, angle) {
        const { x1, y1, x2, y2, x3, y3 } = triangle;
        const c = Math.cos(angle);
        const s = Math.sin(angle);
        return triangle.set((x1 - x) * c - (y1 - y) * s + x, (x1 - x) * s + (y1 - y) * c + y, (x2 - x) * c - (y2 - y) * s + x, (x2 - x) * s + (y2 - y) * c + y, (x3 - x) * c - (y3 - y) * s + x, (x3 - x) * s + (y3 - y) * c + y);
    }

    function Rotate$4(triangle, angle) {
        const point = InCenter(triangle);
        return RotateAroundXY$1(triangle, point.x, point.y, angle);
    }

    function RotateAroundPoint$1(triangle, point, angle) {
        return RotateAroundXY$1(triangle, point.x, point.y, angle);
    }

    var index$M = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Area: Area$3,
        BuildEquilateral: BuildEquilateral,
        BuildRight: BuildRight,
        CenterOn: CenterOn$2,
        Centroid: Centroid,
        CircumCenter: CircumCenter,
        CircumCircle: CircumCircle,
        Clone: Clone$a,
        Contains: Contains$3,
        ContainsArray: ContainsArray,
        ContainsPoint: ContainsPoint$3,
        CopyFrom: CopyFrom$a,
        Decompose: Decompose$1,
        Equals: Equals$a,
        GetEdges: GetEdges$1,
        GetPoint: GetPoint$4,
        GetPoints: GetPoints$4,
        InCenter: InCenter,
        Offset: Offset$4,
        Perimeter: Perimeter$1,
        Random: Random$7,
        Rotate: Rotate$4,
        RotateAroundPoint: RotateAroundPoint$1,
        RotateAroundXY: RotateAroundXY$1,
        Triangle: Triangle
    });

    var index$N = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Circle: index$I,
        Ellipse: index$J,
        Intersects: index$K,
        Line: index$L,
        Rectangle: index$A,
        Triangle: index$M
    });

    function TorusGeometry(radius = 1, tube = 0.4, radialSegments = 8, tubularSegments = 6, arc = Math.PI * 2) {
        const data = CreateVertexSet();
        const { vertices, normals, uvs, indices } = data;
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
                Subtract$1(vertex, center, normal);
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

    var index$O = /*#__PURE__*/Object.freeze({
        __proto__: null,
        BoxGeometry: BoxGeometry,
        ConeGeometry: ConeGeometry,
        CylinderGeometry: CylinderGeometry,
        PlaneGeometry: PlaneGeometry,
        SphereGeometry: SphereGeometry,
        TorusGeometry: TorusGeometry
    });

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
                    Emit(this, 'keydown', this);
                    if (this.downCallback) {
                        this.downCallback(this);
                    }
                }
            }
            else {
                this.isDown = true;
                this.timeDown = event.timeStamp;
                this.timeUpdated = event.timeStamp;
                Emit(this, 'keydown', this);
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
                Emit(this, 'keyup', this);
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

    class AKey extends Key {
        constructor() {
            super('a');
        }
    }

    class ArrowKeys {
        constructor(keyboardManager, config) {
            const { left = true, right = true, up = true, down = true, space = true } = config;
            const keys = keyboardManager.keys;
            if (left) {
                this.left = new Key('ArrowLeft');
                keys.set(this.left.value, this.left);
            }
            if (right) {
                this.right = new Key('ArrowRight');
                keys.set(this.right.value, this.right);
            }
            if (up) {
                this.up = new Key('ArrowUp');
                keys.set(this.up.value, this.up);
            }
            if (down) {
                this.down = new Key('ArrowDown');
                keys.set(this.down.value, this.down);
            }
            if (space) {
                this.space = new Key(' ');
                keys.set(this.space.value, this.space);
            }
        }
    }

    class BKey extends Key {
        constructor() {
            super('b');
        }
    }

    class CKey extends Key {
        constructor() {
            super('c');
        }
    }

    class DKey extends Key {
        constructor() {
            super('d');
        }
    }

    class DownKey extends Key {
        constructor() {
            super('ArrowDown');
        }
    }

    class EKey extends Key {
        constructor() {
            super('e');
        }
    }

    class FKey extends Key {
        constructor() {
            super('f');
        }
    }

    class GKey extends Key {
        constructor() {
            super('g');
        }
    }

    class HKey extends Key {
        constructor() {
            super('h');
        }
    }

    class IKey extends Key {
        constructor() {
            super('i');
        }
    }

    class JKey extends Key {
        constructor() {
            super('j');
        }
    }

    class KKey extends Key {
        constructor() {
            super('k');
        }
    }

    class LKey extends Key {
        constructor() {
            super('l');
        }
    }

    class LeftKey extends Key {
        constructor() {
            super('ArrowLeft');
        }
    }

    class MKey extends Key {
        constructor() {
            super('m');
        }
    }

    class NKey extends Key {
        constructor() {
            super('n');
        }
    }

    class OKey extends Key {
        constructor() {
            super('o');
        }
    }

    class PKey extends Key {
        constructor() {
            super('p');
        }
    }

    class QKey extends Key {
        constructor() {
            super('q');
        }
    }

    class RKey extends Key {
        constructor() {
            super('r');
        }
    }

    class RightKey extends Key {
        constructor() {
            super('ArrowRight');
        }
    }

    class SKey extends Key {
        constructor() {
            super('s');
        }
    }

    class SpaceKey extends Key {
        constructor() {
            super(' ');
        }
    }

    class TKey extends Key {
        constructor() {
            super('t');
        }
    }

    class UKey extends Key {
        constructor() {
            super('u');
        }
    }

    class UpKey extends Key {
        constructor() {
            super('ArrowUp');
        }
    }

    class VKey extends Key {
        constructor() {
            super('v');
        }
    }

    class WASDKeys {
        constructor(keyboardManager, config) {
            const { W = true, A = true, S = true, D = true, space = true } = config;
            const keys = keyboardManager.keys;
            if (W) {
                this.W = new Key('w');
                keys.set(this.W.value, this.W);
            }
            if (A) {
                this.A = new Key('a');
                keys.set(this.A.value, this.A);
            }
            if (S) {
                this.S = new Key('s');
                keys.set(this.S.value, this.S);
            }
            if (D) {
                this.D = new Key('d');
                keys.set(this.D.value, this.D);
            }
            if (space) {
                this.space = new Key(' ');
                keys.set(this.space.value, this.space);
            }
        }
    }

    class WKey extends Key {
        constructor() {
            super('w');
        }
    }

    class XKey extends Key {
        constructor() {
            super('x');
        }
    }

    class YKey extends Key {
        constructor() {
            super('y');
        }
    }

    class ZKey extends Key {
        constructor() {
            super('z');
        }
    }

    var index$P = /*#__PURE__*/Object.freeze({
        __proto__: null,
        AKey: AKey,
        BKey: BKey,
        CKey: CKey,
        DKey: DKey,
        EKey: EKey,
        FKey: FKey,
        GKey: GKey,
        HKey: HKey,
        IKey: IKey,
        JKey: JKey,
        KKey: KKey,
        LKey: LKey,
        MKey: MKey,
        NKey: NKey,
        OKey: OKey,
        PKey: PKey,
        QKey: QKey,
        RKey: RKey,
        SKey: SKey,
        TKey: TKey,
        UKey: UKey,
        VKey: VKey,
        WKey: WKey,
        XKey: XKey,
        YKey: YKey,
        ZKey: ZKey,
        ArrowKeys: ArrowKeys,
        DownKey: DownKey,
        LeftKey: LeftKey,
        RightKey: RightKey,
        SpaceKey: SpaceKey,
        UpKey: UpKey,
        WASDKeys: WASDKeys
    });

    function GetKeyDownDuration(key) {
        if (key.isDown) {
            return key.timeUpdated - key.timeDown;
        }
        else {
            return key.timeUp - key.timeDown;
        }
    }

    class Keyboard extends EventEmitter {
        constructor() {
            super();
            this.keyConversion = {
                Up: 'ArrowUp',
                Down: 'ArrowDown',
                Left: 'ArrowLeft',
                Right: 'ArrowRight',
                Spacebar: ' ',
                Win: 'Meta',
                Scroll: 'ScrollLock',
                Del: 'Delete',
                Apps: 'ContextMenu',
                Esc: 'Escape',
                Add: '+',
                Subtract: '-',
                Multiply: '*',
                Decimal: '.',
                Divide: '/'
            };
            this.keydownHandler = (event) => this.onKeyDown(event);
            this.keyupHandler = (event) => this.onKeyUp(event);
            this.blurHandler = () => this.onBlur();
            window.addEventListener('keydown', this.keydownHandler);
            window.addEventListener('keyup', this.keyupHandler);
            window.addEventListener('blur', this.blurHandler);
            this.keys = new Map();
        }
        addKeys(...keys) {
            keys.forEach(key => {
                this.keys.set(key.getValue(), key);
            });
        }
        clearKeys() {
            this.keys.clear();
        }
        onBlur() {
            this.keys.forEach(key => {
                key.reset();
            });
        }
        getKeyValue(key) {
            if (this.keyConversion.hasOwnProperty(key)) {
                return this.keyConversion[key];
            }
            else {
                return key;
            }
        }
        onKeyDown(event) {
            const value = this.getKeyValue(event.key);
            if (this.keys.has(value)) {
                const key = this.keys.get(value);
                key.down(event);
            }
            Emit(this, 'keydown-' + value, event);
            Emit(this, 'keydown', event);
        }
        onKeyUp(event) {
            const value = this.getKeyValue(event.key);
            if (this.keys.has(value)) {
                const key = this.keys.get(value);
                key.up(event);
            }
            Emit(this, 'keyup-' + value, event);
            Emit(this, 'keyup', event);
        }
        destroy() {
            window.removeEventListener('keydown', this.keydownHandler);
            window.removeEventListener('keyup', this.keyupHandler);
            window.removeEventListener('blur', this.blurHandler);
            Emit(this, 'destroy');
        }
    }

    function SetKeyRepeatRate(rate, ...keys) {
        keys.forEach(key => {
            key.repeatRate = rate;
        });
        return keys;
    }

    var index$Q = /*#__PURE__*/Object.freeze({
        __proto__: null,
        GetKeyDownDuration: GetKeyDownDuration,
        Key: Key,
        Keys: index$P,
        Keyboard: Keyboard,
        SetKeyRepeatRate: SetKeyRepeatRate
    });

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
            this.localPoint = new Vec2();
            this.hitPoint = new Vec2();
            this.transPoint = new Vec2();
            if (!target) {
                target = GameInstance.get().renderer.canvas;
            }
            target.addEventListener('mousedown', this.mousedownHandler);
            target.addEventListener('mouseup', this.mouseupHandler);
            target.addEventListener('wheel', this.mousewheelHandler, { passive: false });
            target.addEventListener('contextmenu', this.contextmenuHandler);
            window.addEventListener('mouseup', this.mouseupHandler);
            window.addEventListener('mousemove', this.mousemoveHandler);
            window.addEventListener('blur', this.blurHandler);
            this.target = target;
        }
        onBlur() {
        }
        onMouseDown(event) {
            this.positionToPoint(event);
            this.primaryDown = (event.button === 0);
            this.auxDown = (event.button === 1);
            this.secondaryDown = (event.button === 2);
            Emit(this, 'pointerdown', this.localPoint.x, this.localPoint.y, event.button, event);
        }
        onMouseUp(event) {
            this.positionToPoint(event);
            this.primaryDown = !(event.button === 0);
            this.auxDown = !(event.button === 1);
            this.secondaryDown = !(event.button === 2);
            Emit(this, 'pointerup', this.localPoint.x, this.localPoint.y, event.button, event);
        }
        onMouseMove(event) {
            this.positionToPoint(event);
            Emit(this, 'pointermove', this.localPoint.x, this.localPoint.y, event);
        }
        onMouseWheel(event) {
            Emit(this, 'wheel', event.deltaX, event.deltaY, event.deltaZ, event);
        }
        onContextMenuEvent(event) {
            if (this.blockContextMenu) {
                event.preventDefault();
            }
            Emit(this, 'contextmenu', event);
        }
        positionToPoint(event) {
            return this.localPoint.set(event.offsetX, event.offsetY);
        }
        getInteractiveChildren(parent, results) {
            const children = parent.children;
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
            }
            else {
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
                const mat = Append(entity.world.camera.worldTransform, entity.transform.world);
                GlobalToLocal(mat, localX, localY, point);
                if (this.checkHitArea(entity, point.x, point.y)) {
                    this.hitPoint.set(point.x, point.y);
                    return true;
                }
            }
            return false;
        }
        hitTestChildren(parent, topOnly = true) {
            const output = [];
            if (!parent.visible) {
                return output;
            }
            const candidates = [];
            const parentInput = parent.input;
            if (parentInput && parentInput.enabled) {
                candidates.push(parent);
            }
            if (parentInput.enabledChildren && parent.numChildren) {
                this.getInteractiveChildren(parent, candidates);
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
            target.removeEventListener('mousedown', this.mousedownHandler);
            target.removeEventListener('mouseup', this.mouseupHandler);
            target.removeEventListener('wheel', this.mousewheelHandler);
            target.removeEventListener('contextmenu', this.contextmenuHandler);
            window.removeEventListener('mouseup', this.mouseupHandler);
            window.removeEventListener('mousemove', this.mousemoveHandler);
            window.removeEventListener('blur', this.blurHandler);
        }
    }

    var index$R = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Mouse: Mouse
    });

    function SetInteractive(...children) {
        children.forEach(child => {
            child.input.enabled = true;
        });
        return children;
    }

    var index$S = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Keyboard: index$Q,
        Mouse: index$R,
        SetInteractive: SetInteractive
    });

    function AtlasParser(texture, data) {
        let frames;
        if (Array.isArray(data.textures)) {
            frames = data.textures[0].frames;
        }
        else if (Array.isArray(data.frames)) {
            frames = data.frames;
        }
        else if (data.hasOwnProperty('frames')) {
            frames = Object.values(data.frames);
        }
        else {
            console.warn('Invalid Texture Atlas JSON');
        }
        if (frames) {
            let newFrame;
            for (let i = 0; i < frames.length; i++) {
                const src = frames[i];
                newFrame = texture.addFrame(src.filename, src.frame.x, src.frame.y, src.frame.w, src.frame.h);
                if (src.trimmed) {
                    newFrame.setTrim(src.sourceSize.w, src.sourceSize.h, src.spriteSourceSize.x, src.spriteSourceSize.y, src.spriteSourceSize.w, src.spriteSourceSize.h);
                }
                else {
                    newFrame.setSourceSize(src.sourceSize.w, src.sourceSize.h);
                }
                if (src.rotated) ;
                if (src.anchor) {
                    newFrame.setPivot(src.anchor.x, src.anchor.y);
                }
            }
        }
    }

    class File {
        constructor(key, url, config) {
            this.responseType = 'text';
            this.crossOrigin = undefined;
            this.skipCache = false;
            this.hasLoaded = false;
            this.key = key;
            this.url = url;
            this.config = config;
        }
    }

    function GetURL(key, url, extension, loader) {
        if (!url) {
            url = key + extension;
        }
        if ((/^(?:blob:|data:|http:\/\/|https:\/\/|\/\/)/).exec(url)) {
            return url;
        }
        else if (loader) {
            return loader.baseURL + loader.path + url;
        }
        else {
            return url;
        }
    }

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

    function ImageFile(key, url, glConfig) {
        const file = new File(key, url);
        file.load = () => {
            file.url = GetURL(file.key, file.url, '.png', file.loader);
            if (file.loader) {
                file.crossOrigin = file.loader.crossOrigin;
            }
            return new Promise((resolve, reject) => {
                const textureManager = TextureManagerInstance.get();
                if (textureManager.has(file.key)) {
                    resolve(file);
                }
                else {
                    ImageTagLoader(file).then(file => {
                        textureManager.add(file.key, file.data, glConfig);
                        resolve(file);
                    }).catch(file => {
                        reject(file);
                    });
                }
            });
        };
        return file;
    }

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

    function XHRLoader(file) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', file.url, true);
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

    function JSONFile(key, url) {
        const file = new File(key, url);
        file.load = () => {
            file.url = GetURL(file.key, file.url, '.json', file.loader);
            return new Promise((resolve, reject) => {
                const cache = Cache.get('JSON');
                if (!file.skipCache && cache.has(file.key)) {
                    resolve(file);
                }
                else {
                    XHRLoader(file).then(file => {
                        file.data = JSON.parse(file.data);
                        if (!file.skipCache) {
                            cache.set(file.key, file.data);
                        }
                        resolve(file);
                    }).catch(file => {
                        reject(file);
                    });
                }
            });
        };
        return file;
    }

    function AtlasFile(key, textureURL, atlasURL, glConfig) {
        const json = JSONFile(key, atlasURL);
        const image = ImageFile(key, textureURL, glConfig);
        const file = new File(key, '');
        file.load = () => {
            json.url = GetURL(json.key, json.url, '.json', file.loader);
            image.url = GetURL(image.key, image.url, '.png', file.loader);
            return new Promise((resolve, reject) => {
                json.skipCache = true;
                json.load().then(() => {
                    image.load().then(() => {
                        AtlasParser(TextureManagerInstance.get().get(key), json.data);
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

    function GetValue(node, attribute) {
        return parseInt(node.getAttribute(attribute), 10);
    }
    function BitmapTextParser(texture, xml, frame) {
        const xSpacing = 0;
        const ySpacing = 0;
        const info = xml.getElementsByTagName('info')[0];
        const common = xml.getElementsByTagName('common')[0];
        const data = {
            font: info.getAttribute('face'),
            size: GetValue(info, 'size'),
            lineHeight: GetValue(common, 'lineHeight') + ySpacing,
            chars: {}
        };
        const letters = xml.getElementsByTagName('char');
        for (let i = 0; i < letters.length; i++) {
            const node = letters[i];
            const charCode = GetValue(node, 'id');
            const x = GetValue(node, 'x');
            const y = GetValue(node, 'y');
            const width = GetValue(node, 'width');
            const height = GetValue(node, 'height');
            data.chars[charCode] =
                {
                    x,
                    y,
                    width,
                    height,
                    xOffset: GetValue(node, 'xoffset'),
                    yOffset: GetValue(node, 'yoffset'),
                    xAdvance: GetValue(node, 'xadvance') + xSpacing,
                    kerning: {}
                };
            texture.addFrame(charCode, x, y, width, height);
        }
        const kernings = xml.getElementsByTagName('kerning');
        for (let i = 0; i < kernings.length; i++) {
            const kern = kernings[i];
            const first = GetValue(kern, 'first');
            const second = GetValue(kern, 'second');
            const amount = GetValue(kern, 'amount');
            data.chars[second].kerning[first] = amount;
        }
        return data;
    }

    function XMLFile(key, url) {
        const file = new File(key, url);
        file.load = () => {
            file.url = GetURL(file.key, file.url, '.xml', file.loader);
            return new Promise((resolve, reject) => {
                const cache = Cache.get('XML');
                if (!file.skipCache && cache.has(file.key)) {
                    resolve(file);
                }
                else {
                    XHRLoader(file).then(file => {
                        const xml = ParseXML(file.data);
                        if (xml !== null) {
                            file.data = xml;
                            if (!file.skipCache) {
                                cache.set(file.key, xml);
                            }
                            resolve(file);
                        }
                        else {
                            reject(file);
                        }
                    }).catch(file => {
                        reject(file);
                    });
                }
            });
        };
        return file;
    }

    function BitmapTextFile(key, textureURL, fontDataURL, glConfig) {
        const xml = XMLFile(key, fontDataURL);
        const image = ImageFile(key, textureURL, glConfig);
        const file = new File(key, '');
        file.load = () => {
            xml.url = GetURL(xml.key, xml.url, '.xml', file.loader);
            image.url = GetURL(image.key, image.url, '.png', file.loader);
            return new Promise((resolve, reject) => {
                xml.skipCache = true;
                xml.load().then(() => {
                    image.load().then(() => {
                        const texture = TextureManagerInstance.get().get(key);
                        const fontData = BitmapTextParser(texture, xml.data);
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

    function CSVFile(key, url) {
        const file = new File(key, url);
        file.load = () => {
            file.url = GetURL(file.key, file.url, '.csv', file.loader);
            return new Promise((resolve, reject) => {
                const cache = Cache.get('CSV');
                if (!file.skipCache && cache.has(file.key)) {
                    resolve(file);
                }
                else {
                    XHRLoader(file).then(file => {
                        if (!file.skipCache) {
                            cache.set(file.key, file.data);
                        }
                        resolve(file);
                    }).catch(file => {
                        reject(file);
                    });
                }
            });
        };
        return file;
    }

    function JSONGeometryFile(key, url, mappingConfig) {
        const file = new File(key, url);
        const { vertices = 'verts', normals = 'normals', uvs = 'uvs', numberOfVertices = 0 } = mappingConfig;
        file.load = () => {
            file.url = GetURL(file.key, file.url, '.json', file.loader);
            return new Promise((resolve, reject) => {
                const cache = Cache.get('Geometry');
                if (!file.skipCache && cache.has(file.key)) {
                    resolve(file);
                }
                else {
                    XHRLoader(file).then(file => {
                        const data = JSON.parse(file.data);
                        const geom = new Geometry({
                            vertices: data[vertices],
                            normals: data[normals],
                            uvs: data[uvs],
                            numberOfVertices: numberOfVertices
                        });
                        file.data = geom;
                        if (!file.skipCache) {
                            cache.set(file.key, geom);
                        }
                        resolve(file);
                    }).catch(file => {
                        reject(file);
                    });
                }
            });
        };
        return file;
    }

    function OBJFile(key, url) {
        const file = new File(key, url);
        file.load = () => {
            file.url = GetURL(file.key, file.url, '.obj', file.loader);
            return new Promise((resolve, reject) => {
                const cache = Cache.get('Obj');
                if (!file.skipCache && cache.has(file.key)) {
                    resolve(file);
                }
                else {
                    XHRLoader(file).then(file => {
                        if (!file.skipCache) {
                            cache.set(file.key, file.data);
                        }
                        resolve(file);
                    }).catch(file => {
                        reject(file);
                    });
                }
            });
        };
        return file;
    }

    function OBJGeometryFile(key, url, flipUVs = true) {
        const file = new File(key, url);
        file.load = () => {
            file.url = GetURL(file.key, file.url, '.obj', file.loader);
            return new Promise((resolve, reject) => {
                const cache = Cache.get('Geometry');
                if (!file.skipCache && cache.has(file.key)) {
                    resolve(file);
                }
                else {
                    XHRLoader(file).then(file => {
                        const models = GetBufferFromObj(file.data, flipUVs);
                        file.data = models;
                        if (!file.skipCache) {
                            let key = file.key;
                            models.forEach((model, index) => {
                                if (index > 0) {
                                    key = file.key + index.toString();
                                }
                                const geom = new Geometry(model.buffer);
                                cache.set(key, geom);
                            });
                        }
                        resolve(file);
                    }).catch(file => {
                        reject(file);
                    });
                }
            });
        };
        return file;
    }

    function SpriteSheetParser(texture, x, y, width, height, frameConfig) {
        const { frameWidth = null, endFrame = -1, margin = 0, spacing = 0 } = frameConfig;
        let { frameHeight = null, startFrame = 0 } = frameConfig;
        if (!frameHeight) {
            frameHeight = frameWidth;
        }
        if (frameWidth === null) {
            throw new Error('SpriteSheetParser: Invalid frameWidth');
        }
        const row = Math.floor((width - margin + spacing) / (frameWidth + spacing));
        const column = Math.floor((height - margin + spacing) / (frameHeight + spacing));
        let total = row * column;
        if (total === 0) {
            console.warn('SpriteSheetParser: Frame config will result in zero frames');
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

    function SpriteSheetFile(key, url, frameConfig, glConfig) {
        const file = new File(key, url);
        file.load = () => {
            file.url = GetURL(file.key, file.url, '.png', file.loader);
            if (file.loader) {
                file.crossOrigin = file.loader.crossOrigin;
            }
            return new Promise((resolve, reject) => {
                const textureManager = TextureManagerInstance.get();
                if (textureManager.has(file.key)) {
                    resolve(file);
                }
                else {
                    ImageTagLoader(file).then(file => {
                        const texture = textureManager.add(file.key, file.data, glConfig);
                        if (texture) {
                            SpriteSheetParser(texture, 0, 0, texture.width, texture.height, frameConfig);
                            resolve(file);
                        }
                        else {
                            reject(file);
                        }
                    }).catch(file => {
                        reject(file);
                    });
                }
            });
        };
        return file;
    }

    var index$T = /*#__PURE__*/Object.freeze({
        __proto__: null,
        AtlasFile: AtlasFile,
        BitmapTextFile: BitmapTextFile,
        CSVFile: CSVFile,
        ImageFile: ImageFile,
        JSONFile: JSONFile,
        JSONGeometryFile: JSONGeometryFile,
        OBJFile: OBJFile,
        OBJGeometryFile: OBJGeometryFile,
        SpriteSheetFile: SpriteSheetFile,
        XMLFile: XMLFile
    });

    class Loader extends EventEmitter {
        constructor() {
            super();
            this.baseURL = '';
            this.path = '';
            this.crossOrigin = 'anonymous';
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
            file.forEach(entity => {
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
                    Emit(this, 'start');
                    this.nextFile();
                }
                else {
                    this.progress = 1;
                    Emit(this, 'complete');
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
                    file.load()
                        .then((file) => this.fileComplete(file))
                        .catch((file) => this.fileError(file));
                    limit--;
                }
            }
            else if (this.inflight.size === 0) {
                this.stop();
            }
        }
        stop() {
            if (!this.isLoading) {
                return;
            }
            this.isLoading = false;
            Emit(this, 'complete', this.completed);
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
            Emit(this, 'progress', this.progress, totalCompleted, totalQueued);
            this.nextFile();
        }
        fileComplete(file) {
            Emit(this, 'filecomplete', file);
            this.updateProgress(file);
        }
        fileError(file) {
            Emit(this, 'fileerror', file);
            this.updateProgress(file);
        }
        totalFilesToLoad() {
            return this.queue.size + this.inflight.size;
        }
        setBaseURL(url = '') {
            if (url !== '' && url.substr(-1) !== '/') {
                url = url.concat('/');
            }
            this.baseURL = url;
            return this;
        }
        setPath(path = '') {
            if (path !== '' && path.substr(-1) !== '/') {
                path = path.concat('/');
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

    var index$U = /*#__PURE__*/Object.freeze({
        __proto__: null,
        File: File,
        Files: index$T,
        Loader: Loader
    });

    const BlackPlastic = new Material({
        ambient: [0, 0, 0],
        diffuse: [0.01, 0.01, 0.01],
        specular: [0.5, 0.5, 0.5],
        shine: 0.25
    });

    const BlackRubber = new Material({
        ambient: [0.02, 0.02, 0.02],
        diffuse: [0.01, 0.01, 0.01],
        specular: [0.4, 0.4, 0.4],
        shine: 0.078125
    });

    const Brass = new Material({
        ambient: [0.329412, 0.223529, 0.027451],
        diffuse: [0.780392, 0.568627, 0.113725],
        specular: [0.992157, 0.941176, 0.807843],
        shine: 0.21794872
    });

    const Bronze = new Material({
        ambient: [0.2125, 0.1275, 0.054],
        diffuse: [0.714, 0.4284, 0.18144],
        specular: [0.393548, 0.271906, 0.166721],
        shine: 0.2
    });

    const Chrome = new Material({
        ambient: [0.25, 0.25, 0.25],
        diffuse: [0.4, 0.4, 0.4],
        specular: [0.774597, 0.774597, 0.774597],
        shine: 0.6
    });

    const Copper = new Material({
        ambient: [0.19125, 0.0735, 0.0225],
        diffuse: [0.7038, 0.27048, 0.0828],
        specular: [0.256777, 0.137622, 0.086014],
        shine: 0.1
    });

    const CyanPlastic = new Material({
        ambient: [0, 0.1, 0.06],
        diffuse: [0, 0.50980392, 0.50980392],
        specular: [0.50196078, 0.50196078, 0.50196078],
        shine: 0.25
    });

    const CyanRubber = new Material({
        ambient: [0, 0.05, 0.05],
        diffuse: [0.4, 0.5, 0.5],
        specular: [0.04, 0.7, 0.7],
        shine: 0.078125
    });

    const Emerald = new Material({
        ambient: [0.0215, 0.1745, 0.0215],
        diffuse: [0.07568, 0.61424, 0.07568],
        specular: [0.633, 0.727811, 0.633],
        shine: 0.6
    });

    const Gold = new Material({
        ambient: [0.24725, 0.1995, 0.0745],
        diffuse: [0.75164, 0.60648, 0.22648],
        specular: [0.628281, 0.555802, 0.366065],
        shine: 0.4
    });

    const GreenPlastic = new Material({
        ambient: [0, 0, 0],
        diffuse: [0.1, 0.35, 0.1],
        specular: [0.45, 0.55, 0.45],
        shine: 0.25
    });

    const GreenRubber = new Material({
        ambient: [0, 0.05, 0],
        diffuse: [0.4, 0.5, 0.4],
        specular: [0.04, 0.7, 0.04],
        shine: 0.078125
    });

    const Jade = new Material({
        ambient: [0.135, 0.2225, 0.1575],
        diffuse: [0.54, 0.89, 0.63],
        specular: [0.316228, 0.316228, 0.316228],
        shine: 0.1
    });

    const Obsidian = new Material({
        ambient: [0.05375, 0.05, 0.06625],
        diffuse: [0.18275, 0.17, 0.22525],
        specular: [0.332741, 0.328634, 0.346435],
        shine: 0.3
    });

    const Pearl = new Material({
        ambient: [0.25, 0.20725, 0.20725],
        diffuse: [1, 0.829, 0.829],
        specular: [0.296648, 0.296648, 0.296648],
        shine: 0.088
    });

    const RedPlastic = new Material({
        ambient: [0, 0, 0],
        diffuse: [0.5, 0, 0],
        specular: [0.7, 0.6, 0.6],
        shine: 0.25
    });

    const RedRubber = new Material({
        ambient: [0.05, 0, 0],
        diffuse: [0.5, 0.4, 0.4],
        specular: [0.7, 0.04, 0.04],
        shine: 0.078125
    });

    const Ruby = new Material({
        ambient: [0.1745, 0.01175, 0.01175],
        diffuse: [0.61424, 0.04136, 0.04136],
        specular: [0.727811, 0.626959, 0.626959],
        shine: 0.6
    });

    const Silver = new Material({
        ambient: [0.19225, 0.19225, 0.19225],
        diffuse: [0.50754, 0.50754, 0.50754],
        specular: [0.508273, 0.508273, 0.508273],
        shine: 0.4
    });

    const Turquoise = new Material({
        ambient: [0.1, 0.18725, 0.1745],
        diffuse: [0.396, 0.74151, 0.69102],
        specular: [0.297254, 0.30829, 0.306678],
        shine: 0.1
    });

    const WhitePlastic = new Material({
        ambient: [0, 0, 0],
        diffuse: [0.55, 0.55, 0.55],
        specular: [0.7, 0.7, 0.7],
        shine: 0.25
    });

    const WhiteRubber = new Material({
        ambient: [0.05, 0.05, 0.05],
        diffuse: [0.5, 0.5, 0.5],
        specular: [0.7, 0.7, 0.7],
        shine: 0.078125
    });

    const YellowPlastic = new Material({
        ambient: [0, 0, 0],
        diffuse: [0.5, 0.5, 0],
        specular: [0.6, 0.6, 0.5],
        shine: 0.25
    });

    const YellowRubber = new Material({
        ambient: [0.05, 0.05, 0],
        diffuse: [0.5, 0.5, 0.4],
        specular: [0.7, 0.7, 0.04],
        shine: 0.078125
    });

    var index$V = /*#__PURE__*/Object.freeze({
        __proto__: null,
        BlackPlastic: BlackPlastic,
        BlackRubber: BlackRubber,
        Brass: Brass,
        Bronze: Bronze,
        Chrome: Chrome,
        Copper: Copper,
        CyanPlastic: CyanPlastic,
        CyanRubber: CyanRubber,
        Emerald: Emerald,
        Gold: Gold,
        GreenPlastic: GreenPlastic,
        GreenRubber: GreenRubber,
        Jade: Jade,
        Obsidian: Obsidian,
        Pearl: Pearl,
        RedPlastic: RedPlastic,
        RedRubber: RedRubber,
        Ruby: Ruby,
        Silver: Silver,
        Turquoise: Turquoise,
        WhitePlastic: WhitePlastic,
        WhiteRubber: WhiteRubber,
        YellowPlastic: YellowPlastic,
        YellowRubber: YellowRubber
    });

    const Arne16 = [
        '#000',
        '#9D9D9D',
        '#FFF',
        '#BE2633',
        '#E06F8B',
        '#493C2B',
        '#A46422',
        '#EB8931',
        '#F7E26B',
        '#2F484E',
        '#44891A',
        '#A3CE27',
        '#1B2632',
        '#005784',
        '#31A2F2',
        '#B2DCEF'
    ];

    const C64 = [
        '#000',
        '#fff',
        '#8b4131',
        '#7bbdc5',
        '#8b41ac',
        '#6aac41',
        '#3931a4',
        '#d5de73',
        '#945a20',
        '#5a4100',
        '#bd736a',
        '#525252',
        '#838383',
        '#acee8b',
        '#7b73de',
        '#acacac'
    ];

    const CGA = [
        '#000',
        '#2234d1',
        '#0c7e45',
        '#44aacc',
        '#8a3622',
        '#5c2e78',
        '#aa5c3d',
        '#b5b5b5',
        '#5e606e',
        '#4c81fb',
        '#6cd947',
        '#7be2f9',
        '#eb8a60',
        '#e23d69',
        '#ffd93f',
        '#fff'
    ];

    const JMP = [
        '#000',
        '#191028',
        '#46af45',
        '#a1d685',
        '#453e78',
        '#7664fe',
        '#833129',
        '#9ec2e8',
        '#dc534b',
        '#e18d79',
        '#d6b97b',
        '#e9d8a1',
        '#216c4b',
        '#d365c8',
        '#afaab9',
        '#f5f4eb'
    ];

    const MSX = [
        '#000',
        '#191028',
        '#46af45',
        '#a1d685',
        '#453e78',
        '#7664fe',
        '#833129',
        '#9ec2e8',
        '#dc534b',
        '#e18d79',
        '#d6b97b',
        '#e9d8a1',
        '#216c4b',
        '#d365c8',
        '#afaab9',
        '#fff'
    ];

    const PICO8 = [
        '#000',
        '#1D2B53',
        '#7E2553',
        '#008751',
        '#AB5236',
        '#5F574F',
        '#C2C3C7',
        '#FFF1E8',
        '#FF004D',
        '#FFA300',
        '#FFEC27',
        '#00E436',
        '#29ADFF',
        '#83769C',
        '#FF77A8',
        '#FFCCAA'
    ];

    var index$W = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Arne16: Arne16,
        C64: C64,
        CGA: CGA,
        JMP: JMP,
        MSX: MSX,
        PICO8: PICO8
    });

    var index$X = /*#__PURE__*/Object.freeze({
        __proto__: null,
        AtlasParser: AtlasParser,
        BitmapTextParser: BitmapTextParser,
        SpriteSheetParser: SpriteSheetParser
    });

    function GridTexture(color1, color2, width = 32, height = 32, cols = 2, rows = 2) {
        const ctx = CreateCanvas(width, height);
        const colWidth = width / cols;
        const rowHeight = height / rows;
        ctx.fillStyle = color1;
        ctx.fillRect(0, 0, width, height);
        ctx.fillStyle = color2;
        for (let y = 0; y < rows; y++) {
            for (let x = (y % 2); x < cols; x += 2) {
                ctx.fillRect(x * colWidth, y * rowHeight, colWidth, rowHeight);
            }
        }
        return new Texture(ctx.canvas);
    }

    function PixelTexture(config) {
        const { data = [], palette = Arne16, pixelWidth = 1, pixelHeight = pixelWidth, preRender = null, postRender = null } = config;
        let { canvas = null, resizeCanvas = true, clearCanvas = true } = config;
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
        const ctx = canvas.getContext('2d');
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
                if (d !== '.' && d !== ' ') {
                    ctx.fillStyle = palette[parseInt('0x' + d.toUpperCase())];
                    ctx.fillRect(x * pixelWidth, y * pixelHeight, pixelWidth, pixelHeight);
                }
            }
        }
        if (postRender) {
            postRender(canvas, ctx);
        }
        return new Texture(canvas);
    }

    class RenderTexture extends Texture {
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

    function SolidColorTexture(color = 'rgba(0,0,0,0)', width = 32, height = 32) {
        const ctx = CreateCanvas(width, height);
        ctx.fillStyle = color;
        ctx.fillRect(0, 0, width, height);
        return new Texture(ctx.canvas);
    }

    var index$Y = /*#__PURE__*/Object.freeze({
        __proto__: null,
        CanvasTexture: CanvasTexture,
        GridTexture: GridTexture,
        PixelTexture: PixelTexture,
        RenderTexture: RenderTexture,
        SolidColorTexture: SolidColorTexture
    });

    function GetFrames(texture, frames) {
        const output = [];
        frames.forEach((key) => {
            output.push(texture.getFrame(key));
        });
        return output;
    }

    function GetFramesInRange(texture, config) {
        const { prefix = '', start = 0, zeroPad = 0, suffix = '' } = config;
        let end = config.end;
        const output = [];
        const diff = (start < end) ? 1 : -1;
        end += diff;
        for (let i = start; i !== end; i += diff) {
            const frameKey = (prefix + i.toString().padStart(zeroPad, '0') + suffix);
            output.push(texture.getFrame(frameKey));
        }
        return output;
    }

    function SetFilter(linear, ...textures) {
        textures.forEach(texture => {
            if (texture.binding) {
                texture.binding.setFilter(linear);
            }
        });
        return textures;
    }

    class TextureManager {
        constructor() {
            this.textures = new Map();
            this.createDefaultTextures();
            TextureManagerInstance.set(this);
        }
        createDefaultTextures() {
            this.add('__BLANK', new Texture(CreateCanvas(32, 32).canvas));
            const missing = CreateCanvas(32, 32);
            missing.strokeStyle = '#0f0';
            missing.moveTo(0, 0);
            missing.lineTo(32, 32);
            missing.stroke();
            missing.strokeRect(0.5, 0.5, 31, 31);
            this.add('__MISSING', new Texture(missing.canvas));
            const white = CreateCanvas(32, 32);
            white.fillStyle = '#fff';
            white.fillRect(0, 0, 32, 32);
            this.add('__WHITE', new Texture(white.canvas));
        }
        get(key) {
            const textures = this.textures;
            if (textures.has(key)) {
                return textures.get(key);
            }
            else {
                return textures.get('__MISSING');
            }
        }
        has(key) {
            return this.textures.has(key);
        }
        add(key, source, glConfig) {
            let texture;
            const textures = this.textures;
            if (!textures.has(key)) {
                if (source instanceof Texture) {
                    texture = source;
                }
                else {
                    texture = new Texture(source, 0, 0, glConfig);
                }
                texture.key = key;
                textures.set(key, texture);
            }
            return texture;
        }
    }

    var index$Z = /*#__PURE__*/Object.freeze({
        __proto__: null,
        CreateCanvas: CreateCanvas,
        Frame: Frame,
        GetFrames: GetFrames,
        GetFramesInRange: GetFramesInRange,
        SetFilter: SetFilter,
        Palettes: index$W,
        Parsers: index$X,
        Types: index$Y,
        Texture: Texture,
        TextureManager: TextureManager
    });

    function NOOP$1() {
    }

    function AddTimer(clock, config) {
        const { duration = 0, repeat = 0, delay = -1, onStart = NOOP$1, onUpdate = NOOP$1, onRepeat = NOOP$1, onComplete = NOOP$1 } = config;
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
                }
                else {
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
                    }
                    else {
                        timer.elapsed = 0;
                        timer.onComplete();
                    }
                }
            }
            return (timer.elapsed === 0);
        };
        clock.events.add(timer);
    }

    function AddDelayedCall(clock, delay, callback) {
        AddTimer(clock, {
            duration: 0,
            delay,
            onComplete: callback
        });
    }

    class Clock {
        constructor(world) {
            this.world = world;
            this.timeScale = 1;
            this.events = new Set();
        }
        update(delta, time) {
            this.now = time;
            delta *= this.timeScale;
            this.events.forEach(timer => {
                if (timer.update(delta)) {
                    this.events.delete(timer);
                }
            });
        }
    }

    var index$_ = /*#__PURE__*/Object.freeze({
        __proto__: null,
        AddDelayedCall: AddDelayedCall,
        AddTimer: AddTimer,
        Clock: Clock,
        NOOP: NOOP$1
    });

    const WorldRenderEvent = 'worldrender';

    const WorldShutdownEvent = 'worldshutdown';

    var index$$ = /*#__PURE__*/Object.freeze({
        __proto__: null,
        WorldRenderEvent: WorldRenderEvent,
        WorldShutdownEvent: WorldShutdownEvent
    });

    function CalculateTotalRenderable(entry, renderData) {
        renderData.numRendered++;
        renderData.numRenderable++;
        if (entry.node.dirtyFrame >= renderData.gameFrame) {
            renderData.dirtyFrame++;
        }
        entry.children.forEach(child => {
            if (child.children.length > 0) {
                CalculateTotalRenderable(child, renderData);
            }
        });
    }

    function HasDirtyChildren(parent) {
        if (parent.node.isDirty(DIRTY_CONST.CHILD_CACHE)) {
            return true;
        }
        const stack = [parent];
        while (stack.length > 0) {
            const entry = stack.pop();
            if (entry.node.isDirty(DIRTY_CONST.TRANSFORM)) {
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

    function UpdateCachedLayers(cachedLayers, dirtyCamera) {
        cachedLayers.forEach(layer => {
            if (dirtyCamera || HasDirtyChildren(layer)) {
                layer.node.setDirty(DIRTY_CONST.CHILD_CACHE);
            }
            else {
                layer.children.length = 0;
            }
        });
    }

    function WorldDepthFirstSearch(cachedLayers, parent, output = []) {
        for (let i = 0; i < parent.numChildren; i++) {
            const node = parent.children[i];
            if (node.isRenderable()) {
                const children = [];
                const entry = { node, children };
                output.push(entry);
                if (node.willRenderChildren && node.numChildren > 0) {
                    if (node.willCacheChildren) {
                        cachedLayers.push(entry);
                    }
                    WorldDepthFirstSearch(cachedLayers, node, children);
                }
            }
        }
        return output;
    }

    function BuildRenderList(world) {
        const cachedLayers = [];
        const stack = [];
        const entries = WorldDepthFirstSearch(cachedLayers, world, stack);
        const renderData = world.renderData;
        if (cachedLayers.length > 0) {
            UpdateCachedLayers(cachedLayers, world.camera.dirtyRender);
        }
        entries.forEach(entry => {
            if (entry.children.length > 0) {
                CalculateTotalRenderable(entry, renderData);
            }
            else {
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

    function MergeRenderData(sceneRenderData, worldRenderData) {
        sceneRenderData.numDirtyFrames += worldRenderData.dirtyFrame;
        sceneRenderData.numTotalFrames += worldRenderData.numRendered;
        if (worldRenderData.camera.dirtyRender) {
            sceneRenderData.numDirtyCameras++;
        }
        sceneRenderData.worldData.push(worldRenderData);
    }

    function ResetWorldRenderData(renderData, gameFrame) {
        renderData.gameFrame = gameFrame;
        renderData.dirtyFrame = 0;
        renderData.numRendered = 0;
        renderData.numRenderable = 0;
    }

    class BaseWorld extends GameObject {
        constructor(scene) {
            super();
            this.forceRefresh = false;
            this.is3D = false;
            this.type = 'BaseWorld';
            this.scene = scene;
            this.world = this;
            this.events = new Map();
            this.renderList = [];
            this._updateListener = On(scene, 'update', (delta, time) => this.update(delta, time));
            this._renderListener = On(scene, 'render', (renderData) => this.render(renderData));
            this._shutdownListener = On(scene, 'shutdown', () => this.shutdown());
            Once(scene, 'destroy', () => this.destroy());
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
            ResetWorldRenderData(renderData, sceneRenderData.gameFrame);
            if (!this.willRender || !this.visible) {
                return;
            }
            BuildRenderList(this);
            Emit(this, WorldRenderEvent, renderData, this);
            MergeRenderData(sceneRenderData, renderData);
            this.camera.dirtyRender = false;
        }
        renderGL(renderPass) {
            const currentCamera = renderPass.current2DCamera;
            const camera = this.camera;
            if (!currentCamera || !ExactEquals(camera.worldTransform, currentCamera.worldTransform)) {
                Flush(renderPass);
            }
            Begin(renderPass, camera);
            this.renderList.forEach(entry => {
                if (entry.children.length > 0) {
                    this.renderNode(entry, renderPass);
                }
                else {
                    entry.node.renderGL(renderPass);
                }
            });
        }
        renderNode(entry, renderPass) {
            entry.node.renderGL(renderPass);
            entry.children.forEach(child => {
                if (child.children.length > 0) {
                    this.renderNode(child, renderPass);
                }
                else {
                    child.node.renderGL(renderPass);
                }
            });
            entry.node.postRenderGL(renderPass);
        }
        postRenderGL(renderPass) {
        }
        shutdown() {
            const scene = this.scene;
            Off(scene, 'update', this._updateListener);
            Off(scene, 'render', this._renderListener);
            Off(scene, 'shutdown', this._shutdownListener);
            RemoveChildren(this);
            Emit(this, WorldShutdownEvent, this);
            ResetWorldRenderData(this.renderData, 0);
            if (this.camera) {
                this.camera.reset();
            }
        }
        destroy(reparentChildren) {
            super.destroy(reparentChildren);
            Emit(this, DestroyEvent, this);
            ResetWorldRenderData(this.renderData, 0);
            if (this.camera) {
                this.camera.destroy();
            }
            this.events.clear();
            this.camera = null;
            this.renderData = null;
            this.events = null;
        }
    }

    function CreateWorldRenderData(world, camera) {
        return {
            world,
            camera,
            gameFrame: 0,
            dirtyFrame: 0,
            numRendered: 0,
            numRenderable: 0
        };
    }

    class StaticWorld extends BaseWorld {
        constructor(scene) {
            super(scene);
            this.type = 'StaticWorld';
            this.camera = new StaticCamera();
            this.renderData = CreateWorldRenderData(this, this.camera);
        }
    }

    class World extends BaseWorld {
        constructor(scene) {
            super(scene);
            this.enableCameraCull = true;
            this.type = 'World';
            this.camera = new Camera();
            this.renderData = CreateWorldRenderData(this, this.camera);
        }
    }

    var index$10 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        BaseWorld: BaseWorld,
        BuildRenderList: BuildRenderList,
        CalculateTotalRenderable: CalculateTotalRenderable,
        CreateWorldRenderData: CreateWorldRenderData,
        Events: index$$,
        HasDirtyChildren: HasDirtyChildren,
        MergeRenderData: MergeRenderData,
        ResetWorldRenderData: ResetWorldRenderData,
        StaticWorld: StaticWorld,
        UpdateCachedLayers: UpdateCachedLayers,
        World: World,
        WorldDepthFirstSearch: WorldDepthFirstSearch
    });

    const World3DRenderEvent = 'worldrender';

    const World3DShutdownEvent = 'worldshutdown';

    var index$11 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        World3DRenderEvent: World3DRenderEvent,
        World3DShutdownEvent: World3DShutdownEvent
    });

    function CalculateTotalRenderable$1(entry, renderData) {
        renderData.numRendered++;
        renderData.numRenderable++;
        if (entry.node.dirtyFrame >= renderData.gameFrame) {
            renderData.dirtyFrame++;
        }
        entry.children.forEach(child => {
            if (child.children.length > 0) {
                CalculateTotalRenderable$1(child, renderData);
            }
        });
    }

    function HasDirtyChildren$1(parent) {
        if (parent.node.isDirty(DIRTY_CONST.CHILD_CACHE)) {
            return true;
        }
        const stack = [parent];
        while (stack.length > 0) {
            const entry = stack.pop();
            if (entry.node.isDirty(DIRTY_CONST.TRANSFORM)) {
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

    function UpdateCachedLayers$1(cachedLayers, dirtyCamera) {
        cachedLayers.forEach(layer => {
            if (dirtyCamera || HasDirtyChildren$1(layer)) {
                layer.node.setDirty(DIRTY_CONST.CHILD_CACHE);
            }
            else {
                layer.children.length = 0;
            }
        });
    }

    function WorldDepthFirstSearch$1(cachedLayers, parent, output = []) {
        for (let i = 0; i < parent.numChildren; i++) {
            const node = parent.children[i];
            if (node.isRenderable()) {
                const children = [];
                const entry = { node, children };
                output.push(entry);
                if (node.willRenderChildren && node.numChildren > 0) {
                    if (node.willCacheChildren) {
                        cachedLayers.push(entry);
                    }
                    WorldDepthFirstSearch$1(cachedLayers, node, children);
                }
            }
        }
        return output;
    }

    function BuildRenderList$1(world) {
        const cachedLayers = [];
        const stack = [];
        const entries = WorldDepthFirstSearch$1(cachedLayers, world, stack);
        const renderData = world.renderData;
        if (cachedLayers.length > 0) {
            UpdateCachedLayers$1(cachedLayers, world.camera.dirtyRender);
        }
        entries.forEach(entry => {
            if (entry.children.length > 0) {
                CalculateTotalRenderable$1(entry, renderData);
            }
            else {
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

    function MergeRenderData$1(sceneRenderData, worldRenderData) {
        sceneRenderData.numDirtyFrames += worldRenderData.dirtyFrame;
        sceneRenderData.numTotalFrames += worldRenderData.numRendered;
        if (worldRenderData.camera.dirtyRender) {
            sceneRenderData.numDirtyCameras++;
        }
        sceneRenderData.worldData.push(worldRenderData);
    }

    function ResetWorld3DRenderData(renderData, gameFrame) {
        renderData.gameFrame = gameFrame;
        renderData.dirtyFrame = 0;
        renderData.numRendered = 0;
        renderData.numRenderable = 0;
    }

    class BaseWorld3D extends GameObject3D {
        constructor(scene) {
            super();
            this.forceRefresh = false;
            this.is3D = true;
            this.type = 'BaseWorld';
            this.scene = scene;
            this.world = this;
            this.events = new Map();
            this.renderList = [];
            this._updateListener = On(scene, 'update', (delta, time) => this.update(delta, time));
            this._renderListener = On(scene, 'render', (renderData) => this.render(renderData));
            this._shutdownListener = On(scene, 'shutdown', () => this.shutdown());
            Once(scene, 'destroy', () => this.destroy());
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
            ResetWorld3DRenderData(renderData, sceneRenderData.gameFrame);
            if (!this.willRender || !this.visible) {
                return;
            }
            BuildRenderList$1(this);
            Emit(this, World3DRenderEvent, renderData, this);
            MergeRenderData$1(sceneRenderData, renderData);
        }
        renderNode(entry, renderPass) {
            entry.node.renderGL(renderPass);
            entry.children.forEach(child => {
                if (child.children.length > 0) {
                    this.renderNode(child, renderPass);
                }
                else {
                    child.node.renderGL(renderPass);
                }
            });
            entry.node.postRenderGL(renderPass);
        }
        shutdown() {
            const scene = this.scene;
            Off(scene, 'update', this._updateListener);
            Off(scene, 'render', this._renderListener);
            Off(scene, 'shutdown', this._shutdownListener);
            RemoveChildren3D(this);
            Emit(this, World3DShutdownEvent, this);
            ResetWorld3DRenderData(this.renderData, 0);
        }
        destroy(reparentChildren) {
            super.destroy(reparentChildren);
            Emit(this, DestroyEvent, this);
            ResetWorld3DRenderData(this.renderData, 0);
            this.events.clear();
            this.camera = null;
            this.renderData = null;
            this.events = null;
        }
    }

    function CreateWorld3DRenderData(world, camera) {
        return {
            world,
            camera,
            gameFrame: 0,
            dirtyFrame: 0,
            numRendered: 0,
            numRenderable: 0
        };
    }

    const AMBIENT_LIGHT_FRAG = `#define SHADER_NAME AMBIENT_LIGHT_FRAG

precision highp float;

uniform vec3 uLightPosition;
uniform vec3 uLightAmbient;
uniform vec3 uLightDiffuse;
uniform vec3 uLightSpecular;

uniform vec3 uMaterialAmbient;
uniform vec3 uMaterialDiffuse;
uniform vec3 uMaterialSpecular;
uniform float uMaterialShine;

uniform vec3 uCameraPosition;

uniform sampler2D uTexture;

varying vec2 vTextureCoord;
varying vec3 vNormal;
varying vec3 vPosition;

void main (void)
{
    vec4 color = texture2D(uTexture, vTextureCoord);

    vec3 ambient = uLightAmbient * uMaterialAmbient;

    vec3 norm = normalize(vNormal);
    vec3 lightDir = normalize(uLightPosition - vPosition);
    float diff = max(dot(norm, lightDir), 0.0);
    vec3 diffuse = uLightDiffuse * (diff * uMaterialDiffuse);

    vec3 viewDir = normalize(uCameraPosition - vPosition);
    vec3 reflectDir = reflect(-lightDir, norm);
    float spec = pow(max(dot(viewDir, reflectDir), 0.0), uMaterialShine);
    vec3 specular = uLightSpecular * (spec * uMaterialSpecular);

    vec3 result = (ambient + diffuse + specular) * color.rgb;

    gl_FragColor = vec4(result, color.a);
}`;

    const AMBIENT_LIGHT_VERT = `
#define SHADER_NAME AMBIENT_LIGHT_VERT

precision highp float;

attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec2 aTextureCoord;

uniform mat4 uViewProjectionMatrix;
uniform mat4 uModelMatrix;
uniform mat4 uNormalMatrix;

varying vec2 vTextureCoord;
varying vec3 vNormal;
varying vec3 vPosition;

void main(void)
{
    vTextureCoord = aTextureCoord;

    vPosition = vec3(uModelMatrix * vec4(aVertexPosition, 1.0));

    vNormal = vec3(uNormalMatrix * vec4(aVertexNormal, 1.0));

    gl_Position = uViewProjectionMatrix * uModelMatrix * vec4(aVertexPosition, 1.0);
}
`;

    class AmbientLightShader extends Shader {
        constructor() {
            super();
            const tempMat4 = new Float32Array(16).fill(0);
            const tempVec3 = [0, 0, 0];
            const config = {
                fragmentShader: AMBIENT_LIGHT_FRAG,
                vertexShader: AMBIENT_LIGHT_VERT,
                attributes: {
                    aVertexPosition: { size: 3, type: FLOAT, normalized: false, offset: 0 },
                    aVertexNormal: { size: 3, type: FLOAT, normalized: false, offset: 12 },
                    aTextureCoord: { size: 2, type: FLOAT, normalized: false, offset: 24 }
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
            this.fromConfig(config);
        }
    }

    class NewCamera3D {
        constructor(fov = 45, near = 0.1, far = 1000) {
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
            this.type = 'Camera3D';
            this._fov = fov;
            this._near = near;
            this._far = far;
            this.matrix = new Matrix4();
            this.viewMatrix = new Matrix4();
            this.projectionMatrix = new Matrix4();
            this.viewProjectionMatrix = new Matrix4();
            this.position = new Vec3Callback(() => this.update());
            this.rotation = new Quaternion();
            const game = GameInstance.get();
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
            const matrix = this.matrix;
            const view = this.viewMatrix;
            FromRotationXYTranslation(this.rotation, this.position, !this.isOrbit, matrix);
            TransformMat4Zero(FORWARD, matrix, this.forward);
            TransformMat4Zero(UP, matrix, this.up);
            TransformMat4Zero(RIGHT, matrix, this.right);
            Invert(matrix, view);
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
            }
            else {
                ScaleAndAdd(pos, up, amount, pos);
            }
            return this;
        }
        panZ(amount) {
            const pos = this.position;
            if (this.isOrbit) {
                pos.z += amount;
            }
            else {
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

    class World3D extends BaseWorld3D {
        constructor(scene, x = 0, y = 0, z = 0, lightConfig) {
            super(scene);
            this.enableCameraCull = true;
            this.type = 'World3D';
            this.camera = new NewCamera3D();
            this.camera.position.set(x, y, z);
            this.light = new Light(lightConfig);
            this.shader = new AmbientLightShader();
            this.renderData = CreateWorld3DRenderData(this, this.camera);
        }
        renderGL(renderPass) {
            Flush(renderPass);
            const shader = this.shader;
            const camera = this.camera;
            const gl = renderPass.renderer.gl;
            SetShader(renderPass, shader, 0);
            shader.setUniform('uViewProjectionMatrix', camera.viewProjectionMatrix.data);
            shader.setUniform('uCameraPosition', camera.position.toArray());
            this.light.setUniforms(shader);
            gl.enable(gl.DEPTH_TEST);
            this.renderList.forEach(entry => {
                if (entry.children.length > 0) {
                    this.renderNode(entry, renderPass);
                }
                else {
                    entry.node.renderGL(renderPass);
                }
            });
        }
        postRenderGL(renderPass) {
            const gl = renderPass.renderer.gl;
            gl.disable(gl.DEPTH_TEST);
            gl.disable(gl.CULL_FACE);
            PopShader(renderPass);
        }
    }

    var index$12 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        BaseWorld3D: BaseWorld3D,
        BuildRenderList: BuildRenderList$1,
        CalculateTotalRenderable: CalculateTotalRenderable$1,
        CreateWorld3DRenderData: CreateWorld3DRenderData,
        Events: index$11,
        HasDirtyChildren: HasDirtyChildren$1,
        MergeRenderData: MergeRenderData$1,
        ResetWorld3DRenderData: ResetWorld3DRenderData,
        UpdateCachedLayers: UpdateCachedLayers$1,
        World3D: World3D,
        WorldDepthFirstSearch: WorldDepthFirstSearch$1
    });

    function CreateSceneRenderData() {
        return {
            gameFrame: 0,
            numTotalFrames: 0,
            numDirtyFrames: 0,
            numDirtyCameras: 0,
            worldData: []
        };
    }

    function ResetSceneRenderData(renderData, gameFrame = 0) {
        renderData.gameFrame = gameFrame;
        renderData.numTotalFrames = 0;
        renderData.numDirtyFrames = 0;
        renderData.numDirtyCameras = 0;
        renderData.worldData.length = 0;
    }

    let instance$4;
    const SceneManagerInstance = {
        get: () => {
            return instance$4;
        },
        set: (manager) => {
            instance$4 = manager;
        }
    };

    class SceneManager {
        constructor() {
            this.scenes = new Map();
            this.sceneIndex = 0;
            this.flush = false;
            this.renderResult = CreateSceneRenderData();
            this.game = GameInstance.get();
            SceneManagerInstance.set(this);
            Once(this.game, 'boot', () => this.boot());
        }
        boot() {
            GetScenes().forEach(scene => new scene());
        }
        update(delta, time) {
            for (const scene of this.scenes.values()) {
                Emit(scene, 'update', delta, time);
            }
        }
        render(gameFrame) {
            const results = this.renderResult;
            ResetSceneRenderData(results, gameFrame);
            for (const scene of this.scenes.values()) {
                Emit(scene, 'render', results);
            }
            if (this.flush) {
                results.numDirtyFrames++;
                this.flush = false;
            }
            return results;
        }
    }

    class Game extends EventEmitter {
        constructor(...settings) {
            super();
            this.VERSION = '4.0.0-beta1';
            this.isBooted = false;
            this.isPaused = false;
            this.willUpdate = true;
            this.willRender = true;
            this.lastTick = 0;
            this.elapsed = 0;
            this.frame = 0;
            GameInstance.set(this);
            DOMContentLoaded(() => this.boot(settings));
        }
        boot(settings) {
            settings.forEach(setting => setting());
            const renderer = GetRenderer();
            this.renderer = new renderer();
            this.textureManager = new TextureManager();
            this.sceneManager = new SceneManager();
            this.isBooted = true;
            GetBanner();
            Emit(this, 'boot');
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
                    Emit(this, 'update', delta, time);
                }
                if (this.willRender) {
                    this.renderer.render(this.sceneManager.render(this.frame));
                }
            }
            this.frame++;
            GameInstance.setFrame(this.frame);
            GameInstance.setElapsed(this.elapsed);
            requestAnimationFrame(now => this.step(now));
        }
        destroy() {
        }
    }

    function GetConfigValue(config, property, defaultValue) {
        if (Object.prototype.hasOwnProperty.call(config, property)) {
            return config[property];
        }
        else {
            return defaultValue;
        }
    }

    function Install(scene, config = {}) {
        const sceneManager = SceneManagerInstance.get();
        const size = sceneManager.scenes.size;
        const sceneIndex = sceneManager.sceneIndex;
        const firstScene = (size === 0);
        if (typeof config === 'string') {
            scene.key = config;
        }
        else if (config || (!config && firstScene)) {
            scene.key = GetConfigValue(config, 'key', 'scene' + sceneIndex.toString());
        }
        if (sceneManager.scenes.has(scene.key)) {
            console.warn('Scene key already in use: ' + scene.key);
        }
        else {
            sceneManager.scenes.set(scene.key, scene);
            sceneManager.flush = true;
            sceneManager.sceneIndex++;
        }
    }

    class Scene {
        constructor(config) {
            this.game = GameInstance.get();
            this.events = new Map();
            Install(this, config);
        }
    }

    exports.Camera = index$2;
    exports.Camera3D = index$o;
    exports.DOM = index$p;
    exports.Device = index$u;
    exports.Display = index$v;
    exports.Display3D = index$w;
    exports.Events = index$x;
    exports.Game = Game;
    exports.GameObjects = index$D;
    exports.GameObjects3D = index$H;
    exports.Geom = index$N;
    exports.Geom3D = index$O;
    exports.Input = index$S;
    exports.Loader = index$U;
    exports.Materials3D = index$V;
    exports.Math = index$n;
    exports.Scene = Scene;
    exports.Textures = index$Z;
    exports.Time = index$_;
    exports.WebGL1 = index$F;
    exports.World = index$10;
    exports.World3D = index$12;

})));
//# sourceMappingURL=Phaser4.js.map
