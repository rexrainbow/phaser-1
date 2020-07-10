import '../../../geom/rectangle/RectangleContains.js';
import '../../../geom/rectangle/Rectangle.js';
import { AddViewport } from './AddViewport.js';
import '../GL.js';
import { BindViewport } from './BindViewport.js';

function SetViewport(renderPass, x = 0, y = 0, width = 0, height = 0) {
    const entry = AddViewport(renderPass, x, y, width, height);
    BindViewport(renderPass, entry);
    renderPass.currentViewport = entry;
}

export { SetViewport };
