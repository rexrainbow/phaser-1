import { IRenderPass } from './IRenderPass';
import { gl } from '../GL';

export function UnbindTexture (renderPass: IRenderPass, index: number = 0): void
{
    gl.activeTexture(gl.TEXTURE0 + index);
    gl.bindTexture(gl.TEXTURE_2D, renderPass.tempTextures[ index ]);

    if (index > 0)
    {
        renderPass.startActiveTexture++;
    }
}
