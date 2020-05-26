export declare class Vec2Callback {
    private _x;
    private _y;
    callback: (vec2: Vec2Callback) => void;
    compareValue: boolean;
    constructor(callback: (vec2: Vec2Callback) => void, x?: number, y?: number, compareValue?: boolean);
    set(x?: number, y?: number): this;
    destroy(): void;
    set x(value: number);
    get x(): number;
    set y(value: number);
    get y(): number;
}
//# sourceMappingURL=Vec2Callback.d.ts.map