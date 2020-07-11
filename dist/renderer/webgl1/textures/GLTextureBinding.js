import {CreateGLTexture as CreateGLTexture2} from "./CreateGLTexture";
import {DeleteFramebuffer as DeleteFramebuffer2} from "../fbo/DeleteFramebuffer";
import {DeleteGLTexture as DeleteGLTexture2} from "./DeleteGLTexture";
import {IsSizePowerOfTwo as IsSizePowerOfTwo2} from "../../../math/pow2/IsSizePowerOfTwo";
import {SetGLTextureFilterMode as SetGLTextureFilterMode2} from "./SetGLTextureFilterMode";
import {UpdateGLTexture as UpdateGLTexture2} from "./UpdateGLTexture";
import {gl} from "../GL";
export class GLTextureBinding {
  constructor(parent, config = {}) {
    this.index = 0;
    this.indexCounter = -1;
    this.dirtyIndex = true;
    this.unpackPremultiplyAlpha = true;
    this.flipY = false;
    this.isPOT = false;
    this.generateMipmap = false;
    this.parent = parent;
    this.isPOT = IsSizePowerOfTwo2(parent.width, parent.height);
    const {
      texture = null,
      framebuffer = null,
      depthbuffer = null,
      unpackPremultiplyAlpha = true,
      minFilter = this.isPOT ? gl.LINEAR_MIPMAP_LINEAR : gl.LINEAR,
      magFilter = gl.LINEAR,
      wrapS = gl.CLAMP_TO_EDGE,
      wrapT = gl.CLAMP_TO_EDGE,
      generateMipmap = this.isPOT,
      flipY = false
    } = config;
    this.minFilter = minFilter;
    this.magFilter = magFilter;
    this.wrapS = wrapS;
    this.wrapT = wrapT;
    this.generateMipmap = generateMipmap;
    this.flipY = flipY;
    this.unpackPremultiplyAlpha = unpackPremultiplyAlpha;
    if (framebuffer) {
      this.framebuffer = framebuffer;
    }
    if (depthbuffer) {
      this.depthbuffer = depthbuffer;
    }
    if (texture) {
      this.texture = texture;
    } else {
      CreateGLTexture2(this);
    }
  }
  setFilter(linear) {
    if (this.texture) {
      SetGLTextureFilterMode2(this.texture, linear);
    }
  }
  create() {
    const texture = this.texture;
    if (texture) {
      DeleteGLTexture2(texture);
    }
    return CreateGLTexture2(this);
  }
  update() {
    const texture = this.texture;
    if (!texture) {
      return CreateGLTexture2(this);
    } else {
      return UpdateGLTexture2(this);
    }
  }
  setIndex(index) {
    this.dirtyIndex = index !== this.index;
    this.index = index;
  }
  destroy() {
    DeleteGLTexture2(this.texture);
    DeleteFramebuffer2(this.framebuffer);
    this.parent = null;
    this.texture = null;
    this.framebuffer = null;
  }
}
