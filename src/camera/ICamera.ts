import { ITransformGameObject } from '../gameobjects/transformgameobject/ITransformGameObject';
import { IWorld } from '../world/IWorld';
import { Rectangle } from '../geom/rectangle/Rectangle';
import { WebGLRenderer } from '../renderer/webgl1/WebGLRenderer';

export interface ICamera extends ITransformGameObject
{
    world: IWorld;
    matrix: Float32Array;
    renderer: WebGLRenderer;
    dirtyRender: boolean;
    bounds: Rectangle;
    reset (): void;
    update (delta: number, time: number): void;
    render (gameFrame: number): void;
}
