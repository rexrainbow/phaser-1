import { BlendModeStackEntry } from './RenderPass';
import { IRenderPass } from './IRenderPass';

export function AddBlendMode (renderPass: IRenderPass, enable: boolean, sfactor?: number, dfactor?: number): BlendModeStackEntry
{
    const entry = { enable, sfactor, dfactor };

    renderPass.blendModeStack.push(entry);

    return entry;
}
