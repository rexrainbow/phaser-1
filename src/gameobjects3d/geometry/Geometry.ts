import { GetBufferFromVertexSet } from './GetBufferFromVertexSet';
import { IIndexedVertexBuffer } from '../../renderer/webgl1/buffers/IIndexedVertexBuffer';
import { IVertexBuffer } from '../../renderer/webgl1/buffers/IVertexBuffer';
import { VertexSet } from './VertexSet';

export class Geometry
{
    buffer: IVertexBuffer | IIndexedVertexBuffer;

    constructor (data?: VertexSet)
    {
        if (data)
        {
            this.buffer = GetBufferFromVertexSet(data);
        }
    }

    destroy (): void
    {
        this.buffer.destroy();
    }
}
