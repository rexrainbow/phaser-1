import '../../../geom/rectangle/RectangleContains.js';
import '../../../geom/rectangle/Rectangle.js';
import './AddViewport.js';
import '../GL.js';
import './BindViewport.js';
import './SetViewport.js';
import { BindFramebuffer } from './BindFramebuffer.js';
import { AddFramebuffer } from './AddFramebuffer.js';

function SetFramebuffer(renderPass, framebuffer, clear = true, viewport) {
    const entry = AddFramebuffer(renderPass, framebuffer, viewport);
    BindFramebuffer(renderPass, clear, entry);
    renderPass.currentFramebuffer = entry;
}

export { SetFramebuffer };
