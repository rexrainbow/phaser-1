import {BindBlendMode as BindBlendMode2} from "./BindBlendMode";
export function PopBlendMode(renderPass) {
  const stack = renderPass.blendModeStack;
  if (stack.length > 1) {
    stack.pop();
  }
  renderPass.currentBlendMode = stack[stack.length - 1];
  BindBlendMode2(renderPass);
}
