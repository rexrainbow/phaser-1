import { Draw } from './Draw';
import { RenderPass } from './RenderPass';

export function Flush (renderPass: RenderPass): boolean
{
    const count = renderPass.count;

    if (count === 0)
    {
        return false;
    }

    Draw(renderPass);

    renderPass.prevCount = count;

    renderPass.count = 0;

    return true;
}
