import {GameInstance as GameInstance2} from "../GameInstance";
import {Identity} from "../math/mat4";
import {Matrix2D as Matrix2D2} from "../math/matrix2d/Matrix2D";
import {Rectangle as Rectangle2} from "../geom/rectangle/Rectangle";
import {Vec2Callback as Vec2Callback2} from "../math/vec2/Vec2Callback";
import {WrapAngle} from "../math/angle";
export class Camera {
  constructor() {
    this._rotation = 0;
    this.type = "Camera";
    this.dirtyRender = true;
    const game = GameInstance2.get();
    this.renderer = game.renderer;
    this.matrix = Identity();
    this.bounds = new Rectangle2();
    this.worldTransform = new Matrix2D2();
    this.position = new Vec2Callback2(() => this.updateTransform(), 0, 0);
    this.scale = new Vec2Callback2(() => this.updateTransform(), 1, 1);
    this.origin = new Vec2Callback2(() => this.updateTransform(), 0.5, 0.5);
    this.reset();
  }
  updateTransform() {
    const matrix = this.matrix.data;
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
    matrix[0] = out0;
    matrix[1] = out1;
    matrix[4] = out4;
    matrix[5] = out5;
    matrix[12] = px + ox - (out0 * ox + out4 * oy);
    matrix[13] = py + oy - (out1 * ox + out5 * oy);
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
