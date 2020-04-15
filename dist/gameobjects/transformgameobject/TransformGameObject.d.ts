import GameObject from '../gameobject/GameObject';
import Matrix2D from '../../math/matrix2d/Matrix2D';
export default class TransformGameObject extends GameObject {
    private transformBuffer;
    transformData: Float32Array;
    localTransform: Matrix2D;
    worldTransform: Matrix2D;
    width: number;
    height: number;
    constructor(x?: number, y?: number);
    updateCache(): this;
    updateTransform(): this;
    setSize(width: number, height: number): this;
    setOrigin(originX: number, originY?: number): this;
    setPosition(x: number, y?: number): this;
    setRotation(rotation: number): this;
    setScale(scaleX: number, scaleY?: number): this;
    setSkew(skewX: number, skewY?: number): this;
    destroy(): void;
    set x(value: number);
    get x(): number;
    set y(value: number);
    get y(): number;
    get originX(): number;
    set originX(value: number);
    get originY(): number;
    set originY(value: number);
    set skewX(value: number);
    get skewX(): number;
    set skewY(value: number);
    get skewY(): number;
    set scaleX(value: number);
    get scaleX(): number;
    set scaleY(value: number);
    get scaleY(): number;
    set rotation(value: number);
    get rotation(): number;
}
//# sourceMappingURL=TransformGameObject.d.ts.map