import { BindViewport } from './BindViewport';
import { IRenderPass } from './IRenderPass';
import { ResetViewport } from './ResetViewport';

export function PopViewport (renderPass: IRenderPass): void
{
    const stack = renderPass.viewportStack;

    stack.pop();

    const len = stack.length;

    if (len > 0)
    {
        renderPass.currentViewport = stack[ len - 1 ];

        BindViewport(renderPass);
    }
    else
    {
        ResetViewport(renderPass);
    }
}
