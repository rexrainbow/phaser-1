import { Flush } from './Flush';
import { RenderPass } from './RenderPass';

export function End (renderPass: RenderPass): void
{
    Flush(renderPass);
}
