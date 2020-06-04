import { AddVertexBuffer } from './AddVertexBuffer';
import { BindVertexBuffer } from './BindVertexBuffer';
import { IRenderPass } from './IRenderPass';
import { IVertexBuffer } from '../buffers/IVertexBuffer';

export function SetVertexBuffer (renderPass: IRenderPass, buffer: IVertexBuffer): void
{
    const entry = AddVertexBuffer(renderPass, buffer);

    BindVertexBuffer(renderPass, entry);

    renderPass.currentVertexBuffer = entry;
}
