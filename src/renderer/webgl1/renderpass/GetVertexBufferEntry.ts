import { BufferEntry } from '../draw/BufferEntry';
import { Flush } from './Flush';
import { RenderPass } from './RenderPass';

export function GetVertexBufferEntry (renderPass: RenderPass, addToCount: number = 0): BufferEntry
{
    const buffer = renderPass.currentVertexBuffer;

    //  If batch cannot take the size of this entry, flush it first
    if (renderPass.count + addToCount >= buffer.batchSize)
    {
        Flush(renderPass);
    }

    const offset = (buffer.indexed) ? renderPass.count * buffer.entryElementSize : renderPass.count * buffer.vertexElementSize;

    renderPass.count += addToCount;

    return {
        buffer,
        F32: buffer.vertexViewF32,
        U32: buffer.vertexViewU32,
        offset
    };
}
