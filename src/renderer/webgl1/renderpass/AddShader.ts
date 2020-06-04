import { IRenderPass } from './IRenderPass';
import { IShader } from '../shaders/IShader';
import { ShaderStackEntry } from './RenderPass';

export function AddShader (renderPass: IRenderPass, shader: IShader, textureID?: number): ShaderStackEntry
{
    const stackEntry = { shader, textureID };

    renderPass.shaderStack.push(stackEntry);

    return stackEntry;
}
