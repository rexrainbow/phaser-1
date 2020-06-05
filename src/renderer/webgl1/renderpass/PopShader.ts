import { BindShader } from './BindShader';
import { IRenderPass } from './IRenderPass';

export function PopShader (renderPass: IRenderPass): void
{
    const stack = renderPass.shaderStack;

    //  > 1 because index 0 contains the default, which we don't want to remove
    if (stack.length > 1)
    {
        stack.pop();
    }

    renderPass.currentShader = stack[ stack.length - 1 ];

    BindShader(renderPass);
}
