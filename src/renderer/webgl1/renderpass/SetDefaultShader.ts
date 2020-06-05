import { BindShader } from './BindShader';
import { IRenderPass } from './IRenderPass';
import { IShader } from '../shaders/IShader';

export function SetDefaultShader (renderPass: IRenderPass, shader: IShader, textureID?: number): void
{
    const entry = { shader, textureID };

    //  The default entry always goes into index zero
    renderPass.shaderStack[0] = entry;

    renderPass.currentShader = entry;
    renderPass.defaultShader = entry;

    BindShader(renderPass);
}
