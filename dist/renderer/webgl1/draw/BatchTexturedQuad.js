import '../../../geom/rectangle/Contains.js';
import '../../../geom/rectangle/Rectangle.js';
import '../renderpass/AddViewport.js';
import '../GL.js';
import '../renderpass/BindViewport.js';
import '../renderpass/SetViewport.js';
import '../renderpass/BindFramebuffer.js';
import '../renderpass/PopViewport.js';
import '../renderpass/PopFramebuffer.js';
import '../renderpass/AddFramebuffer.js';
import '../renderpass/SetFramebuffer.js';
import '../renderpass/Draw.js';
import '../renderpass/Flush.js';
import { GetVertexBufferEntry } from '../renderpass/GetVertexBufferEntry.js';
import { SetTexture } from '../renderpass/SetTexture.js';

function BatchTexturedQuad(sprite, renderPass) {
    const { F32, U32, offset } = GetVertexBufferEntry(renderPass, 1);
    const textureIndex = SetTexture(renderPass, sprite.texture);
    let vertOffset = offset;
    sprite.vertices.forEach(vertex => {
        F32[vertOffset + 0] = vertex.x;
        F32[vertOffset + 1] = vertex.y;
        F32[vertOffset + 2] = vertex.u;
        F32[vertOffset + 3] = vertex.v;
        F32[vertOffset + 4] = textureIndex;
        U32[vertOffset + 5] = vertex.color;
        vertOffset += 6;
    });
}

export { BatchTexturedQuad };
