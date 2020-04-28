import { IGameObject } from '../gameobject/IGameObject';
import { Matrix2D } from '../../math/matrix2d/Matrix2D';

export interface ITransformGameObject extends IGameObject
{
    x: number;
    y: number;
    width: number;
    height: number;
    rotation: number;
    scaleX: number;
    scaleY: number;
    skewX: number;
    skewY: number;
    originX: number;
    originY: number;
    localTransform?: Matrix2D;
    worldTransform?: Matrix2D;
    setSize (width: number, height: number): this;
    updateCache (): this;
}
