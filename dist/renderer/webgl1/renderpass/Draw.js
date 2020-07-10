import '../../../geom/rectangle/RectangleContains.js';
import '../../../geom/rectangle/Rectangle.js';
import './AddViewport.js';
import { gl } from '../GL.js';
import './BindViewport.js';
import './SetViewport.js';
import './BindFramebuffer.js';
import './PopViewport.js';
import { PopFramebuffer } from './PopFramebuffer.js';
import './AddFramebuffer.js';
import { SetFramebuffer } from './SetFramebuffer.js';

function Draw(renderPass) {
    const count = renderPass.count;
    if (count === 0) {
        return;
    }
    const currentBuffer = renderPass.currentVertexBuffer;
    const currentShader = renderPass.currentShader;
    const renderToFramebuffer = currentShader.shader.renderToFramebuffer;
    if (renderToFramebuffer) {
        SetFramebuffer(renderPass, currentShader.shader.framebuffer, true);
    }
    if (count === currentBuffer.batchSize) {
        const type = (currentBuffer.isDynamic) ? gl.DYNAMIC_DRAW : gl.STATIC_DRAW;
        gl.bufferData(gl.ARRAY_BUFFER, currentBuffer.data, type);
    }
    else {
        const subsize = (currentBuffer.indexed) ? count * currentBuffer.entryElementSize : count * currentBuffer.vertexElementSize;
        const view = currentBuffer.vertexViewF32.subarray(0, subsize);
        gl.bufferSubData(gl.ARRAY_BUFFER, 0, view);
    }
    if (currentBuffer.indexed) {
        gl.drawElements(gl.TRIANGLES, count * currentBuffer.entryIndexSize, gl.UNSIGNED_SHORT, 0);
    }
    else {
        gl.drawArrays(gl.TRIANGLES, 0, count);
    }
    if (renderToFramebuffer) {
        PopFramebuffer(renderPass);
    }
}

export { Draw };
