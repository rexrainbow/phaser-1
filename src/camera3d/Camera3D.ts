import { Add, Cross, Forward, Left, Normalize, Subtract, TransformQuat, UP, Up, Vec3 } from '../math/vec3';
import { LookAt, Matrix4, Perspective, TranslateFromFloats } from '../math/mat4';
import { Quaternion, SetAxisAngle } from '../math/quaternion';

import { DegToRad } from '../math';
import { GameInstance } from '../GameInstance';
import { IRenderer } from '../renderer/IRenderer';
import { IVec3 } from '../math/vec3/IVec3';

export class Camera3D
{
    type: string;
    renderer: IRenderer;

    position: Vec3;
    direction: Vec3;
    axis: Quaternion;

    private lookAtPosition: Vec3;
    private lookAtView: Matrix4;

    up: Vec3;
    left: Vec3;

    fov: number;
    near: number;
    far: number;

    aspectRatio: number;

    // viewport rect

    viewMatrix: Matrix4;
    projectionMatrix: Matrix4;

    constructor (fov: number = 40, x: number = 0, y: number = 0, z: number = 0, near: number = 1, far: number = 10000)
    {
        this.type = 'Camera3D';

        const game = GameInstance.get();

        this.renderer = game.renderer;

        this.position = new Vec3(x, y, z);
        this.direction = Forward();
        this.axis = new Quaternion();

        this.lookAtPosition = new Vec3();
        this.lookAtView = new Matrix4();

        this.up = Up();
        this.left = Left();

        this.fov = fov;
        this.near = near;
        this.far = far;
        this.aspectRatio = this.renderer.width / this.renderer.height;

        this.viewMatrix = new Matrix4();
        this.projectionMatrix = Perspective(DegToRad(fov), this.aspectRatio, near, far);

        this.update();
    }

    rotateOnAxis (axisVec: Vec3, angle: number): this
    {
        const q = SetAxisAngle(axisVec, angle, this.axis);

        TransformQuat(this.direction, q, this.direction);
        TransformQuat(this.left, q, this.left);
        TransformQuat(this.up, q, this.up);

        Normalize(this.up, this.up);
        Normalize(this.left, this.left);
        Normalize(this.direction, this.direction);

        return this.update();
    }

    lookAt (point: IVec3): this
    {
        Subtract(point, this.position, this.direction);

        Normalize(this.direction, this.direction);

        Cross(UP, this.direction, this.left);

        Normalize(this.left, this.left);

        Cross(this.direction, this.left, this.up);

        Normalize(this.up, this.up);

        return this.update();
    }

    yaw (angle: number): this
    {
        return this.rotateOnAxis(this.up, angle);
    }

    pitch (angle: number): this
    {
        return this.rotateOnAxis(this.left, angle);
    }

    roll (angle: number): this
    {
        return this.rotateOnAxis(this.direction, angle);
    }

    forward (s: number): this
    {
        const pos = this.position;

        const { x: px, y: py, z: pz } = pos;
        const { x: dx, y: dy, z: dz } = this.direction;

        pos.set(
            px - s * dx,
            py - s * dy,
            pz - s * dz
        );

        return this.update();
    }

    update (): this
    {
        Add(this.position, this.direction, this.lookAtPosition);

        LookAt(this.position, this.lookAtPosition, this.up, this.lookAtView);

        TranslateFromFloats(this.lookAtView, -this.position.x, -this.position.y, -this.position.z, this.viewMatrix);

        return this;
    }
}
