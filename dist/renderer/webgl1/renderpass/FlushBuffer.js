import {Flush as Flush2} from "./Flush";
import {PopVertexBuffer as PopVertexBuffer2} from "./PopVertexBuffer";
import {SetVertexBuffer as SetVertexBuffer2} from "./SetVertexBuffer";
export function FlushBuffer(renderPass, buffer) {
  SetVertexBuffer2(renderPass, buffer);
  renderPass.currentShader.shader.setAttributes(renderPass);
  const result = Flush2(renderPass, buffer.count);
  PopVertexBuffer2(renderPass);
  return result;
}
