import { BindBlendMode } from './BindBlendMode';
import { IRenderPass } from './IRenderPass';

export function PopBlendMode (renderPass: IRenderPass): void
{
    const stack = renderPass.blendModeStack;

    //  > 1 because index 0 contains the default, which we don't want to remove
    if (stack.length > 1)
    {
        stack.pop();
    }

    renderPass.currentBlendMode = stack[ stack.length - 1 ];

    BindBlendMode(renderPass);
}
