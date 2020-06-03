import { IVertexBuffer } from '../buffers/IVertexBuffer';

export type BufferEntry = {
    buffer: IVertexBuffer;
    F32: WebGLBuffer;
    U32: WebGLBuffer;
    offset: number;
};
