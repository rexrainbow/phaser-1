import { IRenderPass } from './IRenderPass';
import { IVertexBuffer } from '../buffers/IVertexBuffer';

export function AddVertexBuffer (renderPass: IRenderPass, buffer: IVertexBuffer): IVertexBuffer
{
    renderPass.vertexBufferStack.push(buffer);

    return buffer;
}
