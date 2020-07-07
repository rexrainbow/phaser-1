import '../GL.js';
import { BindViewport } from './BindViewport.js';

function PopViewport(renderPass) {
    const stack = renderPass.viewportStack;
    if (stack.length > 1) {
        stack.pop();
    }
    renderPass.currentViewport = stack[stack.length - 1];
    BindViewport(renderPass);
}

export { PopViewport };
