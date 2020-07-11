import {gl} from "../GL";
export function BindVertexBuffer(renderPass, buffer) {
  if (!buffer) {
    buffer = renderPass.currentVertexBuffer;
  }
  const indexBuffer = buffer.indexed ? buffer.indexBuffer : null;
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer.vertexBuffer);
}
