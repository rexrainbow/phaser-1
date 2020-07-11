import {AddVertexBuffer as AddVertexBuffer2} from "./AddVertexBuffer";
import {BindVertexBuffer as BindVertexBuffer2} from "./BindVertexBuffer";
export function SetVertexBuffer(renderPass, buffer) {
  const entry = AddVertexBuffer2(renderPass, buffer);
  BindVertexBuffer2(renderPass, entry);
  renderPass.currentVertexBuffer = entry;
}
