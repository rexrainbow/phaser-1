export interface IVec3
{
    x: number;
    y: number;
    z: number;
    set (x?: number, y?: number, z?: number): this;
    toArray (dst: Float32List, index?: number): Float32List;
    fromArray (src: Float32List, index?: number): this;
    toString (): string;
}
