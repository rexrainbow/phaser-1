import { AddFramebuffer } from './AddFramebuffer';
import { BindFramebuffer } from './BindFramebuffer';
import { IRenderPass } from './IRenderPass';
import { Rectangle } from '../../../geom/rectangle';

export function SetFramebuffer (renderPass: IRenderPass, framebuffer: WebGLFramebuffer, clear: boolean = true, viewport?: Rectangle): void
{
    const entry = AddFramebuffer(renderPass, framebuffer, viewport);

    BindFramebuffer(renderPass, clear, entry);

    renderPass.currentFramebuffer = entry;
}
