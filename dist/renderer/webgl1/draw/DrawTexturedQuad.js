import '../../../utils/base64/Base64ToArrayBuffer.js';
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
import { Flush } from '../renderpass/Flush.js';
import '../renderpass/AddShader.js';
import '../renderpass/AddVertexBuffer.js';
import '../renderpass/BindShader.js';
import { BindTexture } from '../renderpass/BindTexture.js';
import '../renderpass/BindVertexBuffer.js';
import { PopVertexBuffer } from '../renderpass/PopVertexBuffer.js';
import { SetVertexBuffer } from '../renderpass/SetVertexBuffer.js';
import '../renderpass/GetVertexBufferEntry.js';
import { PopShader } from '../renderpass/PopShader.js';
import { SetShader } from '../renderpass/SetShader.js';
import { UnbindTexture } from '../renderpass/UnbindTexture.js';
import { BatchSingleQuad } from './BatchSingleQuad.js';

function DrawTexturedQuad(renderPass, texture, shader) {
    if (!shader) {
        shader = renderPass.quadShader;
    }
    const { u0, v0, u1, v1 } = texture.firstFrame;
    BindTexture(texture, 0);
    SetVertexBuffer(renderPass, renderPass.quadBuffer);
    SetShader(renderPass, shader, 0);
    BatchSingleQuad(renderPass, 0, 0, texture.width, texture.height, u0, v0, u1, v1, 0);
    Flush(renderPass);
    PopVertexBuffer(renderPass);
    PopShader(renderPass);
    UnbindTexture(renderPass);
}

export { DrawTexturedQuad };
