import IGameObject from '../gameobject/IGameObject';
export default interface ITransformGameObject extends IGameObject {
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
    localTransform?: Float32Array;
    worldTransform?: Float32Array;
    setPosition(x: number, y?: number): this;
    setRotation(value: number): this;
    setScale(scaleX: number, scaleY?: number): this;
    setSkew(skewX: number, skewY?: number): this;
    setOrigin(originX: number, originY?: number): this;
    setSize(width: number, height: number): this;
    updateCache(): this;
}
//# sourceMappingURL=ITransformGameObject.d.ts.map