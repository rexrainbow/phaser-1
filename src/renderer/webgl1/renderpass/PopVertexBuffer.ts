import { BindVertexBuffer } from './BindVertexBuffer';
import { IRenderPass } from './IRenderPass';

export function PopVertexBuffer (renderPass: IRenderPass): void
{
    const stack = renderPass.vertexBufferStack;

    stack.pop();

    const len = stack.length;

    if (len > 0)
    {
        renderPass.currentVertexBuffer = stack[ len - 1 ];

        BindVertexBuffer(renderPass);
    }
}
