import { BindFramebuffer } from './BindFramebuffer';
import { IRenderPass } from './IRenderPass';
import { PopViewport } from './PopViewport';

export function PopFramebuffer (renderPass: IRenderPass): void
{
    const stack = renderPass.framebufferStack;

    //  > 1 because index 0 contains the default, which we don't want to remove
    if (stack.length > 1)
    {
        if (renderPass.currentFramebuffer.viewport)
        {
            PopViewport(renderPass);
        }

        stack.pop();
    }

    renderPass.currentFramebuffer = stack[ stack.length - 1 ];

    BindFramebuffer(renderPass, false);
}
