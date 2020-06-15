import { Add, Clone, Cross, Normalize, Subtract, TransformQuat, Vec3 } from '../src/math/Vec3';
import { Clone as CloneMat4, LookAt, Matrix4, Perspective, TranslateFromFloats } from '../src/math/mat4';

import { DegToRad } from '../src/math';
import { SetAxisAngle } from '../src/math/quaternion';
import { UP } from '../src/math/vec3/const';

export class Camera3D
{
    left: Vec3;
    up: Vec3;
    dir: Vec3;
    pos: Vec3;

    // projectionTransform: Matrix4;
    projectionMatrix: Matrix4;
    viewMatrix: Matrix4;

    fov: number = 40;
    near: number = 1;
    far: number = 1000;

    aspectRatio: number = 800 / 600;

    constructor ()
    {
        this.left = new Vec3(1, 0, 0);
        this.up = new Vec3(0, 1, 0);
        this.dir = new Vec3(0, 0, 1);
        this.pos = new Vec3(0, 0, 0);

        this.projectionMatrix = new Matrix4();
        this.viewMatrix = new Matrix4();

        // this.setPosition([ 0, 2, -3 ]);
        // this.setLookAtPoint([ 0, 0, 0 ]);

        // this.refresh();
    }

    getLeft (): Vec3
    {
        return Clone(this.left);
    }

    getUp (): Vec3
    {
        return Clone(this.up);
    }

    getPosition (): Vec3
    {
        return Clone(this.pos);
    }

    getProjectionMatrix (): Matrix4
    {
        return CloneMat4(this.projectionMatrix);
    }

    getViewMatrix (): Matrix4
    {
        return CloneMat4(this.viewMatrix);
    }

    getNearClippingPlane (): number
    {
        return this.near;
    }

    getFarClippingPlane (): number
    {
        return this.far;
    }

    getFieldOfView (): number
    {
        return this.fov;
    }

    setFarClippingPlane (far: number)
    {
        if (far > 0)
        {
            this.far = far;
        }
    }

    setNearClippingPlane (near: number)
    {
        if (near > 0)
        {
            this.near = near;
        }
    }

    setFieldOfView (fov: number)
    {
        if (fov > 0 && fov < 180)
        {
            this.fov = fov;
        }
    }

    setZ (value: number)
    {
        this.pos.z = value;
    }

    setPosition (position: Vec3)
    {
        this.pos.set(position.x, position.y, position.z);
        // this.pos = Vec3.fromValues(newVec[0], newVec[1], newVec[2]);
    }

    setLookAtPoint (newVec: Vec3)
    {
        Subtract(newVec, this.pos, this.dir);
        // Vec3.subtract(this.dir, newVec, this.pos);

        Normalize(this.dir, this.dir);
        // Vec3.normalize(this.dir, this.dir);

        Cross(UP, this.dir, this.left);
        // Vec3.cross(this.left, Vec3.fromValues(0, 1, 0), this.dir);

        Normalize(this.left, this.left);
        // Vec3.normalize(this.left, this.left);

        Cross(this.dir, this.left, this.up);
        // Vec3.cross(this.up, this.dir, this.left);

        Normalize(this.up, this.up);
        // Vec3.normalize(this.up, this.up);
    }

    rotateOnAxis (axisVec: Vec3, angle: number)
    {
        let q = SetAxisAngle(axisVec, angle);

        // let q = quat.create();
        // quat.setAxisAngle(q, axisVec, angle);

        TransformQuat(this.dir, q, this.dir);
        // Vec3.transformQuat(this.dir, this.dir, q);

        TransformQuat(this.left, q, this.left);
        // Vec3.transformQuat(this.left, this.left, q);

        TransformQuat(this.up, q, this.up);
        // Vec3.transformQuat(this.up, this.up, q);

        Normalize(this.up, this.up);
        // Vec3.normalize(this.up, this.up);

        Normalize(this.left, this.left);
        // Vec3.normalize(this.left, this.left);

        Normalize(this.dir, this.dir);
        // Vec3.normalize(this.dir, this.dir);
    }

    yaw (angle: number)
    {
        this.rotateOnAxis(this.up, angle);
    }

    pitch (angle: number)
    {
        this.rotateOnAxis(this.left, angle);
    }

    roll (angle: number)
    {
        this.rotateOnAxis(this.dir, angle);
    }

    moveForward (s: number)
    {
        const x = this.pos.x - s * this.dir.x;
        const y = this.pos.y - s * this.dir.y;
        const z = this.pos.z - s * this.dir.z;

        const tempPos = new Vec3(x, y, z);

        this.setPosition(tempPos);
    }

    refresh ()
    {
        // let matView = mat4.create();

        // let lookAtPosition = Vec3.create();

        let lookAtPosition = Add(this.pos, this.dir);
        // Vec3.add(lookAtPosition, this.pos, this.dir);

        let matView = LookAt(this.pos, lookAtPosition, this.up);
        // mat4.lookAt(matView, this.pos, lookAtPosition, this.up);

        TranslateFromFloats(matView, -this.pos.x, -this.pos.y, -this.pos.z, this.viewMatrix);
        // mat4.translate(matView, matView, Vec3.fromValues(-this.pos[0], -this.pos[1], -this.pos[2]));
        // this.viewMatrix = matView;
        // this.projectionMatrix = mat4.create();

        Perspective(DegToRad(this.fov), this.aspectRatio, this.near, this.far, this.projectionMatrix);
        // mat4.perspective(this.projectionMatrix, GLMatrix.glMatrix.toRadian(this.fov), this.aspectRatio, this.near, this.far);
    }
}
