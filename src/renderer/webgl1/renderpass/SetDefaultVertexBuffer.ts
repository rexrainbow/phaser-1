import { BindVertexBuffer } from './BindVertexBuffer';
import { IRenderPass } from './IRenderPass';
import { IVertexBuffer } from '../buffers/IVertexBuffer';

export function SetDefaultVertexBuffer (renderPass: IRenderPass, buffer: IVertexBuffer): void
{
    //  The default entry always goes into index zero
    renderPass.vertexBufferStack[0] = buffer;

    renderPass.currentVertexBuffer = buffer;
    renderPass.defaultVertexBuffer = buffer;

    BindVertexBuffer(renderPass);
}
