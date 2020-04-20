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
    transformData: Float32Array;
    localTransform?: Matrix2D;
    worldTransform?: Matrix2D;
    setPosition (x: number, y?: number): this;
    setRotation (value: number): this;
    setScale (scaleX: number, scaleY?: number): this;
    setSkew (skewX: number, skewY?: number): this;
    setOrigin (originX: number, originY?: number): this;
    setSize (width: number, height: number): this;
    updateCache (): this;
}
