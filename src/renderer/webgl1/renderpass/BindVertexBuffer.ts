import { GL } from '../GL';
import { IRenderPass } from './IRenderPass';
import { IVertexBuffer } from '../buffers/IVertexBuffer';

export function BindVertexBuffer (renderPass: IRenderPass, buffer?: IVertexBuffer): void
{
    if (!buffer)
    {
        buffer = renderPass.currentVertexBuffer;
    }

    const gl = GL.get();

    const indexBuffer = (buffer.indexed) ? buffer.indexBuffer : null;

    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);

    gl.bindBuffer(gl.ARRAY_BUFFER, buffer.vertexBuffer);
}
