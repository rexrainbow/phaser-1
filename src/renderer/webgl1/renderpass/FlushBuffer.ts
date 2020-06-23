import { Flush } from './Flush';
import { IRenderPass } from './IRenderPass';
import { IVertexBuffer } from '../buffers/IVertexBuffer';
import { PopVertexBuffer } from './PopVertexBuffer';
import { SetVertexBuffer } from './SetVertexBuffer';

export function FlushBuffer (renderPass: IRenderPass, buffer: IVertexBuffer): boolean
{
    SetVertexBuffer(renderPass, buffer);

    //  Needs setting every time the buffer changes
    renderPass.currentShader.shader.setAttributes(renderPass);

    const result = Flush(renderPass, buffer.count);

    //  TODO - Pop without binding previous buffer
    PopVertexBuffer(renderPass);

    return result;
}
