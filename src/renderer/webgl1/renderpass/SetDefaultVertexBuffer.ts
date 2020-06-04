import { AddVertexBuffer } from './AddVertexBuffer';
import { BindVertexBuffer } from './BindVertexBuffer';
import { IRenderPass } from './IRenderPass';
import { IVertexBuffer } from '../buffers/IVertexBuffer';

export function SetDefaultVertexBuffer (renderPass: IRenderPass, buffer: IVertexBuffer): void
{
    const entry = AddVertexBuffer(renderPass, buffer);

    renderPass.defaultVertexBuffer = entry;
    renderPass.currentVertexBuffer = entry;

    BindVertexBuffer(renderPass);
}
