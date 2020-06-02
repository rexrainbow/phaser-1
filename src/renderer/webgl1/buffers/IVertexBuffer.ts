export interface IVertexBuffer
{
    batchSize: number;
    dataSize: number;
    indexSize?: number;
    vertexElementSize: number;
    vertexByteSize: number;
    entryByteSize: number;
    entryElementSize?: number;
    entryIndexSize?: number;
    bufferByteSize: number;
    data: ArrayBuffer;
    vertexViewF32: Float32Array;
    vertexViewU32: Uint32Array;
    index?: Uint16Array;
    vertexBuffer: WebGLBuffer;
    indexBuffer?: WebGLBuffer;
    indexLayout?: number[];
    indexed: boolean;

    create (seededIndex?: number[]): void;
    destroy (): void;
}
