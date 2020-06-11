import * as GLMatrix from 'gl-matrix';
import * as mat4 from 'gl-matrix/mat4';
import * as quat from 'gl-matrix/quat';
import * as vec3 from 'gl-matrix/vec3';

export class Camera3D
{
    left: vec3;
    up: vec3;
    dir: vec3;
    pos: vec3;

    projectionTransform: mat4;
    projectionMatrix: mat4;
    viewMatrix: mat4;

    fov: number = 40;
    near: number = 1;
    far: number = 1000;

    aspectRatio: number = 800 / 600;

    constructor ()
    {
        this.left = vec3.fromValues(1, 0, 0);
        this.up = vec3.fromValues(0, 1, 0);
        this.dir = vec3.fromValues(0, 0, 1);
        this.pos = vec3.fromValues(0, 0, 0);

        // this.setPosition([ 0, 2, -3 ]);
        // this.setLookAtPoint([ 0, 0, 0 ]);

        // this.refresh();
    }

    getLeft (): vec3
    {
        return vec3.clone(this.left);
    }

    getUp (): vec3
    {
        return vec3.clone(this.up);
    }

    getPosition (): vec3
    {
        return vec3.clone(this.pos);
    }

    getProjectionMatrix (): mat4
    {
        return mat4.clone(this.projectionMatrix);
    }

    getViewMatrix (): mat4
    {
        return mat4.clone(this.viewMatrix);
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
        this.pos[2] = value;
    }

    setPosition (newVec: vec3)
    {
        this.pos = vec3.fromValues(newVec[0], newVec[1], newVec[2]);
    }

    setLookAtPoint (newVec: vec3)
    {
        vec3.subtract(this.dir, newVec, this.pos);
        vec3.normalize(this.dir, this.dir);
        vec3.cross(this.left, vec3.fromValues(0, 1, 0), this.dir);
        vec3.normalize(this.left, this.left);
        vec3.cross(this.up, this.dir, this.left);
        vec3.normalize(this.up, this.up);
    }

    rotateOnAxis (axisVec: vec3, angle: number)
    {
        let q = quat.create();

        quat.setAxisAngle(q, axisVec, angle);

        vec3.transformQuat(this.dir, this.dir, q);
        vec3.transformQuat(this.left, this.left, q);
        vec3.transformQuat(this.up, this.up, q);

        vec3.normalize(this.up, this.up);
        vec3.normalize(this.left, this.left);
        vec3.normalize(this.dir, this.dir);
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
        let newPosition = [
            this.pos[0] - s * this.dir[0],
            this.pos[1] - s * this.dir[1],
            this.pos[2] - s * this.dir[2]
        ];

        this.setPosition(newPosition);
    }

    refresh ()
    {
        let matView = mat4.create();
        let lookAtPosition = vec3.create();

        vec3.add(lookAtPosition, this.pos, this.dir);

        mat4.lookAt(matView, this.pos, lookAtPosition, this.up);

        mat4.translate(matView, matView, vec3.fromValues(-this.pos[0], -this.pos[1], -this.pos[2]));

        this.viewMatrix = matView;

        this.projectionMatrix = mat4.create();

        mat4.perspective(this.projectionMatrix, GLMatrix.glMatrix.toRadian(this.fov), this.aspectRatio, this.near, this.far);
    }
}
