import { Vec2 } from './Vec2';
export declare type Vec2CallbackType = (vec2: Vec2Callback) => void;
export declare class Vec2Callback extends Vec2 {
    private _x;
    private _y;
    onChange: Vec2CallbackType;
    constructor(onChange?: Vec2CallbackType, x?: number, y?: number);
    destroy(): void;
    set(x?: number, y?: number): this;
    get x(): number;
    set x(value: number);
    get y(): number;
    set y(value: number);
}
//# sourceMappingURL=Vec2Callback.d.ts.map