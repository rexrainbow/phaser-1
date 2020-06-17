import { BindBlendMode } from './BindBlendMode';
import { BindFramebuffer } from './BindFramebuffer';
import { BindShader } from './BindShader';
import { BindVertexBuffer } from './BindVertexBuffer';
import { BindViewport } from './BindViewport';
import { IMatrix4 } from '../../../math/mat4/IMatrix4';
import { IRenderPass } from './IRenderPass';

export function Begin (renderPass: IRenderPass, projectionMatrix: IMatrix4, cameraMatrix: IMatrix4): void
{
    renderPass.projectionMatrix = projectionMatrix;
    renderPass.cameraMatrix = cameraMatrix;

    renderPass.count = 0;
    renderPass.flushTotal = 0;

    BindFramebuffer(renderPass, false);
    BindBlendMode(renderPass);
    BindViewport(renderPass);
    BindVertexBuffer(renderPass);
    BindShader(renderPass);
}
