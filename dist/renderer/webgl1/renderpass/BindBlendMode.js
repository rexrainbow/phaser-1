import {gl} from "../GL";
export function BindBlendMode(renderPass, entry) {
  if (!entry) {
    entry = renderPass.currentBlendMode;
  }
  if (entry.enable) {
    gl.enable(gl.BLEND);
    gl.blendFunc(entry.sfactor, entry.dfactor);
  } else {
    gl.disable(gl.BLEND);
  }
}
