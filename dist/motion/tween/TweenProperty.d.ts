export declare class TweenProperty {
    name: string;
    start: number;
    end: number;
    modifier: string;
    constructor(name: string, end: number | string);
    getEnd(start: number): number;
    to(target: unknown): void;
    from(target: unknown): void;
    update(target: unknown, v: number): void;
}
//# sourceMappingURL=TweenProperty.d.ts.map