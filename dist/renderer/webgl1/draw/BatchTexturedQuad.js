import {GetVertexBufferEntry as GetVertexBufferEntry2} from "../renderpass/GetVertexBufferEntry";
import {SetTexture as SetTexture2} from "../renderpass/SetTexture";
export function BatchTexturedQuad(sprite, renderPass) {
  const {F32, U32, offset} = GetVertexBufferEntry2(renderPass, 1);
  const textureIndex = SetTexture2(renderPass, sprite.texture);
  let vertOffset = offset;
  sprite.vertices.forEach((vertex) => {
    F32[vertOffset + 0] = vertex.x;
    F32[vertOffset + 1] = vertex.y;
    F32[vertOffset + 2] = vertex.u;
    F32[vertOffset + 3] = vertex.v;
    F32[vertOffset + 4] = textureIndex;
    U32[vertOffset + 5] = vertex.color;
    vertOffset += 6;
  });
}
