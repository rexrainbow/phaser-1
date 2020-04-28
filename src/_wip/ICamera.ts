import { IRenderer } from '../renderer/IRenderer';
import { ITransformGameObject } from '../gameobjects/transformgameobject/ITransformGameObject';
import { IWorld } from '../world/IWorld';
import { Rectangle } from '../geom/rectangle/Rectangle';

export interface ICamera extends ITransformGameObject
{
    world: IWorld;
    matrix: Float32Array;
    renderer: IRenderer;
    dirtyRender: boolean;
    bounds: Rectangle;
    reset (): void;
    update (delta: number, time: number): void;
    render (gameFrame: number): void;
}
