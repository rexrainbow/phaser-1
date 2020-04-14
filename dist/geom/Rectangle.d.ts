export default class Rectangle {
    x: number;
    y: number;
    width: number;
    height: number;
    constructor(x?: number, y?: number, width?: number, height?: number);
    set(x?: number, y?: number, width?: number, height?: number): Rectangle;
    set right(value: number);
    get right(): number;
    set bottom(value: number);
    get bottom(): number;
    contains(px: number, py: number): boolean;
}
//# sourceMappingURL=Rectangle.d.ts.map