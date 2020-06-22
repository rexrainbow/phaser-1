import { BlendModeStackEntry } from './RenderPass';
import { IRenderPass } from './IRenderPass';
import { gl } from '../GL';

export function BindBlendMode (renderPass: IRenderPass, entry?: BlendModeStackEntry): void
{
    if (!entry)
    {
        entry = renderPass.currentBlendMode;
    }

    //  TODO - Only set if different
    if (entry.enable)
    {
        gl.enable(gl.BLEND);
        gl.blendFunc(entry.sfactor, entry.dfactor);
    }
    else
    {
        gl.disable(gl.BLEND);
    }
}
