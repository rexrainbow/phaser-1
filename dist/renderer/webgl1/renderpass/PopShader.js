import {BindShader as BindShader2} from "./BindShader";
export function PopShader(renderPass) {
  const stack = renderPass.shaderStack;
  if (stack.length > 1) {
    stack.pop();
  }
  renderPass.currentShader = stack[stack.length - 1];
  BindShader2(renderPass);
}
