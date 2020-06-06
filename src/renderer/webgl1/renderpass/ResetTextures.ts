import { IRenderPass } from './IRenderPass';
import { gl } from '../GL';

export function ResetTextures (renderPass: IRenderPass): void
{
    const temp = renderPass.tempTextures;

    for (let i: number = 0; i < temp.length; i++)
    {
        gl.activeTexture(gl.TEXTURE0 + i);

        gl.bindTexture(gl.TEXTURE_2D, temp[i]);
    }

    renderPass.currentActiveTexture = 1;

    renderPass.startActiveTexture++;
}
