import { Vec3 } from './Vec3';
export declare type Vec3CallbackType = (vec3: Vec3Callback) => void;
export declare class Vec3Callback extends Vec3 {
    private _x;
    private _y;
    private _z;
    onChange: Vec3CallbackType;
    constructor(onChange: Vec3CallbackType, x?: number, y?: number, z?: number);
    destroy(): void;
    set(x?: number, y?: number, z?: number): this;
    get x(): number;
    set x(value: number);
    get y(): number;
    set y(value: number);
    get z(): number;
    set z(value: number);
}
//# sourceMappingURL=Vec3Callback.d.ts.map