import '../../../config/Size.js';
import '../../BindingQueue.js';
import '../GL.js';
import '../fbo/CreateFramebuffer.js';
import '../textures/CreateGLTexture.js';
import '../fbo/DeleteFramebuffer.js';
import '../textures/DeleteGLTexture.js';
import '../../../math/pow2/IsSizePowerOfTwo.js';
import '../textures/SetGLTextureFilterMode.js';
import '../textures/UpdateGLTexture.js';
import '../textures/GLTextureBinding.js';
import '../buffers/IndexedBuffer.js';
import '../../../textures/Frame.js';
import '../../../textures/Texture.js';
import '../WebGLRendererInstance.js';
import { SingleTextureQuadShader } from './SingleTextureQuadShader.js';

class Shader extends SingleTextureQuadShader {
    constructor(config = {}) {
        super(config);
    }
}

export { Shader };
