export interface IMatrix4
{
    data: Float32Array;
    set (m11: number, m12: number, m13: number, m14: number, m21: number, m22: number, m23: number, m24: number, m31: number, m32: number, m33: number, m34: number, m41: number, m42: number, m43: number, m44: number): this;
    toArray (dst: Float32List, index?: number): Float32List;
    fromArray (src: Float32List, index?: number): this;
}
