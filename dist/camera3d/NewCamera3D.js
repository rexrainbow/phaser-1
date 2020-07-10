import { GameInstance } from '../GameInstance.js';
import '../utils/base64/Base64ToArrayBuffer.js';
import '../utils/NOOP.js';
import { Matrix4 } from '../math/mat4/Matrix4.js';
import { FromRotationXYTranslation } from '../math/mat4/FromRotationXYTranslation.js';
import { Vec3 } from '../math/vec3/Vec3.js';
import { Quaternion } from '../math/quaternion/Quaternion.js';
import { Invert } from '../math/mat4/Invert.js';
import { Multiply } from '../math/mat4/Multiply.js';
import { Perspective } from '../math/mat4/Perspective.js';
import '../geom/rectangle/RectangleContains.js';
import { Rectangle } from '../geom/rectangle/Rectangle.js';
import '../math/const.js';
import '../math/vec3/Backward.js';
import '../math/vec3/Down.js';
import { Forward } from '../math/vec3/Forward.js';
import '../math/vec3/Left.js';
import { Right } from '../math/vec3/Right.js';
import { Up } from '../math/vec3/Up.js';
import '../math/vec3/Zero.js';
import { FORWARD, UP, RIGHT } from '../math/vec3/const.js';
import '../math/vec3/Scale.js';
import { Clamp } from '../math/Clamp.js';
import '../math/vec3/TransformMat4.js';
import '../math/vec3/Project.js';
import { Vec3Callback } from '../math/vec3/Vec3Callback.js';
import { ScaleAndAdd } from '../math/vec3/ScaleAndAdd.js';
import { TransformMat4Zero } from '../math/vec3/TransformMat4Zero.js';
import '../math/vec3/Unproject.js';
import { RotationYawPitchRoll } from '../math/quaternion/RotationYawPitchRoll.js';
import { DegToRad } from '../math/DegToRad.js';

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

export { NewCamera3D };
