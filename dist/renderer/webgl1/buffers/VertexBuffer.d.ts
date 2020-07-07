import { IVertexBuffer } from './IVertexBuffer';
import { IVertexBufferConfig } from './IVertexBufferConfig';
export declare class VertexBuffer implements IVertexBuffer {
    batchSize: number;
    dataSize: number;
    vertexElementSize: number;
    vertexByteSize: number;
    entryByteSize: number;
    bufferByteSize: number;
    data: ArrayBuffer;
    vertexViewF32: Float32Array;
    vertexViewU32: Uint32Array;
    vertexBuffer: WebGLBuffer;
    indexed: boolean;
    isDynamic: boolean;
    count: number;
    offset: number;
    elementsPerEntry: number;
    constructor(config?: IVertexBufferConfig);
    resize(batchSize: number): void;
    create(): void;
    add(count: number): void;
    reset(): void;
    canContain(count: number): boolean;
    free(): number;
    bind(): void;
    destroy(): void;
}
//# sourceMappingURL=VertexBuffer.d.ts.map