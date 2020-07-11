import {Forward, Right, Up, Vec3Callback} from "../../../math/vec3";
import {FromRotationTranslationScale, Invert, Matrix4, Transpose} from "../../../math/mat4";
import {Quaternion, RotateX, RotateY, RotateZ} from "../../../math/quaternion";
import {DIRTY_CONST as DIRTY_CONST2} from "../../../gameobjects/DIRTY_CONST";
export class Transform3DComponent {
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
    RotateX(this.rotation, angle, this.rotation);
  }
  rotateY(angle) {
    RotateY(this.rotation, angle, this.rotation);
  }
  rotateZ(angle) {
    RotateZ(this.rotation, angle, this.rotation);
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
