import { Vec3, Vec3Callback } from '../math/vec3';

import { IMatrix4 } from '../math/mat4/IMatrix4';
import { IRenderer } from '../renderer/IRenderer';
import { IVec3 } from '../math/vec3/IVec3';

export interface ICamera3D
{
    type: string;
    renderer: IRenderer;
    position: Vec3Callback;
    direction: Vec3Callback;
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
}
