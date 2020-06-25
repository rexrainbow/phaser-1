export interface IVec2
{
    x: number;
    y: number;
    set (x?: number, y?: number): this;
    toArray (dst: Float32List, index?: number): Float32List;
    fromArray (src: Float32List, index?: number): this;
    toString (): string;
}
