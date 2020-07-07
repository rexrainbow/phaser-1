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

function GetVertexBufferEntry(renderPass, addToCount = 0) {
    const buffer = renderPass.currentVertexBuffer;
    if (renderPass.count + addToCount >= buffer.batchSize) {
        Flush(renderPass);
    }
    const offset = (buffer.indexed) ? renderPass.count * buffer.entryElementSize : renderPass.count * buffer.vertexElementSize;
    renderPass.count += addToCount;
    return {
        buffer,
        F32: buffer.vertexViewF32,
        U32: buffer.vertexViewU32,
        offset
    };
}

export { GetVertexBufferEntry };
