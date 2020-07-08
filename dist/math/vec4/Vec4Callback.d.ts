import { Vec4 } from './Vec4';
export declare type Vec4CallbackType = (vec3: Vec4Callback) => void;
export declare class Vec4Callback extends Vec4 {
    private _x;
    private _y;
    private _z;
    private _w;
    onChange: Vec4CallbackType;
    constructor(onChange: Vec4CallbackType, x?: number, y?: number, z?: number, w?: number);
    destroy(): void;
    set(x?: number, y?: number, z?: number, w?: number): this;
    get x(): number;
    set x(value: number);
    get y(): number;
    set y(value: number);
    get z(): number;
    set z(value: number);
    get w(): number;
    set w(value: number);
}
//# sourceMappingURL=Vec4Callback.d.ts.map