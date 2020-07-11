import {BindFramebuffer as BindFramebuffer2} from "./BindFramebuffer";
import {PopViewport as PopViewport2} from "./PopViewport";
export function PopFramebuffer(renderPass) {
  const stack = renderPass.framebufferStack;
  if (stack.length > 1) {
    if (renderPass.currentFramebuffer.viewport) {
      PopViewport2(renderPass);
    }
    stack.pop();
  }
  renderPass.currentFramebuffer = stack[stack.length - 1];
  BindFramebuffer2(renderPass, false);
}
