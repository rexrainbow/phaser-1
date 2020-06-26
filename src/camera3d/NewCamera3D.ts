import { FromRotationTranslationScale, GetRotation, LookAt, Matrix4, Multiply, Perspective } from '../math/mat4';
import { Quaternion, RotateX, RotateY, RotateZ } from '../math/quaternion';
import { Up, Vec3, Vec3Callback } from '../math/vec3';

import { DegToRad } from '../math';
import { GameInstance } from '../GameInstance';
import { IVec3Like } from '../math/vec3/IVec3Like';

export class NewCamera3D
{
    type: string;

    viewMatrix: Matrix4;
    projectionMatrix: Matrix4;
    projectionViewMatrix: Matrix4;

    position: Vec3Callback;
    scale: Vec3Callback;
    rotation: Quaternion;

    up: Vec3;
    aspect: number;

    dirtyRender: boolean = true;

    private _fov: number;
    private _near: number;
    private _far: number;

    constructor (fov: number = 45, near: number = 0.1, far: number = 1000)
    {
        this.type = 'Camera3D';

        this._fov = fov;
        this._near = near;
        this._far = far;

        this.viewMatrix = new Matrix4();
        this.projectionMatrix = new Matrix4();
        this.projectionViewMatrix = new Matrix4();

        this.position = new Vec3Callback(() => this.update());
        this.scale = new Vec3Callback(() => this.update(), 1, 1, 1);
        this.rotation = new Quaternion();

        this.rotation.onChange = () => this.update();

        this.setAspectRatio();

        this.up = Up();
    }

    update (): this
    {
        FromRotationTranslationScale(this.rotation, this.position, this.scale, this.viewMatrix);

        //  TODO - store inverse of viewMatrix in worldMatrix?
        //  TODO - store translation of worldMatrix in worldPosition?

        Multiply(this.projectionMatrix, this.viewMatrix, this.projectionViewMatrix);

        return this;
    }

    lookAt (target: IVec3Like, invert: boolean = false): this
    {
        if (invert)
        {
            LookAt(this.position, target, this.up, this.viewMatrix);
        }
        else
        {
            LookAt(target, this.position, this.up, this.viewMatrix);
        }

        GetRotation(this.viewMatrix, this.rotation);

        return this;
    }

    /*
    rotateX (angle: number): void
    {
        RotateX(this.rotation, angle, this.rotation);
    }

    rotateY (angle: number): void
    {
        RotateY(this.rotation, angle, this.rotation);
    }

    rotateZ (angle: number): void
    {
        RotateZ(this.rotation, angle, this.rotation);
    }
    */

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

    //  project + unproject + frustum

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
