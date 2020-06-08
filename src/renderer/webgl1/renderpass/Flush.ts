import { Draw } from './Draw';
import { IRenderPass } from './IRenderPass';

export function Flush (renderPass: IRenderPass): boolean
{
    const count = renderPass.count;

    if (count === 0)
    {
        return false;
    }

    Draw(renderPass);

    renderPass.prevCount = count;

    renderPass.count = 0;

    renderPass.flushTotal++;

    return true;
}
