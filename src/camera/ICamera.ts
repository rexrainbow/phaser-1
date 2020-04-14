import WebGLRenderer from '../renderer/WebGLRenderer';
import Rectangle from '../geom/Rectangle';
import ITransformGameObject from '../gameobjects/transformgameobject/ITransformGameObject';

export default interface ICamera extends ITransformGameObject
{
    matrix: Float32Array;
    renderer: WebGLRenderer;
    bounds: Rectangle;
    reset (): void;
}
