import ITransformGameObject from '../gameobjects/transformgameobject/ITransformGameObject';
import Rectangle from '../geom/rectangle/Rectangle';
import WebGLRenderer from '../renderer/webgl1/WebGLRenderer';
import IBaseScene from '../scenes/IBaseScene';

export default interface ICamera extends ITransformGameObject
{
    scene: IBaseScene;
    matrix: Float32Array;
    renderer: WebGLRenderer;
    dirtyRender: boolean;
    bounds: Rectangle;
    reset (): void;
    update (delta: number, time: number): void;
    render (gameFrame: number): void;
}
