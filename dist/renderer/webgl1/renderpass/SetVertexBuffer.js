import '../GL.js';
import { AddVertexBuffer } from './AddVertexBuffer.js';
import { BindVertexBuffer } from './BindVertexBuffer.js';

function SetVertexBuffer(renderPass, buffer) {
    const entry = AddVertexBuffer(renderPass, buffer);
    BindVertexBuffer(renderPass, entry);
    renderPass.currentVertexBuffer = entry;
}

export { SetVertexBuffer };
