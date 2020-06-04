import { FramebufferStackEntry } from './RenderPass';
import { IRenderPass } from './IRenderPass';
import { Rectangle } from '../../../geom/rectangle/Rectangle';

export function AddFramebuffer (renderPass: IRenderPass, framebuffer: WebGLFramebuffer, viewport?: Rectangle): FramebufferStackEntry
{
    const entry = { framebuffer, viewport };

    renderPass.framebufferStack.push(entry);

    return entry;
}
