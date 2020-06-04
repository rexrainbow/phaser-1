import { IRenderPass } from './IRenderPass';
import { ShaderStackEntry } from '../shaders/ShaderStackEntry';

export function BindShader (renderPass: IRenderPass, projectionMatrix?: Float32Array, cameraMatrix?: Float32Array, entry?: ShaderStackEntry): boolean
{
    if (!entry)
    {
        entry = renderPass.currentShader;
    }

    const renderer = renderPass.renderer;

    if (!projectionMatrix)
    {
        projectionMatrix = renderer.projectionMatrix;
    }

    if (!cameraMatrix && renderer.currentCamera)
    {
        cameraMatrix = renderer.currentCamera.matrix;
    }

    const success = entry.shader.bind(projectionMatrix, cameraMatrix, entry.textureID);

    const buffer = renderPass.currentVertexBuffer;

    if (success && buffer)
    {
        entry.shader.setAttributes(buffer.vertexByteSize);
    }

    return success;
}
