import { GameInstance } from '../GameInstance.js';
import '../utils/base64/Base64ToArrayBuffer.js';
import '../utils/NOOP.js';
import '../math/mat4/Matrix4.js';
import { Identity } from '../math/mat4/Identity.js';
import { Matrix2D } from '../math/matrix2d/Matrix2D.js';
import '../geom/rectangle/Contains.js';
import { Rectangle } from '../geom/rectangle/Rectangle.js';
import '../math/vec2/Vec2.js';
import { Vec2Callback } from '../math/vec2/Vec2Callback.js';
import '../math/Wrap.js';
import { WrapAngle } from '../math/angle/WrapAngle.js';

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

export { Camera };
