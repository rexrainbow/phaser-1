import '../../../utils/base64/Base64ToArrayBuffer.js';
import '../../../utils/NOOP.js';
import { Matrix4 } from '../../../math/mat4/Matrix4.js';
import { FromRotationTranslationScale } from '../../../math/mat4/FromRotationTranslationScale.js';
import '../../../math/vec3/Vec3.js';
import { Quaternion } from '../../../math/quaternion/Quaternion.js';
import { Invert } from '../../../math/mat4/Invert.js';
import '../../../math/mat4/Multiply.js';
import { Transpose } from '../../../math/mat4/Transpose.js';
import '../../../math/vec3/Backward.js';
import '../../../math/vec3/Down.js';
import { Forward } from '../../../math/vec3/Forward.js';
import '../../../math/vec3/Left.js';
import { Right } from '../../../math/vec3/Right.js';
import { Up } from '../../../math/vec3/Up.js';
import '../../../math/vec3/Zero.js';
import '../../../math/vec3/const.js';
import '../../../math/vec3/Scale.js';
import '../../../math/vec3/TransformMat4.js';
import '../../../math/vec3/Project.js';
import { Vec3Callback } from '../../../math/vec3/Vec3Callback.js';
import '../../../math/vec3/Unproject.js';
import { RotateX } from '../../../math/quaternion/RotateX.js';
import { RotateY } from '../../../math/quaternion/RotateY.js';
import { RotateZ } from '../../../math/quaternion/RotateZ.js';
import { DIRTY_CONST } from '../../../gameobjects/DIRTY_CONST.js';

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

export { Transform3DComponent };
