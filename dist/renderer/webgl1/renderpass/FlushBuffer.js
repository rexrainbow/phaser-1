import '../../../geom/rectangle/Contains.js';
import '../../../geom/rectangle/Rectangle.js';
import './AddViewport.js';
import '../GL.js';
import './BindViewport.js';
import './SetViewport.js';
import './BindFramebuffer.js';
import './PopViewport.js';
import './PopFramebuffer.js';
import './AddFramebuffer.js';
import './SetFramebuffer.js';
import './Draw.js';
import { Flush } from './Flush.js';
import './AddVertexBuffer.js';
import './BindVertexBuffer.js';
import { PopVertexBuffer } from './PopVertexBuffer.js';
import { SetVertexBuffer } from './SetVertexBuffer.js';

function FlushBuffer(renderPass, buffer) {
    SetVertexBuffer(renderPass, buffer);
    renderPass.currentShader.shader.setAttributes(renderPass);
    const result = Flush(renderPass, buffer.count);
    PopVertexBuffer(renderPass);
    return result;
}

export { FlushBuffer };
