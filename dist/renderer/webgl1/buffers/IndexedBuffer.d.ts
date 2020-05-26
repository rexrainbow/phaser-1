export declare class IndexedBuffer {
    batchSize: number;
    dataSize: number;
    indexSize: number;
    vertexElementSize: number;
    vertexByteSize: number;
    quadByteSize: number;
    quadElementSize: number;
    quadIndexSize: number;
    bufferByteSize: number;
    data: ArrayBuffer;
    vertexViewF32: Float32Array;
    vertexViewU32: Uint32Array;
    index: Uint16Array;
    vertexBuffer: WebGLBuffer;
    indexBuffer: WebGLBuffer;
    constructor(batchSize: number, dataSize: number, indexSize: number, vertexElementSize: number, quadIndexSize: number);
    create(): void;
    destroy(): void;
}
//# sourceMappingURL=IndexedBuffer.d.ts.map