import { GameObject } from '../GameObject';
import { IContainer } from './IContainer';
export declare class Container extends GameObject implements IContainer {
    protected _alpha: number;
    constructor(x?: number, y?: number);
    setSize(width: number, height?: number): this;
    setPosition(x: number, y: number): this;
    setOrigin(x: number, y?: number): this;
    setSkew(x: number, y?: number): this;
    setScale(x: number, y?: number): this;
    setRotation(value: number): this;
    set width(value: number);
    get width(): number;
    set height(value: number);
    get height(): number;
    set x(value: number);
    get x(): number;
    set y(value: number);
    get y(): number;
    set originX(value: number);
    get originX(): number;
    set originY(value: number);
    get originY(): number;
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
    get alpha(): number;
    set alpha(value: number);
}
//# sourceMappingURL=Container.d.ts.map