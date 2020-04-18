import ITransformGameObject from '../gameobjects/transformgameobject/ITransformGameObject';
import Rectangle from '../geom/rectangle/Rectangle';
import WebGLRenderer from '../renderer/webgl1/WebGLRenderer';
import IBaseCamera from './IBaseCamera';

export default interface ICamera extends IBaseCamera, ITransformGameObject
{
    matrix: Float32Array;
    renderer: WebGLRenderer;
    bounds: Rectangle;
    reset (): void;
}
