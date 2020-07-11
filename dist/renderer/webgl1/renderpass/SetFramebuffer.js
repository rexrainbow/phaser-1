import {AddFramebuffer as AddFramebuffer2} from "./AddFramebuffer";
import {BindFramebuffer as BindFramebuffer2} from "./BindFramebuffer";
export function SetFramebuffer(renderPass, framebuffer, clear = true, viewport) {
  const entry = AddFramebuffer2(renderPass, framebuffer, viewport);
  BindFramebuffer2(renderPass, clear, entry);
  renderPass.currentFramebuffer = entry;
}
