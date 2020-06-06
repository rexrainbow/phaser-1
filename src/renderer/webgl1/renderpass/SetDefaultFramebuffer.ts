import { IRenderPass } from './IRenderPass';
import { Rectangle } from '../../../geom/rectangle/Rectangle';

export function SetDefaultFramebuffer (renderPass: IRenderPass, framebuffer: WebGLFramebuffer = null, viewport?: Rectangle): void
{
    const entry = { framebuffer, viewport };

    //  The default entry always goes into index zero
    renderPass.framebufferStack[0] = entry;

    renderPass.currentFramebuffer = entry;
    renderPass.defaultFramebuffer = entry;
}
