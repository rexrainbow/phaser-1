import {Flush, PopFramebuffer, SetFramebuffer} from "../../renderer/webgl1/renderpass";
import {GetHeight, GetResolution, GetWidth} from "../../config/size";
import {CreateFramebuffer as CreateFramebuffer2} from "../../renderer/webgl1/fbo/CreateFramebuffer";
import {DIRTY_CONST as DIRTY_CONST2} from "../DIRTY_CONST";
import {DrawTexturedQuad as DrawTexturedQuad2} from "../../renderer/webgl1/draw/DrawTexturedQuad";
import {GLTextureBinding as GLTextureBinding2} from "../../renderer/webgl1/textures/GLTextureBinding";
import {Layer as Layer2} from "../layer/Layer";
import {Texture as Texture2} from "../../textures/Texture";
export class RenderLayer extends Layer2 {
  constructor() {
    super();
    this.type = "RenderLayer";
    this.willRender = true;
    this.willRenderChildren = true;
    this.willCacheChildren = true;
    this.setDirty(DIRTY_CONST2.CHILD_CACHE);
    const width = GetWidth();
    const height = GetHeight();
    const resolution = GetResolution();
    const texture = new Texture2(null, width * resolution, height * resolution);
    const binding = new GLTextureBinding2(texture);
    texture.binding = binding;
    binding.framebuffer = CreateFramebuffer2(binding.texture);
    this.texture = texture;
    this.framebuffer = binding.framebuffer;
  }
  renderGL(renderPass) {
    if (this.numChildren > 0) {
      Flush(renderPass);
      if (!this.willCacheChildren || this.isDirty(DIRTY_CONST2.CHILD_CACHE)) {
        SetFramebuffer(renderPass, this.framebuffer, true);
        this.clearDirty(DIRTY_CONST2.CHILD_CACHE);
      } else {
        SetFramebuffer(renderPass, this.framebuffer, false);
        this.postRenderGL(renderPass);
      }
    }
  }
  postRenderGL(renderPass) {
    Flush(renderPass);
    PopFramebuffer(renderPass);
    DrawTexturedQuad2(renderPass, this.texture);
    this.clearDirty(DIRTY_CONST2.TRANSFORM);
  }
}
