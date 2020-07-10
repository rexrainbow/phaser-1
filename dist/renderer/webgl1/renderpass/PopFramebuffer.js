import '../../../geom/rectangle/RectangleContains.js';
import '../../../geom/rectangle/Rectangle.js';
import './AddViewport.js';
import '../GL.js';
import './BindViewport.js';
import './SetViewport.js';
import { BindFramebuffer } from './BindFramebuffer.js';
import { PopViewport } from './PopViewport.js';

function PopFramebuffer(renderPass) {
    const stack = renderPass.framebufferStack;
    if (stack.length > 1) {
        if (renderPass.currentFramebuffer.viewport) {
            PopViewport(renderPass);
        }
        stack.pop();
    }
    renderPass.currentFramebuffer = stack[stack.length - 1];
    BindFramebuffer(renderPass, false);
}

export { PopFramebuffer };
