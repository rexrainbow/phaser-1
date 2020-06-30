import { Clamp, DegToRad } from '../math';
import { Forward, Right, ScaleAndAdd, TransformMat4, Up, Vec3, Vec3Callback } from '../math/vec3';
import { FromEulerVector, Quaternion, RotationYawPitchRoll } from '../math/quaternion';
import { FromRotationTranslationScale, FromRotationXYTranslation, GetRotation, Identity, Invert, LookAt, Matrix4, Multiply, Perspective, RotateX, RotateY, RotateZ, TargetTo, Translate, Transpose } from '../math/mat4';

import { Euler } from '../math/euler/Euler';
import { FromQuaternion } from '../math/euler';
import { GameInstance } from '../GameInstance';
import { IVec3Like } from '../math/vec3/IVec3Like';

export class NewCamera3D
{
    type: string;

    position: Vec3;
    scale: Vec3;
    rotation: Quaternion;

    matrix: Matrix4;
    viewMatrix: Matrix4; // the inverse of the transform matrix
    viewNormal: Matrix4; // normals generated from the viewMatrix
    projectionMatrix: Matrix4; // perspective projection matrix

    forward: Vec3;
    up: Vec3;
    right: Vec3;

    start: Vec3;

    yaw: number;
    pitch: number;
    roll: number;

    aspect: number;

    isOrbit: boolean = false;

    dirtyRender: boolean = true;

    panRate: number = 5;
    zoomRate: number = 200;
    rotateRate: number = -3;

    private _fov: number;
    private _near: number;
    private _far: number;

    constructor (fov: number = 45, near: number = 0.1, far: number = 1000)
    {
        this.type = 'Camera3D';

        this._fov = fov;
        this._near = near;
        this._far = far;

        this.matrix = new Matrix4();
        this.viewMatrix = new Matrix4();
        this.viewNormal = new Matrix4();
        this.projectionMatrix = new Matrix4();

        this.position = new Vec3();
        this.scale = new Vec3(1, 1, 1);
        this.rotation = new Quaternion();

        this.yaw = 0;
        this.pitch = 0;
        this.roll = 0;

        this.forward = Forward();
        this.up = Up();
        this.right = Right();

        this.start = new Vec3();

        this.setAspectRatio();
    }

    update (): this
    {
        //  Move to setters:
        // RotationYawPitchRoll(this.yaw, this.pitch, this.roll, this.rotation);

        // Identity(this.matrix);

        FromRotationXYTranslation(this.rotation, this.position, !this.isOrbit, this.matrix);

        // TransformMat4(Forward(), this.matrix, this.forward);
        // TransformMat4(Up(), this.matrix, this.up);
        // TransformMat4(Right(), this.matrix, this.right);

        Invert(this.matrix, this.viewMatrix);

        Transpose(this.viewMatrix, this.viewNormal);

        return this;
    }

    panX (amount: number): this
    {
        if (!this.isOrbit)
        {
            ScaleAndAdd(this.position, this.right, amount, this.position);
        }

        return this;
    }

    panY (amount: number): this
    {
        if (this.isOrbit)
        {
            this.position.y += this.up.y * amount;
        }
        else
        {
            ScaleAndAdd(this.position, this.up, amount, this.position);
        }

        return this;
    }

    panZ (amount: number): this
    {
        if (this.isOrbit)
        {
            this.position.z += amount;
        }
        else
        {
            ScaleAndAdd(this.position, this.forward, amount, this.position);
        }

        return this;
    }

    begin (x: number, y: number): void
    {
        this.start.set(x, y);
    }

    pan (x: number, y: number): void
    {
        const dx = x - this.start.x;
        const dy = y - this.start.y;

        this.panX(-dx * (this.panRate / 800));
        this.panY(dy * (this.panRate / 600));

        this.start.set(x, y);
    }

    rotate (x: number, y: number): void
    {
        const dx = x - this.start.x;
        const dy = y - this.start.y;

        this.rotation.x += dy * (this.rotateRate / 600);
        this.rotation.y += dx * (this.rotateRate / 800);

        this.start.set(x, y);
    }

    zoom (delta: number): void
    {
        this.panZ(Clamp(delta, -1, 1) * (this.zoomRate / 600));
    }

    lookAt (target: IVec3Like, invert: boolean = false): this
    {
        if (invert)
        {
            LookAt(this.position, target, this.up, this.matrix);
        }
        else
        {
            LookAt(target, this.position, this.up, this.matrix);
        }

        GetRotation(this.matrix, this.rotation);

        return this;
    }

    targetTo (target: IVec3Like): this
    {
        // TargetTo(this.direction, target, this.up, this.matrix);

        GetRotation(this.matrix, this.rotation);

        return this;
    }

    setAspectRatio (value?: number): this
    {
        if (!value)
        {
            const game = GameInstance.get();

            const renderer = game.renderer;

            value = renderer.width / renderer.height;
        }

        this.aspect = value;

        return this.updateProjectionMatrix();
    }

    updateProjectionMatrix (): this
    {
        Perspective(DegToRad(this._fov), this.aspect, this._near, this._far, this.projectionMatrix);

        return this;
    }

    get fov (): number
    {
        return this._fov;
    }

    set fov (value: number)
    {
        if (value > 0 && value < 180)
        {
            this._fov = value;

            this.updateProjectionMatrix();
        }
    }

    get near (): number
    {
        return this._near;
    }

    set near (value: number)
    {
        if (value > 0)
        {
            this._near = value;

            this.updateProjectionMatrix();
        }
    }

    get far (): number
    {
        return this._far;
    }

    set far (value: number)
    {
        if (value > 0)
        {
            this._far = value;

            this.updateProjectionMatrix();
        }
    }
}
