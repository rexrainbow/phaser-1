import { RenderPass } from './RenderPass';

export function ResetTextures (renderPass: RenderPass): void
{
    const gl = renderPass.renderer.gl;
    const temp = renderPass.tempTextures;

    for (let i: number = 0; i < temp.length; i++)
    {
        gl.activeTexture(gl.TEXTURE0 + i);

        gl.bindTexture(gl.TEXTURE_2D, temp[i]);
    }

    renderPass.currentActiveTexture = 1;

    renderPass.startActiveTexture++;
}
