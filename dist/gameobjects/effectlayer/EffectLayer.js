import {DIRTY_CONST as DIRTY_CONST2} from "../DIRTY_CONST";
import {DrawTexturedQuad as DrawTexturedQuad2} from "../../renderer/webgl1/draw/DrawTexturedQuad";
import {Flush as Flush2} from "../../renderer/webgl1/renderpass/Flush";
import {PopFramebuffer as PopFramebuffer2} from "../../renderer/webgl1/renderpass/PopFramebuffer";
import {RenderLayer as RenderLayer2} from "../renderlayer/RenderLayer";
export class EffectLayer extends RenderLayer2 {
  constructor(...shaders) {
    super();
    this.shaders = [];
    this.type = "EffectLayer";
    if (Array.isArray(shaders)) {
      this.shaders = shaders;
    }
  }
  postRenderGL(renderPass) {
    const shaders = this.shaders;
    const texture = this.texture;
    Flush2(renderPass);
    PopFramebuffer2(renderPass);
    if (shaders.length === 0) {
      DrawTexturedQuad2(renderPass, texture);
    } else {
      let prevTexture = texture;
      for (let i = 0; i < shaders.length; i++) {
        const shader = shaders[i];
        DrawTexturedQuad2(renderPass, prevTexture, shader);
        prevTexture = shader.texture;
      }
      DrawTexturedQuad2(renderPass, prevTexture);
    }
    this.clearDirty(DIRTY_CONST2.TRANSFORM);
  }
}
