import { AddShader } from './AddShader';
import { BindShader } from './BindShader';
import { IRenderPass } from './IRenderPass';
import { IShader } from '../shaders/IShader';

export function SetShader (renderPass: IRenderPass, shader: IShader, textureID?: number, projectionMatrix?: Float32Array, cameraMatrix?: Float32Array): void
{
    const entry = AddShader(renderPass, shader, textureID);

    BindShader(renderPass, projectionMatrix, cameraMatrix, entry);

    renderPass.currentShader = entry;
}
