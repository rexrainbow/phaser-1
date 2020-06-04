import { CopyFrom, Equals } from '../../../geom/rectangle';

import { FramebufferStackEntry } from './RenderPass';
import { GL } from '../GL';
import { IRenderPass } from './IRenderPass';

export function BindFramebuffer (renderPass: IRenderPass, clear: boolean = true, entry?: FramebufferStackEntry): void
{
    if (!entry)
    {
        entry = renderPass.currentFramebuffer;
    }

    const { framebuffer, viewport } = entry;

    const gl = GL.get();

    gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer);

    if (clear)
    {
        gl.clearColor(0, 0, 0, 0);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    }

    if (viewport && !Equals(viewport, renderPass.currentViewport))
    {
        gl.viewport(viewport.x, viewport.y, viewport.width, viewport.height);

        CopyFrom(viewport, renderPass.currentViewport);
    }
}
