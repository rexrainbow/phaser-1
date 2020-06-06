import { IRenderPass } from './IRenderPass';
import { ShaderStackEntry } from '../shaders/ShaderStackEntry';

export function BindShader (renderPass: IRenderPass, entry?: ShaderStackEntry): void
{
    if (!entry)
    {
        entry = renderPass.currentShader;
    }

    const success = entry.shader.bind(renderPass, entry.textureID);

    if (success)
    {
        entry.shader.setAttributes(renderPass);
    }
}
