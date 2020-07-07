import '../../../geom/rectangle/Contains.js';
import '../../../geom/rectangle/Rectangle.js';
import './AddViewport.js';
import '../GL.js';
import { BindViewport } from './BindViewport.js';
import './SetViewport.js';
import { BindFramebuffer } from './BindFramebuffer.js';
import { BindBlendMode } from './BindBlendMode.js';
import { BindVertexBuffer } from './BindVertexBuffer.js';

function Start(renderPass) {
    renderPass.current2DCamera = renderPass.quadCamera;
    renderPass.cameraMatrix = renderPass.quadCamera.matrix;
    renderPass.count = 0;
    renderPass.flushTotal = 0;
    BindFramebuffer(renderPass, false, renderPass.defaultFramebuffer);
    BindBlendMode(renderPass, renderPass.defaultBlendMode);
    BindViewport(renderPass, renderPass.defaultViewport);
    BindVertexBuffer(renderPass, renderPass.defaultVertexBuffer);
}

export { Start };
