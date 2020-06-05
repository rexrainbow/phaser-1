import { BindViewport } from './BindViewport';
import { IRenderPass } from './IRenderPass';

export function PopViewport (renderPass: IRenderPass): void
{
    const stack = renderPass.viewportStack;

    //  > 1 because index 0 contains the default, which we don't want to remove
    if (stack.length > 1)
    {
        stack.pop();
    }

    renderPass.currentViewport = stack[ stack.length - 1 ];

    BindViewport(renderPass);
}
