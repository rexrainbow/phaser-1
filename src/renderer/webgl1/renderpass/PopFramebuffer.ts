import { BindFramebuffer } from './BindFramebuffer';
import { IRenderPass } from './IRenderPass';
import { ResetFramebuffer } from './ResetFramebuffer';

export function PopFramebuffer (renderPass: IRenderPass): void
{
    const stack = renderPass.framebufferStack;

    stack.pop();

    const len = stack.length;

    if (len > 0)
    {
        renderPass.currentFramebuffer = stack[ len - 1 ];

        BindFramebuffer(renderPass, false);
    }
    else
    {
        ResetFramebuffer(renderPass);
    }
}
