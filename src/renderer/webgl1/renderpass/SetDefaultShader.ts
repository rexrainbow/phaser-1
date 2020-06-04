import { AddShader } from './AddShader';
import { BindShader } from './BindShader';
import { IRenderPass } from './IRenderPass';
import { IShader } from '../shaders/IShader';

export function SetDefaultShader (renderPass: IRenderPass, shader: IShader): void
{
    const entry = AddShader(renderPass, shader);

    renderPass.defaultShader = entry;
    renderPass.currentShader = entry;

    BindShader(renderPass);
}
