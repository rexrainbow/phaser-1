import { Vec3, Vec3Callback } from '../math/vec3';

import { Euler } from '../math/euler/Euler';
import { IRenderer } from '../renderer/IRenderer';
import { IVec3Like } from '../math/vec3/IVec3Like';
import { Matrix4 } from '../math/mat4/Matrix4';
import { Quaternion } from '../math/quaternion';

export interface ICamera3D
{
    type: string;

    position: Vec3Callback;
    // scale: Vec3;
    rotation: Quaternion;

    yaw: number;
    pitch: number;
    roll: number;

    matrix: Matrix4;
    viewMatrix: Matrix4;
    viewNormal: Matrix4;
    projectionMatrix: Matrix4;

    forward: Vec3;
    up: Vec3;
    right: Vec3;

    aspect: number;

    dirtyRender: boolean;
    isOrbit: boolean;
    start: Vec3;
    panRate: number;
    zoomRate: number;
    rotateRate: number;

    fov: number;
    near: number;
    far: number;

    begin (x: number, y: number): void;
    zoom (delta: number): void;
    pan (x: number, y: number): void;
    rotate (x: number, y: number): void;
    panX (amount: number): this;
    panY (amount: number): this;
    panZ (amount: number): this;
    update (): this;
    lookAt (target: IVec3Like, invert: boolean): this;
    targetTo (target: IVec3Like): this;
    setAspectRatio (value?: number): this;
    updateProjectionMatrix (): this;
}
