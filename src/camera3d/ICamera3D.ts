import { Vec3, Vec3Callback } from '../math/vec3';

import { IRenderer } from '../renderer/IRenderer';
import { IVec3Like } from '../math/vec3/IVec3Like';
import { Matrix4 } from '../math/mat4/Matrix4';
import { Quaternion } from '../math/quaternion';

/*
type: string;
// renderer: IRenderer;
position: Vec3Callback;
// direction: Vec3Callback;
// rotation: Vec3Callback;
up: Vec3;
left: Vec3;
aspectRatio: number;
viewMatrix: IMatrix4;
projectionMatrix: IMatrix4;
fov: number;
near: number;
far: number;
dirtyRender: boolean;
updateProjectionMatrix (): this;
lookAt (point: IVec3): this;
rotateOnAxis (axisVec: Vec3, angle: number): this;
yaw (angle: number): this;
pitch (angle: number): this;
roll (angle: number): this;
forward (s: number): this;
update (): this;
reset (): void;
destroy (): void;
*/

export interface ICamera3D
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
    fov: number;
    near: number;
    far: number;

    dirtyRender: boolean;

    update (): this;
    lookAt (target: IVec3Like, invert: boolean): this;
    setAspectRatio (value?: number): this;
    updateProjectionMatrix (): this;
}
