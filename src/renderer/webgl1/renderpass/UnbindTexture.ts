import { GL } from '../GL';
import { RenderPass } from './RenderPass';

export function UnbindTexture (renderPass: RenderPass, index: number = 0): void
{
    const gl = GL.get();

    gl.activeTexture(gl.TEXTURE0 + index);
    gl.bindTexture(gl.TEXTURE_2D, renderPass.tempTextures[ index ]);

    if (index > 0)
    {
        renderPass.startActiveTexture++;
    }
}
