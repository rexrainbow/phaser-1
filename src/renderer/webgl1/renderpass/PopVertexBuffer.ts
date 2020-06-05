import { BindVertexBuffer } from './BindVertexBuffer';
import { IRenderPass } from './IRenderPass';

export function PopVertexBuffer (renderPass: IRenderPass): void
{
    const stack = renderPass.vertexBufferStack;

    //  > 1 because index 0 contains the default, which we don't want to remove
    if (stack.length > 1)
    {
        stack.pop();
    }

    renderPass.currentVertexBuffer = stack[ stack.length - 1 ];

    BindVertexBuffer(renderPass);
}
