import { BindShader } from './BindShader.js';

function PopShader(renderPass) {
    const stack = renderPass.shaderStack;
    if (stack.length > 1) {
        stack.pop();
    }
    renderPass.currentShader = stack[stack.length - 1];
    BindShader(renderPass);
}

export { PopShader };
