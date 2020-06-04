import { IVertexBuffer } from './IVertexBuffer';
import { IVertexBufferConfig } from './IVertexBufferConfig';
import { IndexedVertexBuffer } from './IndexedVertexBuffer';
import { VertexBuffer } from './VertexBuffer';

export function CreateVertexBuffer (config: IVertexBufferConfig = {}): IVertexBuffer
{
    const {
        batchSize = 1,
        dataSize = 4,
        entryIndexSize = 0,
        indexLayout = null,
        indexSize = 0,
        quantity = 4,
        vertexElementSize = 6
    } = config;

    if (indexSize > 0)
    {
        return new IndexedVertexBuffer(batchSize, dataSize, indexSize, vertexElementSize, entryIndexSize, quantity, indexLayout);
    }
    else
    {
        return new VertexBuffer(batchSize, dataSize, vertexElementSize, quantity);
    }
}
