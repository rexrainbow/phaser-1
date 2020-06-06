import { BindBlendMode } from './BindBlendMode';
import { BindFramebuffer } from './BindFramebuffer';
import { BindShader } from './BindShader';
import { BindVertexBuffer } from './BindVertexBuffer';
import { BindViewport } from './BindViewport';
import { IRenderPass } from './IRenderPass';

export function Begin (renderPass: IRenderPass, projectionMatrix: Float32Array, cameraMatrix: Float32Array): void
{
    renderPass.projectionMatrix = projectionMatrix;
    renderPass.cameraMatrix = cameraMatrix;
    renderPass.count = 0;

    BindFramebuffer(renderPass, false);
    BindBlendMode(renderPass);
    BindViewport(renderPass);
    BindVertexBuffer(renderPass);
    BindShader(renderPass);
}
