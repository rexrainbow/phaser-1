import { RenderPass } from './RenderPass';

export function ResetFramebuffer (renderPass: RenderPass): void
{
    const renderer = renderPass.renderer;

    const gl = renderer.gl;

    gl.bindFramebuffer(gl.FRAMEBUFFER, null);

    renderPass.currentFramebuffer = null;
}
