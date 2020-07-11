import {BindBlendMode as BindBlendMode2} from "./BindBlendMode";
import {BindFramebuffer as BindFramebuffer2} from "./BindFramebuffer";
import {BindVertexBuffer as BindVertexBuffer2} from "./BindVertexBuffer";
import {BindViewport as BindViewport2} from "./BindViewport";
export function Start(renderPass) {
  renderPass.current2DCamera = renderPass.quadCamera;
  renderPass.cameraMatrix = renderPass.quadCamera.matrix;
  renderPass.count = 0;
  renderPass.flushTotal = 0;
  BindFramebuffer2(renderPass, false, renderPass.defaultFramebuffer);
  BindBlendMode2(renderPass, renderPass.defaultBlendMode);
  BindViewport2(renderPass, renderPass.defaultViewport);
  BindVertexBuffer2(renderPass, renderPass.defaultVertexBuffer);
}
