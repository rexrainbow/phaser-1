import { RenderPass } from './RenderPass';

export function ResetViewport (renderPass: RenderPass): void
{
    const renderer = renderPass.renderer;

    const gl = renderer.gl;

    gl.viewport(0, 0, renderer.width, renderer.height);

    renderPass.currentViewport = null;
}
