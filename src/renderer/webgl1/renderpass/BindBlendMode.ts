import { BlendModeStackEntry } from './RenderPass';
import { GL } from '../GL';
import { IRenderPass } from './IRenderPass';

export function BindBlendMode (renderPass: IRenderPass, entry?: BlendModeStackEntry): void
{
    if (!entry)
    {
        entry = renderPass.currentBlendMode;
    }

    const gl = GL.get();

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
