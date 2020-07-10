import '../GL.js';
import { BindBlendMode } from './BindBlendMode.js';

function PopBlendMode(renderPass) {
    const stack = renderPass.blendModeStack;
    if (stack.length > 1) {
        stack.pop();
    }
    renderPass.currentBlendMode = stack[stack.length - 1];
    BindBlendMode(renderPass);
}

export { PopBlendMode };
