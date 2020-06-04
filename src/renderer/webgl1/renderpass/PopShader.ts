import { BindShader } from './BindShader';
import { IRenderPass } from './IRenderPass';

export function PopShader (renderPass: IRenderPass): void
{
    const stack = renderPass.shaderStack;

    stack.pop();

    const len = stack.length;

    if (len > 0)
    {
        renderPass.currentShader = stack[ len - 1 ];

        BindShader(renderPass);
    }
}
