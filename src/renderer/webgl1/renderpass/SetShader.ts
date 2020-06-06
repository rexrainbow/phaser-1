import { AddShader } from './AddShader';
import { BindShader } from './BindShader';
import { IRenderPass } from './IRenderPass';
import { IShader } from '../shaders/IShader';

export function SetShader (renderPass: IRenderPass, shader: IShader, textureID?: number): void
{
    const entry = AddShader(renderPass, shader, textureID);

    BindShader(renderPass, entry);

    renderPass.currentShader = entry;
}
