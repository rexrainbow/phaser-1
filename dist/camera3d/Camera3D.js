import { GameInstance } from '../GameInstance.js';
import '../utils/base64/Base64ToArrayBuffer.js';
import '../utils/NOOP.js';
import { Matrix4 } from '../math/mat4/Matrix4.js';
import { Vec3 } from '../math/vec3/Vec3.js';
import { Quaternion } from '../math/quaternion/Quaternion.js';
import '../math/mat4/Identity.js';
import '../math/mat4/Invert.js';
import { LookAt } from '../math/mat4/LookAt.js';
import '../math/mat4/Multiply.js';
import { Perspective } from '../math/mat4/Perspective.js';
import { TranslateFromFloats } from '../math/mat4/TranslateFromFloats.js';
import '../math/const.js';
import '../math/vec3/Backward.js';
import '../math/vec3/Down.js';
import '../math/vec3/Forward.js';
import { Left } from '../math/vec3/Left.js';
import '../math/vec3/Right.js';
import { Up } from '../math/vec3/Up.js';
import '../math/vec3/Zero.js';
import { UP } from '../math/vec3/const.js';
import { Add } from '../math/vec3/Add.js';
import '../math/vec3/Scale.js';
import { CrossNormalize } from '../math/vec3/CrossNormalize.js';
import { Normalize } from '../math/vec3/Normalize.js';
import '../math/vec3/TransformMat4.js';
import '../math/vec3/Project.js';
import { Vec3Callback } from '../math/vec3/Vec3Callback.js';
import { Subtract } from '../math/vec3/Subtract.js';
import { TransformQuat } from '../math/vec3/TransformQuat.js';
import '../math/vec3/Unproject.js';
import { SetAxisAngle } from '../math/quaternion/SetAxisAngle.js';
import { DegToRad } from '../math/DegToRad.js';

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
        Subtract(point, pos, dir);
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

export { Camera3D };
