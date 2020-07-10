import '../../../geom/rectangle/RectangleContains.js';
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
import { Draw } from './Draw.js';

function Flush(renderPass, forceCount) {
    if (forceCount) {
        renderPass.count = forceCount;
    }
    const count = renderPass.count;
    if (count === 0) {
        return false;
    }
    Draw(renderPass);
    renderPass.prevCount = count;
    renderPass.count = 0;
    renderPass.flushTotal++;
    return true;
}

export { Flush };
