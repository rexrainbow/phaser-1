import { BindBlendMode } from './BindBlendMode';
import { BindFramebuffer } from './BindFramebuffer';
import { BindVertexBuffer } from './BindVertexBuffer';
import { BindViewport } from './BindViewport';
import { IMatrix4 } from '../../../math/mat4/IMatrix4';
import { IRenderPass } from './IRenderPass';

export function Start (renderPass: IRenderPass, projectionMatrix: IMatrix4): void
{
    renderPass.projectionMatrix = projectionMatrix;
    renderPass.current2DCamera = renderPass.default2DCamera;
    renderPass.cameraMatrix = renderPass.default2DCamera.matrix;

    renderPass.count = 0;
    renderPass.flushTotal = 0;

    BindFramebuffer(renderPass, false, renderPass.defaultFramebuffer);
    BindBlendMode(renderPass, renderPass.defaultBlendMode);
    BindViewport(renderPass, renderPass.defaultViewport);
    BindVertexBuffer(renderPass, renderPass.defaultVertexBuffer);
}
